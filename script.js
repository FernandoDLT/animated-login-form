const form = document.querySelector('form');
const box = document.querySelector('.box');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 
  
  const username = form.querySelector('input[type="text"]').value;
  const password = form.querySelector('input[type="password"]').value;

  if (username && password) {
    form.style.display = 'none';
    box.style.animation = 'none';

    const message = document.createElement('p');
    message.innerText = 'You are now signed in...';

    box.classList.add('show-message');
    box.appendChild(message);
  }
});










