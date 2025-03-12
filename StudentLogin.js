
function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username === "" || password === "") {
        alert("Username and Password Required");
        return;
    }
    else{
    alert("Successfully Login");
    }
}