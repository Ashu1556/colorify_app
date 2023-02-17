import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyA5HWpQr5O178rAKFp0FLRPNfGH7lH644w",
    authDomain: "colorify-app.firebaseapp.com",
    projectId: "colorify-app",
    storageBucket: "colorify-app.appspot.com",
    messagingSenderId: "329929739214",
    appId: "1:329929739214:web:a89d05a9114fb9f36eb99f",
    databaseURL: "https://colorify-app-default-rtdb.firebaseio.com/"
  };

  const app = initializeApp(firebaseConfig);
export default app;