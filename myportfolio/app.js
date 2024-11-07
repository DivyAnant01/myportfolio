document.getElementById('resumeBtn').addEventListener('click', function () {
    const fileId = '1rWp-DSjYF3Q6BWRumIgL5X9TcWs4pc0V'; // Your file ID
    const url = `https://drive.google.com/uc?export=download&id=${fileId}`;
    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank'; // Open in a new tab
    a.download = 'resume.pdf'; // Specify the default file name for the download
    document.body.appendChild(a); // Append the anchor to the body (required for Firefox)
    a.click(); // Trigger the click
    document.body.removeChild(a); // Remove the anchor from the DOM
});


document.getElementById('githubBtn').addEventListener('click', function () {
    window.open('https://github.com/DivyAnant01', '_blank'); // Update with your GitHub profile link
});

