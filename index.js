import { validateEmail, validateRequired, initNoSpaceValidation,validatePhone } from './src/validateInput.js';
import { showModal } from './src/modal.js';
import { playSoundSuccess } from './src/sound.js';

const liteCoreJS = {
  validateEmail,
  validateRequired,
  initNoSpaceValidation,
  validatePhone,
  showModal,
  playSoundSuccess
};

liteCoreJS.initNoSpaceValidation();
liteCoreJS.validatePhone();
// Make globally available
window.liteCoreJS = liteCoreJS;

export default liteCoreJS;
