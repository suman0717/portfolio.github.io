// Portfolio Data
const portfolioData = {
    skills: [
        {
            category: "Low-Code/No-Code Platforms",
            items: ["AwareIM", "FlutterFlow", "Bubble", "Mendix", "Power Automate", "Google App Scripts", "Sisense"]
        },
        {
            category: "Technical Architecture & Integration",
            items: ["REST APIs", "SOAP", "JSON", "Systems Integration", "Multi-Tier Architecture", "Data Architecture", "AWS (EC2, S3)"]
        },
        {
            category: "Development Tools",
            items: ["Flutter (Mobile/Web)", "Python (AI integration)", "JavaScript", "SQL", "GIT", "JIRA", "MySQL", "MS-SQL", "Tomcat", "VS Code", "Android Studio", "n8n"]
        },
        {
            category: "AI & Automation",
            items: ["OpenAI", "Claude.ai", "ChatGPT", "Cursor.ai", "Google Sheets Automations"]
        },
        {
            category: "Management & Delivery",
            items: ["End-to-End Project Delivery", "Requirements Gathering", "Stakeholder Management", "Consultative Selling", "Solution Design", "Documentation", "Team Leadership", "Risk Management", "Agile/Scrum Methodology", "Testing & Debugging", "API Integration", "Workflow Automation"]
        }
    ],
    
    experience: [
        {
            company: "eThink Solutions Australia",
            role: "Senior Software Engineer / Consultant",
            duration: "June 2018 – Present",
            location: "Remote",
            responsibilities: [
                "Lead requirement gathering and translate business needs into technical specifications",
                "Architect and build LCNC + Flutter solutions (AwareIM backend + Flutter frontends)",
                "Integrate systems using REST/SOAP APIs and design multi-tier architectures",
                "Implement workflow automation using LCNC platforms",
                "Mentor junior developers, conduct code reviews and ensure delivery standards",
                "Provide technical support, bug tracking, and maintenance",
                "Keep up to date with emerging technologies and trends in LCNC and AI integration"
            ],
            keyProjects: ["GoCargoFr8", "GoFumig8", "GoIOT", "MyCare"]
        },
        {
            company: "Softserv Solutions Pvt Ltd",
            role: "Software Engineer",
            duration: "June 2016 – June 2018",
            location: "Jaipur, India",
            responsibilities: [
                "Designed and developed enterprise web apps across mining, healthcare, logistics domains",
                "Conducted requirements gathering, system analysis, and technical documentation",
                "Developed and managed backend systems using AwareIM, Tomcat, MySQL/MS-SQL, and AWS",
                "Managed offshore teams to deliver client-facing applications",
                "Conducted testing, debugging, and ensured performance optimization"
            ],
            keyProjects: ["Cook Colliery (Coal Mining)", "HFDC (Hawaii Family Dental Centre)", "LYFT (USA)", "Humm Kombucha"]
        }
    ],
    
    projects: [
        {
            name: "GoFumig8",
            description: "A comprehensive mobile and desktop application that allows fumigators to easily collect fumigation data from the field in an easy and compliant manner. Built in collaboration with the Australian Government and the fumigation industry.",
            features: [
                "Australian Government compliance",
                "Industry-leading data collection",
                "Real-time transparency",
                "Complete fumigation management solution",
                "Mobile & desktop app for fumigators",
                "DAFF Gateway integration",
                "Compliance & documentation",
                "Real-time tracking with Fumigation Pulse"
            ],
            tags: ["Mobile", "LCNC", "Compliance", "Government", "Flutter", "Real-time"]
        },
        {
            name: "GoBioSecure",
            description: "A comprehensive solution for managing all biosecurity data. Designed for simplicity and efficiency, the system enables centralised management of Biosecurity Directions, allowing real-time progress tracking with clients and stakeholders while ensuring full regulatory compliance.",
            features: [
                "Automatic document classification",
                "Real-time broker integration",
                "Complete audit trail",
                "Biosecurity management for cargo operations",
                "Container & cargo biosecurity",
                "Real-time tracking with Biosecure Pulse",
                "Mobile app for field operations",
                "DAFF Biosecurity Portal integration"
            ],
            tags: ["Mobile", "LCNC", "Compliance", "Logistics", "Real-time"]
        },
        {
            name: "GoTMS",
            description: "A comprehensive transport management system designed specifically for container logistics operations. Provides complete management from order entry to delivery completion, with specialised modules for planning, fleet control, and warehousing operations.",
            features: [
                "OCR-powered automation",
                "Real-time fleet monitoring",
                "Integrated mobile applications",
                "Transport management system",
                "Fleet control & driver management",
                "Warehouse inventory control",
                "Mobile apps: GoDrive, GoWarehouse, GoYard",
                "Real-time tracking & monitoring"
            ],
            tags: ["Mobile", "LCNC", "Logistics", "Fleet Management", "AI", "Real-time"]
        },
        {
            name: "GoDrive",
            description: "Driver Mobile App for transport management with comprehensive features for drivers including messaging, alerts, run automation, fatigue management, GPS tracking, and digital signatures.",
            features: [
                "Messaging and alerts",
                "Run automation",
                "Fatigue management",
                "GPS tracking",
                "Digital signatures"
            ],
            tags: ["Mobile", "Flutter", "Logistics", "Real-time"]
        },
        {
            name: "GoWarehouse",
            description: "Warehouse Operations mobile app for managing container unpacking, order picking, inventory management, goods tracking, and forklift pre-start checks.",
            features: [
                "Container unpacking",
                "Order picking",
                "Inventory management",
                "Goods tracking",
                "Forklift pre-start"
            ],
            tags: ["Mobile", "Flutter", "Logistics", "Warehouse"]
        },
        {
            name: "GoYard",
            description: "Yard Management mobile app for yard view operations, fleet management, tug operations, forecast planning, and container tracking.",
            features: [
                "Yard view operations",
                "Fleet management",
                "Tug operations",
                "Forecast planning",
                "Container tracking"
            ],
            tags: ["Mobile", "Flutter", "Logistics", "Fleet Management"]
        },
        {
            name: "GoIOT",
            description: "Central platform managing all IoT devices, events, and alerts. Universal device integration connecting any IoT brand using API credentials into one unified system with real-time monitoring dashboard.",
            features: [
                "Universal Device Integration - Connect any IoT brand using API credentials",
                "Event-Based Monitoring - Create sensor-driven events tied to assets, sites, and clients",
                "Interactive Geo-Mapping - View gateways, assets, events, and alerts on interactive maps",
                "Device Health Dashboard - Monitor live status across brands: online/offline, battery health",
                "Real-time event processing",
                "Custom alert thresholds",
                "Automated notifications",
                "Connects GoFumig8 with 3rd party remote meters"
            ],
            tags: ["IoT", "LCNC", "Real-time", "Cloud", "Integration"]
        },
        {
            name: "MyCare",
            description: "Service app for disabled individuals built with Flutter and AWS, providing comprehensive care management and support services.",
            features: [
                "Care service management",
                "User-friendly interface for disabled individuals",
                "Cloud-based infrastructure",
                "Real-time updates"
            ],
            tags: ["Mobile", "Flutter", "Cloud", "Healthcare", "AWS"]
        },
        {
            name: "NetSprit",
            description: "Fitness tutorial app with analytics powered by Flutter and Sisense, providing comprehensive fitness tracking and tutorial content.",
            features: [
                "Fitness tutorials",
                "Advanced analytics dashboard",
                "Progress tracking",
                "Data visualization"
            ],
            tags: ["Mobile", "Flutter", "Analytics", "Fitness"]
        },
        {
            name: "AI Agent (Grocery Stock Management)",
            description: "AI-powered automation system for grocery stock management using n8n and Google Sheets integration, providing intelligent inventory tracking and management.",
            features: [
                "Automated stock tracking",
                "AI-powered predictions",
                "Google Sheets integration",
                "Real-time inventory updates",
                "Smart alerts and notifications"
            ],
            tags: ["AI", "Automation", "Cloud", "Integration"]
        }
    ],
    
    allTags: [
        "Mobile", "LCNC", "Flutter", "Cloud", "AWS", "AI", "Automation",
        "Real-time", "Logistics", "Healthcare", "Compliance", "Government",
        "IoT", "Fleet Management", "Warehouse", "Analytics", "Integration", "Fitness"
    ]
};
