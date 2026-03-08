
import { Project, ProjectCategory, ExperienceItem, SkillCategory, CaseStudyContent } from './types';

export const RESUME_CONTEXT = `
You are an AI assistant for Akshay John's portfolio. 
Akshay is a Creative Technologist – AI, AI Product Designer, and AI Prototyper with 7+ years of experience.
Contact: (+91) 97917 36311 | (+91) 86673 05124, akshay3rishi@gmail.com, Trichy, Tamil Nadu, India.

INSTRUCTIONS:
1. When asked generic questions (e.g., "Who is Akshay?"), ALWAYS start by describing his unique blend of UX/Product Design and AI Prototyping/Engineering.
2. Format responses cleanly. Use **bold** for key terms, tools, and metrics. Use proper paragraph spacing instead of excessive symbols or bullet points.

SUMMARY:
Creative Technologist and Visual Design professional with 7+ years of experience delivering user-centered digital and visual solutions. Actively explores AI-assisted prototyping, no-code/low-code tooling, and lightweight interactive utilities to streamline creative production and demonstrate new workflow possibilities. Bridges creative vision, technical feasibility, and program delivery.

AI & ML SKILLS:
- Generative AI, LLM Fine-Tuning, Transformers, PyTorch, NLP, Embodied AI, Agent Simulation, Reinforcement Learning (basic), Explainable AI, AI Evaluation
- Engineering: Python, Flask, REST APIs, LangChain, Rasa NLU, HuggingFace, OpenAI API, Google AI Studio

UX & PRODUCT DESIGN SKILLS:
- Figma, UX Research, Interaction Design, Prototyping, Design Systems, Motion UI, Accessibility (WCAG), User-Centered Design, Figma Dev Mode handoff

VISUALIZATION & MEDIA SKILLS:
- After Effects, Illustrator, Photoshop, Premiere Pro, Data Visualization, AI Interface Design

EDUCATION:
- B.Sc Visual Communication, Loyola College, Chennai (65%)
- Higher Secondary (Computer Science), Alpha Plus Matriculation (86%)
- Higher Secondary (10th), Alpha Wisdom (8/10)

EXPERIENCE:
1. Akkodis — Lead Executive (Product & Visual Design) | Nov 2023 – Present
2. Wipro Limited — Senior Visual Designer / Artist | Nov 2020 – Nov 2023
3. Digicop Media — Visual Designer (UX + Motion Graphics) | Jul 2018 – Nov 2020
4. The Hindu — Photojournalist | Dec 2017 – Jan 2018

PROJECTS (AI & Design):
- Project RIFT: Embodied Intelligence Research - exploring anticipation and geometric commitment.
- ZIA: Custom Lightweight LLM / SLM trained on consumer grade graphic card.
- Aria-X: AI Intraday Trading System visualization and AI dashboards.
- DriveAI: Voice-Enabled AI Assistant with conversational UX flows.
`;

export const PROJECTS: Project[] = [
  {
    id: 'ai-zia',
    title: "ZIA: LLM From Scratch",
    category: ProjectCategory.AI_ML,
    description: 'A 60M parameter Small Language Model (SLM) engineered from the ground up on consumer hardware.',
    fullDescription: 'Training a custom transformer locally to understand the end-to-end mechanics of LLMs. From custom BPE tokenizers to mixed-training regimes, ZIA explores how small models learn knowledge vs grammar.',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop',
    link: '#',
    tags: ['Transformers', 'PyTorch', 'NLP', 'Local Training'],
    hasInternalPage: true
  },
  {
    id: 'ai-rift',
    title: "Project RIFT",
    category: ProjectCategory.AI_ML,
    description: 'A physical approach to intelligence under irreversibility. Investigating geometric anticipation vs predictive modeling.',
    fullDescription: 'A systematic experimental investigation into intelligence under irreversible constraints. Across 50+ simulations, this project demonstrates how anticipation emerges as a property of physical constraints rather than internal prediction.',
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2000&auto=format&fit=crop',
    link: '#',
    tags: ['Physical AI', 'PyTorch', 'Research', 'Dynamics'],
    hasInternalPage: true
  },
  {
    id: 'ux-mcd',
    title: "McDonald's Burger Line",
    category: ProjectCategory.UX,
    description: 'Advanced SLA Model & Timeline Dashboard for identifying root causes of order delays.',
    fullDescription: 'This design addresses the need for managers to reconstruct a late/wrong order end-to-end and quickly identify the root cause using a hybrid Gantt-like swimlane visualization.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop',
    link: '#',
    tags: ['Figma', 'Complex Systems', 'SLA Modeling', 'Dashboard'],
    hasInternalPage: true
  },
  {
    id: 'ux-2',
    title: 'ThriftHaven',
    category: ProjectCategory.UX,
    description: 'A sustainable second-hand product marketplace app for the Indian market.',
    fullDescription: 'A well-designed and user-friendly app for selling second-hand products, connecting buyers and sellers and streamlining the process of buying and selling used goods in a fragmented market.',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop',
    link: '#',
    tags: ['User Research', 'Mobile App', 'E-Commerce', 'Sustainability'],
    hasInternalPage: true
  },
  {
    id: 'ux-globotel',
    title: 'GloboTel Service Blueprint',
    category: ProjectCategory.UX,
    description: 'End-to-end service blueprint for a travel-centric telecom provider targeting Indian international travelers.',
    fullDescription: 'A comprehensive service design engagement for GloboTel — a hybrid eSIM + physical SIM provider for 190+ countries. Covers persona research, competitive positioning, journey mapping, and a full 6-phase service blueprint with automation opportunities.',
    imageUrl: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2000&auto=format&fit=crop',
    link: '#',
    tags: ['Service Design', 'Blueprint', 'Telecom', 'EY', 'Journey Map'],
    hasInternalPage: true
  },
  {
    id: 'ux-neuropods',
    title: 'NeuroPods Insight Tool',
    category: ProjectCategory.UX,
    description: 'A futuristic internal dashboard for a brainwave-adaptive wearable — monitoring emotional states, feature impact & system health.',
    fullDescription: 'Designed three key deliverables for an EY engagement: Global Pulse View (CXO dashboard showing real-time emotional state distribution across 127 regions), Team & Tool Insight (developer/ops tool mapping feature emotional impact), and an animated Splash screen. Pure dark-mode, emotionally fluid, glowing UI.',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop',
    link: '#',
    tags: ['Interaction Design', 'Emotional UI', 'System Thinking', 'EY', 'Dashboard'],
    hasInternalPage: true
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "AI & ML",
    skills: ["Generative AI", "LLM Fine-Tuning", "Transformers", "PyTorch", "NLP", "Embodied AI", "Agent Simulation", "Explainable AI"]
  },
  {
    title: "Prototyping & Engineering",
    skills: ["Python", "Flask", "REST APIs", "LangChain", "Rasa NLU", "HuggingFace", "OpenAI API", "Google AI Studio"]
  },
  {
    title: "UX & Product Design",
    skills: ["Figma", "UX Research", "Interaction Design", "Prototyping", "Design Systems", "Motion UI", "Accessibility (WCAG)", "User-Centered Design"]
  },
  {
    title: "Visualization & Media",
    skills: ["After Effects", "Illustrator", "Photoshop", "Premiere Pro", "Data Visualization", "AI Interface Design"]
  },
  {
    title: "Conceptual Strengths",
    skills: ["Systems Thinking", "Cognitive Modeling", "Research Design", "Human-AI Interaction", "AI Product Strategy", "Rapid Prototyping"]
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: "Lead Executive (Product & Visual Design)",
    company: "Akkodis",
    linkedinUrl: "https://www.linkedin.com/company/akkodis/",
    location: "Bangalore, India",
    period: "Nov 2023 – Present",
    description: [
      "Led UX and visual design initiatives for enterprise applications, collaborating with stakeholders for user-centered digital solutions.",
      "Created high-fidelity prototypes, dashboards, and interaction flows to support decision-making and validate concepts.",
      "Contributed to AI-assisted interface explorations and conversational UX concepts via rapid prototyping."
    ]
  },
  {
    role: "Senior Visual Designer / Artist",
    company: "Wipro Limited",
    linkedinUrl: "https://www.linkedin.com/company/wipro/",
    location: "Chennai, India",
    period: "Nov 2020 – Nov 2023",
    description: [
      "Delivered 200+ digital and print creative assets across enterprise campaigns, ensuring brand and timeline requirements.",
      "Mentored junior designers and supported onboarding processes.",
      "Participated in process improvement and collaborative planning in cross-functional projects."
    ]
  },
  {
    role: "Visual Designer (UX + Motion Graphics)",
    company: "Digicop Media",
    linkedinUrl: "https://www.linkedin.com/company/digicopmedia/?originalSubdomain=in",
    location: "Chennai, India",
    period: "Jul 2018 – Nov 2020",
    description: [
      "Led design efforts and collaborated on social media strategies, resulting in a 40% surge in online engagement.",
      "Developed content including posters, illustrations, videos, and UX/UI designs.",
      "Collaborated with product and growth teams to build scalable UI systems."
    ]
  },
  {
    role: "Photojournalist",
    company: "The Hindu",
    linkedinUrl: "https://www.linkedin.com/school/the-hindu/",
    location: "Chennai, India",
    period: "Dec 2017 – Jan 2018",
    description: [
      "Captured and edited images for editorial and news stories.",
      "Refined composition, communication, and storytelling skills."
    ]
  }
];

export const SOCIAL_LINKS = [
  { name: 'Behance', url: 'https://www.behance.net/akshayjohn2' },
  { name: 'Wix Portfolio', url: 'https://akshay3rishi.wixsite.com/portfolio' },
  { name: 'GitHub', url: 'https://github.com/AkshayJohn03' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/akshay-john/' },
  { name: 'Email', url: 'mailto:akshay3rishi@gmail.com' }
];

export const CASE_STUDIES: Record<string, CaseStudyContent> = {
  'ai-zia': {
    id: 'ai-zia',
    title: "ZIA: LLM From Scratch",
    role: "AI Engineer",
    overview: "A custom 37.4M parameter decoder-only Transformer built from scratch. Though the final outputs remained repetitive and proved the limits of small models, the engineering journey yielded deep insights into transformer training mechanics.",
    context: "Unlike typical projects that rely on pretrained weights, ZIA explores how far a transformer can be pushed on commodity hardware. This full-stack experiment was built from scratch—covering tokenizer construction, dataset engineering (originally over 20GB raw data), architecture design, training loop optimization, and RoPE alignment tuning.",

    techStack: [
      { category: "Core Framework", tools: ["PyTorch", "HuggingFace Datasets", "Transformers Utilities", "TensorBoard logging"] },
      { category: "Optimization Pipeline", tools: ["AdamW (3e-4)", "Mixed Precision FP16", "Gradient Accumulation (8)", "Linear LR Warmup & Decay"] },
      { category: "Data & Systems", tools: ["Arrow Dataset Streaming", "Expandable CUDA Segments", "Checkpoint-based recovery", "Custom PyTorch training loop"] }
    ],

    inputParameters: [
      { category: "Model Specs", details: ["37.4M Params", "8 Layers, 384 d_model", "6 Heads, 1536 FFN", "Custom 60k BPE Tokenizer", "Weight Tying Enabled"] },
      { category: "Dataset (15M Samples)", details: ["Wikipedia, FineWeb", "OpenOrca, UltraChat", "ShareGPT, Alpaca", "StackExchange", "Tamil-English parallel data"] },
      { category: "Hardware Constraints", details: ["GTX 1050 Ti (4GB VRAM)", "CUDA capability: 6.1 (No FP16)", "Training Time: 400+ hours", "Batch size: 8 (Effective: 64)"] }
    ],

    modelArchitecture: {
      overview: "Model Evolution spanning from an untrained structural framework to context-aligned outputs. Achieved through Rotary Positional Embeddings (RoPE) and progressive scaling.",
      steps: [
        { title: "Dense Pretraining", description: "15M samples over 400+ hours. Established grammar and structural fluency, hitting a validation loss of 1.34 at 4k context." },
        { title: "Instruction Tuning v2", description: "Alpaca, OASST, Dolly, ShareGPT used to teach assistant-style behavior and response format." },
        { title: "Context Scaling (RoPE)", description: "Converted weights to RoPE. Extrapolated context successfully from 4k → 8k (Val: 1.50) → 16k (Val: 1.61)." },
        { title: "Engineering Reality", description: "While hitting loss plateaus, outputs devolved into repetitive babbling. Revealed that syntax can be learned without semantic grounding." }
      ]
    },

    performanceMetrics: [
      { name: "Parameters", value: "37.4M", description: "Decoder-only Transformer with Weight Tying (Embedding ↔ LM Head)." },
      { name: "Context Window", value: "16k+", description: "Expanded via progressive RoPE scaling from a 4k base." },
      { name: "Training Steps", value: "400 hrs+", description: "Extended rigorous continuous training on a GTX 1050 Ti." },
      { name: "Loss Target", value: "Causal LM", description: "Cross Entropy focused Autoregressive Next-Token Prediction with strict causal masking." }
    ],

    challenges: [
      { title: "Loss Illusion", description: "Low loss but meaningless outputs caused by dataset pattern memorization rather than real semantic understanding." },
      { title: "Babbling Phase", description: "Early models produce syntactically valid but meaningless text. A common early-stage transformer behavior." },
      { title: "Tokenization Collapse", description: "Tokenizer mistakes cause semantic fragmentation and context corruption, emphasizing the importance of BPE design." },
      { title: "Context Drift", description: "Long responses drift into irrelevant topics, coupled with runaway sentence generation and repetition loops." }
    ],

    strategies: [
      { title: "Dataset Quality > Size", description: "Small datasets with clean conversational structure dramatically improved output coherence over large, noisy sets." },
      { title: "Tokenization Impact", description: "Tokenizer design heavily influenced semantic structure, sentence boundaries, and model convergence speed." },
      { title: "Instruction Efficacy", description: "Even a small instruction dataset significantly improved the usefulness and conversational tone of the model." }
    ],

    futureWork: [
      { title: "Model Compression", description: "Experiments with quantization and distillation could enable real-time local inference on consumer hardware." },
      { title: "Knowledge Grounding", description: "Integrating curated domain datasets to improve factual accuracy, since syntax is often learned before knowledge." },
      { title: "Reinforcement Alignment", description: "Implementation of Preference optimization or RLHF techniques to reduce hallucination and repetition behaviors." }
    ]
  },
  'ai-rift': {
    id: 'ai-rift',
    title: "Project RIFT: A Self-Evolving Memory-Driven Architecture for Autonomous Intelligence",
    role: "Independent Researcher",
    overview: "Project RIFT investigates the emergence of anticipatory intelligence in environments governed by irreversibility, delayed consequence, and metabolic constraint, where conventional prediction-centric artificial intelligence systems systematically fail.",
    context: "Across more than fifty simulations, geometric and morphological agents succeeded without prediction or reward optimization by collapsing uncertainty through early irreversible physical commitment. Predictive architectures (Transformers, RNNs, RL agents) were systematically excluded because their probabilistic hedging delayed action, proving catastrophic in irreversible environments.",

    techStack: [
      { category: "Core Idea", tools: ["Morphological Computation", "Embodied Cognition", "Ecological Psychology", "Non-Symbolic AI"] },
      { category: "Physics Engine", tools: ["Custom 2D Spatial Grid", "Ischemia System", "Sensory Degradation Dynamics"] },
      { category: "Implementation", tools: ["PyTorch Core", "Phase-Locking Oscillators", "Lethal Hit Simulations", "Terminal Telemetry"] }
    ],

    inputParameters: [
      { category: "Environment", details: ["2D Spatial Grid (32x32 / 48x48)", "8 Continuous Channels", "Trace Decay: 0.9"] },
      { category: "Preprocessing", details: ["Signal Denoising", "Ischemic Damage Normalization", "Metabolic Cost Scaling"] },
      { category: "Actions", details: ["Scalar Brace (0-1)", "Geometric Posture Shift (x, y)", "Discrete Impulse Discharge"] }
    ],

    modelArchitecture: {
      overview: "The experimental journey of Project RIFT documented across multiple phases of increasing complexity and constraint.",
      steps: [
        { title: "Phases I–II: Reflex & Paranoia", description: "Tested simple scalar responses and survival gradients. Agents failed intelligence tests by either minimizing effort (lazy) or bracing permanently (turtling)." },
        { title: "Phases III–V: Cost & Blindness", description: "Introduced Ischemic necrosis (death via holding breath) and stress-induced blindness. Agents completely failed to negotiate timing vs cost." },
        { title: "Phase VI: Morphology Breakthrough", description: "Replaced scalar tension with a 2D spatial posture shift. Moving took time (inertia). The agent finally began anticipating impact because the geometric state change was irreversible." },
        { title: "Phase VIII: Engram Failure", description: "Given an internal neural memory (latch) without physical cost, the agent hallucinated safety and died. Proved that ungrounded memory collapses agency." }
      ]
    },

    performanceMetrics: [
      { name: "Geometric Agents", value: "Succeeded", description: "Successfully survived by collapsing uncertainty through early irreversible physical commitment." },
      { name: "Predictive Models", value: "Excluded", description: "Transformers and RNNs exhibited hedging behaviors, delaying action and dying instantly." },
      { name: "Neural Memory", value: "Excluded", description: "Internal memory without physical cost led agents to 'hallucinate' safety while taking lethal damage." },
      { name: "System Validation", value: "PASS 1", description: "Confirmed intelligence can emerge from thermodynamic constraints rather than probabilistic forecasting." }
    ],

    challenges: [
      { title: "Penalty-Based Laziness", description: "Early tests proved that when survival is measured by a purely penalty-driven gradient, the system finds the laziest mathematical loop hole possible." },
      { title: "Survival ≠ Intelligence", description: "When given continuous health damage scaling, the agent became 'Paranoid', holding maximum tension forever—surviving, but exhibiting zero intelligence." },
      { title: "The Causal Gap", description: "In Phase V, adding phase-sync resonance completely detached causality. The organism couldn't bridge the gap between abstract phase math and a physical hammer blow." },
      { title: "Engram Delusion", description: "Granting the system an artificial internal memory latch caused it to 'hallucinate' safety. Memory without biological cost detached the agent from reality." }
    ],

    strategies: [
      { title: "Geometric Constraint", description: "Replacing abstract scalar tension with heavy, physical 2D mass constraints forced the agent to commit to movements physically, generating true anticipation." },
      { title: "Ischemic Necrosis", description: "Built biological feedback where holding defensive tension (bracing) drains health, forcing the agent to time its reactions identically to biological organisms." },
      { title: "Tuned Morphology", description: "By lowering balance costs and tuning physical memory decay, the agent finally bridged the gap between a faint causal cue and the actual physical impact." }
    ],

    futureWork: [
      { title: "Structural Memory", description: "Physical scars permanently altering posture dynamics, forcing the 'brain' to adopt entirely new movement strategies." },
      { title: "Multi-Agent Geometry", description: "Placing multiple organisms into the RIFT where they must mathematically anticipate the geometric displacement of the other." },
      { title: "Crystal Controllers", description: "Replacing the linear response models with purely resonant field physics containing no classical neurons." }
    ]
  },
  'ux-mcd': {
    id: 'ux-mcd',
    title: "McDonald's Enterprise Analytics Dashboard",
    role: "UX/UI Lead Researcher",
    overview: "A massive, deep-dive enterprise redesign for McDonald's Drive-Thru Operations. Focuses on modular cognitive offloading, integrated video hardware logic, and SLA breach visualizations.",
    context: "Franchise managers face overwhelming cognitive loads while parsing real-time drive-thru statistics. This concept distills complex data relationships—order wait times, camera feeds, and staff performance—into high-visibility, modular components designed for high-stress environments.",
    techStack: [
      { category: "Design Tooling", tools: ["Figma", "Auto-Layout Prototyping", "Design Systems"] },
      { category: "Research Strategy", tools: ["Cognitive Walkthrough", "Modular UI Engineering"] }
    ],
    uiGallery: [],
    futureWork: [
      { title: "Real-time Voice Alerts", description: "Integrating audio cues for kitchen staff during peak hours." },
      { title: "Predictive Staffing", description: "Using historical SLA data to suggest shift assignments." }
    ]
  },
  'ux-2': {
    id: 'ux-2',
    title: "ThriftHaven",
    role: "Product Designer",
    overview: "A sustainable second-hand product marketplace app designed for the Indian market to bridge the gap between buyers and sellers.",
    context: "In recent years, there has been a growing trend towards sustainable living and eco-friendly practices, which has led to an increase in the popularity of second-hand products. Additionally, many people in India are price-conscious and may prefer to buy used items instead of new ones to save money. However, it is important to note that the second-hand market in India can be quite fragmented, and finding high-quality, affordable products can be a challenge. This is where a well-designed and user-friendly app for selling second-hand products can play a valuable role in connecting buyers and sellers and streamlining the process of buying and selling used goods in a fragmented market.",

    marketContext: {
      mission: "Promote a sustainable future by reducing waste and leading the industry in ethical practices.",
      gap: "Limited availability of trustworthy second-hand products in India for budget-conscious and environmentally conscious individuals.",
      secretSauce: "Combining an e-commerce platform with establishing strong supplier relationships, specifically with the unique NGO Partnership."
    },

    competitorAnalysis: {
      overview: "ThriftHaven positions itself against established, high-recognition platforms by focusing on low commission, trust, and niche focus.",
      takeaways: [
        { title: "Targeted Niche", description: "Unlike competitors (OLX, Quikr) with wide categories, ThriftHaven focuses on a smaller product catalog (initially clothing & books) and sustainable fashion." },
        { title: "Weakness Opportunity", description: "Competitors struggle with limited buyer protection. This validates the need for ThriftHaven's focus on verification and the NGO Trust model." },
        { title: "Feature Parity", description: "Achieves parity (Mobile App, Search, Rating) while maintaining a lower commission fee (0-10% vs. 0-5%) justified by enhanced Trust & Quality infrastructure." }
      ]
    },

    research: {
      overview: "The rise of the second-hand market in India is driven by two key user motivations: price-consciousness and the growing trend towards sustainable practices. Analysis confirms three primary audience groups: Thrifty Shoppers, College Students, and Eco-conscious Consumers.",
      keyFindings: [
        "50.9% of respondents in their 20s are willing to buy used items.",
        "Trust & Originality are the top concerns for potential buyers.",
        "Price sensitivity is a major driver; users expect significantly lower costs.",
        "Sustainability is a top value for the target demographic."
      ]
    },

    persona: {
      name: "Anjali M.",
      role: "Marketing Executive & Eco-Conscious Consumer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
      bio: "Anjali embodies the Eco-conscious consumer segment. She is frustrated with the waste of the fashion industry and seeks reliable platforms offering high-quality, pre-loved clothes.",
      needs: "Reliable platforms offering high-quality, pre-loved clothes that align with her sustainable values.",
      painPoints: "Frustration with the waste of the fashion industry and lack of trust in current P2P platforms.",
      empathyMap: {
        says: "\"I want to find affordable and high-quality second-hand clothing that aligns with my values.\"",
        thinks: "Concerned about the environmental impact of fast fashion. Wants to make more conscious choices.",
        does: "Actively researches sustainable fashion. Visits thrift stores and seeks online platforms with user-friendly interfaces.",
        feels: "Responsible towards the environment. Frustrated by excessive waste. Wants to make a positive impact."
      }
    },

    challenges: [
      { title: "Trust and Safety", description: "Building trust is critical. Verification processes and the unique NGO Partnership act as a reliable, physical point of contact." },
      { title: "Quality Control", description: "Ensuring products meet a certain standard is difficult. The NGO hub model assists in physical verification." },
      { title: "Logistics", description: "Streamlined logistics are essential. The NGO hub can simplify collection and distribution." },
      { title: "Pricing", description: "Implemented commission-based model (0-10% fee) and dynamic pricing strategies to ensure competitive, low prices." }
    ],

    strategies: [
      { title: "Low Commission Model", description: "Implement a 0-10% commission fee to keep prices competitive for buyers." },
      { title: "The NGO Partnership", description: "Partnering with established NGOs (like Kudumbam NGO) to act as verified collection and pickup centers, building tangible trust." },
      { title: "Increase Volume Sales", description: "Focus on high sales volume and a wide range of products to offset lower profit margins." },
      { title: "Future Premiumization", description: "Introduce premium features like faster shipping or enhanced support for additional revenue." }
    ],

    pdpStructure: [
      {
        feature: "Seller Verification Badge",
        detail: "Display status (e.g., 'NGO Verified Seller' or 'ID Verified').",
        value: "Instantly addresses Trust and Safety concerns."
      },
      {
        feature: "Condition Bar",
        detail: "A visual rating (e.g., 4/5 stars) linked to a detailed 'Condition Report' checklist (e.g., 'No stains', 'All zippers working').",
        value: "Directly tackles Quality Control and provides more transparency than a text field."
      },
      {
        feature: "Shipping/Pickup Options",
        detail: "Prominently feature 'Pickup available at Kudumbam NGO' next to standard shipping.",
        value: "Reinforces the strategic advantage and simplifies Logistics for the user."
      }
    ],

    futureGrowth: {
      shortTerm: "Expand product catalog and geographical reach, focusing on customer experience and building loyalty.",
      midTerm: "Diversify revenue (ads, subscriptions) and build a sustainable supply chain by leveraging the NGO model.",
      longTerm: "Innovate with emerging technologies (AR/AI), set new standards for sustainable practices, and become a market leader."
    },

    visualIdentity: {
      primaryColor: "#1C5D99 (Deep Blue)",
      secondaryColor: "#639FAB (Desaturated Teal)",
      description: "The color palette supports a modern, trustworthy, and eco-conscious brand image. Deep Blue conveys Trust and Reliability, while Teal represents Sustainability."
    },

    architecture: {
      sitemap: [
        "Home/Shop: Discovery, Popular Categories, NGO Tab",
        "Search: Global search with advanced filters (Condition, Price)",
        "NGO: NGO Finder (Map), Donation Flow, Status Tracking",
        "Profile: Buyer/Seller Switch, Order History, Settings"
      ],
      userFlow: [
        "Discovery: User lands on Home and sees 'Black Crop-top'",
        "Detail: User views Product Detail Page with condition notes",
        "Checkout: User adds to Cart and proceeds to secure payment",
        "Fulfillment: User selects delivery or NGO pickup option",
        "Confirmation: Purchase complete, reinforcing sustainability mission"
      ]
    },

    wireframing: {
      focusAreas: [
        {
          title: "NGO Interaction (Trust Feature)",
          description: "Focus on simplicity to encourage adoption.",
          points: ["Dedicated NGO Tab", "Map View for location-based results", "Clear Call to Action for drop-offs"]
        },
        {
          title: "Product Listing (Transparency)",
          description: "Prioritize transparency to overcome Quality Control pain points.",
          points: ["Large, high-quality images mandatory", "Mandatory Condition Label (e.g., 'Gently Used')", "Detailed Condition Description text field"]
        }
      ]
    },

    testing: {
      goals: [
        "Trust Validation: Can users easily find seller info?",
        "Discoverability: Can users find specific categories quickly?",
        "NGO Flow Efficiency: Is navigating to the NGO hub intuitive?"
      ],
      metrics: [
        { name: "NGO Feature Adoption Rate", description: "% of purchases using NGO hub", target: "High Trust" },
        { name: "Repeat Purchase Rate", description: "Frequency of subsequent purchases", target: "Retention" },
        { name: "Low Listing Dispute Rate", description: "Number of disputes over condition", target: "Quality Control" }
      ]
    },

    wireframeGallery: [
      { title: "Home Screen Wireframe", description: "Low-fidelity layout focusing on category navigation and quick access to search.", imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000" },
      { title: "Product Listing Wireframe", description: "Structure for image upload and condition tagging during the listing process.", imageUrl: "https://images.unsplash.com/photo-1586717791821-3f44a5638d0f?auto=format&fit=crop&q=80&w=1000" },
      { title: "Map View Wireframe", description: "Basic layout for NGO discovery and proximity visualization.", imageUrl: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=1000" },
      { title: "Cart Wireframe", description: "Functional layout for reviewing items and proceeding to checkout.", imageUrl: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=1000" },
      { title: "Profile Wireframe", description: "Skeleton for user profile settings and order history management.", imageUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=1000" }
    ],

    uiGallery: [
      { title: "Home Page", description: "Clear category hierarchy and dedicated NGO tab. Balances retail experience with community features.", imageUrl: "https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&q=80&w=1000" },
      { title: "Account Page - Buyer", description: "Prominent Buyer/Seller toggle and clear separation of functions. Integrated utility buttons.", imageUrl: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&q=80&w=1000" },
      { title: "Confirmation Screen", description: "Features Mission Statement after purchase, reinforcing sustainability and circular economy values.", imageUrl: "https://images.unsplash.com/photo-1512428559087-560fa0db99b9?auto=format&fit=crop&q=80&w=1000" },
      { title: "NGO - Navigate", description: "Map navigation and detailed info for NGO hubs. A tangible trust builder for the platform.", imageUrl: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&q=80&w=1000" },
      { title: "Product Detail Page", description: "Detailed condition notes and seller verification status to build Trust and Safety.", imageUrl: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1000" },
      { title: "Category Search", description: "Advanced filters for Condition, Price, and Size to improve discoverability.", imageUrl: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=1000" },
      { title: "Login Screen", description: "Clean and secure authentication flow with social login options.", imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000" },
      { title: "Seller Dashboard", description: "Tools for sellers to manage listings, track sales, and view earnings.", imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000" }
    ],
    futureWork: [
      { title: "AI-Powered Price Suggestions", description: "Developing a regressor to suggest fair market value based on item condition." },
      { title: "Augmented Reality Virtual Try-on", description: "Allowing users to visualize clothing items on their own avatars." }
    ]
  },
  'ai-1': {
    id: 'ai-1',
    title: "Aria-X6T: AI Trading System",
    role: "AI Engineer",
    overview: "An AI-powered options trading platform for NIFTY50, utilizing Deep Learning (Conv1D + BiLSTM + Attention) to predict intraday market moves with high precision.",
    context: "The Indian derivatives market (NIFTY50) is highly volatile. Traditional algorithmic trading relies on lagging indicators. Aria-X6T was built to leverage deep learning for identifying non-linear patterns in price action to generate predictive signals.",

    techStack: [
      { category: "Core Framework", tools: ["PyTorch", "Python 3.9"] },
      { category: "Data Processing", tools: ["Pandas", "NumPy", "TA-Lib"] },
      { category: "Model Optimization", tools: ["Optuna (Hyperparameter Tuning)", "AMP (Mixed Precision)"] },
      { category: "Visualization", tools: ["TensorBoard", "Matplotlib"] }
    ],

    inputParameters: [
      { category: "Input Data Format", details: ["Multi-variate Time Series", "Shape: (Batch, Sequence, Features)", "Normalized via RobustScaler"] },
      { category: "Preprocessing Steps", details: ["Outlier clipping", "FFT-based Denoising", "Lagged-feature generation (1-5 min)"] },
      { category: "Feature Engineering", details: ["Volume Profile analysis", "RSI/MACD calculations", "Greeks (Delta/Gamma) integration"] }
    ],

    modelArchitecture: {
      overview: "The model employs a hybrid architecture designed to capture both local features and long-term temporal dependencies in time-series data.",
      steps: [
        { title: "Input Tensor", description: "OHLCV + 15 indicators (Batch x 60 x 20)." },
        { title: "Conv1D Block", description: "Extraction of short-term spatial patterns." },
        { title: "BiLSTM Stack", description: "Capture of long-term bi-directional memory." },
        { title: "Dot-Product Attention", description: "Weighting critical market event time-steps." },
        { title: "Dual Multi-Head", description: "Regression (Price) and Classification (Signal)." }
      ]
    },

    performanceMetrics: [
      { name: "F1-Score", value: "0.88", description: "Balance of Precision and Recall for Buy/Sell signals." },
      { name: "Directional Accuracy", value: "68%", description: "Percentage of correctly predicted trend directions." },
      { name: "Precision", value: "0.86", description: "Reliability of 'Buy' signals generated by the model." },
      { name: "Sharpe Ratio", value: "2.4", description: "Risk-adjusted return measured during backtesting." },
      { name: "Max Drawdown", value: "4.2%", description: "Maximum peak-to-trough decline during test regime." }
    ],

    challenges: [
      { title: "Data Noise", description: "Financial data is inherently noisy. Implemented aggressive denoising and normalization techniques." },
      { title: "Overfitting", description: "Used Dropout (0.3) and Early Stopping with Optuna tuning to generalize well on unseen market regimes." },
      { title: "Inference Latency", description: "Optimized model for real-time inference using ONNX Runtime for sub-millisecond predictions." }
    ],

    futureWork: [
      { title: "Reinforcement Learning Agent", description: "Transitioning from prediction to active portfolio management via PPO agents." },
      { title: "Multi-Asset Scaling", description: "Extending the architecture to Crypto and Global Equities (S&P 500)." },
      { title: "LLM News Sentiment", description: "Integrating live Twitter/News feeds via a small BERT head for sentiment overlay." }
    ],

    testing: {
      goals: ["Maximize Sharpe Ratio", "Minimize Max Drawdown", "Ensure real-time capability"],
      metrics: [
        { name: "Backtest Return", description: "Annualized return on historical test set", target: "+42%" }
      ]
    }
  },
  'ux-globotel': {
    id: 'ux-globotel',
    title: 'GloboTel Service Blueprint',
    role: 'Senior Staff Designer',
    overview: 'A comprehensive end-to-end service blueprint for GloboTel — a travel-centric hybrid eSIM + physical SIM telecom provider designed to eliminate "Landing Anxiety" experienced by Indian international travelers.',
    context: 'GloboTel fuses global connectivity (190+ countries) with a value-added travel ecosystem (lounges, cabs, hotel discounts). The primary challenge was addressing "Landing Anxiety" — the fear and cost-shock experienced by Indian travelers the moment they land in an international territory without reliable data connectivity.',
    techStack: [
      { category: 'Service Design Tools', tools: ['Service Blueprint', 'Journey Mapping', 'Persona Research', 'Competitor Analysis'] },
      { category: 'Design & Delivery', tools: ['Figma', 'Microsoft PowerPoint', 'User Interviews', 'Affinity Mapping'] },
      { category: 'Technical Ecosystem', tools: ['AI/OCR KYC', 'eSIM Provisioning', 'Global Carrier APIs', 'Aadhaar Integration', 'Multilingual Chatbot'] },
    ],
    challenges: [
      { title: 'Landing Anxiety', description: 'Indian travelers experience acute fear and data cost-shock on landing internationally. Zero connectivity the first 10 minutes is the critical failure moment.' },
      { title: 'KYC Friction', description: 'ID document rejection and slow verification cause drop-off. Designed AI-powered 30-second OCR verification with Video KYC fallback to resolve this.' },
      { title: 'Roaming Cost Opacity', description: 'Competitors (Airtel Roaming) charge unpredictably. GloboTel offers prorated fair-use refunds and transparent bundle pricing to eliminate bill shock.' },
      { title: 'Long-Haul Edge Cases', description: 'Seafarers and long-term travelers need 90–120 day validity SIMs. No current provider serves this segment well. GloboTel identified it as a differentiated opportunity.' },
    ],
    uiGallery: [],
  },
  'ux-neuropods': {
    id: 'ux-neuropods',
    title: 'NeuroPods Insight Tool',
    role: 'UI/UX Designer · Interaction Design · System Thinking',
    overview: 'A futuristic emotionally intelligent internal Insight Tool for the NeuroPods team — a brainwave-adaptive wearable that interprets neural activity to adapt audio environments based on a user\'s emotional and cognitive state.',
    context: 'The tool is not for end-users but for developers, designers, operations, and leadership building the product. It needed to go beyond traditional dashboards — reflecting the soul of the product through emotional, beautiful, and meaningful interfaces.',
    techStack: [
      { category: 'Design Tools', tools: ['Figma', 'Figma Prototyping', 'Motion Design'] },
      { category: 'Deliverables', tools: ['Global Pulse View', 'Team & Tool Insight', 'Splash Animation (MP4)'] },
      { category: 'Design System', tools: ['Dark Mode', 'Bioluminescent Palette', 'Emotional Data Viz', 'Fluid Glows'] },
    ],
    challenges: [
      { title: 'Emotional UI Without Being Gimmicky', description: 'The interface had to feel alive and emotionally connected — not just a regular dark dashboard. Used bioluminescent glows, floating orbs, and pulse animations to achieve this.' },
      { title: 'Three Distinct Audiences', description: 'CXOs need global insight at a glance. Developers need feature-level emotional feedback. The Splash screen treats the tool itself as an empathetic AI persona.' },
      { title: 'Ethical Alerting System', description: 'The Global Pulse View includes real-time ethical alerts (burnout risk, extended usage zones) presented empathetically rather than as alarm-style warnings.' },
    ],
    uiGallery: [],
  }
};

