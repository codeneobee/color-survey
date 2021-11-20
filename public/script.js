// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";

// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js'

import { getFirestore, addDoc, collection } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCrmBzBKerMQzGFLYLMy620rjtC13hF0Aw",
    authDomain: "awesome-advice-331910.firebaseapp.com",
    projectId: "awesome-advice-331910",
    storageBucket: "awesome-advice-331910.appspot.com",
    messagingSenderId: "677167010425",
    appId: "1:677167010425:web:a8228b00f391961bbfbaa8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore()

function submitForm() {
    const firstName = $('#first-name').val()
    const city = $('#city').val()
    const country = $('#country').val()
    const seeColor = $('#feel-color').val()
    const hearColor = $('#hear-color').val()
    const smellColor = $('#smell-color').val()
    const tasteColor = $('#taste-color').val()
    const feelColor = $('#feel-color').val()
    const seeThoughts = $('#feel-thoughts').val()
    const hearThoughts = $('#hear-thoughts').val()
    const smellThoughts = $('#smell-thoughts').val()
    const tasteThoughts = $('#taste-thoughts').val()
    const feelThoughts = $('#feel-thoughts').val()

    console.log(
        {
            first_name: firstName,
            city,
            country,
            see_color: seeColor,
            hear_color: hearColor,
            smell_color: smellColor,
            taste_color: tasteColor,
            feel_color: feelColor,
            see_thoughts: seeThoughts,
            hear_thoughts: hearThoughts,
            smell_thoughts: smellThoughts,
            taste_thoughts: tasteThoughts,
            feel_thoughts: feelThoughts,
        }
    )

    addDoc(collection(db, "form-data"), {
        first_name: firstName,
        city,
        country,
        see_color: seeColor,
        hear_color: hearColor,
        smell_color: smellColor,
        taste_color: tasteColor,
        feel_color: feelColor,
        see_thoughts: seeThoughts,
        hear_thoughts: hearThoughts,
        smell_thoughts: smellThoughts,
        taste_thoughts: tasteThoughts,
        feel_thoughts: feelThoughts,
    }).then(() => {
        document.getElementById("form").innerHTML = `<div>Thanks for participating</div>`
    }).catch(() => {
        document.getElementById("form").innerHTML = `<div>Something went wrong. Please try again</div>`
    })

}

const submitButton = document.getElementById("submit-btn")
submitButton.onclick = submitForm