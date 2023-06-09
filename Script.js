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
