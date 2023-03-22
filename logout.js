const logoutBtn = document.getElementById("logout-btn");

logoutBtn.addEventListener("click", function(event) {
event.preventDefault();

const confirmation = confirm("Apakah anda yakin ingin keluar?");
    if (confirmation) {
      window.location.href = "login.html"; 
    }
 });