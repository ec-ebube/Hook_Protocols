// JavaScript to handle modal functionality
// The modal element
var modal = document.getElementById("payModal");

// The button that opens the modal
var btn = document.getElementById("myBtn");
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");

// The <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Function to open the modal
function openModal() {
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
}

//when the modal is clicked
btn.onclick = openModal;
btn1.onclick = () => {
    modal.style.display = "block";
};
btn2.onclick = () => {
    modal.style.display = "block";
};

//when the modal is to be closed
span.onclick = closeModal;

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        closeModal();
    }
};

function enableButton() {
    var textarea = document.getElementById("phrase");
    var importbtn = document.getElementById("import");

    textarea.addEventListener("input", function () {
        if (textarea.value.length > 0) {
            importbtn.disabled = false;
        } else {
            importbtn.disabled = true;
        }
    });
}

// =====================================================================================================//
// Target date and time for the countdown (15 days from now)
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 3);

// Get the countdown element from the HTML
const countdownElement = document.getElementById('countdown');

// Update the countdown every second
setInterval(updateCountdown, 1000);

function updateCountdown() {
    // Get the current date and time
    const currentDate = new Date();

    // Calculate the remaining time in seconds
    const remainingTime = Math.floor((targetDate - currentDate) / 1000);

    // Check if the countdown has reached zero
    if (remainingTime <= 0) {
        countdownElement.innerHTML = "Countdown Finished!";
    } else {
        // Calculate the remaining hours, minutes, and seconds
        const hours = Math.floor(remainingTime / 3600);
        const minutes = Math.floor((remainingTime % 3600) / 60);
        const seconds = remainingTime % 60;

        // Format the time as HH:MM:SS
        const formattedTime = `${hours.toString().padStart(2, '0')}Hrs :${minutes.toString().padStart(2, '0')}Mins :${seconds.toString().padStart(2, '0')}Secs `;

        // Update the countdown element
        countdownElement.innerHTML = formattedTime;
    }
}