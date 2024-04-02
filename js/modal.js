export const Modal = { //Object literal

  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal .title span"),
  buttonClose:document.querySelector(".modal button.close"),

  open: function() {
    Modal.wrapper.classList.add('open')
  },
  close() {
    Modal.wrapper.classList.remove('open')
  }
}

Modal.buttonClose.onclick = () => 
  Modal.close()

window.addEventListener('keydown', handleKeyDown)
function handleKeyDown(event) {
  if(event.key == 'Escape'){
    Modal.close()
  }
}