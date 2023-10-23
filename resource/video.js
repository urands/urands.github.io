const popupHtml = `
<div class="web-intro" id="video-intro-block">
      <div class="video-container" id="video-intro-container">
        <video
          id="video-intro"
          controls=""
          autoplay="autoplay"
          loop
          muted
          src="https://github.com/urands/urands.github.io/raw/master/resource/out3.mp4"></video>
      </div>
    </div>
`;

document.addEventListener('DOMContentLoaded', (event) => {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    return;
  }

  document.body.insertAdjacentHTML('beforeend', popupHtml);
  var muted_event = document.getElementById('video-intro-container');
  var video_obj = document.getElementById('video-intro');
  video_obj.controls = false;
  muted_event.addEventListener('click', (ev) => {
    var video_obj = document.getElementById('video-intro');
    if (video_obj) {
      if (video_obj.paused) video_obj.play();
      video_obj.muted = !video_obj.muted;
      if (!video_obj.muted) {
        video_obj.style.width = '240px';
        video_obj.style.height = '240px';
      } else {
        video_obj.style.width = '100px';
        video_obj.style.height = '100px';
      }
      //console.log(video_obj, video_obj.muted);
    }
  });
});
