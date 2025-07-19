let sub = document.getElementById('submit');
let username = document.getElementById('username');
let password = document.getElementById('password');
let comfirmpassword = document.getElementById('comfirmpassword');
let email = document.getElementById('email');
sub.addEventListener('click', function(event) {
    event.preventDefault();

    let allFilled = (
        username.value.trim() !== '' &&
        password.value.trim() !== '' &&
        comfirmpassword.value.trim() !== '' &&
        email.value.trim() !== ''
    );
    let passwordsMatch = password.value === comfirmpassword.value;

    // Show errors
    if (username.value.trim() === '') username.style.borderColor = 'red';
    if (password.value.trim() === '') password.style.borderColor = 'red';
    if (comfirmpassword.value.trim() === '') comfirmpassword.style.borderColor = 'red';
    if (email.value.trim() === '') email.style.borderColor = 'red';
    if (!passwordsMatch && comfirmpassword.value.trim() !== '') comfirmpassword.style.borderColor = 'red';
 
    if (allFilled && passwordsMatch) {
        localStorage.setItem('username', username.value);
        localStorage.setItem('password', password.value);
        localStorage.setItem('email', email.value);
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    }
});

[username, password, comfirmpassword, email].forEach(function(item) {
    item.addEventListener('input', function() {
        item.style.borderColor = '';
    });
});