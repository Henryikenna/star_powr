document.addEventListener("DOMContentLoaded", function () {
  // Get the current time
  var currentTime = new Date();

  // Format the time as a string
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // Handle midnight
  minutes = minutes < 10 ? "0" + minutes : minutes;

  // Display the time in the HTML element with id "current-time"
  document.getElementById(
    "current-time"
  ).textContent = `${hours}:${minutes}${ampm}`;
});

document.addEventListener("DOMContentLoaded", function () {
  const openPopupBtn = document.getElementById("openPopupBtn");
  const closePopupBtn = document.getElementById("closePopupBtn");
  const popupForm = document.getElementById("popupForm");

  openPopupBtn.addEventListener("click", function () {
    popupForm.style.display = "block";
  });

  closePopupBtn.addEventListener("click", function () {
    popupForm.style.display = "none";
  });

  // Close the popup if the user clicks outside the form
  window.addEventListener("click", function (event) {
    if (event.target === popupForm) {
      popupForm.style.display = "none";
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
    const openPopupBtn = document.getElementById("openPopupBtn2");
    const closePopupBtn = document.getElementById("closePopupBtn");
    const popupForm = document.getElementById("popupForm");
  
    openPopupBtn.addEventListener("click", function () {
      popupForm.style.display = "block";
    });
  
    closePopupBtn.addEventListener("click", function () {
      popupForm.style.display = "none";
    });
  
    // Close the popup if the user clicks outside the form
    window.addEventListener("click", function (event) {
      if (event.target === popupForm) {
        popupForm.style.display = "none";
      }
    });
  });