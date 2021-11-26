// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";

// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, addDoc, collection } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js'

// Your web app's Firebase configuration
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyCV86_k7_P2HlGyfacuOU_CZhM1cTjCN-w",
    authDomain: "travellingwithallsenses.firebaseapp.com",
    projectId: "travellingwithallsenses",
    storageBucket: "travellingwithallsenses.appspot.com",
    messagingSenderId: "944307660752",
    appId: "1:944307660752:web:045c6ba800fd42d66bfbd5"

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
            document.getElementById("form").innerHTML = `<div class="done-dialog">Thanks for participating!</div>`
        }).catch(() => {
            document.getElementById("form").innerHTML = `<div class="done-dialog">Something went wrong. Please try again.</div>`
        })

    }

function share() {
    if (navigator.share) {
        navigator.share({
            title: document.title,
            url: ""
        })
    } else {
        console.log("Not Share")
        navigator.clipboard.writeText(document.location.hostname).then(() => {
            const linkDialog = document.getElementById('link-copied')
            if (linkDialog) {
                linkDialog.classList.add('visible')
                setInterval(() => {
                    linkDialog.classList.add('fade-out')
                    setInterval(() => {
                        linkDialog.classList.remove('visible')
                        linkDialog.classList.remove('fade-out')
                    }, 1000)
                }, 5000)
            }
        })
    }
}

const submitButton = document.getElementById("submit-btn")
submitButton.onclick = submitForm

const shareButton = document.getElementById("share-btn")
shareButton.onclick = share