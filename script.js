// toggel class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar side bar untuk menghilangkan nav

// membuat const hamburger dengan id=hamburger-meu.
// lalu buat addevent ketika click function event maka/jika klik di luar hamburger menu dan navbarnav maka akan remove class active

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
