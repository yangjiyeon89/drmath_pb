$(function () {
  //menu
  function checkCurrentGnb() {
    var _className = $('#wrap').attr('class'),
      _afterStr = _className ? _className.split(" ") : '',
      _gnbMenuLink = $('.nav > li');

    switch (_afterStr[0]) {
      case 'page03_01':
        _gnbMenuLink.eq(0).find('> a').addClass('active');
        _gnbMenuLink.eq(0).find('.depth2').find('li').eq(0).find('a').addClass('active');
        break;
      case 'page04_01':
      _gnbMenuLink.eq(0).find('> a').addClass('active');
      $('.nav-wrap').addClass('on');
      _gnbMenuLink.eq(0).find('.depth2').css('display','flex');
      _gnbMenuLink.eq(0).find('.depth2').find('li').eq(3).find('a').addClass('on');
        break;
      case 'page04_02':
      _gnbMenuLink.eq(1).find('> a').addClass('active');
      _gnbMenuLink.eq(1).find('.depth2').find('li').eq(1).find('a').addClass('active');
        break;
      case 'page04_03':
      _gnbMenuLink.eq(1).find('> a').addClass('active');
      _gnbMenuLink.eq(1).find('.depth2').find('li').eq(2).find('a').addClass('active');
        break;

      case 'page05_01':
      _gnbMenuLink.eq(2).find('> a').addClass('active');
      _gnbMenuLink.eq(2).find('.depth2').find('li').eq(0).find('a').addClass('active');
        break;
      
      case 'page05_02':
      _gnbMenuLink.eq(2).find('> a').addClass('active');
      _gnbMenuLink.eq(2).find('.depth2').find('li').eq(1).find('a').addClass('active');
        break;

      case 'page05_03':
      _gnbMenuLink.eq(2).find('> a').addClass('active');
      _gnbMenuLink.eq(2).find('.depth2').find('li').eq(2).find('a').addClass('active');
        break;

      case 'page02_01':
        _gnbMenuLink.eq(1).find('> a').addClass('active');
        _gnbMenuLink.eq(1).find('.depth2').find('li').eq(0).find('a').addClass('active');
        break;
      case 'page02_02':
        _gnbMenuLink.eq(1).find('> a').addClass('active');
        _gnbMenuLink.eq(1).find('.depth2').find('li').eq(1).find('a').addClass('active');
        break;
      case 'page03':
        _gnbMenuLink.eq(2).addClass('active');
        break;
      case 'page04':
        _gnbMenuLink.eq(3).addClass('active');

        break;
      case 'page05':
        _gnbMenuLink.eq(4).addClass('active');

        break;
      case 'page06':
        _gnbMenuLink.eq(5).addClass('active');

        break;
    }
  }

  function menuUI() {
    let menuWrap = $('.nav');
    let menu = $('.nav li');
    let menuBtn = $('.nav > li > a');
    let _header = $('.header');
    let subMenu = $('.depth2')

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

  // table drag
  $( "#table-1" ).sortable({
    handle: '.dragHandle',
  });
  $( "#table-1" ).disableSelection();

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
  let selectCnt = $('.open-select-list li a')

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

    if(_this.parents('ul').hasClass('open-select-list')) {
      selectCnt.removeClass('active');
      _this.addClass('active');
    }
  }
  selectBtn.on('click', selectUI);
  selectCnt.on('click', selectUI);

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
  let chkList = $('.left-cnt .chk-acc input[type="checkbox"]');
  let selectList = $('.right-cnt .chk-acc input[type="checkbox"]');

  function checkFunc() {
    let _this = $(this);

    if (_this.prop('checked')) {
      _this.parents('table').find('input[type=checkbox]').prop('checked', true);
      _this.parents('.chk-acc').find('input[type=checkbox]').prop('checked', true);
    } else {
      _this.parents('table').find('input[type=checkbox]').prop('checked', false);
      _this.parents('.chk-acc').find('input[type=checkbox]').prop('checked', false);
    }
  }

  function checkMove(){
    let _this = $(this);
    let _idx = $(this).parents('.chk-acc').data('index');
    let selectCnt = $('.right-cnt .chk-acc');
    let _name = $(this).attr('name');

    if (_this.prop('checked')) {

      $(".right-cnt .chk-acc[data-index='" + _idx + "']").show();
      $(".right-cnt .chk-acc[data-index='" + _idx + "']").find(".allCheck").prop('checked', true);
      $(".right-cnt .chk-acc[data-index='" + _idx + "']").find('.cnt').show();
      _this.attr('disabled', true);

      if(_this.hasClass('allCheck')){
        $(".right-cnt .chk-acc[data-index='" + _idx + "']").find('li').show();
        $(".right-cnt .chk-acc[data-index='" + _idx + "']").find('li').find('input').prop('checked', true);        
        _this.parents('.chk-acc').find('input').attr('disabled', true);        
      } else {
        selectCnt.find("input:checkbox[name='" + _name + "']").parents('li').show();      
        selectCnt.find("input:checkbox[name='" + _name + "']").prop('checked', true);
      }
    }
  }

  function chkSelectFunc(){
    let _this = $(this);
    let chkCnt = $('.left-cnt .chk-acc');
    let _name = $(this).attr('name');
    let _idx = $(this).parents('.chk-acc').data('index');

    if (!_this.prop('checked')) {
      $(".left-cnt .chk-acc[data-index='" + _idx + "']").find(".allCheck").prop('checked', false);
      $(".left-cnt .chk-acc[data-index='" + _idx + "']").find(".allCheck").attr('disabled', false);

      if(_this.hasClass('allCheck')) {
        _this.parents('.chk-acc').hide();
        _this.parents('.chk-acc').find('li').hide();
        $(".left-cnt .chk-acc[data-index='" + _idx + "']").find('input').attr('disabled', false);
        $(".left-cnt .chk-acc[data-index='" + _idx + "']").find('input').prop('checked', false);
      } else {
        _this.parents('li').hide();
        chkCnt.find("input:checkbox[name='" + _name + "']").attr('disabled', false);
        chkCnt.find("input:checkbox[name='" + _name + "']").prop('checked', false);
      }
    }
  }

  chkAll.on('click', checkFunc);
  chkList.on('click', checkMove);
  selectList.on('click', chkSelectFunc)
  


  // accordion
  let accBtn = $('.acc-btn');

  function accFunc() {
    let _this = $(this);
    let accWrap = _this.parents('.acc-btn-wrap');   

    if(_this.parents('div').hasClass('acc-btn-wrap')){
      accWrap.toggleClass('active');
      if(accWrap.hasClass('active')) {
        _this.parents('.acc-btn-wrap').next('.cnt').stop().slideDown('fast');
      } else {
        _this.parents('.acc-btn-wrap').next('.cnt').stop().slideUp('fast');
      }
    } else {
      _this.toggleClass('active');    

      if (_this.hasClass('active')) {
        _this.next('.cnt').stop().slideDown('fast');
      } else {
        _this.next('.cnt').stop().slideUp('fast');
      }
    }
  }

  accBtn.on('click', accFunc);

  // depth
  let depBtn = $('.dep-btn');

  function depFunc(){
    let _this = $(this);

    if(!_this.hasClass('active')){
      _this.addClass('active');
      _this.parents('.check-group').next('div').stop().slideUp('fast');

    } else {
      _this.removeClass('active');
      _this.parents('.check-group').next('div').stop().slideDown('fast');
    }

    _this.parents('.check-group').toggleClass('on');
  }

  depBtn.on('click', depFunc);


  // que-checkbox
  let queChkAll = $('.que-allCheck');

  function queCheckFunc(){
    let _this = $(this);

    if(_this.prop('checked')){
      _this.parents().next('ul').find('input[type=checkbox]').prop('checked', true);
    } else {
      _this.parents().next('ul').find('input[type=checkbox]').prop('checked', false);
    }

    if(_this.prop('checked') && _this.hasClass('depth01')) {
      _this.parents('.check-group').next('div').find('input[type=checkbox]').prop('checked', true);
    } else {
      _this.parents('.check-group').next('div').find('input[type=checkbox]').prop('checked', false);
    }

    if(_this.prop('checked')){
      _this.parents('table').find('input[type=checkbox]').prop('checked', true);
    } else {
      _this.parents('table').find('input[type=checkbox]').prop('checked', false);
    }

  }

  queChkAll.on('click', queCheckFunc);

});