/**
 * Adds or removes a red border to indicate invalid input.
 * @param {HTMLElement} inputEl
 * @param {boolean} isInvalid
 */
function setInputErrorStyle(inputEl, isInvalid) {
  inputEl.style.border = isInvalid ? '1.5px solid red' : '';
}


export function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export function validateRequired(value) {
  return value !== null && value.trim() !== '';
}

export function initNoSpaceValidation() {
  document.querySelectorAll('[nospace-input]').forEach((inputEl) => {
    // Prevent leading space and limit length to 10 on keydown
    inputEl.addEventListener("keydown", (e) => {
      const value = inputEl.value;
      const isLeadingSpace = e.key === " " && inputEl.selectionStart === 0 && value.length === 0;
      const isMaxLengthReached = value.length >= 10 && !["Backspace", "Delete", "ArrowLeft", "ArrowRight"].includes(e.key);

      if (isLeadingSpace || isMaxLengthReached) {
        setInputErrorStyle(inputEl, true);
        e.preventDefault();
      }
    }); 

    // Prevent paste if it would result in invalid input
    inputEl.addEventListener("paste", (e) => {
      const paste = (e.clipboardData || window.clipboardData).getData('text');
      const currentValue = inputEl.value;
      const selectionStart = inputEl.selectionStart || 0;
      const selectionEnd = inputEl.selectionEnd || 0;

      const newValue =
        currentValue.slice(0, selectionStart) + paste + currentValue.slice(selectionEnd);

      const isInvalid = newValue.startsWith(" ") || newValue.trim() === "" || newValue.length > 10;

      if (isInvalid) {
        setInputErrorStyle(inputEl, true);
        e.preventDefault();
      }
    });

    // Handle input event: actively fix invalid input, including input suggestions
    inputEl.addEventListener("input", () => {
      let value = inputEl.value;

      // Remove leading spaces if any
      if (value.startsWith(" ")) {
        value = value.trimStart();
      }

      // Truncate length to max 10 characters
      if (value.length > 10) {
        value = value.slice(0, 10);
      }

      // Update input value if changed (fix invalid input)
      if (inputEl.value !== value) {
        inputEl.value = value;
      }

      // Set error style if invalid
      const isInvalid = value.startsWith(" ") || value.trim() === "" || value.length > 10;
      setInputErrorStyle(inputEl, isInvalid);
    });
  });
}

export function validatePhone() {
  document.querySelectorAll('[phone-input]').forEach((inputEl) => {
    inputEl.addEventListener('keydown', (e) => {
      const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab', 'Delete'];
      const isDigit = /^\d$/.test(e.key);

      if (allowedKeys.includes(e.key)) return;

      const digits = inputEl.value.replace(/\D/g, '');

      // Block 0 as the first digit entered
      if (!digits.length && e.key === '0') {
        e.preventDefault();
        return;
      }

      // Block any input after 9 digits (since we auto-prefix 0)
      if (!isDigit || digits.length >= 10) {
        e.preventDefault();
      }
    });

    inputEl.addEventListener('input', () => {
      let digits = inputEl.value.replace(/\D/g, '');

      // Prevent starting with 0 manually
      if (digits.startsWith('0')) {
        digits = digits.slice(1);
      }

      // Limit to 9 digits (we will add 0 in front)
      digits = digits.slice(0, 9);

      // Add prefix 0
      digits = '0' + digits;

      let formatted = '';
      if (digits.length > 6) {
        formatted = digits.slice(0, 3) + ' ' + digits.slice(3, 6) + ' ' + digits.slice(6);
      } else if (digits.length > 3) {
        formatted = digits.slice(0, 3) + ' ' + digits.slice(3);
      } else {
        formatted = digits;
      }

      inputEl.value = formatted;
    });
  });
}
