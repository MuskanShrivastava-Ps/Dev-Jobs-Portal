# DevJobs Portal

A frontend job portal built using **HTML, CSS, and JavaScript**.
The project allows users to browse developer job listings, view detailed job information, and submit a multi-step job application.

## 🚀 Features

* Browse available developer job listings
* View detailed information about each job
* Job description, responsibilities, requirements, skills, salary, experience, location, and benefits
* Multi-step job application form
* Personal information validation
* Professional details collection
* Skills selection
* Portfolio and LinkedIn URL fields
* Resume and cover letter upload
* File type and file size validation
* Application review page before submission
* Application success screen
* Application IDs stored using `localStorage`
* Applied jobs can be displayed separately
* Responsive user interface

## 🛠️ Technologies Used

* **HTML5** — Structure and forms
* **CSS3** — Styling, layout, responsive design, and multi-step form UI
* **JavaScript (ES6+)** — DOM manipulation, validation, application logic, localStorage, and dynamic rendering
* **Git & GitHub** — Version control and project hosting

## 📂 Project Structure

```text
DevJobs-Portal/
│
├── index.html
├── jobDetails.html
├── appliedJobs.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── data.js
│   ├── script.js
│   ├── jobDetails.js
│   └── appliedJobs.js
│
└── README.md
```

> The exact file structure may vary depending on the final organization of the project.

## 📋 Application Flow

```text
Job Listings
     ↓
Job Details
     ↓
Apply
     ↓
Personal Information
     ↓
Professional Details
     ↓
Resume & Cover Letter
     ↓
Review Application
     ↓
Submit
     ↓
Success Screen
```

## 🔍 Job Application

The application form is divided into multiple steps:

### Step 1 — Personal Information

Users provide:

* Name
* Email
* Phone number

The fields are validated before moving to the next step.

### Step 2 — Professional Details

Users provide:

* Experience
* Skills
* Portfolio URL
* LinkedIn URL

### Step 3 — Documents

Users upload:

* Resume
* Cover letter

The application checks:

* Whether a file has been selected
* Allowed file types
* Maximum file size

Supported document types:

* PDF
* DOC
* DOCX

Maximum file size:

**5 MB per file**

### Step 4 — Review

Before submitting, the application displays the information entered in the previous steps so the user can review it.

### Success Screen

After submission, an application ID and submission date are displayed.

Application IDs are stored in the browser's `localStorage`, allowing applied jobs to be identified later.

## 💾 Local Storage

The project uses browser `localStorage` to store the IDs of jobs that the user has applied for.

Example:

```javascript
localStorage.setItem(
    'appliedids',
    JSON.stringify(appliedIds)
);
```

When retrieving the data:

```javascript
const appliedIds =
    JSON.parse(localStorage.getItem('appliedids')) || [];
```

This allows the project to maintain applied-job information without a backend database.

## ▶️ How to Run

Since this project uses only frontend technologies, no backend server or database is required.

### Option 1 — Open directly

Open `index.html` in a browser.

### Option 2 — VS Code Live Server

1. Open the project in VS Code.
2. Install the **Live Server** extension.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

## 🎯 Learning Goals

This project was created to practice:

* HTML structure and semantic elements
* CSS layouts and responsive design
* JavaScript DOM manipulation
* Event handling
* Form validation
* Working with arrays and objects
* Dynamic HTML rendering
* File validation
* URL parameters
* Browser `localStorage`
* Multi-step form logic
* Git and GitHub workflow

## 🔮 Future Improvements

Possible future improvements include:

* Backend integration
* User authentication
* Database storage
* Real job APIs
* Job search and advanced filtering
* Application tracking
* Employer dashboard
* Persistent user profiles
* Cloud file storage

## 👩‍💻 Author

**Muskan Shrivastava**

GitHub: [MuskanShrivastava-Ps](https://github.com/MuskanShrivastava-Ps)

---

### 📌 Note

This is a frontend-focused project built with **HTML, CSS, and JavaScript**, with browser `localStorage` used for basic client-side persistence.
