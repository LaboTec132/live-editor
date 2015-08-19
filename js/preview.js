/*$(document).on("click", function() {
  document.documentElement.webkitRequestFullscreen();
})*/

$(document).on("ready", function() {
  console.log('this is the preview string => ' + localStorage.getItem("previewString"));
  if (localStorage.getItem("previewString") !== null) {
    $("body").addClass(localStorage.getItem("previewString"));
  }
  var textElements = [
    "cBugShow",
    "cBugGame",
    "bannerTitle",
    "bannerSub",
    "infoBarBanner",
    "comingUpTitle",
    "infoBarComingUp",
    "tName",
    "tHandle",
    "twitterContent",
    "infoBarTwitter",
    "nameLeftName",
    "nameLeftHandle",
    "nameRightName",
    "nameRightHandle",
    "nBarPerson1Name",
    "nBarPerson1Title",
    "nBarPerson2Name",
    "nBarPerson2Title",
    "nBarPerson3Name",
    "nBarPerson3Title",
    "nBarPerson4Name",
    "nBarPerson4Title",
    "nBarPerson5Name",
    "nBarPerson5Title",
    "infoBarNameBar",
    "nameBarNumber",
    "cardName",
    "cardHandle",
    "cardBody",
    "cardInfo1",
    "cardInfo2",
    "fullSocialBg",
    "cBugSponsorImage",
    "scheduleOne",
    "scheduleTwo",
    "scheduleThree",
    "scheduleFour",
    "scheduleFive",
    "scheduleNumber",
    "bannerWidth"
  ];
  var iconTypes = [
    "bannerIcon",
    "comingUpIcon",
    "fullSocialIcon",
    "nameLeftIcon",
    "nameRightIcon",
    "comingUpIcon",
    "tIcon"
  ];

  var scheduleImages = [
    "scheduleOne",
    "scheduleTwo",
    "scheduleThree",
    "scheduleFour",
    "scheduleFive"
  ];

  $.each(textElements, function(i, value) {
    if (localStorage.getItem(value) !== null) {
      if (value === "fullSocialBg") {
        $('#fullBG').css("background-image", 'url("' + localStorage.getItem(value) + '")');
      } if (value === "cBugSponsorImage") {
        $('.cBugSponsorImage').attr('src', localStorage.getItem(value));
      } if (scheduleImages.indexOf(value) >= 0) {
        $('#' + value).css("background-image", 'url("' + localStorage.getItem(value) + '")');
      } else {
        $('#' + value).text(localStorage.getItem(value));
      }
    }
  });
  $.each(iconTypes, function(i, value) {
    if (localStorage.getItem(value) !== null) {
      $('#' + value + ' img').attr("class", "iconWhite " + localStorage.getItem(value));
    }
  });

  function bannerWidth() {
    if (localStorage.getItem('bannerWidth') != null){
      var bW = localStorage.getItem('bannerWidth');
      $('#banner').css('max-width', bW);
      var lh = $('#banner .lowerContent').height();
      var lowerh = lh + 56;
      $('.banner-on #banner .lower').css('max-height', lowerh);
    }
  };

  function bannerHeight() {
    var str = localStorage.getItem('bannerTitle');
    var n = str.length;
    if (n < 18) {
      $('body').addClass('bannerSmall');
    } else {
      $('body').removeClass('bannerSmall');
    }
    
    var lh = $('#banner .lowerContent').height();
    var lowerh = lh + 56;
    $('.banner-on #banner .lower').css('max-height', lowerh);
  };

  function tCardHeight() {
    var lh = $('#tCard .lowerContent').height();
    var lowerh = lh + 56;
    $('.tCard-on #tCard .lower').css('max-height', lowerh);
  };

  function comingUpHeight() {
    var lh = $('#comingUp .lowerContent').height();
    var lowerh = lh + 60;
    $('.comingUp-on #comingUp .lower').css('max-height', lowerh);
  };

  function fullHeight() {
    var lh = $('#fullBG .centerCardBlock').height();
    var lowerh = lh + 115;
    $('.fullSocial-on #fullBGCard .cardContent').css('max-height', lowerh);
  };

  function animationHeight() {
    if (event.key == "bannerTitle") {
      bannerHeight();
    };

    if (event.key == "bannerWidth") {
      bannerWidth();
    };

    if (event.key == "twitterContent") {
      tCardHeight();
    };

    if (event.key == "comingUpTitle") {
      comingUpHeight();
    };

    if (event.key == "cardBody") {
      fullHeight();
    };
  };

  function animationHeightIni() {
    bannerHeight();
    tCardHeight();
    comingUpHeight();
    fullHeight();
    bannerWidth();
  };

  window.addEventListener('storage', function(event) {
    if (event.key == "previewString") {
      $("body")[0].className = localStorage.getItem("previewString");
      animationHeightIni();
      // if (event.key == "previewString" && $("body").hasClass("fullSocial-on")) {
      //   var video = document.getElementById('socialVideo')
      //   video.currentTime = 0;
      //   video.load();
      // }
    }

    $.each(textElements, function(i, value) {
      if (event.key == value && localStorage.getItem(value) !== null) {
        if (value === "fullSocialBg") {
          $('#fullBG').css("background-image", 'url("' + localStorage.getItem(value) + '")');
          console.log("this is the entered value => " + localStorage.getItem(value));
        } if (value === "cBugSponsorImage") {
          $('.cBugSponsorImage').attr('src', localStorage.getItem(value));
          console.log("this is the entered value => " + localStorage.getItem(value));
        } if (scheduleImages.indexOf(value) >= 0) {
          $('#' + value).css("background-image", 'url("' + localStorage.getItem(value) + '")');
        } else {
          $('#' + value).text(localStorage.getItem(value));
          animationHeight();
        }
      }
    });


    $.each(iconTypes, function(i, value) {
      if (event.key == value && localStorage.getItem(value) !== null) {
        $('#' + value + ' img').attr("class", "iconWhite " + localStorage.getItem(value));
        console.log(value + ' ' + localStorage.getItem(value));
      };
    });
  });
  animationHeightIni();
});
