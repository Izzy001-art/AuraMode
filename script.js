// 1. DOM Structure Logger (Required)
console.log("DOM Structure Initialized:", document.documentElement);

// 2. Add to Cart Simulation (Complexity Feature)
function addToCart(itemName) {
    alert(itemName + " has been added to your Aura Mode bag!");
}

// 3. Dynamic Scroll Effect for Nav
window.onscroll = function() {
    let nav = document.querySelector('nav');
    if (window.pageYOffset > 50) {
        nav.style.background = "rgba(0,0,0,0.9)";
        nav.style.padding = "10px";
    } else {
        nav.style.background = "#0a0a0a";
        nav.style.padding = "20px";
    }
};
<div class="page-nav">
    <a href="appointments.html" class="nav-btn">← Back: Bookings</a>
    <a href="index.html" class="nav-btn">Home Page ⟳</a>
</div>
