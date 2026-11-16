// Button ko select karna
const btn = document.getElementById("welcomeBtn");

// Button click hone par function chalana
btn.addEventListener("click", function() {
    alert("Shukriya! Aapne button par click kiya. Aapki JavaScript bilkul sahi kaam kar rahi hai!");
    
    // Button ka text aur color badalna
    btn.textContent = "Clicked!";
    btn.style.backgroundColor = "#28a745";
    btn.style.color = "white";
});
