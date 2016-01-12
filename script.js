var audio = new Audio('FF6finger.wav');
var playerVictory;
var playerGameOver;

// Loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// This function creates an <iframe> (and YouTube player)
// after the API code downloads.
function onYouTubeIframeAPIReady() {
  // Victory
  playerVictory = new YT.Player('playerVictory', {
    loop: true,
    videoId: 'ZMovw9o9YCk',
    events: {
      'onReady': function(event) {
        //event.target.playVideo();
      },
      'onStateChange': function(event) {
        if (event.data == YT.PlayerState.PLAYING) {
          // Video is playing
        }
      }
    }
  });

  // Game over
  playerGameOver = new YT.Player('playerGameOver', {
      videoId: 'Y6Y1XtPoDv8',
      loop: true,
      events: {
          onReady: function (e) {
              // 'video is loaded';
          },
          onStateChange: function (event) {
              if (event.data === 1) {
                  // 'video started playing';
              }
          }
      }
  });
}

$('#yes').click(function(){
    // to play finger sound
    audio.play();

    // Move finger
    $("#hand").css('left', 415);

    // Show win sprite
    $('.win').show();
    $('.stand').hide();
    $('.dead').hide();

    playerVictory.playVideo();
    playerGameOver.pauseVideo();
});

$('#no').click(function(){
    // to play finger sound
    audio.play();

    // Move finger
    $("#hand").css('left', 575);

    // Show win sprite
    $('.dead').show();
    $('.stand').hide();
    $('.win').hide();

    playerVictory.pauseVideo();
    playerGameOver.playVideo();
});







