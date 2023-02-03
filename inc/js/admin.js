$(function () {
  //menu
  function checkCurrentGnb() {
    var _className = $('#wrap').attr('class'),
      _afterStr = _className ? _className.split(" ") : '',
      _gnbMenuLink = $('.nav > li');
      _allMenuLink = $('.all-menu');

    switch (_afterStr[0]) {
      case 'admin00':
        _gnbMenuLink.eq(0).addClass('on');
        _gnbMenuLink.eq(0).find('.depth2').find('li').eq(0).find('a').addClass('on');
        _allMenuLink.find('ul').eq(0).find('li').eq(1).addClass('on')
        break;
    }
  }

  function menuUI() {
    let menuWrap = $('.nav');
    let menu = $('.nav li');
    let menuBtn = $('.nav > li > a');
    let _header = $('.header');
    let subMenu = $('.depth2');

    menuBtn.on('mouseover', function () {
      let _this = $(this);
      let _thisMenu = $(this).parents('li');

      $('.nav-wrap').addClass('on');
      _thisMenu.siblings('li').find('> a').removeClass('active')
      _this.addClass('active');
      _thisMenu.siblings('li').find(subMenu).removeClass('on');
      _this.next(subMenu).addClass('on');


    });

    _header.on('mouseleave', function () {
      $('.nav-wrap').removeClass('on');
      menuBtn.removeClass('active');
      subMenu.removeClass('on');
      checkCurrentGnb();
    })
  }

  $(document).on('ready', function () {
    checkCurrentGnb();
    menuUI();
  })

  // select
  let selectBtn = $('.select-btn');
  let selectList = $('.select-list');

  function selectUI() {
    let _this = $(this);
    let _cnt = $(this).next();

    if (!_this.hasClass('active')) {
      selectBtn.removeClass('active');
      selectList.slideUp('fast');
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
  let closePop = $('.pop-close, .ui-close');

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


  // tab
  let tabBtn = $('.ui-tab-btn');

  function tabUI() {
    let _this = $(this);
    let _cnt = $(this).parents('.tab-wrap').find('.contents');
    let _idx = $(this).index();

    if(_this.parents('div').hasClass('contents')) {
      if (!_this.hasClass('active')) {
        _this.siblings().removeClass('active');
        _this.addClass('active');
        _this.parents('.contents').find('.content').removeClass('on');
        _this.parents('.contents').find('.content').eq(_idx).addClass('on');
      }
    } else {
      if (!_this.hasClass('active')) {
        _this.siblings().removeClass('active');
        _this.addClass('active');
        _cnt.removeClass('on');
        _cnt.eq(_idx).addClass('on');
      }
    }
  }

  tabBtn.on('click', tabUI);
})