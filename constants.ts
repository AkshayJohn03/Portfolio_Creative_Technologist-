
import { Project, ProjectCategory, ExperienceItem, SkillCategory, CaseStudyContent } from './types';

export const RESUME_CONTEXT = `
You are an AI assistant for Akshay John's portfolio. 
Akshay is a Senior Visual & Product Designer with 7+ years of experience, and an AI/ML Engineer.
Contact: (+91) 97917 36311, akshay3rishi@gmail.com, Trichy, Tamil Nadu.

INSTRUCTIONS:
1. When asked generic questions (e.g., "Who is Akshay?"), ALWAYS start by describing his Design experience (Product/Visual Design) FIRST. Mention his AI/ML engineering skills secondarily.
2. Format responses cleanly. Use **bold** for key terms, tools, and metrics. Use proper paragraph spacing instead of excessive symbols or bullet points.

SUMMARY:
Multidisciplinary Visual & Product Designer with 7+ years of experience creating digital experiences, brand identities, and motion visuals. Expert in bridging human-centered design with technical innovation.
Also an AI/ML Engineer developing deep learning architectures and NLP models.

DESIGN SKILLS (PRIMARY):
- Tools: Figma, Adobe Creative Suite (Photoshop, Illustrator, After Effects, Premiere Pro), Adobe XD, Miro, Hotjar, Protopie.
- Expertise: User Research, Wireframing, Prototyping, Interaction Design, Design Systems, Accessibility, Motion Graphics.

AI/ML SKILLS (SECONDARY):
- Stack: Python, PyTorch, Transformers, Scikit-learn, Pandas, Rasa NLU.
- Concepts: LLMs, NLP, Computer Vision, Model Optimization (Optuna).

EDUCATION:
- B.Sc Visual Communication, Loyola College, Chennai (CGPA: 65%)
- Higher Secondary (Computer Science), Alpha Plus Matriculation, Trichy (Score: 86%)

EXPERIENCE:
1. Akkodis — Lead Executive (Product & Visual Design) | Nov 2023 – Present
2. Wipro Limited — Senior Visual Designer / Artist | Nov 2023 – Nov 2023
3. Digicop Media — Visual Designer (UX + Motion) | Jul 2018 – Nov 2020

PROJECTS (Design & AI):
- Project RIFT (AI): A Physical Approach to Intelligence under Irreversibility.
- ZIA (AI): Custom 60M parameter SLM trained from scratch on consumer hardware.
- McDonald's Burger Line (UX): SLA Model and Timeline visualization for order tracking.
- ThriftHaven (UX): Sustainable second-hand marketplace app.
- Enterprise UX/UI (Akkodis/Wipro): User-centered solutions, data-driven design.
- Aria-X6T (AI): Options trading system using PyTorch.
- DriveAI (AI): Voice-integrated car assistant.
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
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "Design & Visual Tools",
    skills: ["Figma", "Photoshop", "Illustrator", "After Effects", "Premiere Pro", "Adobe XD", "Miro", "Hotjar", "Protopie"]
  },
  {
    title: "UX/UI Expertise",
    skills: ["Wireframing", "Prototyping", "Interaction Design", "Information Architecture", "Accessibility", "Usability Testing"]
  },
  {
    title: "AI & Machine Learning",
    skills: ["Python", "PyTorch", "Transformers", "NLP", "Scikit-learn", "Pandas", "Rasa NLU", "LangChain"]
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: "Lead Executive (Product & Visual Design)",
    company: "Akkodis",
    location: "Bengaluru, India",
    period: "Nov 2023 – Present",
    description: [
      "Led design of user-centered solutions for enterprise applications.",
      "Conducted user research and created data-driven designs.",
      "Collaborated with sales to tailor design solutions."
    ]
  },
  {
    role: "Senior Visual Designer / Artist",
    company: "Wipro Limited",
    location: "Chennai, India",
    period: "Nov 2020 – Nov 2023",
    description: [
      "Produced over 200+ digital and print creatives.",
      "Led the Rocket Onboarding initiative mentoring 6+ designers.",
      "Improved campaign engagement by 35% through motion graphics."
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
    overview: "A custom ~60M parameter Small Language Model (SLM) trained on consumer hardware, exploring the raw mechanics of transformer convergence and failure.",
    context: "Can a single developer, with limited compute, build and understand a language model end-to-end without pretrained giants? ZIA was built to answer this, focusing on hardware-constrained training and interpretable transformer architectures.",
    
    techStack: [
      { category: "Core Engine", tools: ["PyTorch", "Python 3.10", "GTX 1050 Ti"] },
      { category: "Optimization", tools: ["Gradient Checkpointing", "Weight Tying", "Mixed Training"] },
      { category: "Tokenization", tools: ["Custom 60k BPE", "ChatML Formatting"] }
    ],

    inputParameters: [
      { category: "Architecture", details: ["8 Transformer Layers", "384 Hidden Dimension", "6 Attention Heads"] },
      { category: "Pretraining", details: ["WikiText-103", "C4 Corpus", "Autoregressive Next-Token"] },
      { category: "Constraints", details: ["4GB VRAM Limit", "Rotary-free Positional Embeddings", "No Pretrained Weights"] }
    ],

    modelArchitecture: {
      overview: "The evolutionary journey of ZIA from a simple next-token predictor to a conversational aligned agent.",
      steps: [
        { title: "BPE Tokenization", description: "Building a custom 60k vocabulary to ensure failures are model-level, not token-level." },
        { title: "Pretraining v6", description: "Initial dense pretraining on Wikipedia-like text to establish basic grammar and syntax." },
        { title: "IFT v5", description: "Instruction Fine-Tuning using ChatML format for dialogue alignment." },
        { title: "Knowledge Diag", description: "Full diagnostic suite checking PCA variance and factual word associations." },
        { title: "Mixed Training", description: "80% Pretraining + 20% IFT to grow knowledge without destroying dialogue stability." }
      ]
    },

    performanceMetrics: [
      { name: "Parameters", value: "60M", description: "Small, interpretable transformer size for consumer hardware." },
      { name: "Vocab Size", value: "60,011", description: "Clean 60k BPE tokenizer with correctly aligned special tokens." },
      { name: "Context Window", value: "4096", description: "Maximum sequence length achieved via gradient checkpointing." },
      { name: "Perplexity", value: "1320", description: "Last known best perplexity on general knowledge corpora." },
      { name: "VRAM Used", value: "3.8GB", description: "Optimized footprint to stay within GTX 1050 Ti limits." }
    ],

    challenges: [
      { title: "Attractor Collapse", description: "Model refusing to generate content after specific steps, requiring forced EOS blocking." },
      { title: "The Prediction Trap", description: "Learning syntax perfectly while failing semantic continuation (repetitive generation)." },
      { title: "Knowledge Deficit", description: "Grammatically correct sentences that contained zero factual accuracy regarding basic concepts." },
      { title: "VRAM Bottleneck", description: "Hard limit of 4GB VRAM required trading compute speed for memory efficiency." }
    ],

    strategies: [
      { title: "Mixed Training", description: "Simultaneously training on Wiki text and dialogue to prevent 'catastrophic forgetting'." },
      { title: "Custom Tokenizer", description: "Building from scratch to avoid dependency on HF hidden assumptions." },
      { title: "Weight Tying", description: "Sharing weights between embedding and output layers to reduce parameter count." }
    ],

    futureWork: [
      { title: "Scaling Knowledge", description: "Moving toward specialized domain pretraining (Medical/Legal) for higher accuracy." },
      { title: "RLHF Implementation", description: "Integrating simple PPO loops to reward preference alignment." },
      { title: "Mobile Inference", description: "Optimizing for ONNX Runtime for on-device inference without cloud dependence." }
    ]
  },
  'ai-rift': {
    id: 'ai-rift',
    title: "Project RIFT",
    role: "Independent Researcher",
    overview: "A groundbreaking study on physical anticipation, proving that intelligence emerges from irreversible physical commitment rather than predictive optimization.",
    context: "Modern AI systems assume reversibility and tolerance for delayed action. RIFT (Reflexes to Geometric Anticipation) challenges this by studying agents in survival scenarios where early, irreversible commitment is required based on faint causal cues.",
    
    techStack: [
      { category: "Frameworks", tools: ["PyTorch", "Python 3.10"] },
      { category: "Physics Engine", tools: ["Custom 2D Spatial Grid", "Diffusion Dynamics"] },
      { category: "Visualization", tools: ["Matplotlib", "Seaborn", "Terminal Logging"] }
    ],

    inputParameters: [
      { category: "Environment", details: ["2D Spatial Grid (32x32 / 48x48)", "8 Continuous Channels", "Trace Decay: 0.9"] },
      { category: "Preprocessing", details: ["Signal Denoising", "Ischemic Damage Normalization", "Metabolic Cost Scaling"] },
      { category: "Actions", details: ["Scalar Brace (0-1)", "Geometric Posture Shift (x, y)", "Discrete Impulse Discharge"] }
    ],

    modelArchitecture: {
      overview: "The experimental journey of Project RIFT documented across multiple phases of increasing complexity and constraint.",
      steps: [
        { title: "Phase I", description: "Reflex Without Time (Ballistic Experiments) - Purely reactive scalar reflex." },
        { title: "Phase II", description: "Mortality and Fear - Replacing binary death with continuous health (Ht)." },
        { title: "Phase III", description: "Energy, Cost, and Constraint - Introduction of Ischemia and Fatigue." },
        { title: "Phase IV", description: "Sensory Degradation - Tension degrades perception (Observation noise)." },
        { title: "Phase V", description: "Motor Control & Discontinuity - Breakthrough via discrete impulses." },
        { title: "Phase VI", description: "Memory Without Storage - Thermodynamic Lock as true physical memory." },
        { title: "Phase VII", description: "Morphology - Breakthrough via Center-of-Mass shift and persistence." },
        { title: "Phase VIII", description: "Ecology & Speciation - Evolutionary divergence under hard constraints." },
        { title: "Phase IX", description: "Validation & Falsification - Stress testing the RIFT effect causality." },
        { title: "Final Pass", description: "PASS 1 Conclusion - Anticipation emerges from early deformation." }
      ]
    },

    performanceMetrics: [
      { name: "Geometric Survival", value: "40%", description: "Success rate of non-learning geometric threshold agents." },
      { name: "Transformer Survival", value: "0%", description: "Predictive agents failed due to probabilistic hedging." },
      { name: "RNN Survival", value: "0%", description: "Neural memory decoupled from reality, leading to 'hallucinated' safety." },
      { name: "Commit Time", value: "45.2", description: "Average steps taken to reach irreversible state." },
      { name: "Energy Wasted", value: "14.0", description: "Minimal metabolic cost used by the successful Geometric agent." }
    ],

    challenges: [
      { title: "The Prediction Trap", description: "Predictive models delay action to reduce error, which is fatal when commitment must be early." },
      { title: "Ischemic Damage", description: "Maintaining readiness incurs continuous metabolic cost; the agent must time its 'brace' perfectly." },
      { title: "Sensory Blindness", description: "High physiological readiness (tension) degrades sensory fidelity, creating a trade-off between power and vision." },
      { title: "Probabilistic Hedging", description: "Averaging future possibilities leads to a 'center' position that fails to protect against specific threats." }
    ],

    strategies: [
      { title: "Discontinuous Action", description: "Replacing smooth control with discrete 'impulses' or 'snaps' to bypass hedging paralysis." },
      { title: "Frozen Memory", description: "Storing state as a physical phase transition (hysteresis) rather than a symbolic buffer." },
      { title: "Geometric Commitment", description: "Shifting center-of-mass to lock the system into a specific future path." }
    ],

    futureWork: [
      { title: "PASS 2: Multi-Agent Systems", description: "Investigating whether social commitments emerge from the same physical necessity." },
      { title: "Adversarial Commitment", description: "Testing if predators can exploit fixed commitment timing to bait agents." },
      { title: "Generalization", description: "Transferring geometric commitment logic to real-world soft robotics." }
    ]
  },
  'ux-mcd': {
    id: 'ux-mcd',
    title: "McDonald's Burger Line",
    role: "Lead Executive",
    overview: "This design addresses the need for managers to reconstruct a late/wrong order end-to-end and quickly identify the root cause.",
    uiGallery: [
      { title: "Manager Dashboard Overview", description: "Real-time metrics for Order Time, SLA Breaches, and Total Sales.", imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000" },
      { title: "Order Timeline & Root Cause Analysis", description: "Detailed Gantt-style breakdown of the order process.", imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000" },
      { title: "Visual Verification Mode", description: "Comparing the escalated order against the healthy reference standard.", imageUrl: "https://plus.unsplash.com/premium_photo-1682145730713-34bba6d3d14a?auto=format&fit=crop&q=80&w=2000" }
    ],
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
  }
};
