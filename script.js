function showAlert() {
    alert("Hello, welcome to my page!");
}

document.getElementById("profile-pic").addEventListener("mouseover", function() {
    document.body.style.backgroundColor = "#d3d3d3";
});

document.getElementById("profile-pic").addEventListener("mouseout", function() {
    document.body.style.backgroundColor = "#f0f0f0";
});
