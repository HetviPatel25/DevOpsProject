document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const zipCode = document.getElementById('zipCode').value;
    const appointmentDate = document.getElementById('appointmentDate').value;
    const appointmentTime = document.getElementById('appointmentTime').value;

    if (!firstName || !lastName || !dob || !zipCode || !appointmentDate || !appointmentTime) {
        alert('Please fill in all fields.');
        return;
    }

    alert(`Appointment booked for ${firstName} ${lastName} on ${appointmentDate} at ${appointmentTime}`);
});