import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCL6jkU6O8ftcNQpdBAwJrwL3hHMoM12gk",
  authDomain: "qr-scan-96fc5.firebaseapp.com",
  databaseURL: "https://qr-scan-96fc5-default-rtdb.firebaseio.com",
  projectId: "qr-scan-96fc5",
  storageBucket: "qr-scan-96fc5.appspot.com",
  messagingSenderId: "299503521456",
  appId: "1:299503521456:web:4d0b30764634e6b198b575",
};

const app = initializeApp(firebaseConfig);

//export function writeUserData(userId, username, email, txt) {
export function writeUserData(message) {
  var data = "";
  console.log(`successfully stored in database ${message}`);
  var db = getDatabase();
  var refernce = ref(db, "users/");
  onValue(refernce, (snapshot) => {
    data = snapshot.val();
    sessionStorage.setItem("list", JSON.stringify(data));
    sessionStorage.setItem("message", message);
    console.log(sessionStorage.getItem("list"));
    if (message in data) {
      window.location = "../authorize.html";
    }
  });
}
