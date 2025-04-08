# InstantGPT

A minimal Node.js serverless API deployed on Vercel that returns answers from the Groq API based on a prompt passed via URL query parameter.

### 📦 Example Usage
```bash
https://instantgpt.vercel.app/?query=hello+how+are+you
```

### 💡 How It Works
- Accepts a prompt via the `query` parameter.
- Sends it to the Groq API (`llama3-8b-8192` model).
- Returns the answer as **plain HTML** (no formatting).

### 🛠 Setup
1. Clone the repo:
```bash
git clone https://github.com/yourusername/instantgpt.git
cd instantgpt
```

2. Install dependencies:
```bash
npm install
```

3. Deploy to [Vercel](https://vercel.com):
- Connect your GitHub repo.
- Add the environment variable `GROQ_API_KEY` in the Vercel dashboard.
- Deploy!

### 🌐 Live Endpoint
```
https://instantgpt.vercel.app/?query=your+question+here
```

---

🔐 **Note:** Make sure your `GROQ_API_KEY` is kept secure in the environment variables.