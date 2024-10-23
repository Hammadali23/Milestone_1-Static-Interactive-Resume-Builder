var resumeForm = document.getElementById('resumeForm');
var resumeOutput = document.getElementById('resumeOutput');
var resumeImage = document.getElementById('resumeImage');
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var imageInput = document.getElementById('image').files;
    // Set the text values in the resume
    document.getElementById('resumeName').textContent = name;
    document.getElementById('resumeEmail').textContent = email;
    document.getElementById('resumePhone').textContent = phone;
    document.getElementById('resumeEducation').textContent = education;
    document.getElementById('resumeExperience').textContent = experience;
    document.getElementById('resumeSkills').textContent = skills;
    // Handle image upload and display
    if (imageInput && imageInput.length > 0) {
        var imageFile = imageInput[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            resumeImage.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
        };
        reader.readAsDataURL(imageFile);
    }
    // Show the resume output
    resumeOutput.style.display = 'block';
});
