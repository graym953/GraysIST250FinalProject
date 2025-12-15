document.getElementById("submitBtn").addEventListener("click", function() {
    
    const name = document.getElementById("nameInput").value;
    const message = document.getElementById("messageInput").value;
    const bgColor = document.getElementById("colorSelect").value;

   
    const greetingElement = document.getElementById("greeting");
    greetingElement.textContent = name ? `Hello ${name}!` : "Hello User!";

   
    const messageElement = document.getElementById("message");
    messageElement.textContent = message ? message : "Welcome to my fantastic website. Have fun and customize this page below!";

    
    document.body.style.backgroundColor = bgColor;
});
