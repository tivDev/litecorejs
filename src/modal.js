export function showModal(title, message) {
  const modal = document.createElement('div');
  modal.style = `
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0,0,0,0.5); display: flex;
    align-items: center; justify-content: center; z-index: 1000;
  `;
  modal.innerHTML = `
    <div style="background: white; padding: 20px; border-radius: 8px; min-width: 400px;">
      <div class="header-modal">
        <h2>${title}</h2>
      </div>
      <div class="modal-content">
      <p>${message}</p>
      </div>
      <button class="btn" onclick="this.parentElement.parentElement.remove()">Close</button>
      <button class="btn" onclick="this.parentElement.parentElement.remove()">Yes</button>
    </div>
  `;
  document.body.appendChild(modal);
}

