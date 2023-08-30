document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('newsletter-form');
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
  
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
  
      window.location.href = `mailto:3pmdigital.adm@gmail.com?subject=Inscrição para Newsletter&body=Nome: ${name}%0D%0AEmail: ${email}`;
    });
  });
  