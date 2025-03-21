function sendMail(){
    var params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value,
    }
    const serviceID = "service_exs35la";
    const templateID = "template_v06ow53";
    
    emailjs.send(serviceID,templateID,params)
    .then(
        res => {
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('phone').value = '';
            document.getElementById('message').value = '';
            console.log(res);
            var modal = document.getElementById("submissionModal");
            modal.style.display = "flex";
    })
    .catch((err) => console.log(err));

}

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("submissionModal");
    const closeButton = document.querySelector(".modal-close");
    const okButton = document.querySelector(".modal-ok");
  
    // Function to close the modal
    function closeModal() {
      modal.style.display = "none";
    }
  
    // Add event listeners
    closeButton.addEventListener("click", closeModal);
    okButton.addEventListener("click", closeModal);
  
    // Optional: Close modal when clicking outside the modal content
    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        closeModal();
      }
    });
  });
  