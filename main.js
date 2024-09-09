// Form preview function
function previewForm() {
    const previewSection = document.getElementById('formPreview');
    previewSection.innerHTML = '<h3>Form Preview</h3>';  // Clear previous preview

    const formData = new FormData(document.getElementById('studentForm'));
    
    // Loop through each field and display it in the preview section
    formData.forEach((value, key) => {
        const para = document.createElement('p');
        para.textContent = `${formatKey(key)}: ${value}`;
        previewSection.appendChild(para);
    });

    // Show the preview section and the print button
    previewSection.style.display = 'block';
    document.getElementById('printButton').style.display = 'block';
}

// Function to format the key to a user-friendly label
function formatKey(key) {
    // Replace underscores with spaces and capitalize the first letter of each word
    return key.replace(/_/g, ' ').replace(/\b\w/g, function(char) { return char.toUpperCase(); });
}

// Print form function
function printForm() {
    const printContent = document.getElementById('formPreview').innerHTML;
    const originalContent = document.body.innerHTML;

    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
}

// Form validation function to check if all required fields are filled
function validateForm() {
    let isValid = true;
    const formElements = document.getElementById('studentForm').elements;

    // Loop through each form element and check if required fields are filled
    for (let i = 0; i < formElements.length; i++) {
        if (formElements[i].hasAttribute('required') && formElements[i].value === '') {
            formElements[i].classList.add('error');
            isValid = false;
        } else {
            formElements[i].classList.remove('error');
        }
    }

    if (!isValid) {
        alert("Please fill in all required fields.");
    }
    
    return isValid;
}

// Handle form submission
document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission

    // Validate the form before showing the preview
    if (validateForm()) {
        previewForm();  // Show preview if the form is valid
        alert("Form has been submitted successfully!");  // Simulate form submission message
    }
});

// Optional: Scroll to preview section after preview is shown
function scrollToPreview() {
    const previewSection = document.getElementById('formPreview');
    previewSection.scrollIntoView({ behavior: 'smooth' });
}
￼Enter
