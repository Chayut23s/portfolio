let prevScrollpos = window.pageYOffset; // เก็บตำแหน่งก่อนหน้า

// ตรวจสอบการ scroll
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset; // เก็บตำแหน่งขณะ scroll

  // ถ้าตำแหน่ง scroll มากกว่าตำแหน่งเดิม ให้ซ่อน NavBar
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0"; // แสดง NavBar
  } else {
    document.getElementById("navbar").style.top = "-80px"; // ซ่อน NavBar
  }
  prevScrollpos = currentScrollPos; // อัพเดตตำแหน่ง
}

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
  if (index >= totalSlides) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = totalSlides - 1;
  } else {
    slideIndex = index;
  }

  const offset = -100 * slideIndex;
  document.querySelector('.slider-container').style.transform = `translateX(${offset}%)`;
}

// ควบคุมการเลื่อนสไลด์เมื่อคลิกปุ่ม
document.querySelector('.next').addEventListener('click', function () {
  slideIndex++;
  showSlide(slideIndex);
});

document.querySelector('.prev').addEventListener('click', function () {
  slideIndex--;
  showSlide(slideIndex);
});

// การเลื่อนอัตโนมัติ
setInterval(() => {
  slideIndex++;
  showSlide(slideIndex);
}, 10000); // ทุกๆ 3 วินาที

