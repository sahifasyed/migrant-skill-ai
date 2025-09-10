# AI Skill Bridge

🌟 **Helping refugees and migrants bridge their skills to local job markets**  

---

## 🎯 Project Goal
AI Skill Bridge is a full-stack web application designed to help refugees and migrants:  

- Map their existing skills (even if undocumented) to local job opportunities.  
- Generate CVs in the host country’s format.  
- Suggest quick, practical upskilling resources to enhance employability.  

The application is designed to be **warm, supportive, and empowering**, making the job search process less stressful and more actionable.

> ⚡ Note: This project was initially created using [Lovable AI](https://lovable.dev). You can also edit and run it locally using Node.js & npm.

---

## 📦 Tech Stack & Requirements

- **Frontend:** React + TailwindCSS  
  - Responsive, friendly, and welcoming UI.  
- **Backend:** Python + FastAPI  
  - Endpoints include:
    1. Submitting user skills (text input).  
    2. Mapping skills to local job market data (mock JSON dataset).  
    3. Generating CV text in host country format (template-based).  
    4. Suggesting short courses or resources (mock data for MVP).  
- **Data:** JSON/CSV files with sample skill-job mappings and upskilling resources.  
- **Storage:** Local (in-memory or JSON files for MVP).  
- **Authentication:** Skipped for MVP (can be added later).  

---

## 🧩 MVP Features

- Welcome page with mission overview (friendly tone).  
- Skill submission form.  
- Display of matched local job roles.  
- Generate sample CVs (downloadable PDF).  
- Quick upskilling suggestions with links/resources.  

---

## 📂 Project Structure

- `frontend/` — React + Tailwind frontend  
- `backend/` — FastAPI backend + `requirements.txt`  
- `data/` — Sample jobs & upskilling JSON files  
- `docs/` — Vision, architecture, and other documentation  
- `README.md`  
- `LICENSE`  
- `.gitignore`

---

## 🚀 Getting Started

1. **Clone the repository:**

```bash
git clone https://github.com/YOUR-USERNAME/ai-skill-bridge.git
cd ai-skill-bridge
```

2. Backend setup:

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn app:app --reload
```

3. Frontend setup:

```bash
cd frontend
npm install
npm start
```

## 🚀 Open your browser
Visit [http://localhost:3000](http://localhost:3000) to see the app in action.

---

## 📖 Contribution
Contributions are welcome! Feel free to:

- Add new features or endpoints.
- Improve UI/UX for accessibility.
- Expand sample data with real-world job mappings.

Please open a Pull Request or issue to discuss changes.

---

## 📝 License
This project is licensed under the [MIT License](LICENSE).

---

> 💡 **Note:** This is an MVP scaffold with placeholder data and code, ready to extend for real-world use.



























