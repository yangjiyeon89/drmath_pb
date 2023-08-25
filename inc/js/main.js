$(function(){
  // menu
  let menuBtn = $('.menu-btn');
  let moMenu = $('.nav-area');
  let menuClose = $('.menu-close');

  function MoMenuFunc(){
    moMenu.css('right','0');
    $('html, body').css('overflow', 'hidden');
    $('.mobile-menu-dim').fadeIn();
  }
  function MoMenuClose(){
    moMenu.css('right','-100%');
    $('html, body').css('overflow', 'auto');
    $('.mobile-menu-dim').fadeOut();
  }

  menuBtn.on('click', MoMenuFunc);
  menuClose.on('click', MoMenuClose);

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
  // 230220 수정 요청으로 slidesPerGroup 추가
  const sec02Swiper = new Swiper('.sec02-swiper', {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween:50,
    pagination: {
      el: ".sec02-swiper .swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      1770: {
        slidesPerView: 6,
        slidesPerGroup: 6,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 15
      },
      1023: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 15
      },
      768: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 15
      },
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 15
      }
    }
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

  // sec03 swiper
  const sec03Swiper = new Swiper(".sec03-swiper .swiper-container", {
    // slidesPerView: 4,
    navigation: {
      nextEl: ".sec03-swiper .swiper-button-next",
      prevEl: ".sec03-swiper .swiper-button-prev",
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 3,
      },
      360: {
        slidesPerView: 1,
      }
    }
  });

  // sec04
  let target = $('.sec04-list button');

  target.on('click', function(){
    let _this = $(this);
    let now = $('.ui-tab-btn.active').index();
    
    if(_this.hasClass('next')) {
      if(now !== 3) {
        $('.ui-tab-btn').removeClass('active');
        $('.ui-tab-btn').eq(now + 1).addClass('active');
        $('.contents').removeClass('on');
        $('.contents').eq(now + 1).addClass('on');
      }
    } else if(_this.hasClass('prev')) {
      if(now !== 0) {
        $('.ui-tab-btn').removeClass('active');
        $('.ui-tab-btn').eq(now - 1).addClass('active');
        $('.contents').removeClass('on');
        $('.contents').eq(now - 1).addClass('on');
      }
    }
  })

  function updateButtonLabel() {
    if ($(window).width() >= 1024) {
      $(".free-btn").text("7일 무료 체험 신청");
    } else {
      $(".free-btn").text("신청");
    }
  }

  updateButtonLabel();

  $(window).resize(function() {
      updateButtonLabel();
  });

})