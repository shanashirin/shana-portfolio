export const portfolioData = {
  personal: {
    name: "Shana Shirin",
    initials: "SS",
    role: "MCA Graduate | Aspiring Software & AI Engineer",
    roles: [
      "Software & AI Engineer",
      "AI/ML & Data Analytics Specialist",
      "Full-Stack Web Developer",
      "MCA Graduate"
    ],
    status: "Open to Software & AI Roles",
    location: "India (Open to Relocation & Remote)",
    email: "shanashirinpulikkal@gmail.com",
    tagline: "Turning ideas into intelligent solutions.",
    bio: [
      "Hi, I'm Shana Shirin, an MCA graduate passionate about Software Development, Artificial Intelligence, Machine Learning, and Data Analytics. I enjoy building practical, technology-driven solutions that solve real-world problems and transform ideas into functional applications.",
      "My experience includes developing machine learning prediction systems, AI-powered analytics dashboards, web applications, and deep learning solutions. Through my projects, I have explored Python, Flask, React, machine learning, deep learning, data visualization, and database management.",
      "I have worked on projects ranging from personalized travel planning and credit risk prediction to stroke risk assessment, business intelligence, and retinal image-based cardiovascular risk analysis. These experiences have strengthened my problem-solving, analytical thinking, and application development skills.",
      "I am continuously learning new technologies, improving my technical abilities, and exploring innovative ways to combine AI with software engineering. My goal is to build impactful applications, grow as a software and AI engineer, and contribute to meaningful technology projects."
    ],
    social: {
      github: "https://github.com/shanashirin",
      linkedin: "https://linkedin.com",
      twitter: "https://x.com",
      email: "mailto:shanashirinpulikkal@gmail.com"
    },
    resumeUrl: "#contact"
  },

  stats: [
    { label: "Featured Projects", value: "5+", count: 5, suffix: "+" },
    { label: "Core Domains", value: "3", count: 3, suffix: "" },
    { label: "Degree & Specialization", value: "MCA", count: 1, suffix: "" },
    { label: "Tech Masteries", value: "15+", count: 15, suffix: "+" }
  ],

  services: [
    {
      id: "ai-ml",
      title: "AI & Machine Learning Systems",
      description: "Designing and training predictive models, classification pipelines, and feature engineering workflows with Scikit-learn, TensorFlow, and Pandas.",
      icon: "Cpu",
      badge: "Intelligent Solutions"
    },
    {
      id: "fullstack",
      title: "Full-Stack Web Development",
      description: "Developing responsive web applications with React, Flask, Node.js, Express, and MongoDB, bridging frontend UX with backend logic.",
      icon: "Code2",
      badge: "Modern Architecture"
    },
    {
      id: "analytics",
      title: "Data Analytics & Business Intelligence",
      description: "Transforming raw business datasets into actionable insights with automated SQL query generation, interactive charts, and predictive forecasting.",
      icon: "Zap",
      badge: "Data-Driven"
    },
    {
      id: "deep-learning",
      title: "Deep Learning & Computer Vision",
      description: "Building neural network architectures (CNNs) and computer vision pipelines with OpenCV and Keras for multi-stage image risk classification.",
      icon: "Layout",
      badge: "Computer Vision"
    }
  ],

  skills: {
    categories: ["All", "Programming", "AI & Machine Learning", "Web Development", "Databases"],
    list: [
      // Programming
      { name: "Python", category: "Programming", level: 95, icon: "Terminal" },
      { name: "JavaScript", category: "Programming", level: 90, icon: "FileCode2" },
      { name: "SQL", category: "Programming", level: 88, icon: "Database" },

      // AI, ML & Analytics
      { name: "Machine Learning", category: "AI & Machine Learning", level: 92, icon: "Cpu" },
      { name: "Deep Learning (CNNs)", category: "AI & Machine Learning", level: 88, icon: "Layers" },
      { name: "Scikit-learn", category: "AI & Machine Learning", level: 90, icon: "Sparkles" },
      { name: "TensorFlow / Keras", category: "AI & Machine Learning", level: 86, icon: "Box" },
      { name: "Pandas & NumPy", category: "AI & Machine Learning", level: 94, icon: "Database" },
      { name: "Data Visualization", category: "AI & Machine Learning", level: 92, icon: "Palette" },
      { name: "OpenCV / Computer Vision", category: "AI & Machine Learning", level: 84, icon: "Eye" },

      // Web Development
      { name: "React", category: "Web Development", level: 90, icon: "Atom" },
      { name: "Flask", category: "Web Development", level: 92, icon: "Server" },
      { name: "Node.js & Express.js", category: "Web Development", level: 86, icon: "Network" },
      { name: "HTML5 & Modern CSS", category: "Web Development", level: 95, icon: "Palette" },
      { name: "Tailwind CSS", category: "Web Development", level: 88, icon: "Sparkles" },

      // Databases
      { name: "MongoDB", category: "Databases", level: 88, icon: "Database" },
      { name: "SQLite", category: "Databases", level: 90, icon: "Database" }
    ]
  },

  projects: [
    {
      id: "wanderlust",
      title: "Wanderlust — Travel Planner",
      category: "Web Development",
      subtitle: "Personalized AI-assisted Travel Planning Web Application",
      description: "A travel planning web application designed to help users explore destinations and create personalized travel itineraries based on their preferences, budget, interests, and trip duration.",
      image: "https://images.openai.com/static-rsc-4/xIH2pdGy0QuWbSQeq1a3VXM2DyI26OqErqU28NQlbAlFj7HYuY5sqVi6DxZu07cR31qy7CqZWzF4yo9H3i0yNQVGtqNzRz6STPXGWZIahnulzJhZcwTo0OMBdUAJUceDVsOr2MLu9NLv1RJVgtiguanfo0_2Hgjom-yFl7u-T08?purpose=inline",
      imageGradient: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)",
      accentColor: "#6366f1",
      tags: ["MERN Stack", "React", "Node.js", "Express.js", "MongoDB"],
      features: [
        "Personalized itinerary generator based on user budget and interests",
        "Dynamic destination discovery and interactive location previews",
        "RESTful API integration with MongoDB document storage",
        "Responsive, modern interface with fluid trip timeline management"
      ],
      metrics: "Custom itinerary generation with real-time budget tracking",
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      id: "stroke-prediction",
      title: "Stroke Prediction System",
      category: "AI & Machine Learning",
      subtitle: "Predictive Health Analytics & Lifestyle Risk Assessment",
      description: "A machine learning application that analyzes health and lifestyle factors to estimate stroke risk. It demonstrates how predictive analytics can support early risk assessment using patient-related data.",
      disclaimer: "Note: Prototype for risk-estimation, not a clinically validated diagnostic tool.",
      image: "https://images.openai.com/static-rsc-4/dDU8DSInEiFRtiq7xvJ9af5-Z3S9Bx6MdxEVTdP0-5JfvX2C-gDDyMHDFIoPscG6U9r-gx0nrrZvxWWqA8hkJW32Hj7tPOQjYl1Wg5EySgM6MJYyVCY2zoC6TMFykcukwRw7JWS9khgh8Qx69sXm0D3p9Kkmh-s80a9IuIvQ2AY?purpose=inline",
      imageGradient: "linear-gradient(135deg, #042f2e 0%, #0f766e 50%, #14b8a6 100%)",
      accentColor: "#14b8a6",
      tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "Flask"],
      features: [
        "Data preprocessing, imputation, and feature scaling pipelines",
        "Model training and hyperparameter evaluation on patient dataset",
        "Interactive Flask web dashboard for real-time patient risk evaluation",
        "Probability confidence scoring with key risk factor contributions"
      ],
      metrics: "Robust predictive accuracy on imbalanced clinical risk parameters",
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      id: "creditscore-ai",
      title: "CreditScore AI — Credit Risk Predictor",
      category: "AI & Machine Learning",
      subtitle: "Financial Inclusion & Default Risk Prediction System",
      description: "A machine learning-based web application that predicts credit risk from financial and personal input features. The system includes data preprocessing, feature scaling, model-based prediction, and an interactive user interface.",
      image: "https://images.openai.com/static-rsc-4/3rcO0A3vDEOxahRyjEjYkVD4sNkFkSDR7T_ejId1hL3QD8gMSRp3i59YMPgsbaplITp8LbY8oQXXg77ABqjUU9oFazoMTKk-Fxn3ejKXClPFNrAwynIfQFQgfBGH20Zn9lxsNLwT4BsuOB82JSpXLGllL4wAPvSmRd3kh8-p86A?purpose=inline",
      imageGradient: "linear-gradient(135deg, #1c1917 0%, #44403c 50%, #78716c 100%)",
      accentColor: "#f59e0b",
      tags: ["Python", "Scikit-learn", "Pandas", "NumPy", "Flask", "HTML", "CSS"],
      features: [
        "Comprehensive financial data preprocessing and numerical encoding",
        "Ensemble classification algorithms for credit default risk estimation",
        "Interactive web application with instant creditworthiness assessment",
        "Feature importance visualization highlighting key determining variables"
      ],
      metrics: "High sensitivity on loan default indicators with rapid inference",
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      id: "insightgpt",
      title: "InsightGPT — AI Data Analytics Dashboard",
      category: "Full Stack & AI",
      subtitle: "Natural Language Business Intelligence & Automated Forecasting",
      description: "An AI-powered analytics platform designed to turn uploaded business datasets into meaningful insights. It supports data analysis, natural-language questions, SQL query generation, interactive visualizations, forecasting, and report generation.",
      image: "https://images.openai.com/static-rsc-4/pLFdRVn_5lByO2yT-BGD5Q3wBpM__e_saueNdIyJYGyqCtj6DwBonyQyMfbg-Um5IcAh9H64wC3x_Nbq0vs2h4e9PUe3MFXQDOANeaJH7R5rhF8l4ImlJQiMTLzCPYsjNkStspJzJqSs99yvidGohPicmcliM1qplaUSB0hgbyQ?purpose=inline",
      imageGradient: "linear-gradient(135deg, #4a044e 0%, #86198f 50%, #c026d3 100%)",
      accentColor: "#d946ef",
      tags: ["Python", "Flask", "React", "Tailwind CSS", "SQLite", "Pandas", "Machine Learning"],
      features: [
        "Upload CSV/Excel datasets for automated schema detection and indexing",
        "Natural-language query parser generating executable SQL statements",
        "Interactive visualization engine producing dynamic trend and distribution charts",
        "Automated statistical forecasting and downloadable summary reports"
      ],
      metrics: "Sub-second analytical queries across multi-thousand row datasets",
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      id: "eye2heart",
      title: "Eye2Heart — Cardiovascular Risk Analyzer",
      category: "Deep Learning & CV",
      subtitle: "Deep Learning & Retinal Image-Based Cardiovascular Risk Analysis",
      description: "A deep learning project that combines retinal fundus image analysis with clinical data to estimate cardiovascular risk. The system is designed to classify risk into low, medium, and high categories, exploring the potential of AI-assisted health risk assessment.",
      disclaimer: "Note: Prototype for risk-estimation, not a clinically validated diagnostic tool.",
      image: "https://images.openai.com/static-rsc-4/fzREKMoKswtGddiOrvoUZHS8EsO2E-e6bKktLm1B1ElsbOE7dHO5s4_OAsErMHkHPsBF733TLXsdkqKN-q6hjYv7Lmlye0NKLxR3qCn8_lf7fkUN8XoQZKwV7nGE69m5v4kV9zFF-iPBG6uSDUX0nvENjWZKQ_P8hTNyTDpkxXI?purpose=inline",
      imageGradient: "linear-gradient(135deg, #172554 0%, #1d4ed8 50%, #3b82f6 100%)",
      accentColor: "#3b82f6",
      tags: ["Python", "TensorFlow/Keras", "CNNs", "OpenCV", "Flask", "Machine Learning"],
      features: [
        "Retinal fundus image preprocessing, normalization, and contrast enhancement",
        "Convolutional Neural Network (CNN) multi-stage feature extraction",
        "Amalgamation of imaging features with clinical risk indicators",
        "3-tier classification: Low, Medium, and High cardiovascular risk levels"
      ],
      metrics: "Novel multi-modal approach bridging computer vision with clinical inputs",
      github: "https://github.com",
      demo: "https://example.com"
    }
  ],

  experience: [
    {
      period: "Postgraduate Degree",
      role: "Master of Computer Applications (MCA)",
      company: "Computer Applications Graduate",
      location: "India",
      description: "Comprehensive postgraduate study specializing in Advanced Software Engineering, Artificial Intelligence, Machine Learning, Data Analytics, and Distributed Systems.",
      achievements: [
        "Developed end-to-end deep learning and predictive machine learning systems for real-world domains",
        "Authored and presented innovative project on retinal fundus cardiovascular risk assessment (Eye2Heart)",
        "Collaborated on full-stack web platforms integrating React, Flask, and database architectures"
      ],
      skills: ["Python", "Machine Learning", "Deep Learning", "React", "Flask", "SQL", "Data Analytics"]
    },
    {
      period: "Undergraduate Degree",
      role: "Bachelor's Degree in Computer Science / Applications",
      company: "University Education",
      location: "India",
      description: "Strong foundational coursework in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, and Web Technologies.",
      achievements: [
        "Built solid programming foundations across Python, JavaScript, and SQL",
        "Developed early web applications and statistical data processing scripts",
        "Active contributor to technical workshops and coding symposiums"
      ],
      skills: ["Data Structures", "Algorithms", "Python", "JavaScript", "DBMS", "HTML/CSS"]
    }
  ],

  testimonials: [
    {
      quote: "Shana brings exceptional dedication to bridging AI algorithms with real-world software applications. Her work on the predictive modeling pipelines demonstrates high analytical rigor and clean engineering practices.",
      author: "Academic Mentor & Research Guide",
      role: "Faculty Advisor",
      company: "Department of Computer Applications",
      avatar: "AM"
    },
    {
      quote: "Working alongside Shana on project implementations showed her ability to quickly master complex stacks—from deep learning with TensorFlow to responsive full-stack interfaces in React.",
      author: "Peer Collaborator",
      role: "Software Engineer",
      company: "Tech Projects Team",
      avatar: "PC"
    }
  ]
};
