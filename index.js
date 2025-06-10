import { validateEmail, validateRequired, initNoSpaceValidation,validatePhone } from './src/validateInput.js';
import { showModal } from './src/modal.js';
import { playSoundSuccess } from './src/sound.js';
import { hoverZoom } from './src/img.js';

const liteCoreJS = {
  validateEmail,
  validateRequired,
  initNoSpaceValidation,
  validatePhone,
  showModal,
  playSoundSuccess,
  hoverZoom
};

liteCoreJS.initNoSpaceValidation();
liteCoreJS.validatePhone();
liteCoreJS.hoverZoom();
// Make globally available
window.liteCoreJS = liteCoreJS;

export default liteCoreJS;
