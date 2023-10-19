// Getting references to HTML elements
const studentIdTag = document.getElementById("myStudentId");
const customNumberInput = document.getElementById("customNumber");
const custColorButton = document.querySelector(".custColor");
const randColorButton = document.querySelector(".randColor");
const imageSelect = document.getElementById("imageSelect");
const selectedImage = document.getElementById("selectedImage");

// Adding event listeners for button click and select change
custColorButton.addEventListener("click", changeCustomColor);
randColorButton.addEventListener("click", changeRandomColor);
imageSelect.addEventListener("change", displaySelectedImage);

// Function for changing background color according to user input
function changeCustomColor() {
    const userInput = parseInt(customNumberInput.value);
    document.body.style.backgroundColor = getColorForRange(userInput);
    studentIdTag.textContent = `Student ID: 200477161`;
}

// Function to randomly change background color
function changeRandomColor() {
    const randomValue = Math.floor(Math.random() * 100) + 1;
    document.body.style.backgroundColor = getColorForRange(randomValue);
    studentIdTag.textContent = `Number: ${randomValue}`;
}

// Function for getting color based on user input range
function getColorForRange(value) {
    if (value < 0 || value > 100) return "red";
    if (value >= 0 && value <= 20) return "green";
    if (value > 20 && value <= 40) return "blue";
    if (value > 40 && value <= 60) return "orange";
    if (value > 60 && value <= 80) return "purple";
    return "yellow";
}

// Function to populate image options in the select element
function populateImageOptions() {
    const imageFolder = "img/";
    const imageFiles = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];
    const imageSources = []; // Array to store image source locations

    // Populate imageSources array and generate options
    for (const imageFile of imageFiles) {
        const imageSrc = imageFolder + imageFile;
        imageSources.push(imageSrc); // Store the image source in the array

        const option = document.createElement("option");
        option.value = imageSrc;
        option.textContent = imageFile;
        imageSelect.appendChild(option);
    }
}

// Function to display the selected image
function displaySelectedImage() {
    const selectedOption = imageSelect.options[imageSelect.selectedIndex];
    const selectedImageSrc = selectedOption.value;
    selectedImage.src = selectedImageSrc;
}

// Initialize the image options
populateImageOptions();
