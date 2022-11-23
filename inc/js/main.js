$(function(){
  // main swiper
  const swiper = new Swiper('.main-swiper', {
    effect: "fade",
    pagination: {
      el: ".main-swiper .swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });

  let _btn = $('.main-swiper button')
  let stopBtn = $('.main-swiper .stop');
  let startBtn = $('.main-swiper .start');

  stopBtn.on('click', function(){
    let _this = $(this);
    _btn.removeClass('active');
    _this.addClass('active');
    swiper.autoplay.stop();
  });

  startBtn.on('click', function(){
    let _this = $(this);
    _btn.removeClass('active');
    _this.addClass('active');
    swiper.autoplay.start();
  });

  // notice swiper
  const noticeSwiper = new Swiper(".notice-swiper", {
    direction: "vertical",
    slidesPerView: 2,
    navigation: {
      nextEl: '.notice-swiper .next',
      prevEl: '.notice-swiper .prev',
    },
  });

  // banner swiper
  const bannerSwiper = new Swiper(".banner-swiper", {
    pagination: {
      el: ".banner-swiper .swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  let _btnB = $('.banner-swiper button')
  let stopBtnB = $('.banner-swiper .stop');
  let startBtnB = $('.banner-swiper .start');

  stopBtnB.on('click', function(){
    let _this = $(this);
    _btnB.removeClass('active');
    _this.addClass('active');
    bannerSwiper.autoplay.stop();
  });

  startBtnB.on('click', function(){
    let _this = $(this);
    _btnB.removeClass('active');
    _this.addClass('active');
    bannerSwiper.autoplay.start();
  });

  // sec02 swiper
  const sec02Swiper = new Swiper('.sec02-swiper', {
    slidesPerView: 6,
    pagination: {
      el: ".sec02-swiper .swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });

  let _btn2 = $('.sec02-swiper button')
  let stopBtn2 = $('.sec02-swiper .stop');
  let startBtn2 = $('.sec02-swiper .start');

  stopBtn2.on('click', function(){
    let _this = $(this);
    _btn2.removeClass('active');
    _this.addClass('active');
    sec02Swiper.autoplay.stop();
  });

  startBtn2.on('click', function(){
    let _this = $(this);
    _btn2.removeClass('active');
    _this.addClass('active');
    sec02Swiper.autoplay.start();
  });

  //sec03 swiper
  const sec03Swiper = new Swiper(".sec03-swiper .swiper-container", {
    slidesPerView: 3,
    navigation: {
      nextEl: ".sec03-swiper .swiper-button-next",
      prevEl: ".sec03-swiper .swiper-button-prev",
    },
  });
})