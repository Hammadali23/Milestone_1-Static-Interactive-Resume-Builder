var resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
var resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;
var resumeImage = document.getElementById('resumeImage') as HTMLImageElement;

resumeForm.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    const imageInput = (document.getElementById('image') as HTMLInputElement).files;

    // Set the text values in the resume
    (document.getElementById('resumeName') as HTMLHeadingElement).textContent = name;
    (document.getElementById('resumeEmail') as HTMLSpanElement).textContent = email;
    (document.getElementById('resumePhone') as HTMLSpanElement).textContent = phone;
    (document.getElementById('resumeEducation') as HTMLParagraphElement).textContent = education;
    (document.getElementById('resumeExperience') as HTMLParagraphElement).textContent = experience;
    (document.getElementById('resumeSkills') as HTMLParagraphElement).textContent = skills;

    // Handle image upload and display
    if (imageInput && imageInput.length > 0) {
        const imageFile = imageInput[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            resumeImage.src = e.target?.result as string;
        };

        reader.readAsDataURL(imageFile);
    }

    // Show the resume output
    resumeOutput.style.display = 'block';
});
