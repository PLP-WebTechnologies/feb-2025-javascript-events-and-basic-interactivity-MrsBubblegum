document.addEventListener('DOMContentLoaded', function() {
    // Event to change text on button click
    document.getElementById("changeTextBtn").addEventListener("click", function() {
        document.getElementById("title").innerText = "Web Development is sooo cool!🤩";
        // Added animation when text changes
        document.getElementById("title").classList.add("text-animation");
        setTimeout(() => {
            document.getElementById("title").classList.remove("text-animation");
        }, 1000);
    });

    // Image gallery navigation (automatic slideshow)
    let currentImageIndex = 0;
    const images = document.querySelectorAll('.gallery-image');
    
    // Set placeholder images for the gallery
    images[0].src =
      "https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/bltb32b1db2d6fdebcc/6668d83e6ebb0a0d913a3dd6/best-love-songs-hero.jpg?q=70&width=3840&auto=webp";
    images[1].src =
      "https://i.pinimg.com/736x/68/18/9a/68189aa8a87d3b539159c75bdf27114f.jpg";
    images[2].src =
      "https://pet-health-content-media.chewy.com/wp-content/uploads/2025/04/16155121/202503202209bernese-mountain-dog-cute-dogs.jpg";

    // Hide all images initially
    images.forEach(image => image.style.display = 'none');

    // Function to show the current image
    function showImage(index) {
        // Hide all images
        images.forEach(image => {
            image.style.display = 'none';
            image.classList.remove('fade-in');
        });
        
        // Show and animate the current image
        images[index].style.display = 'block'; 
        images[index].classList.add('fade-in');
    }

    // Show the first image initially
    showImage(currentImageIndex);

    // Automatic slideshow function
    setInterval(function() {
        currentImageIndex = (currentImageIndex + 1) % images.length; 
        showImage(currentImageIndex);
    }, 3000); 

    // Tab functionality
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active-tab'));
            // Add active class to clicked button
            this.classList.add('active-tab');
            
            const tabId = this.getAttribute('data-tab');
            document.querySelectorAll('.tab-content').forEach(tab => {
                tab.style.display = 'none';
                tab.classList.remove('fade-in');
            });
            document.getElementById(tabId).style.display = 'block';
            setTimeout(() => {
                document.getElementById(tabId).classList.add('fade-in');
            }, 10);
        });
    });
    
    // Show first tab content by default
    document.querySelector('.tab-btn').click();

    // Real-time form validation
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    
    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);
    
    function validateName() {
        const name = nameInput.value.trim();
        const nameError = document.getElementById('nameError');
        
        if (name === '') {
            nameError.innerText = 'Name is required.';
            nameInput.classList.add('invalid');
            return false;
        } else {
            nameError.innerText = '';
            nameInput.classList.remove('invalid');
            nameInput.classList.add('valid');
            return true;
        }
    }
    
    function validateEmail() {
        const email = emailInput.value.trim();
        const emailError = document.getElementById('emailError');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!email) {
            emailError.innerText = 'Email is required.';
            emailInput.classList.add('invalid');
            return false;
        } else if (!emailRegex.test(email)) {
            emailError.innerText = 'Please enter a valid email.';
            emailInput.classList.add('invalid');
            return false;
        } else {
            emailError.innerText = '';
            emailInput.classList.remove('invalid');
            emailInput.classList.add('valid');
            return true;
        }
    }
    
    function validatePassword() {
        const password = passwordInput.value.trim();
        const passwordError = document.getElementById('passwordError');
        
        if (password.length < 8) {
            passwordError.innerText = 'Password must be at least 8 characters.';
            passwordInput.classList.add('invalid');
            return false;
        } else {
            passwordError.innerText = '';
            passwordInput.classList.remove('invalid');
            passwordInput.classList.add('valid');
            return true;
        }
    }
    
    // Form validation on submit
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        
        if (isNameValid && isEmailValid && isPasswordValid) {
            alert('Form submitted successfully!');
            this.reset(); // Clear the form after successful submission
            // Remove valid class from inputs
            nameInput.classList.remove('valid');
            emailInput.classList.remove('valid');
            passwordInput.classList.remove('valid');
        }
    });

    // Keypress detection
    document.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') { 
            document.getElementById('title').innerText = "You pressed the Enter key! Didn't you?🤔";
            document.getElementById("title").classList.add("text-animation");
            setTimeout(() => {
                document.getElementById("title").classList.remove("text-animation");
            }, 1000);
        }
    });

    // Double-click secret action
    document.addEventListener('dblclick', function() {
        document.body.classList.add('secret-mode');
        alert('Hooray!!! You found the secret action!🥳🥳🎉🎉');
        setTimeout(() => {
            document.body.classList.remove('secret-mode');
        }, 3000);
    });
});