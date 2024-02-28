function showForm(formId) {
    // Hide all forms
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('registration-form').style.display = 'none';
    document.getElementById('forgot-password-form').style.display = 'none';

    // Show the selected form
    document.getElementById(formId).style.display = 'block';
}
