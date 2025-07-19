let username = localStorage.getItem('username');
let password = localStorage.getItem('password');

let password_n = document.getElementById('password');
let username_n = document.getElementById('username');
let parent = document.querySelector('.l_parent');
let submit = document.getElementById('submit');

submit.addEventListener('click', function(event) {
    event.preventDefault();
    if (
        username_n.value === username &&
        password_n.value === password
    ) {
        window.location.href = 'main.html';
    } else {
         
        let p = document.createElement('p');
        p.textContent = 'invalid username or password';
        p.style.color = 'red';
        parent.insertBefore(p, submit);
    }
     
});