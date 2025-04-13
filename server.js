import emailjs from '@emailjs/browser';

const form = document.getElementById('contact-form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  emailjs.sendForm(
    'din_service_id',
    'din_template_id',
    form,
    'din_public_key'
  ).then(
    () => alert('E-post skickad!'),
    (error) => alert('Något gick fel: ' + error.text)
  );
});