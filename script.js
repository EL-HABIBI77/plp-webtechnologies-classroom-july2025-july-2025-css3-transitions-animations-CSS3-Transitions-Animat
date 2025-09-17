// script.js

// Function with parameters and return value
function bookingMessage(name) {
    return "Booking Successful! Thank you, " + name;
}

// Function demonstrating local vs global scope
let hotelName = "Sunny Stay Hotel"; // global variable

function calculatePrice(nights) {
    let pricePerNight = 50; // local variable
    return nights * pricePerNight;
}

// DOM elements
const bookBtn = document.getElementById("bookBtn");
const roomBox = document.getElementById("roomBox");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

// Add animation class to room box
function animateRoomBox() {
    roomBox.classList.add("animate-box");

    // remove animation after it ends so it can be triggered again
    setTimeout(() => {
        roomBox.classList.remove("animate-box");
    }, 1000);
}

// Show popup with booking message
function showPopup() {
    popup.style.display = "block";          // show popup
    popup.classList.add("slideIn");         // trigger CSS animation

    // ✅ Booking success message shows here AFTER popup
    console.log(bookingMessage("Guest"));
    console.log("Total Price: $" + calculatePrice(3));
}

// Hide popup
function hidePopup() {
    popup.style.display = "none";
    popup.classList.remove("slideIn");
}

// Event listeners
bookBtn.addEventListener("click", function() {
    animateRoomBox();   // trigger animation
    showPopup();        // show popup + booking message
});

closePopup.addEventListener("click", hidePopup);