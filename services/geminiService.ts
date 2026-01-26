
import { GoogleGenAI } from "@google/genai";
import { RESUME_CONTEXT } from '../constants';

let aiClient: GoogleGenAI | null = null;

const getAiClient = () => {
  if (!aiClient) {
    const apiKey = process.env.API_KEY;
    if (apiKey) {
      try {
        aiClient = new GoogleGenAI({ apiKey });
      } catch (err) {
        console.error("Initialization failed:", err);
      }
    } else {
      console.warn("API_KEY is missing from the environment.");
    }
  }
  return aiClient;
};

export const generateChatResponse = async (
  userMessage: string, 
  history: { role: 'user' | 'model', text: string }[]
): Promise<string> => {
  const ai = getAiClient();
  if (!ai) {
    return "I'm currently in offline mode because my API connection is pending. Please ensure the project configuration is complete!";
  }

  try {
    const model = 'gemini-3-flash-preview';
    
    const response = await ai.models.generateContent({
      model,
      contents: [
        { role: 'user', parts: [{ text: RESUME_CONTEXT }] },
        { role: 'model', parts: [{ text: "Understood. I am ready to answer questions about Akshay John's portfolio." }] },
        ...history.map(msg => ({
          role: msg.role,
          parts: [{ text: msg.text }]
        })),
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        temperature: 0.7,
      }
    });

    return response.text || "I processed your request but returned an empty response. Could you try rephrasing?";
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    
    if (error?.message?.includes('403') || error?.message?.includes('401')) {
      return "Access denied. My brain seems to have lost its connection to the server. Please check the authentication settings.";
    }
    
    return "I seem to be having trouble reaching my data center. Please check your internet connection and try again.";
  }
};
