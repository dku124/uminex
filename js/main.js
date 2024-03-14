// slider
const swiper = new Swiper('.swiper', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
});

// countdown timer
var countDownDate = new Date("Jun 30, 2026 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);

// menu mobile
// $(document).ready(function(){
//   $(".menu_btn").click(function(){
//     $(".menu_moblie").addClass('active');
//     $(".overlay").show();
//     $('body').addClass('lock-sceen')
//   });
//   $(".overlay").click(function(){
//     $(".menu_moblie").removeClass('active');
//     $(".overlay").hide();
//     $('body').removeClass('lock-sceen')
//   });
//   $(".close_btn").click(function(){
//     $(".menu_moblie").removeClass('active');
//     $(".overlay").hide();
//     $('body').removeClass('lock-sceen')
//   });
  
// });

document.querySelector(".menu_btn").addEventListener("click", function(){
    
  document.querySelector(".menu_moblie").classList.add('active');
  document.querySelector(".overlay").style.display = "block";;
  document.querySelector('body').classList.add('lock-sceen')
}
);
document.querySelector(".overlay").addEventListener("click", function(){
  
  document.querySelector(".menu_moblie").classList.remove('active');
  document.querySelector(".overlay").style.display = "none";;
  document.querySelector('body').classList.remove('lock-sceen')
}
);
document.querySelector(".close_btn").addEventListener("click", function(){
  
  document.querySelector(".menu_moblie").classList.remove('active');
  document.querySelector(".overlay").style.display = "none";;
  document.querySelector('body').classList.remove('lock-sceen')
}
);