function submitForm() {
  const nameRegex = /^[A-Za-z\.]+(\s[A-Za-z]+)*$/;
  const phoneRegex = /\d{4}-?\d{7}/;
  const emailRegex = /^([a-zA-Z0-9_\.]+)@([a-zA-Z0-9_\.]+)\.([a-zA-Z]{2,})$/;
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/; 
  const postalRegex = /^\d+$/;
  const cityRegex = /^[a-zA-Z\s]+$/;


  const name = document.getElementById('name').value;
  const gender = document.getElementById('gender').value;
  const phone = document.getElementById('phone').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const area = document.getElementById('area').value;
  const city = document.getElementById('city').value;
  const area2 = document.getElementById('area2').value;
  const postCode = document.getElementById('post-code').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const appointmentTypeCheckboxes = document.querySelectorAll('input[name="appointmentType"]:checked');

  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  const selectedDate = new Date(date);

  if (!nameRegex.test(name)) {
      alert('Please enter a valid name.');
      return;
  }
  if (gender === '') {
      alert('Please select your gender.');
      return;
  }
  if (!phoneRegex.test(phone)) {
      alert('Please enter a valid phone number.');
      return;
  }
  if (selectedDate < currentDate) {
      alert('Please select a date on or after the current date.');
      return;
  }
  if (time === '') {
      alert('Please select a time.');
      return;
  }
  if (area === '' || city === '' || area2 === '' || postCode === '') {
      alert('Please fill in all address fields.');
      return;
  }
  if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
  }
  if (!postalRegex.test(postCode)) {
      alert('Please enter a valid postal address.');
      return;
  }
  if (!cityRegex.test(city)) {
      alert('Please enter a valid city name.');
      return;
  }
  if (appointmentTypeCheckboxes.length === 0) {
      alert('Please select at least one appointment type.');
      return;
  }

  else{
    alert("Validate Successful");
  
  const formDataDisplay = document.getElementById('formDataDisplay');
  const formData = document.getElementById('formData');
  formData.innerHTML = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Gender:</strong> ${gender}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Date:</strong> ${date}</p>
    <p><strong>Time:</strong> ${time}</p>
    <p><strong>Area:</strong> ${area}</p>
    <p><strong>City:</strong> ${city}</p>
    <p><strong>State:</strong> ${area2}</p>
    <p><strong>Post Code:</strong> ${postCode}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong> ${message}</p>
    <p><strong>Appointment Type(s):</strong> ${Array.from(appointmentTypeCheckboxes).map(cb => cb.value).join(', ')}</p>
  `;
  formDataDisplay.style.display = 'block';
  }
}
