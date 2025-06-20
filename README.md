# 🧠 CTF Prompt Injection Playground

Welcome to the **CTF Prompt Injection** playground!  
This project is a Capture The Flag (CTF)-style web app focused on **prompt injection** attacks against AI models, especially those using the OpenAI API. It is designed to help developers and security researchers understand and test the limits of prompt safety.

---

## 🚀 Features

- 🧪 Test various **prompt injection techniques**
- 🕵️ Challenge levels with increasing complexity
- ⚙️ Built using `Express`, `EJS`, and `OpenAI API`
- 🔐 Basic session management
- 🐳 Docker support for easy deployment

---

## 🛠️ Installation

### 🔧 Local (EJS Mode)
```bash
# Clone the repository
git https://github.com/wondping0/ctf-prompt-injection.git
cd ctf-prompt-injection

# Install dependencies
npm install

# Run the app
npm start
````

Then go to: [http://localhost:3000](http://localhost:3000)

---

### 🐳 Docker Mode

```bash
# Start with Docker Compose
docker compose up
```

Then access the app at: [http://localhost:9090](http://localhost:3000)

> Make sure you have a valid `.env` file with your OpenAI API key.

---

## 📁 Environment Configuration

Create a `.env` file in the root directory:

```
OPENAI_API_KEY=your_openai_key_here
SESSION_SECRET=your_session_secret
```

---

## 🧪 Tech Stack

* **Node.js** + **Express**
* **EJS** templating
* **Docker** support
* **express-session** for basic state handling

---

## 🙋 Contribution & Ideas

Got a cool injection technique or challenge idea? Feel free to fork and submit a PR, or open an issue! Collaboration is encouraged in the spirit of learning and experimentation.

---

## ⚠️ Disclaimer

This project is for educational and research purposes only.
**Do not** use these techniques on systems you don't own or have explicit permission to test.

---

## 🏁 Happy Hacking!

```

Let me know if you'd like the `docker-compose.yml` file or a `.env.example` too!
```
