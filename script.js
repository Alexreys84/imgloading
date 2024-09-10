// script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Verificação básica da senha
    if (username && password === "12345") {
      // Esconde o formulário de login
      document.getElementById('login-container').style.display = 'none';
      
      // Mostra a informação do usuário no canto superior direito
      document.getElementById('user-name').textContent = username;
      document.getElementById('user-info').style.display = 'flex';
    } else {
      alert('Preencha todos os campos corretamente.');
    }
  });
  
  // Lógica para salvar a foto
  document.getElementById('save-photo').addEventListener('click', function() {
    const photo = document.getElementById('photo').files[0]; // Foto selecionada pelo usuário
  
    if (photo) {
      const reader = new FileReader();
      reader.onload = function(e) {
        document.getElementById('user-pic').src = e.target.result; // Exibe a foto no círculo
        
        // Após salvar a foto, esconder o campo de upload
        document.getElementById('upload-photo').classList.add('hide');
      }
      reader.readAsDataURL(photo); // Converte a foto em URL para exibição
    } else {
      alert('Por favor, selecione uma foto.');
    }
  });
  