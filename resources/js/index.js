var orientationImage = document.getElementById('orientation-image');
var campusImage = document.getElementById('campus-image');
var guestLecturesImage = document.getElementById('guest-lectures-image');




window.onresize = window.onload = function () {
    if (window.innerWidth >= 800) {
      orientationImage.src = 'https://github.com/ShadowNextGen/colmaracademy/blob/master/resources/images/information-orientation.jpg';
      campusImage.src = 'https://github.com/ShadowNextGen/colmaracademy/blob/master/resources/images/information-campus.jpg';
      guestLecturesImage.src = 'https://github.com/ShadowNextGen/colmaracademy/blob/master/resources/images/information-guest-lecture.jpg';
    }
    else {
      orientationImage.src = 'https://github.com/ShadowNextGen/colmaracademy/blob/master/resources/images/information-orientation-mobile.jpg';
      campusImage.src = 'https://github.com/ShadowNextGen/colmaracademy/blob/master/resources/images/information-campus-mobile.jpg';
      guestLecturesImage.src = 'https://github.com/ShadowNextGen/colmaracademy/blob/master/resources/images/information-guest-lecture-mobile.jpg';
    }

};
