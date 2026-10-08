// Login Form
const signupForm = document.getElementById("signupForm");
const error = document.getElementById("error");
const success = document.getElementById("success");

signupForm.addEventListener("submit", function (event) {
  event.preventDefault();

  error.textContent = "";
  success.textContent = "";


  const email = signupForm.querySelector("#regemail").value.trim();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email === "" || username === "" || password === "") {
    error.style.color = "red";
    error.textContent = "Please fill in all fields.";
    return;
  }

  if (password.length < 6) {
    error.style.color = "red";
    error.textContent = "Password must be at least 6 characters.";
    return;
  }

  success.style.color = "green";
  success.textContent = "Login successful! Welcome " + username;
  signupForm.reset();
});


const eventSelect = document.getElementById("event");
const eventInfo = {
  event1: {
    title: "Pottery Workshop",
    venue: "Art Center"
  },
  event2: {
    title: "Archery Competition",
    venue: "KLE Sports Complex"
  },
  event3: {
    title: "Running Marathon",
    venue: "Prabhakar Kore City Park"
  }
};

// Registration Form
const eventRegistrationForm = document.getElementById("eventRegistrationForm");

eventRegistrationForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const usn = document.getElementById("usn").value.trim();
  const date = document.getElementById("date").value;
  const dept = document.getElementById("dept").value;
  const selectedEvent = eventInfo[eventSelect.value];

  if (name === "" || email === "" || usn === "" || date === "") {
    alert("Please fill in all required fields!");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address!");
    return;
  }

  const popup =
    "--- REGISTRATION SUCCESSFUL ---\n\n" +
    "Student Name: " + name + "\n" +
    "USN: " + usn + "\n" +
    "Email: " + email + "\n" +
    "Department: " + dept.toUpperCase() + "\n\n" +
    "Event: " + selectedEvent.title + "\n" +
    "Date: " + date + "\n" +
    "Venue: " + selectedEvent.venue;

  alert(popup);
});