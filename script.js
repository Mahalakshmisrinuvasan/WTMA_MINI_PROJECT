document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const dob = document.getElementById("dob").value;
    const age = document.getElementById("age").value.trim();
    const gender = document.querySelector("input[name='gender']:checked")?.value;
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();

    if (!/^[a-zA-Z]{4,}$/.test(firstName)) {
        alert("First name must have at least 4 letters.");
        return;
    }
    if (!/^[a-zA-Z]+$/.test(lastName)) {
        alert("Last name must contain only alphabets.");
        return;
    }
    if (!/^\d{10}$/.test(phone)) {
        alert("Phone number must be 10 digits.");
        return;
    }
    if (!gender) {
        alert("Please select a gender.");
        return;
    }

    const formData = { firstName, lastName, email, dob, age, gender, phone, address, dateSubmitted: new Date().toLocaleString() };
    localStorage.setItem("formData", JSON.stringify(formData));

    window.location.href = "submission.html";
});
