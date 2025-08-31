// Initialize EmailJS
(function(){
  emailjs.init("YOUR_EMAILJS_USER_ID"); // Replace with your EmailJS user ID
})();

const form = document.getElementById('studentForm');
const previewDiv = document.getElementById('preview');
const previewContent = document.getElementById('previewContent');
const previewBtn = document.getElementById('previewBtn');
const submitBtn = document.getElementById('submitBtn');
const editBtn = document.getElementById('editBtn');

previewBtn.addEventListener('click', () => {
  // Collect data
  const data = {
    name: document.getElementById('name').value,
    department: document.getElementById('department').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    interest: document.getElementById('interest').value,
    shortGoal: document.getElementById('shortGoal').value,
    longGoal: document.getElementById('longGoal').value
  };

  // Show preview
  previewContent.innerHTML = `
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Department:</strong> ${data.department}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>Area of Interest:</strong> ${data.interest}</p>
    <p><strong>Short-term Goal:</strong> ${data.shortGoal}</p>
    <p><strong>Long-term Goal:</strong> ${data.longGoal}</p>
  `;
  form.style.display = 'none';
  previewDiv.style.display = 'block';
});

editBtn.addEventListener('click', () => {
  previewDiv.style.display = 'none';
  form.style.display = 'block';
});

submitBtn.addEventListener('click', () => {
  const templateParams = {
    to_email: 'suryasingam49@gmail.com',
    name: document.getElementById('name').value,
    department: document.getElementById('department').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    interest: document.getElementById('interest').value,
    shortGoal: document.getElementById('shortGoal').value,
    longGoal: document.getElementById('longGoal').value
  };

  emailjs.send('YOUR_SERVICE_ID','YOUR_TEMPLATE_ID', templateParams)
    .then(function(response) {
       alert('Form submitted successfully! Check your email.');
       form.reset();
       previewDiv.style.display = 'none';
       form.style.display = 'block';
    }, function(error) {
       alert('Failed to send email. Please try again.');
    });
});
