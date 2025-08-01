// toggel class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// toggel calss active untuk seacrh form
const searchform = document.querySelector('.search-form');
const searchbox = document.querySelector('#search-box');

document.querySelector('#search-btn').onclick = (e) => {
  searchform.classList.toggle('active');
  searchbox.focus();
  // searchbox.focus(); berfungsi ketika kita mengeklik tombol search maka bisa langsug atif tanpa menekan form atau input nya
  e.preventDefault();
  // e.preventDefault(); mengatasi agar ketika kita klik tombol search maka tidak kembali ke home (tambah kan e pada onclick)

}

// toggell class active untuk search form 
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-btn').onclick = (e) => {
  shoppingCart.classList.toggle('active');
  e.preventDefault()
}


// klik di luar side bar untuk menghilangkan nav




// membuat const hamburger dengan id=hamburger-meu.
// lalu buat addevent ketika click function event maka/jika klik di luar hamburger menu dan navbarnav maka akan remove class active

// klik di luat elemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector('#search-btn');
const sc = document.querySelector('#shopping-cart-btn');

document.addEventListener("clik", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchform.contains(e.target)) {
    searchform.classList.remove("active");
  }
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    searchform.classList.remove("active");
  }
});

// modal box 
const itemdetailmodal = document.querySelector('#item-detail-modal');
const itemdetailbtn = document.querySelectorAll('.item-detail-btn');

// supaya semua item-detail-btn berfungsi
itemdetailbtn.forEach((btn) => {

  btn.onclick = (e) => {
  itemdetailmodal.style.display = 'flex' ;
  e.preventDefault()
  };
});


// klik tombol close modal 
document.querySelector('.modal .close-icon').onclick = (e) => {
  itemdetailmodal.style.display = 'none' ;
  e.preventDefault()
}

// klik di luar moda
// ketika klik dimana pu pasti hilang kecuali modal-container
window.onclick = (e) => {
  if(e.target === itemdetailmodal) {
    itemdetailmodal.style.display = 'none'
  }
}
