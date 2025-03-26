document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("darkModeToggle");
    const body = document.body;

    toggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        // Save user preference
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });

    // Load user preference
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
    }
});
