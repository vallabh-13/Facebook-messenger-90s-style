  
    function openChat() {
      document.getElementById('chat-window').style.display = 'block';                                                     //CHAT WINDOW OPEN FUNCTION 
    }

    function closeChat() {
      document.getElementById('chat-window').style.display = 'none';                                                       //CLOSE FUNCTION 
      window.location.href = 'index.html';
    }
   
    function sendMessage() {
      var messageInput = document.getElementById('message-input');                                                         //SEND MESSAGE
      var chatBox = document.getElementById('chat-box');
      var message = messageInput.value.trim();

      if (message !== '') {
        var newMessage = document.createElement('p');                                                                   
        newMessage.textContent = message;
        chatBox.appendChild(newMessage);
        messageInput.value = '';
        chatBox.scrollTop = chatBox.scrollHeight;

        setTimeout(function() {
          var responseMessage = document.createElement('p');
          responseMessage.textContent = "facebookuser: " + message;                                                       //copied response
          chatBox.appendChild(responseMessage);
          chatBox.scrollTop = chatBox.scrollHeight;
        }, 1000);
      }
    }   
    document.getElementById('login-form').addEventListener('submit', function(event) {                                    //sign in working
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('remember-me').checked;
    

        console.log('Username:', username);
        console.log('Password:', password);
        console.log('Remember me:', rememberMe);
    
        
        alert('Login successful!');
        window.location.href = 'chat.html';

    
    });
    
    document.getElementById('reset-form').addEventListener('submit', function(event) {                                  //reset password
        event.preventDefault(); // Prevent form submission for demo purposes
        const newPassword = document.getElementById('new-password').value; 
        const retypePassword = document.getElementById('retype-password').value;
    
     
        console.log('New Password:', newPassword);
        console.log('Retype Password:', retypePassword);
    
        
        alert('Password reset successful!');
    

    });
    
    