// Paste your Firebase web app config here (Firebase console → Project settings → Your apps → Web app).
// Until this is filled in, the playbook runs in "setup mode" and saves plays on each device only.
window.FIREBASE_CONFIG = {
  apiKey: "PASTE_API_KEY",
  authDomain: "PASTE_PROJECT_ID.firebaseapp.com",
  projectId: "PASTE_PROJECT_ID",
  storageBucket: "PASTE_PROJECT_ID.appspot.com",
  messagingSenderId: "PASTE_SENDER_ID",
  appId: "PASTE_APP_ID"
};

// Email address(es) of coaches allowed to edit plays. Must match firestore.rules.
window.COACH_EMAILS = ["howiepollard@gmail.com"];
