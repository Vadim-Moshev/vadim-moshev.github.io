const audios = document.querySelectorAll("audio");

audios.forEach((audio, idx) => {
  audio.dataset.idx = idx;
});

audios.forEach((audio) => {
  audio.onplay = (event) => {
    audios.forEach((otherAudio) => {
      if (otherAudio.dataset.idx !== event.target.dataset.idx) {
        otherAudio.pause();
      }
    });
  };
});
