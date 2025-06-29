# PhishCam Trap – Webcam Awareness Simulation

This project simulates a fake "Are you 18+?" prompt that tricks users into granting webcam access. It's designed **for cybersecurity awareness**, to show how social engineering can manipulate users into allowing dangerous permissions.

##  How It Works

- The site asks "Are you 18 or older?"
- If the user clicks "Yes", the browser requests webcam access.
- After 5 seconds, a warning message appears: **"This was a simulation!"**

## 🛠 Files

- `index.html`: Main webpage
- `styles.css`: Styling
- `script.js`: JS logic for webcam access
- `README.md`: This file

##  Run Locally

1. Clone or download this repo
2. Open `index.html` in your browser
3. Click "Yes, I am 18+" to trigger the webcam prompt

## Tech Used

- HTML, CSS, JavaScript
- `getUserMedia()` API

## ⚠ Important

> This is for **educational purposes only**. Do not use it to actually record or store data. Always use it with full consent in controlled environments (e.g., classrooms, symposiums, ethical hacking demos).

---

Made for cybersecurity awareness. Use responsibly!
