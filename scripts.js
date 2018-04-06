// Get the modal
var register = document.getElementById('register');

// Get the button that opens the modal
var btn = document.getElementById("rbtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    register.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    register.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == register) {
        register.style.display = "none";
    }
}


// Get the modal
var login = document.getElementById('login');

// Get the button that opens the modal
var btn = document.getElementById("lbtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("lclose")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    login.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    login.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == login) {
        login.style.display = "none";
    }
}