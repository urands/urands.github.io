const popupHtml = `
<div class="web-intro" id="video-intro-block">
      <div class="video-container">
        <video
          id="video-intro"
          controls=""
          autoplay="autoplay"
          loop
          muted
          src="https://github.com/urands/urands.github.io/raw/master/resource/out3.webm"></video>
        <div class="video-overlay" id="video-overlay">
          <svg
            id="video-close"
            height="30px"
            width="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.96963 8.96965C9.26252 8.67676 9.73739 8.67676 10.0303 8.96965L12 10.9393L13.9696 8.96967C14.2625 8.67678 14.7374 8.67678 15.0303 8.96967C15.3232 9.26256 15.3232 9.73744 15.0303 10.0303L13.0606 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73742 15.3232 9.26254 15.3232 8.96965 15.0303C8.67676 14.7374 8.67676 14.2625 8.96965 13.9697L10.9393 12L8.96963 10.0303C8.67673 9.73742 8.67673 9.26254 8.96963 8.96965Z"
                fill="#1C274C"></path>
            </g>
          </svg>
          <svg
            id="video-muted"
            height="25px"
            width="25px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 496.159 496.159"
            xml:space="preserve"
            fill="#000000"
            stroke="#000000">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                style="fill: #98128f"
                d="M496.159,248.086c0-137.022-111.07-248.082-248.076-248.082C111.071,0.004,0,111.063,0,248.086 c0,137.001,111.07,248.07,248.083,248.07C385.089,496.155,496.159,385.086,496.159,248.086z"></path>
              <g>
                <path
                  style="fill: #ffffff"
                  d="M259.432,128.917c-3.409-1.851-7.559-1.688-10.813,0.425l-95.137,61.791h-35.164 c-5.845,0-10.583,4.738-10.583,10.582v92.728c0,5.845,4.738,10.583,10.583,10.583h35.164l95.137,61.79 c1.748,1.135,3.754,1.708,5.765,1.708c1.733,0,3.471-0.426,5.049-1.283c3.41-1.852,5.534-5.42,5.534-9.301V138.219 C264.966,134.339,262.842,130.768,259.432,128.917z"></path>
                <path
                  style="fill: #ffffff"
                  d="M355.405,248.079l30.384-30.384c3.515-3.516,3.515-9.213,0-12.729 c-3.515-3.514-9.213-3.514-12.728,0l-30.384,30.385l-30.384-30.385c-3.515-3.514-9.213-3.514-12.728,0 c-3.515,3.516-3.515,9.213,0,12.729l30.385,30.384l-30.384,30.384c-3.515,3.516-3.515,9.213,0,12.729 c1.757,1.757,4.061,2.636,6.364,2.636c2.303,0,4.606-0.879,6.364-2.636l30.384-30.385l30.384,30.385 c1.757,1.757,4.061,2.636,6.364,2.636c2.303,0,4.606-0.879,6.364-2.636c3.515-3.516,3.515-9.213,0-12.729L355.405,248.079z"></path>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
`;

document.addEventListener('DOMContentLoaded', (event) => {
  document.body.insertAdjacentHTML('beforeend', popupHtml);
  var muted_event = document.getElementById('video-overlay');
  var close_event = document.getElementById('video-close');
  muted_event.addEventListener('click', (ev) => {
    var video_obj = document.getElementById('video-intro');
    var btn_muted = document.getElementById('video-muted');
    if (video_obj) {
      video_obj.muted = !video_obj.muted;
      //console.log(video_obj, video_obj.muted);
      if (!video_obj.muted) {
        btn_muted.style.display = 'none';
        //video_obj.load();
        //video_obj.play();
      } else {
        btn_muted.style.display = 'block';
      }
    }
  });

  close_event.addEventListener('click', (ev) => {
    var video_intro = document.getElementById('video-intro-block');
    video_intro.remove();
  });
});
