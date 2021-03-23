$(document).ready(function () {

  $("#start-play").on("click", function () {
    $(".start-play__list").slideToggle();
    $(".start-play__list").toggleClass("active");
  });

  // circle

  $('.pl').circleProgress({
    fill: {
      color: '#1F85FE'
    },
    lineCap: "round"
  }).on('circle-animation-progress', function (event, progress, stepValue) {
    $(this).find('strong').html(Math.round(1000 * stepValue));
  });

  $('.chr').circleProgress({
    fill: {
      color: '#1F85FE'
    },
    lineCap: "round"
  }).on('circle-animation-progress', function (event, progress, stepValue) {
    $(this).find('strong').html(Math.round(1000 * stepValue));
  });

  $('.ti').circleProgress({
    fill: {
      color: '#1F85FE'
    },
    lineCap: "round"
  }).on('circle-animation-progress', function (event, progress, stepValue) {
    $(this).find('strong').html(Math.round(1000 * stepValue));
  });

  $('.ay').circleProgress({
    fill: {
      color: '#1F85FE'
    },
    lineCap: "round"
  }).on('circle-animation-progress', function (event, progress, stepValue) {
    $(this).find('strong').html(Math.round(1000 * stepValue));
  });

  $('.li').circleProgress({
    fill: {
      color: '#1F85FE'
    },
    lineCap: "round"
  }).on('circle-animation-progress', function (event, progress, stepValue) {
    $(this).find('strong').html(Math.round(1000 * stepValue));
  });

  $('.de').circleProgress({
    fill: {
      color: '#1F85FE'
    },
    lineCap: "round"
  }).on('circle-animation-progress', function (event, progress, stepValue) {
    $(this).find('strong').html(Math.round(1000 * stepValue));
  });
  
  $('.all').circleProgress({
    fill: {
      color: '#1F85FE'
    },
    lineCap: "round"
  }).on('circle-animation-progress', function (event, progress, stepValue) {
    $(this).find('strong').html(Math.round(1000 * stepValue));
  });


  let btn = document.querySelectorAll('.tooltip-text');
  btn.forEach(function (elem) {
    elem.addEventListener("click", function (event) {
      event.target.classList.add("hiden");
      setTimeout(() => {
        event.target.classList.remove("hiden");
      }, 1000);
    });
  });

  $('.samp-bottom__list').isotope({
    itemSelector: '.samp-bottom__item',
    masonry: {
      columnWidth: 100,
      horizontalOrder: true
    }
  });

  $('#news-text').mixItUp();

  var filterNews = $('.news-filter__element');

  filterNews.on('click', function (e) {
    e.preventDefault();
    if (filterNews.hasClass('news-filter__element--active')) {
      filterNews.removeClass('news-filter__element--active');
      $(this).addClass('news-filter__element--active');
    } else {
      $(this).addClass('news-filter__element--active');
    }
  });

  var tab = $('#tabs .tabs-items > div');
  tab.hide().filter(':first').show();

  $('#tabs .tabs-nav a').click(function () {
    tab.hide();
    tab.filter(this.hash).show();
    $('#tabs .tabs-nav a').removeClass('active');
    $(this).addClass('active');
    return false;
  }).filter(':first').click();

  $('.tabs-target').click(function () {
    $('#tabs .tabs-nav a[href=' + $(this).data('id') + ']').click();
  });

  $('server-btn').on('click', function() {
    $('server-input').attr("placeholder", "e-mail");
});

})

function copytext(el) {
  var $tmp = $("<input>");
  $("body").append($tmp);
  $tmp.val($(el).text()).select();
  document.execCommand("copy");
  $tmp.remove();
}

// var acc = document.getElementsByClassName("faq__item-title");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight){
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     }
//   });
// }

// $('.faq__item > .faq__item-content').hide();
    
// $('.faq__item').click(function() {
//   if ($(this).hasClass("active")) {
//     $(this).removeClass("active").find(".faq__item-content").slideUp();
//   } else {
//     $(".faq__item.active .faq__item-content").slideUp();
//     $(".faq__item.active").removeClass("active");
//     $(this).addClass("active").find(".faq__item-content").slideDown();
//   }
//   return false;
// });

// if(device.mobile() || device.tablet()) write('Для игры на компьютере');
// else if(!device.windows()) write('Для игры на Windows');

// document
//   .getElementById('monitor-width')
//   .innerHTML = screen.width;
// document
//   .getElementById('monitor-height')
//   .innerHTML = screen.height;

// document
//   .getElementById('brows-width')
//   .innerHTML = window.innerWidth;
// document
//   .getElementById('brows-height')
//   .innerHTML = window.innerHeight;

// document.write("device.ios() === ", "<span class='start-play__mob-title'" + device.ios() + "\">", "jguyut"  + "</span>", "<br />");
// document.write("device.iphone() === ", "<span class=\"" + device.iphone() + "\">" + device.iphone() + "</span>", "<br />");
// document.write("device.ipod() === ", "<span class=\"" + device.ipod() + "\">" + device.ipod() + "</span>", "<br />");
// document.write("device.ipad() === ", "<span class=\"" + device.ipad() + "\">" + device.ipad() + "</span>", "<br />");
// document.write("device.android() === ", "<span class=\"" + device.android() + "\">" + device.android() + "</span>", "<br />");
// document.write("device.androidPhone() === ", "<span class=\"" + device.androidPhone() + "\">" + device.androidPhone() + "</span>", "<br />");
// document.write("device.androidTablet() === ", "<span class=\"" + device.androidTablet() + "\">" + device.androidTablet() + "</span>", "<br />");
// document.write("device.blackberry() === ", "<span class=\"" + device.blackberry() + "\">" + device.blackberry() + "</span>", "<br />");
// document.write("device.blackberryPhone() === ", "<span class=\"" + device.blackberryPhone() + "\">" + device.blackberryPhone() + "</span>", "<br />");
// document.write("device.blackberryTablet() === ", "<span class=\"" + device.blackberryTablet() + "\">" + device.blackberryTablet() + "</span>", "<br />");
// document.write("device.windows() === ", "<span class=\"" + device.windows() + "\">" + device.windows() + "</span>", "<br />");
// document.write("device.windowsPhone() === ", "<span class=\"" + device.windowsPhone() + "\">" + device.windowsPhone() + "</span>", "<br />");
// document.write("device.windowsTablet() === ", "<span class=\"" + device.windowsTablet() + "\">" + device.windowsTablet() + "</span>", "<br />");
// document.write("device.fxos() === ", "<span class=\"" + device.fxos() + "\">" + device.fxos() + "</span>", "<br />");
// document.write("device.fxosPhone() === ", "<span class=\"" + device.fxosPhone() + "\">" + device.fxosPhone() + "</span>", "<br />");
// document.write("device.fxosTablet() === ", "<span class=\"" + device.fxosTablet() + "\">" + device.fxosTablet() + "</span>", "<br />");
// document.write("device.mobile() === ", "<span class=\"" + device.mobile() + "\">" + device.mobile() + "</span>", "<br />");
// document.write("device.tablet() === ", "<span class=\"" + device.tablet() + "\">" + device.tablet() + "</span>", "<br />");
// document.write("device.portrait() === ", "<span class=\"" + device.portrait() + "\">" + device.portrait() + "</span>", "<br />");
// document.write("device.landscape() === ", "<span class=\"" + device.landscape() + "\">" + device.landscape() + "</span>", "<br />");

var accordion = (function(){
  
  var $accordion = $('.faq__list');
  var $accordion_header = $accordion.find('.faq__item-title');

  var settings = {
    speed: 400,
    oneOpen: false
  };
    
  return {
    init: function($settings) {
      $accordion_header.on('click', function() {
        accordion.toggle($(this));
      });
      
      $.extend(settings, $settings); 
      if(settings.oneOpen && $('.faq__item.active').length > 1) {
        $('.faq__item.active:not(:first)').removeClass('active');
      }
      $('.faq__item.active').find('> .faq__item-content').show();
    },
    toggle: function($this) {
            
      if(settings.oneOpen && $this[0] != $this.closest('.faq__list').find('> .faq__item.active > .faq__item-title')[0]) {
        $this.closest('.faq__list')
               .find('> .faq__item') 
               .removeClass('active')
               .find('.faq__item-content')
               .slideUp()
      }
  
      $this.closest('.faq__item').toggleClass('active');
      $this.next().stop().slideToggle(settings.speed);
    }
  }
})();

$(document).ready(function(){
  accordion.init({ speed: 300, oneOpen: true });
});

new SimpleBar(document.getElementById('log__left'));