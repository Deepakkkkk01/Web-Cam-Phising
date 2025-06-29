# 🐍 PhishCam Trap – Kali Linux Instructions

This project is a cybersecurity awareness demo that simulates a social engineering trap using a fake "Are you 18+?" prompt to request webcam access.

It works perfectly on **Kali Linux**, as it's built with HTML, CSS, and JavaScript and runs in any modern browser.

---

## ✅ How to Run on Kali Linux

### 1. Extract the Zip File
```bash
unzip phishcam-trap.zip
cd phishcam-trap
```

### 2. Run Locally with Firefox
```bash
firefox index.html
```
OR:
```bash
xdg-open index.html
```

### 3. Recommended: Use a Local Server (for camera access)
Some browsers block `getUserMedia()` on `file://`, so use:
```bash
python3 -m http.server 8000
```
Then open:
```
http://localhost:8000
```

---

## 📷 Check Camera Access
Ensure your camera is working:
```bash
cheese
```
If not installed:
```bash
sudo apt install cheese
```

---

## 🛡 Permissions
- Make sure your browser is allowed to access webcam
- Check if `/dev/video0` exists using:
```bash
ls /dev/video*
```

---

## 🔐 Legal Note
This project is for **educational awareness only**. Do not use it for unethical purposes. Always get consent before using in demos.