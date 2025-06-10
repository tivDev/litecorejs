export function playSoundSuccess(filePath = '/public/assets/sounds/touchid_success.mp3') {
  const audio = new Audio(filePath);
  audio.play();
}


