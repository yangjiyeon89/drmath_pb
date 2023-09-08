$(function () {
  //menu
  function checkCurrentGnb() {
    var _className = $('#wrap').attr('class'),
      _afterStr = _className ? _className.split(" ") : '',
      _gnbMenuLink = $('.nav > li');

    switch (_afterStr[0]) {
      case 'page03_01':
        _gnbMenuLink.eq(1).find('> a').addClass('active');
        _gnbMenuLink.eq(1).find('.depth2').find('li').eq(0).find('a').addClass('active');
        break;
      case 'page04_01':
      _gnbMenuLink.eq(2).find('> a').addClass('active');
      _gnbMenuLink.eq(2).find('.depth2').find('li').eq(0).find('a').addClass('active');
        break;
      case 'page04_02':
      _gnbMenuLink.eq(2).find('> a').addClass('active');
      _gnbMenuLink.eq(2).find('.depth2').find('li').eq(1).find('a').addClass('active');
        break;
      case 'page04_03':
      _gnbMenuLink.eq(2).find('> a').addClass('active');
      _gnbMenuLink.eq(2).find('.depth2').find('li').eq(2).find('a').addClass('active');
        break;

      case 'page05_01':
      _gnbMenuLink.eq(3).find('> a').addClass('active');
      _gnbMenuLink.eq(3).find('.depth2').find('li').eq(0).find('a').addClass('active');
        break;
      
      case 'page05_02':
      _gnbMenuLink.eq(3).find('> a').addClass('active');
      _gnbMenuLink.eq(3).find('.depth2').find('li').eq(1).find('a').addClass('active');
        break;

      case 'page05_03':
      _gnbMenuLink.eq(3).find('> a').addClass('active');
      _gnbMenuLink.eq(3).find('.depth2').find('li').eq(2).find('a').addClass('active');
        break;

      case 'page02_01':
        _gnbMenuLink.eq(1).find('> a').addClass('active');
        _gnbMenuLink.eq(1).find('.depth2').find('li').eq(0).find('a').addClass('active');
        break;
      case 'page02_02':
        _gnbMenuLink.eq(1).find('> a').addClass('active');
        _gnbMenuLink.eq(1).find('.depth2').find('li').eq(1).find('a').addClass('active');
        break;
      // case 'page03':
      //   _gnbMenuLink.eq(2).addClass('active');
      //   break;
      // case 'page04':
      //   _gnbMenuLink.eq(3).addClass('active');

      //   break;
      // case 'page05':
      //   _gnbMenuLink.eq(4).addClass('active');

      //   break;
      // case 'page06':
      //   _gnbMenuLink.eq(5).addClass('active');

      //   break;
    }
  }

  function menuUI() {
    let menuWrap = $('.nav');
    let menu = $('.nav li');
    let menuBtn = $('.nav li a');
    let _header = $('.header');
    let subMenu = $('.depth2')

    menuBtn.on('mouseover', function () {
      let _this = $(this);
      let _thisMenu = $(this).parents('li');

      _header.addClass('active');
      subMenu.addClass('on');

      _thisMenu.siblings('li').find('> a').removeClass('active');
      _thisMenu.siblings('li').find(subMenu).find('a').removeClass('active');
      _thisMenu.find('> a').addClass('active');
      _this.addClass('active');
      
    });

    _header.on('mouseleave', function () {

      _header.removeClass('active');
      subMenu.removeClass('on');
      menuBtn.removeClass('active');

      checkCurrentGnb();
    })
  }

  $(document).on('ready', function(){
    checkCurrentGnb();
    menuUI();
  })


  // tab
  let tabBtn = $('.ui-tab-btn');

  function tabUI() {
    let _this = $(this);
    let _cnt = $(this).parents('.tab-wrap').find('.contents');
    let _idx = $(this).index();


    if (!_this.hasClass('active')) {
      _this.siblings().removeClass('active');
      _this.addClass('active');
      _cnt.removeClass('on');
      _cnt.eq(_idx).addClass('on');
    }
    console.log(_idx)
  }

  tabBtn.on('click', tabUI);

  // paging
  let pageBtn = $('.page');

  function pageFunc() {
    let _this = $(this);

    if (!_this.hasClass('active')) {
      pageBtn.removeClass('active');
      _this.addClass('active')
    }
  }

  pageBtn.on('click', pageFunc);


  // select
  let selectBtn = $('.select-btn');

  function selectUI() {
    let _this = $(this);
    let _cnt = $(this).next();

    if (!_this.hasClass('active')) {
      _this.addClass('active');
      _cnt.stop().slideDown('fast');
    } else {
      _cnt.stop().slideUp('fast', function () {
        _this.removeClass('active');
      })
    }
  }
  selectBtn.on('click', selectUI);

  // popup
  let _dim = $('.dim');
  let _html = $('html , body');
  let popBtn = $('.pop-btn');
  let closePop = $('.pop-close');

  function popFunc() {
    let _this = $(this);
    let popData = _this.data('pop');

    _html.css('overflow', 'hidden');
    _dim.fadeIn();

    $(".pop-wrap[data-pop='" + popData + "']").show();

    console.log($(".pop-wrap[data-pop='" + popData + "']"))
  }

  function popClose() {
    let _this = $(this);
    $('.pop-wrap').hide();
    _html.css('overflow', 'auto');
    _dim.fadeOut();
  }

  popBtn.on('click', popFunc);
  closePop.on('click', popClose);


  // checkbox
  let chkAll = $('.allCheck');

  function checkFunc() {
    let _this = $(this);

    if (_this.prop('checked')) {
      _this.parents('table').find('input[type=checkbox]').prop('checked', true);
    } else {
      _this.parents('table').find('input[type=checkbox]').prop('checked', false);
    }

  }

  chkAll.on('click', checkFunc);

  


  // accordion
  let accBtn = $('.acc-btn');

  function accFunc() {
    let _this = $(this);

    _this.toggleClass('active');

    if (_this.hasClass('active')) {
      _this.next('.cnt').stop().slideDown('fast');
    } else {
      _this.next('.cnt').stop().slideUp('fast');
    }

  }

  accBtn.on('click', accFunc);

  function updateButtonLabel() {
    if ($(window).width() >= 1024) {
      $(".free-btn").text("무료 체험 신청");
    } else {
      $(".free-btn").text("신청");
    }
  }

  updateButtonLabel();

  $(window).resize(function() {
      updateButtonLabel();
  });

});