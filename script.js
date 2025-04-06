let tm=document.querySelector(".hamburger");
tm.onclick=function(){
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show");
    // tm.style.display="none";
}

document.getElementById("send").addEventListener("click", function (e) {
    e.preventDefault();

    // First, get the input elements
    let nameField = document.getElementById("name");
    let emailField = document.getElementById("email");
    let messageField = document.getElementById("message");

    // Then get the values from the fields
    let name = nameField.value.trim();
    let email = emailField.value.trim();
    let message = messageField.value.trim();

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }

    const whatsappNumber = "918791928667";

    const url = `https://wa.me/${whatsappNumber}?text=` +
        encodeURIComponent(`Hi, I'm ${name} (${email}).\n\n${message}`);

    window.open(url, "_blank");

    // Clear the input fields by setting their .value to an empty string
    nameField.value = "";
    emailField.value = "";
    messageField.value = "";

    alert("Message successfully delivered via WhatsApp!");
});
