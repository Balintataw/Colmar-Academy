/*adds/removes video controls bar*/

$(document).ready(function() {
  
  var video = document.getElementById("video_1");

  $(video).on({
      mouseenter: function () {
        video.setAttribute("controls","controls")
      },
      mouseleave: function () {
        video.removeAttribute("controls");
      }
  });
});
