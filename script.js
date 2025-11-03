function sendEmail() {


    emailjs.init({
        publicKey: "WrZ0Ok962amdbodia",
    });


    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("emailId").value.trim();
    const message = document.getElementById("message").value.trim();


    if (!name || !email || !message) {
        alert("Please fill out all fields before sending.");
        return;
    }


    const params = {
        from_name: name,
        from_email: email,
        message: message,
    };


    emailjs.send("service_bl6nf47", "template_tr06jix", params)
        .then(function (response) {
            console.log("SUCCESS!", response.status, response.text);
            alert("✅ Email sent successfully!");
        })
        .catch(function (error) {
            console.error("FAILED...", error);
            alert("❌ Failed to send email. Please try again later.");
        });
}

// Resume download

function downloadFile() {
  const fileUrl = "assets/files/Ehsan_Java_Developer.pdf";
  const fileName = 'Ehsan_Java_Developer.pdf';

  const link = document.createElement('a');
  link.href = fileUrl;
  link.download = fileName; // suggests a filename to save as
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}




