

function handleSubmit() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (name === "" || email === "" || password === "") {
        alert("Please fill all the details.");
        return; 
    }

    alert("Your Account is created");
    
    document.getElementById('signupForm').reset();
}
