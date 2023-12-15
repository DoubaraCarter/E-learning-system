// const form = document.querySelector('form');
// const newPassword = document.getElementById('new-password');
// const confirmPasswordEl = document.getElementById('confirm-password');
// const submitBtn = document.getElementById('submit-btn');

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   if (newPassword.value !== confirmPasswordEl.value) {
//     alert('Passwords do not match!');
//   } else {
//     // Submit the form to the server
//     form.submit();
//   }
// });

// const checkPassword = () => {
//     let valid = false;


//     const password = newPassword.value.trim();

//     if (!isRequired(password)) {
//         showError(newPassword, 'Password cannot be blank.');
//     } else if (!isPasswordSecure(password)) {
//         showError(newPassword, 'Password must have at least 8 characters that includes at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
//     } else {
//         showSuccess(newPassword);
//         valid = true;
//     }

//     return valid;
// };

// const checkConfirmPassword = () => {
//     let valid = false;
//     // check confirm password
//     const confirmPassword = confirmPasswordEl.value.trim();
//     const password = newPassword.value.trim();

//     if (!isRequired(confirmPassword)) {
//         showError(confirmPasswordEl, 'Please enter the password again');
//     } else if (password !== confirmPassword) {
//         showError(confirmPasswordEl, 'The password does not match');
//     } else {
//         showSuccess(confirmPasswordEl);
//         valid = true;
//     }

//     return valid;
// };