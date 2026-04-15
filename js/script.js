  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
  import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBu4qvjGL8BGheXRy7YDrmcTaqg3H46388",
    authDomain: "name-manager-21s.firebaseapp.com",
    projectId: "name-manager-21s",
    storageBucket: "name-manager-21s.firebasestorage.app",
    messagingSenderId: "249921812070",
    appId: "1:249921812070:web:52634682588f691ccd9fa7"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const btn = document.querySelector('button');
const inputNombre = document.getElementById('nombre');

if (btn) {
    btn.addEventListener('click', async () => {
        const nombreValue = inputNombre.value.trim(); 

        if (nombreValue === "") {
            alert("Por favor, ingresa tu nombre");
            return;
        }

        try {
            await addDoc(collection(db, "invitados"), {
                nombre: nombreValue, // It exists here now!
                fecha: new Date()
            });

            // Success logic
            inputNombre.style.display = "none";
            btn.style.display = "none";
            successMsg.classList.add('visible');

        } catch (e) {
            console.error("Firebase Error:", e);
        }
    });
}

try {
    await addDoc(collection(db, "invitados"), {
        nombre: nombreValue,
        fecha: new Date()
    });

    // 1. Target the elements
    const successMsg = document.getElementById('message-success');
    const inputArea = document.querySelector('#container > div:last-child'); 

    // 2. Hide input and button
    inputNombre.style.display = "none";
    btn.style.display = "none";

    // 3. Show the success message with a fade
    successMsg.classList.add('visible');

} catch (e) {
    console.error("Error:", e);
}

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    
    const colors = ['#f0f4ff93', '#ffb6ea85', '#e0e0e080', '#a4c5ff81'];
    const sizeWidth = Math.random() * 7 + 7 + 'px'; 
    const sizeHeight = Math.random() * 5 + 10 + 'px';
    
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.width = sizeWidth;
    confetti.style.height = sizeHeight;
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    
    const duration = Math.random() * 4 + 6;
    confetti.style.animationDuration = duration + 's';
    confetti.style.opacity = Math.random();

    document.body.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, duration * 1000);
}

setInterval(createConfetti, 600);