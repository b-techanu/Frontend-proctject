document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        // update css variable for the spotlight effect
        card.style.setProperty('--x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--y', `${e.clientY - rect.top}px`);
    });
});

const video1 = document.getElementById(`projectVideo1`);
const video2 = document.getElementById(`projectVideo2`);
const video3 = document.getElementById(`projectVideo3`);
const video4 = document.getElementById(`projectVideo4`);

const videoList = [video1, video2, video3, video4];

videoList.forEach(function(video){
    video.addEventListener("mouseover", function(){
        video.play()
    })
    video.addEventListener("mouseout", function(){
        video.pause()
    })
})

// form handling
document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    
    // Get the correct element
    const successMessage = document.getElementById('successMessage');
    
    // Show success message
    successMessage.style.display = 'block';
    
    // Reset form
    this.reset();

    // Hide message after delay
    setTimeout(function(){
        successMessage.style.display = 'none';
    }, 3000);
});

// Ensure videos are muted for autoplay
videoList.forEach(function(video){
    video.muted = true;
    video.addEventListener("mouseover", function(){
        video.play();
    });
    video.addEventListener("mouseout", function(){
        video.pause();
    });
});

// Corrected sendMail function
function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,  // Changed from duplicate 'name'
        message: document.getElementById("message").value
    };

    const serviceID = "service_24cdsfp";
    const templateID = "template_bmpa4wd";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message sent successfully");
        })
        .catch(err => console.log(err));
}