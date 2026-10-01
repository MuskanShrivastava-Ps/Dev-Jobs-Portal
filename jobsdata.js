const sampleJobs = [
    {
        "id": 1,
        "title": "Frontend Developer",
        "company": "TechCorp Solutions",
        "logo": "\ud83d\udcbc",
        "category": "frontend",
        "location": "Bangalore, India",
        "locationValue": "bangalore",
        "experience": "1-3",
        "experienceLabel": "1-3 Yrs",
        "salary": "10-15",
        "salaryLabel": "\u20b910 - 15 LPA",
        "jobType": "full-time",
        "workMode": "remote",
        "skills": [
            "React",
            "JavaScript",
            "CSS"
        ],
        "postedDate": "Today",
        "description": [
            "Role: Build responsive, accessible, and high-performance user interfaces for our web platform used by thousands of customers daily.",
            "Impact: Work closely with designers and backend engineers to turn Figma mockups into polished, production-ready components."
        ],
        "responsibilities": [
            "Develop reusable UI components following the team's design system",
            "Optimize page load performance and Core Web Vitals",
            "Write unit and integration tests for critical UI flows",
            "Collaborate with designers to refine interaction details"
        ],
        "requirements": [
            "Strong proficiency in modern JavaScript/TypeScript and a component-based framework",
            "Solid understanding of responsive design and cross-browser compatibility",
            "Experience with version control (Git) and code review workflows"
        ],
        "benefits": [
            "Flexible working hours with a hybrid/remote-friendly culture.",
            "Comprehensive medical coverage including premium healthcare plans and wellness allowances.",
            "Stock options / ESOPs for eligible full-time employees."
        ]
    },
    {
        "id": 2,
        "title": "Senior Frontend Developer",
        "company": "Acme Inc",
        "logo": "\ud83d\ude80",
        "category": "frontend",
        "location": "Mumbai, India",
        "locationValue": "mumbai",
        "experience": "3-5",
        "experienceLabel": "3-5 Yrs",
        "salary": "12-18",
        "salaryLabel": "\u20b912 - 18 LPA",
        "jobType": "full-time",
        "workMode": "hybrid",
        "skills": [
            "React",
            "TypeScript",
            "Tailwind"
        ],
        "postedDate": "1 day ago",
        "description": [
            "Role: Build responsive, accessible, and high-performance user interfaces for our web platform used by thousands of customers daily.",
            "Impact: Work closely with designers and backend engineers to turn Figma mockups into polished, production-ready components."
        ],
        "responsibilities": [
            "Develop reusable UI components following the team's design system",
            "Optimize page load performance and Core Web Vitals",
            "Write unit and integration tests for critical UI flows",
            "Collaborate with designers to refine interaction details"
        ],
        "requirements": [
            "Strong proficiency in modern JavaScript/TypeScript and a component-based framework",
            "Solid understanding of responsive design and cross-browser compatibility",
            "Experience with version control (Git) and code review workflows"
        ],
        "benefits": [
            "Paid parental leave and generous PTO policy.",
            "Flexible working hours with a hybrid/remote-friendly culture.",
            "Free daily meals and fully stocked office pantry."
        ]
    },
    {
        "id": 3,
        "title": "Backend Developer",
        "company": "Pixel Forge",
        "logo": "\ud83d\udcbb",
        "category": "backend",
        "location": "Delhi, India",
        "locationValue": "delhi",
        "experience": "5+",
        "experienceLabel": "5+ Yrs",
        "salary": "15-22",
        "salaryLabel": "\u20b915 - 22 LPA",
        "jobType": "full-time",
        "workMode": "onsite",
        "skills": [
            "Node.js",
            "Express",
            "MongoDB"
        ],
        "postedDate": "2 days ago",
        "description": [
            "Role: Design and maintain scalable backend services and APIs powering our core product features.",
            "Impact: Collaborate with cross-functional teams to ship reliable, well-tested server-side systems."
        ],
        "responsibilities": [
            "Design and implement RESTful APIs and background services",
            "Optimize database queries and manage schema migrations",
            "Write clean, maintainable, and well-documented code",
            "Participate in on-call rotation and incident response"
        ],
        "requirements": [
            "Strong proficiency in at least one backend language and its ecosystem",
            "Experience working with relational or NoSQL databases",
            "Understanding of API design principles and authentication flows"
        ],
        "benefits": [
            "Annual learning and development budget for courses and conferences.",
            "Stock options / ESOPs for eligible full-time employees.",
            "Comprehensive medical coverage including premium healthcare plans and wellness allowances."
        ]
    },
    {
        "id": 4,
        "title": "Senior Backend Engineer",
        "company": "Bluepeak Systems",
        "logo": "\ud83d\udee0\ufe0f",
        "category": "backend",
        "location": "Remote",
        "locationValue": "remote",
        "experience": "0-1",
        "experienceLabel": "0-1 Yrs",
        "salary": "20-30",
        "salaryLabel": "\u20b920 - 30 LPA",
        "jobType": "part-time",
        "workMode": "remote",
        "skills": [
            "Java",
            "Spring Boot",
            "PostgreSQL"
        ],
        "postedDate": "3 days ago",
        "description": [
            "Role: Design and maintain scalable backend services and APIs powering our core product features.",
            "Impact: Collaborate with cross-functional teams to ship reliable, well-tested server-side systems."
        ],
        "responsibilities": [
            "Design and implement RESTful APIs and background services",
            "Optimize database queries and manage schema migrations",
            "Write clean, maintainable, and well-documented code",
            "Participate in on-call rotation and incident response"
        ],
        "requirements": [
            "Strong proficiency in at least one backend language and its ecosystem",
            "Experience working with relational or NoSQL databases",
            "Understanding of API design principles and authentication flows"
        ],
        "benefits": [
            "Flexible working hours with a hybrid/remote-friendly culture.",
            "Paid parental leave and generous PTO policy.",
            "Performance-based bonuses and yearly appraisals."
        ]
    },
    {
        "id": 5,
        "title": "Full Stack Developer",
        "company": "Nimbus Labs",
        "logo": "\u2699\ufe0f",
        "category": "backend",
        "location": "Hyderabad, India",
        "locationValue": "bangalore",
        "experience": "1-3",
        "experienceLabel": "1-3 Yrs",
        "salary": "3-5",
        "salaryLabel": "\u20b93 - 5 LPA",
        "jobType": "contract",
        "workMode": "hybrid",
        "skills": [
            "React",
            "Node.js",
            "MySQL"
        ],
        "postedDate": "5 days ago",
        "description": [
            "Role: Design and maintain scalable backend services and APIs powering our core product features.",
            "Impact: Collaborate with cross-functional teams to ship reliable, well-tested server-side systems."
        ],
        "responsibilities": [
            "Design and implement RESTful APIs and background services",
            "Optimize database queries and manage schema migrations",
            "Write clean, maintainable, and well-documented code",
            "Participate in on-call rotation and incident response"
        ],
        "requirements": [
            "Strong proficiency in at least one backend language and its ecosystem",
            "Experience working with relational or NoSQL databases",
            "Understanding of API design principles and authentication flows"
        ],
        "benefits": [
            "Comprehensive medical coverage including premium healthcare plans and wellness allowances.",
            "Team offsites and quarterly company events.",
            "Free daily meals and fully stocked office pantry."
        ]
    },
    {
        "id": 6,
        "title": "Mobile App Developer",
        "company": "CodeCraft Technologies",
        "logo": "\ud83d\udcf1",
        "category": "mobile",
        "location": "Pune, India",
        "locationValue": "mumbai",
        "experience": "3-5",
        "experienceLabel": "3-5 Yrs",
        "salary": "5-10",
        "salaryLabel": "\u20b95 - 10 LPA",
        "jobType": "internship",
        "workMode": "onsite",
        "skills": [
            "React Native",
            "JavaScript",
            "Firebase"
        ],
        "postedDate": "1 week ago",
        "description": [
            "Role: Build and maintain native or cross-platform mobile applications used by our growing user base.",
            "Impact: Partner with product and design teams to deliver smooth, intuitive mobile experiences."
        ],
        "responsibilities": [
            "Implement new features across the mobile app codebase",
            "Ensure smooth performance and low crash rates in production",
            "Integrate with backend APIs and third-party SDKs",
            "Publish and maintain app releases on app stores"
        ],
        "requirements": [
            "Experience building and shipping mobile applications to production",
            "Familiarity with mobile UI patterns and platform guidelines",
            "Understanding of app performance profiling and debugging tools"
        ],
        "benefits": [
            "Performance-based bonuses and yearly appraisals.",
            "Flexible working hours with a hybrid/remote-friendly culture.",
            "Paid parental leave and generous PTO policy."
        ]
    },
    {
        "id": 7,
        "title": "Android Developer",
        "company": "Skyline Softworks",
        "logo": "\u2601\ufe0f",
        "category": "mobile",
        "location": "Bangalore, India",
        "locationValue": "bangalore",
        "experience": "5+",
        "experienceLabel": "5+ Yrs",
        "salary": "10-15",
        "salaryLabel": "\u20b910 - 15 LPA",
        "jobType": "full-time",
        "workMode": "remote",
        "skills": [
            "Kotlin",
            "Android SDK",
            "Jetpack Compose"
        ],
        "postedDate": "Today",
        "description": [
            "Role: Build and maintain native or cross-platform mobile applications used by our growing user base.",
            "Impact: Partner with product and design teams to deliver smooth, intuitive mobile experiences."
        ],
        "responsibilities": [
            "Implement new features across the mobile app codebase",
            "Ensure smooth performance and low crash rates in production",
            "Integrate with backend APIs and third-party SDKs",
            "Publish and maintain app releases on app stores"
        ],
        "requirements": [
            "Experience building and shipping mobile applications to production",
            "Familiarity with mobile UI patterns and platform guidelines",
            "Understanding of app performance profiling and debugging tools"
        ],
        "benefits": [
            "Comprehensive medical coverage including premium healthcare plans and wellness allowances.",
            "Paid parental leave and generous PTO policy.",
            "Flexible working hours with a hybrid/remote-friendly culture."
        ]
    },
    {
        "id": 8,
        "title": "iOS Developer",
        "company": "Orbit Digital",
        "logo": "\ud83d\udd27",
        "category": "mobile",
        "location": "Mumbai, India",
        "locationValue": "mumbai",
        "experience": "0-1",
        "experienceLabel": "0-1 Yrs",
        "salary": "12-18",
        "salaryLabel": "\u20b912 - 18 LPA",
        "jobType": "full-time",
        "workMode": "hybrid",
        "skills": [
            "Swift",
            "SwiftUI",
            "Xcode"
        ],
        "postedDate": "1 day ago",
        "description": [
            "Role: Build and maintain native or cross-platform mobile applications used by our growing user base.",
            "Impact: Partner with product and design teams to deliver smooth, intuitive mobile experiences."
        ],
        "responsibilities": [
            "Implement new features across the mobile app codebase",
            "Ensure smooth performance and low crash rates in production",
            "Integrate with backend APIs and third-party SDKs",
            "Publish and maintain app releases on app stores"
        ],
        "requirements": [
            "Experience building and shipping mobile applications to production",
            "Familiarity with mobile UI patterns and platform guidelines",
            "Understanding of app performance profiling and debugging tools"
        ],
        "benefits": [
            "Free daily meals and fully stocked office pantry.",
            "Flexible working hours with a hybrid/remote-friendly culture.",
            "Performance-based bonuses and yearly appraisals."
        ]
    },
    {
        "id": 9,
        "title": "DevOps Engineer",
        "company": "Vertex Innovations",
        "logo": "\ud83d\udcbc",
        "category": "devops",
        "location": "Delhi, India",
        "locationValue": "delhi",
        "experience": "1-3",
        "experienceLabel": "1-3 Yrs",
        "salary": "15-22",
        "salaryLabel": "\u20b915 - 22 LPA",
        "jobType": "full-time",
        "workMode": "onsite",
        "skills": [
            "AWS",
            "Docker",
            "Kubernetes"
        ],
        "postedDate": "2 days ago",
        "description": [
            "Role: Own and improve our cloud infrastructure, deployment pipelines, and system reliability.",
            "Impact: Enable engineering teams to ship faster and more safely through robust automation and monitoring."
        ],
        "responsibilities": [
            "Maintain and improve CI/CD pipelines across services",
            "Monitor system health and respond to production incidents",
            "Manage cloud infrastructure using infrastructure-as-code",
            "Improve deployment reliability and reduce downtime"
        ],
        "requirements": [
            "Experience with a major cloud provider (AWS, GCP, or Azure)",
            "Familiarity with containerization and orchestration tools",
            "Understanding of monitoring, logging, and alerting practices"
        ],
        "benefits": [
            "Paid parental leave and generous PTO policy.",
            "Free daily meals and fully stocked office pantry.",
            "Comprehensive medical coverage including premium healthcare plans and wellness allowances."
        ]
    },
    {
        "id": 10,
        "title": "Cloud Infrastructure Engineer",
        "company": "Northwind Tech",
        "logo": "\ud83d\ude80",
        "category": "devops",
        "location": "Remote",
        "locationValue": "remote",
        "experience": "3-5",
        "experienceLabel": "3-5 Yrs",
        "salary": "20-30",
        "salaryLabel": "\u20b920 - 30 LPA",
        "jobType": "part-time",
        "workMode": "remote",
        "skills": [
            "Azure",
            "Terraform",
            "CI/CD"
        ],
        "postedDate": "3 days ago",
        "description": [
            "Role: Own and improve our cloud infrastructure, deployment pipelines, and system reliability.",
            "Impact: Enable engineering teams to ship faster and more safely through robust automation and monitoring."
        ],
        "responsibilities": [
            "Maintain and improve CI/CD pipelines across services",
            "Monitor system health and respond to production incidents",
            "Manage cloud infrastructure using infrastructure-as-code",
            "Improve deployment reliability and reduce downtime"
        ],
        "requirements": [
            "Experience with a major cloud provider (AWS, GCP, or Azure)",
            "Familiarity with containerization and orchestration tools",
            "Understanding of monitoring, logging, and alerting practices"
        ],
        "benefits": [
            "Annual learning and development budget for courses and conferences.",
            "Stock options / ESOPs for eligible full-time employees.",
            "Performance-based bonuses and yearly appraisals."
        ]
    },
    {
        "id": 11,
        "title": "Site Reliability Engineer",
        "company": "Quantum Byte",
        "logo": "\ud83d\udcbb",
        "category": "devops",
        "location": "Hyderabad, India",
        "locationValue": "bangalore",
        "experience": "5+",
        "experienceLabel": "5+ Yrs",
        "salary": "3-5",
        "salaryLabel": "\u20b93 - 5 LPA",
        "jobType": "contract",
        "workMode": "hybrid",
        "skills": [
            "Kubernetes",
            "Prometheus",
            "Linux"
        ],
        "postedDate": "5 days ago",
        "description": [
            "Role: Own and improve our cloud infrastructure, deployment pipelines, and system reliability.",
            "Impact: Enable engineering teams to ship faster and more safely through robust automation and monitoring."
        ],
        "responsibilities": [
            "Maintain and improve CI/CD pipelines across services",
            "Monitor system health and respond to production incidents",
            "Manage cloud infrastructure using infrastructure-as-code",
            "Improve deployment reliability and reduce downtime"
        ],
        "requirements": [
            "Experience with a major cloud provider (AWS, GCP, or Azure)",
            "Familiarity with containerization and orchestration tools",
            "Understanding of monitoring, logging, and alerting practices"
        ],
        "benefits": [
            "Stock options / ESOPs for eligible full-time employees.",
            "Annual learning and development budget for courses and conferences.",
            "Flexible working hours with a hybrid/remote-friendly culture."
        ]
    },
    {
        "id": 12,
        "title": "UI/UX aware Frontend Engineer",
        "company": "Silverline Systems",
        "logo": "\ud83d\udee0\ufe0f",
        "category": "frontend",
        "location": "Pune, India",
        "locationValue": "mumbai",
        "experience": "0-1",
        "experienceLabel": "0-1 Yrs",
        "salary": "5-10",
        "salaryLabel": "\u20b95 - 10 LPA",
        "jobType": "internship",
        "workMode": "onsite",
        "skills": [
            "Vue.js",
            "SCSS",
            "Figma"
        ],
        "postedDate": "1 week ago",
        "description": [
            "Role: Build responsive, accessible, and high-performance user interfaces for our web platform used by thousands of customers daily.",
            "Impact: Work closely with designers and backend engineers to turn Figma mockups into polished, production-ready components."
        ],
        "responsibilities": [
            "Develop reusable UI components following the team's design system",
            "Optimize page load performance and Core Web Vitals",
            "Write unit and integration tests for critical UI flows",
            "Collaborate with designers to refine interaction details"
        ],
        "requirements": [
            "Strong proficiency in modern JavaScript/TypeScript and a component-based framework",
            "Solid understanding of responsive design and cross-browser compatibility",
            "Experience with version control (Git) and code review workflows"
        ],
        "benefits": [
            "Performance-based bonuses and yearly appraisals.",
            "Free daily meals and fully stocked office pantry.",
            "Annual learning and development budget for courses and conferences."
        ]
    },
    {
        "id": 13,
        "title": "Python Backend Developer",
        "company": "Zenith Apps",
        "logo": "\u2699\ufe0f",
        "category": "backend",
        "location": "Bangalore, India",
        "locationValue": "bangalore",
        "experience": "1-3",
        "experienceLabel": "1-3 Yrs",
        "salary": "10-15",
        "salaryLabel": "\u20b910 - 15 LPA",
        "jobType": "full-time",
        "workMode": "remote",
        "skills": [
            "Python",
            "Django",
            "PostgreSQL"
        ],
        "postedDate": "Today",
        "description": [
            "Role: Design and maintain scalable backend services and APIs powering our core product features.",
            "Impact: Collaborate with cross-functional teams to ship reliable, well-tested server-side systems."
        ],
        "responsibilities": [
            "Design and implement RESTful APIs and background services",
            "Optimize database queries and manage schema migrations",
            "Write clean, maintainable, and well-documented code",
            "Participate in on-call rotation and incident response"
        ],
        "requirements": [
            "Strong proficiency in at least one backend language and its ecosystem",
            "Experience working with relational or NoSQL databases",
            "Understanding of API design principles and authentication flows"
        ],
        "benefits": [
            "Flexible working hours with a hybrid/remote-friendly culture.",
            "Comprehensive medical coverage including premium healthcare plans and wellness allowances.",
            "Performance-based bonuses and yearly appraisals."
        ]
    },
    {
        "id": 14,
        "title": "Flutter Developer",
        "company": "Ironclad Software",
        "logo": "\ud83d\udcf1",
        "category": "mobile",
        "location": "Mumbai, India",
        "locationValue": "mumbai",
        "experience": "3-5",
        "experienceLabel": "3-5 Yrs",
        "salary": "12-18",
        "salaryLabel": "\u20b912 - 18 LPA",
        "jobType": "full-time",
        "workMode": "hybrid",
        "skills": [
            "Flutter",
            "Dart",
            "Firebase"
        ],
        "postedDate": "1 day ago",
        "description": [
            "Role: Build and maintain native or cross-platform mobile applications used by our growing user base.",
            "Impact: Partner with product and design teams to deliver smooth, intuitive mobile experiences."
        ],
        "responsibilities": [
            "Implement new features across the mobile app codebase",
            "Ensure smooth performance and low crash rates in production",
            "Integrate with backend APIs and third-party SDKs",
            "Publish and maintain app releases on app stores"
        ],
        "requirements": [
            "Experience building and shipping mobile applications to production",
            "Familiarity with mobile UI patterns and platform guidelines",
            "Understanding of app performance profiling and debugging tools"
        ],
        "benefits": [
            "Flexible working hours with a hybrid/remote-friendly culture.",
            "Annual learning and development budget for courses and conferences.",
            "Free daily meals and fully stocked office pantry."
        ]
    },
    {
        "id": 15,
        "title": "DevOps & Release Engineer",
        "company": "Brightwave Technologies",
        "logo": "\u2601\ufe0f",
        "category": "devops",
        "location": "Delhi, India",
        "locationValue": "delhi",
        "experience": "5+",
        "experienceLabel": "5+ Yrs",
        "salary": "15-22",
        "salaryLabel": "\u20b915 - 22 LPA",
        "jobType": "full-time",
        "workMode": "onsite",
        "skills": [
            "Jenkins",
            "Docker",
            "GCP"
        ],
        "postedDate": "2 days ago",
        "description": [
            "Role: Own and improve our cloud infrastructure, deployment pipelines, and system reliability.",
            "Impact: Enable engineering teams to ship faster and more safely through robust automation and monitoring."
        ],
        "responsibilities": [
            "Maintain and improve CI/CD pipelines across services",
            "Monitor system health and respond to production incidents",
            "Manage cloud infrastructure using infrastructure-as-code",
            "Improve deployment reliability and reduce downtime"
        ],
        "requirements": [
            "Experience with a major cloud provider (AWS, GCP, or Azure)",
            "Familiarity with containerization and orchestration tools",
            "Understanding of monitoring, logging, and alerting practices"
        ],
        "benefits": [
            "Paid parental leave and generous PTO policy.",
            "Free daily meals and fully stocked office pantry.",
            "Comprehensive medical coverage including premium healthcare plans and wellness allowances."
        ]
    },
    {
        "id": 16,
        "title": "Frontend Developer",
        "company": "Cobalt Interactive",
        "logo": "\ud83d\udd27",
        "category": "frontend",
        "location": "Remote",
        "locationValue": "remote",
        "experience": "0-1",
        "experienceLabel": "0-1 Yrs",
        "salary": "20-30",
        "salaryLabel": "\u20b920 - 30 LPA",
        "jobType": "part-time",
        "workMode": "remote",
        "skills": [
            "React",
            "JavaScript",
            "CSS"
        ],
        "postedDate": "3 days ago",
        "description": [
            "Role: Build responsive, accessible, and high-performance user interfaces for our web platform used by thousands of customers daily.",
            "Impact: Work closely with designers and backend engineers to turn Figma mockups into polished, production-ready components."
        ],
        "responsibilities": [
            "Develop reusable UI components following the team's design system",
            "Optimize page load performance and Core Web Vitals",
            "Write unit and integration tests for critical UI flows",
            "Collaborate with designers to refine interaction details"
        ],
        "requirements": [
            "Strong proficiency in modern JavaScript/TypeScript and a component-based framework",
            "Solid understanding of responsive design and cross-browser compatibility",
            "Experience with version control (Git) and code review workflows"
        ],
        "benefits": [
            "Team offsites and quarterly company events.",
            "Paid parental leave and generous PTO policy.",
            "Comprehensive medical coverage including premium healthcare plans and wellness allowances."
        ]
    },
    {
        "id": 17,
        "title": "Senior Frontend Developer",
        "company": "Meridian Cloud",
        "logo": "\ud83d\udcbc",
        "category": "frontend",
        "location": "Hyderabad, India",
        "locationValue": "bangalore",
        "experience": "1-3",
        "experienceLabel": "1-3 Yrs",
        "salary": "3-5",
        "salaryLabel": "\u20b93 - 5 LPA",
        "jobType": "contract",
        "workMode": "hybrid",
        "skills": [
            "React",
            "TypeScript",
            "Tailwind"
        ],
        "postedDate": "5 days ago",
        "description": [
            "Role: Build responsive, accessible, and high-performance user interfaces for our web platform used by thousands of customers daily.",
            "Impact: Work closely with designers and backend engineers to turn Figma mockups into polished, production-ready components."
        ],
        "responsibilities": [
            "Develop reusable UI components following the team's design system",
            "Optimize page load performance and Core Web Vitals",
            "Write unit and integration tests for critical UI flows",
            "Collaborate with designers to refine interaction details"
        ],
        "requirements": [
            "Strong proficiency in modern JavaScript/TypeScript and a component-based framework",
            "Solid understanding of responsive design and cross-browser compatibility",
            "Experience with version control (Git) and code review workflows"
        ],
        "benefits": [
            "Free daily meals and fully stocked office pantry.",
            "Comprehensive medical coverage including premium healthcare plans and wellness allowances.",
            "Paid parental leave and generous PTO policy."
        ]
    },
    {
        "id": 18,
        "title": "Backend Developer",
        "company": "Fusion Dynamics",
        "logo": "\ud83d\ude80",
        "category": "backend",
        "location": "Pune, India",
        "locationValue": "mumbai",
        "experience": "3-5",
        "experienceLabel": "3-5 Yrs",
        "salary": "5-10",
        "salaryLabel": "\u20b95 - 10 LPA",
        "jobType": "internship",
        "workMode": "onsite",
        "skills": [
            "Node.js",
            "Express",
            "MongoDB"
        ],
        "postedDate": "1 week ago",
        "description": [
            "Role: Design and maintain scalable backend services and APIs powering our core product features.",
            "Impact: Collaborate with cross-functional teams to ship reliable, well-tested server-side systems."
        ],
        "responsibilities": [
            "Design and implement RESTful APIs and background services",
            "Optimize database queries and manage schema migrations",
            "Write clean, maintainable, and well-documented code",
            "Participate in on-call rotation and incident response"
        ],
        "requirements": [
            "Strong proficiency in at least one backend language and its ecosystem",
            "Experience working with relational or NoSQL databases",
            "Understanding of API design principles and authentication flows"
        ],
        "benefits": [
            "Paid parental leave and generous PTO policy.",
            "Free daily meals and fully stocked office pantry.",
            "Stock options / ESOPs for eligible full-time employees."
        ]
    },
    {
        "id": 19,
        "title": "Senior Backend Engineer",
        "company": "Crestline Digital",
        "logo": "\ud83d\udcbb",
        "category": "backend",
        "location": "Bangalore, India",
        "locationValue": "bangalore",
        "experience": "5+",
        "experienceLabel": "5+ Yrs",
        "salary": "10-15",
        "salaryLabel": "\u20b910 - 15 LPA",
        "jobType": "full-time",
        "workMode": "remote",
        "skills": [
            "Java",
            "Spring Boot",
            "PostgreSQL"
        ],
        "postedDate": "Today",
        "description": [
            "Role: Design and maintain scalable backend services and APIs powering our core product features.",
            "Impact: Collaborate with cross-functional teams to ship reliable, well-tested server-side systems."
        ],
        "responsibilities": [
            "Design and implement RESTful APIs and background services",
            "Optimize database queries and manage schema migrations",
            "Write clean, maintainable, and well-documented code",
            "Participate in on-call rotation and incident response"
        ],
        "requirements": [
            "Strong proficiency in at least one backend language and its ecosystem",
            "Experience working with relational or NoSQL databases",
            "Understanding of API design principles and authentication flows"
        ],
        "benefits": [
            "Stock options / ESOPs for eligible full-time employees.",
            "Paid parental leave and generous PTO policy.",
            "Flexible working hours with a hybrid/remote-friendly culture."
        ]
    },
    {
        "id": 20,
        "title": "Full Stack Developer",
        "company": "Amberstone Tech",
        "logo": "\ud83d\udee0\ufe0f",
        "category": "backend",
        "location": "Mumbai, India",
        "locationValue": "mumbai",
        "experience": "0-1",
        "experienceLabel": "0-1 Yrs",
        "salary": "12-18",
        "salaryLabel": "\u20b912 - 18 LPA",
        "jobType": "full-time",
        "workMode": "hybrid",
        "skills": [
            "React",
            "Node.js",
            "MySQL"
        ],
        "postedDate": "1 day ago",
        "description": [
            "Role: Design and maintain scalable backend services and APIs powering our core product features.",
            "Impact: Collaborate with cross-functional teams to ship reliable, well-tested server-side systems."
        ],
        "responsibilities": [
            "Design and implement RESTful APIs and background services",
            "Optimize database queries and manage schema migrations",
            "Write clean, maintainable, and well-documented code",
            "Participate in on-call rotation and incident response"
        ],
        "requirements": [
            "Strong proficiency in at least one backend language and its ecosystem",
            "Experience working with relational or NoSQL databases",
            "Understanding of API design principles and authentication flows"
        ],
        "benefits": [
            "Flexible working hours with a hybrid/remote-friendly culture.",
            "Comprehensive medical coverage including premium healthcare plans and wellness allowances.",
            "Stock options / ESOPs for eligible full-time employees."
        ]
    },
    {
        "id": 21,
        "title": "Mobile App Developer",
        "company": "TechCorp Solutions",
        "logo": "\u2699\ufe0f",
        "category": "mobile",
        "location": "Delhi, India",
        "locationValue": "delhi",
        "experience": "1-3",
        "experienceLabel": "1-3 Yrs",
        "salary": "15-22",
        "salaryLabel": "\u20b915 - 22 LPA",
        "jobType": "full-time",
        "workMode": "onsite",
        "skills": [
            "React Native",
            "JavaScript",
            "Firebase"
        ],
        "postedDate": "2 days ago",
        "description": [
            "Role: Build and maintain native or cross-platform mobile applications used by our growing user base.",
            "Impact: Partner with product and design teams to deliver smooth, intuitive mobile experiences."
        ],
        "responsibilities": [
            "Implement new features across the mobile app codebase",
            "Ensure smooth performance and low crash rates in production",
            "Integrate with backend APIs and third-party SDKs",
            "Publish and maintain app releases on app stores"
        ],
        "requirements": [
            "Experience building and shipping mobile applications to production",
            "Familiarity with mobile UI patterns and platform guidelines",
            "Understanding of app performance profiling and debugging tools"
        ],
        "benefits": [
            "Performance-based bonuses and yearly appraisals.",
            "Free daily meals and fully stocked office pantry.",
            "Annual learning and development budget for courses and conferences."
        ]
    },
    {
        "id": 22,
        "title": "Android Developer",
        "company": "Acme Inc",
        "logo": "\ud83d\udcf1",
        "category": "mobile",
        "location": "Remote",
        "locationValue": "remote",
        "experience": "3-5",
        "experienceLabel": "3-5 Yrs",
        "salary": "20-30",
        "salaryLabel": "\u20b920 - 30 LPA",
        "jobType": "part-time",
        "workMode": "remote",
        "skills": [
            "Kotlin",
            "Android SDK",
            "Jetpack Compose"
        ],
        "postedDate": "3 days ago",
        "description": [
            "Role: Build and maintain native or cross-platform mobile applications used by our growing user base.",
            "Impact: Partner with product and design teams to deliver smooth, intuitive mobile experiences."
        ],
        "responsibilities": [
            "Implement new features across the mobile app codebase",
            "Ensure smooth performance and low crash rates in production",
            "Integrate with backend APIs and third-party SDKs",
            "Publish and maintain app releases on app stores"
        ],
        "requirements": [
            "Experience building and shipping mobile applications to production",
            "Familiarity with mobile UI patterns and platform guidelines",
            "Understanding of app performance profiling and debugging tools"
        ],
        "benefits": [
            "Flexible working hours with a hybrid/remote-friendly culture.",
            "Free daily meals and fully stocked office pantry.",
            "Team offsites and quarterly company events."
        ]
    },
    {
        "id": 23,
        "title": "iOS Developer",
        "company": "Pixel Forge",
        "logo": "\u2601\ufe0f",
        "category": "mobile",
        "location": "Hyderabad, India",
        "locationValue": "bangalore",
        "experience": "5+",
        "experienceLabel": "5+ Yrs",
        "salary": "3-5",
        "salaryLabel": "\u20b93 - 5 LPA",
        "jobType": "contract",
        "workMode": "hybrid",
        "skills": [
            "Swift",
            "SwiftUI",
            "Xcode"
        ],
        "postedDate": "5 days ago",
        "description": [
            "Role: Build and maintain native or cross-platform mobile applications used by our growing user base.",
            "Impact: Partner with product and design teams to deliver smooth, intuitive mobile experiences."
        ],
        "responsibilities": [
            "Implement new features across the mobile app codebase",
            "Ensure smooth performance and low crash rates in production",
            "Integrate with backend APIs and third-party SDKs",
            "Publish and maintain app releases on app stores"
        ],
        "requirements": [
            "Experience building and shipping mobile applications to production",
            "Familiarity with mobile UI patterns and platform guidelines",
            "Understanding of app performance profiling and debugging tools"
        ],
        "benefits": [
            "Flexible working hours with a hybrid/remote-friendly culture.",
            "Performance-based bonuses and yearly appraisals.",
            "Annual learning and development budget for courses and conferences."
        ]
    },
    {
        "id": 24,
        "title": "DevOps Engineer",
        "company": "Bluepeak Systems",
        "logo": "\ud83d\udd27",
        "category": "devops",
        "location": "Pune, India",
        "locationValue": "mumbai",
        "experience": "0-1",
        "experienceLabel": "0-1 Yrs",
        "salary": "5-10",
        "salaryLabel": "\u20b95 - 10 LPA",
        "jobType": "internship",
        "workMode": "onsite",
        "skills": [
            "AWS",
            "Docker",
            "Kubernetes"
        ],
        "postedDate": "1 week ago",
        "description": [
            "Role: Own and improve our cloud infrastructure, deployment pipelines, and system reliability.",
            "Impact: Enable engineering teams to ship faster and more safely through robust automation and monitoring."
        ],
        "responsibilities": [
            "Maintain and improve CI/CD pipelines across services",
            "Monitor system health and respond to production incidents",
            "Manage cloud infrastructure using infrastructure-as-code",
            "Improve deployment reliability and reduce downtime"
        ],
        "requirements": [
            "Experience with a major cloud provider (AWS, GCP, or Azure)",
            "Familiarity with containerization and orchestration tools",
            "Understanding of monitoring, logging, and alerting practices"
        ],
        "benefits": [
            "Team offsites and quarterly company events.",
            "Stock options / ESOPs for eligible full-time employees.",
            "Annual learning and development budget for courses and conferences."
        ]
    },
    {
        "id": 25,
        "title": "Cloud Infrastructure Engineer",
        "company": "Nimbus Labs",
        "logo": "\ud83d\udcbc",
        "category": "devops",
        "location": "Bangalore, India",
        "locationValue": "bangalore",
        "experience": "1-3",
        "experienceLabel": "1-3 Yrs",
        "salary": "10-15",
        "salaryLabel": "\u20b910 - 15 LPA",
        "jobType": "full-time",
        "workMode": "remote",
        "skills": [
            "Azure",
            "Terraform",
            "CI/CD"
        ],
        "postedDate": "Today",
        "description": [
            "Role: Own and improve our cloud infrastructure, deployment pipelines, and system reliability.",
            "Impact: Enable engineering teams to ship faster and more safely through robust automation and monitoring."
        ],
        "responsibilities": [
            "Maintain and improve CI/CD pipelines across services",
            "Monitor system health and respond to production incidents",
            "Manage cloud infrastructure using infrastructure-as-code",
            "Improve deployment reliability and reduce downtime"
        ],
        "requirements": [
            "Experience with a major cloud provider (AWS, GCP, or Azure)",
            "Familiarity with containerization and orchestration tools",
            "Understanding of monitoring, logging, and alerting practices"
        ],
        "benefits": [
            "Annual learning and development budget for courses and conferences.",
            "Team offsites and quarterly company events.",
            "Free daily meals and fully stocked office pantry."
        ]
    },
    {
        "id": 26,
        "title": "Site Reliability Engineer",
        "company": "CodeCraft Technologies",
        "logo": "\ud83d\ude80",
        "category": "devops",
        "location": "Mumbai, India",
        "locationValue": "mumbai",
        "experience": "3-5",
        "experienceLabel": "3-5 Yrs",
        "salary": "12-18",
        "salaryLabel": "\u20b912 - 18 LPA",
        "jobType": "full-time",
        "workMode": "hybrid",
        "skills": [
            "Kubernetes",
            "Prometheus",
            "Linux"
        ],
        "postedDate": "1 day ago",
        "description": [
            "Role: Own and improve our cloud infrastructure, deployment pipelines, and system reliability.",
            "Impact: Enable engineering teams to ship faster and more safely through robust automation and monitoring."
        ],
        "responsibilities": [
            "Maintain and improve CI/CD pipelines across services",
            "Monitor system health and respond to production incidents",
            "Manage cloud infrastructure using infrastructure-as-code",
            "Improve deployment reliability and reduce downtime"
        ],
        "requirements": [
            "Experience with a major cloud provider (AWS, GCP, or Azure)",
            "Familiarity with containerization and orchestration tools",
            "Understanding of monitoring, logging, and alerting practices"
        ],
        "benefits": [
            "Performance-based bonuses and yearly appraisals.",
            "Stock options / ESOPs for eligible full-time employees.",
            "Annual learning and development budget for courses and conferences."
        ]
    },
    {
        "id": 27,
        "title": "UI/UX aware Frontend Engineer",
        "company": "Skyline Softworks",
        "logo": "\ud83d\udcbb",
        "category": "frontend",
        "location": "Delhi, India",
        "locationValue": "delhi",
        "experience": "5+",
        "experienceLabel": "5+ Yrs",
        "salary": "15-22",
        "salaryLabel": "\u20b915 - 22 LPA",
        "jobType": "full-time",
        "workMode": "onsite",
        "skills": [
            "Vue.js",
            "SCSS",
            "Figma"
        ],
        "postedDate": "2 days ago",
        "description": [
            "Role: Build responsive, accessible, and high-performance user interfaces for our web platform used by thousands of customers daily.",
            "Impact: Work closely with designers and backend engineers to turn Figma mockups into polished, production-ready components."
        ],
        "responsibilities": [
            "Develop reusable UI components following the team's design system",
            "Optimize page load performance and Core Web Vitals",
            "Write unit and integration tests for critical UI flows",
            "Collaborate with designers to refine interaction details"
        ],
        "requirements": [
            "Strong proficiency in modern JavaScript/TypeScript and a component-based framework",
            "Solid understanding of responsive design and cross-browser compatibility",
            "Experience with version control (Git) and code review workflows"
        ],
        "benefits": [
            "Flexible working hours with a hybrid/remote-friendly culture.",
            "Paid parental leave and generous PTO policy.",
            "Stock options / ESOPs for eligible full-time employees."
        ]
    },
    {
        "id": 28,
        "title": "Python Backend Developer",
        "company": "Orbit Digital",
        "logo": "\ud83d\udee0\ufe0f",
        "category": "backend",
        "location": "Remote",
        "locationValue": "remote",
        "experience": "0-1",
        "experienceLabel": "0-1 Yrs",
        "salary": "20-30",
        "salaryLabel": "\u20b920 - 30 LPA",
        "jobType": "part-time",
        "workMode": "remote",
        "skills": [
            "Python",
            "Django",
            "PostgreSQL"
        ],
        "postedDate": "3 days ago",
        "description": [
            "Role: Design and maintain scalable backend services and APIs powering our core product features.",
            "Impact: Collaborate with cross-functional teams to ship reliable, well-tested server-side systems."
        ],
        "responsibilities": [
            "Design and implement RESTful APIs and background services",
            "Optimize database queries and manage schema migrations",
            "Write clean, maintainable, and well-documented code",
            "Participate in on-call rotation and incident response"
        ],
        "requirements": [
            "Strong proficiency in at least one backend language and its ecosystem",
            "Experience working with relational or NoSQL databases",
            "Understanding of API design principles and authentication flows"
        ],
        "benefits": [
            "Annual learning and development budget for courses and conferences.",
            "Paid parental leave and generous PTO policy.",
            "Stock options / ESOPs for eligible full-time employees."
        ]
    },
    {
        "id": 29,
        "title": "Flutter Developer",
        "company": "Vertex Innovations",
        "logo": "\u2699\ufe0f",
        "category": "mobile",
        "location": "Hyderabad, India",
        "locationValue": "bangalore",
        "experience": "1-3",
        "experienceLabel": "1-3 Yrs",
        "salary": "3-5",
        "salaryLabel": "\u20b93 - 5 LPA",
        "jobType": "contract",
        "workMode": "hybrid",
        "skills": [
            "Flutter",
            "Dart",
            "Firebase"
        ],
        "postedDate": "5 days ago",
        "description": [
            "Role: Build and maintain native or cross-platform mobile applications used by our growing user base.",
            "Impact: Partner with product and design teams to deliver smooth, intuitive mobile experiences."
        ],
        "responsibilities": [
            "Implement new features across the mobile app codebase",
            "Ensure smooth performance and low crash rates in production",
            "Integrate with backend APIs and third-party SDKs",
            "Publish and maintain app releases on app stores"
        ],
        "requirements": [
            "Experience building and shipping mobile applications to production",
            "Familiarity with mobile UI patterns and platform guidelines",
            "Understanding of app performance profiling and debugging tools"
        ],
        "benefits": [
            "Performance-based bonuses and yearly appraisals.",
            "Flexible working hours with a hybrid/remote-friendly culture.",
            "Team offsites and quarterly company events."
        ]
    },
    {
        "id": 30,
        "title": "DevOps & Release Engineer",
        "company": "Northwind Tech",
        "logo": "\ud83d\udcf1",
        "category": "devops",
        "location": "Pune, India",
        "locationValue": "mumbai",
        "experience": "3-5",
        "experienceLabel": "3-5 Yrs",
        "salary": "5-10",
        "salaryLabel": "\u20b95 - 10 LPA",
        "jobType": "internship",
        "workMode": "onsite",
        "skills": [
            "Jenkins",
            "Docker",
            "GCP"
        ],
        "postedDate": "1 week ago",
        "description": [
            "Role: Own and improve our cloud infrastructure, deployment pipelines, and system reliability.",
            "Impact: Enable engineering teams to ship faster and more safely through robust automation and monitoring."
        ],
        "responsibilities": [
            "Maintain and improve CI/CD pipelines across services",
            "Monitor system health and respond to production incidents",
            "Manage cloud infrastructure using infrastructure-as-code",
            "Improve deployment reliability and reduce downtime"
        ],
        "requirements": [
            "Experience with a major cloud provider (AWS, GCP, or Azure)",
            "Familiarity with containerization and orchestration tools",
            "Understanding of monitoring, logging, and alerting practices"
        ],
        "benefits": [
            "Free daily meals and fully stocked office pantry.",
            "Annual learning and development budget for courses and conferences.",
            "Stock options / ESOPs for eligible full-time employees."
        ]
    }
];

