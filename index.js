const form = document.querySelector ('.form');
const email = document.querySelector ('#email');


form.addEventListener ('submit', e => {
  if (email.value.trim().match(/^[A-Za-z\._\-0-9]+[@][A-Za-z]+[\.][a-z]{2,4}$/i)){
    form.classList.remove('invalid');
    alert("You'll get notified when we go Live!")
    location.reload();
    email.value = '';
  } else {
    e.preventDefault();
    form.classList.add('invalid');
  }
});
