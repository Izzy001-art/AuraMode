// Feature 1: Theme Switcher
const themeBtn = document.getElementById('themeBtn');
if(themeBtn) {
    themeBtn.onclick = () => {
        document.body.style.backgroundColor = (document.body.style.backgroundColor === 'black') ? 'white' : 'black';
        document.body.style.color = (document.body.style.color === 'white') ? 'black' : 'white';
    };
}

// Requirement: Show DOM Structure in Console
console.log("--- AURA MODE DOM STRUCTURE ---");
console.dir(document.documentElement); // This shows the entire tree structure

// Form Alert for Appointments
const form = document.querySelector('form');
if(form) {
    form.onsubmit = (e) => {
        e.preventDefault();
        alert("Booking request sent! Aura Mode will contact you soon.");
    };
}
