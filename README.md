# 🔗 Resources

- 📌 **YouTube Transcript API**  
- 🔗 [**RapidAPI - YouTube Video Summarizer GPT AI**](https://rapidapi.com/rahilkhan224/api/youtube-video-summarizer-gpt-ai/playground/apiendpoint_92423465-6a0a-4355-a595-90014cd90a25)  
- 📘 [**n8n Official Docs**](https://docs.n8n.io)  

---

# 🔐 How to Set Up Google API Credentials for n8n

### 1️⃣ Create a Project in GCP
- Go to **Google Cloud Console**.  
- Click the project dropdown → **New Project**.  
- Name your project (e.g., `n8n-integration`) → **Create**.  

---

### 2️⃣ Enable Required APIs
1. In the **Google Cloud Console**, make sure your project is selected.  
2. Go to **APIs & Services → Library**.  
3. Search for **Google Sheets API** → Click → **Enable**.  
4. Search for **Gmail API** → Click → **Enable**.  

---

### 3️⃣ Create OAuth Credentials
1. Go to **APIs & Services → Credentials**.  
2. Click **+ Create Credentials → OAuth client ID**.  
3. If prompted to **Configure Consent Screen**, do it first:  
   - Choose **External** (if you want to allow access from any Google account).  
   - Fill in **App name, User support email, and Developer contact info**.  
   - Save and continue (you can skip scopes for now).  
4. Back to **Create OAuth client ID**:  
   - **Application type** → Select **Web application**.  
   - **Name it** (e.g., `n8n-client`).  
   - **Authorized redirect URIs** → Add your redirect URI.  

---

### 4️⃣ Add Credentials to n8n
- In your **n8n instance**:  
  - Go to **Credentials → New**.  
  - Select **Google Sheets OAuth2 API** or **Gmail OAuth2 API**.  
  - Paste in the **Client ID** and **Client Secret** from GCP.  
  - Use the same **Redirect URI** you registered in GCP.  
  - Click **Connect** → Log in with Google → Grant access.  

---


