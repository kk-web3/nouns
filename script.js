window.addEventListener('DOMContentLoaded', (event) => {
    // Choose an ID for the Noun you want to display
    const nounId = 0;
    
    // Create a new image element
    const img = new Image();
    
    // Set the source of the image to the Noun Pics API
    img.src = `https://noun.pics/${90}`;
    
    // When the image has loaded, add it to the page
    img.onload = function() {
        document.getElementById('noun-image').appendChild(img);
    };
});