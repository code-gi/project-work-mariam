document.addEventListener('DOMContentLoaded', function() {
    // Define the content for the Home page
    const content = `
        <section id="welcome">
            <h2>Welcome to Hannah Restaurant</h2>
            <p>Experience the best dining experience with us.</p>
        </section>
        <section id="highlights">
            <h3>Highlights</h3>
            <div class="highlight">
                <h4>Delicious Food</h4>
                <p>We offer a wide variety of dishes made with the freshest ingredients.</p>
            </div>
            <div class="highlight">
                <h4>Cozy Atmosphere</h4>
                <p>Enjoy your meal in a warm and welcoming environment.</p>
            </div>
            <div class="highlight">
                <h4>Friendly Staff</h4>
                <p>Our staff are here to ensure you have the best dining experience.</p>
            </div>
        </section>
    `;

    // Get the content element
    const contentElement = document.getElementById('content');

    // Set the innerHTML of the content element with the defined content
    contentElement.innerHTML = content;
});
