var config = {
    apiKey: "AIzaSyBpZrcWwGSywirzcy_p5S-e9EIrHgQYSck",
    authDomain: "dsc-buk.firebaseapp.com",
    databaseURL: "https://dsc-buk.firebaseio.com",
    projectId: "dsc-buk",
    storageBucket: "dsc-buk.appspot.com",
    messagingSenderId: "953334177542"
};
firebase.initializeApp(config);

let messagesRef = firebase.database().ref("messages");

document.getElementById("mailform").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
    let email = getInputVal("email");
    saveMessage(email);
    console.log("Bikini tops");
    document.querySelector(".alert").style.display = "block";
    setTimeout(function() {
        document.querySelector(".alert").style.display = "none";
    }, 5000);
    document.getElementById("mailform").reset();
}

function getInputVal(id) {
    return document.getElementById(id).value;
}

function saveMessage(email) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        email: email
    });
}
