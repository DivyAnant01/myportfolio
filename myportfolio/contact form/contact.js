document.querySelector("form").addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
    });

    const result = await response.json();

    if (result.success) {
        alert("Message sent successfully!");
        this.reset(); // form clear kar dega
    } else {
        alert("Something went wrong. Please try again!");
    }
});
