import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";

export const successToast = (message) => {

  Toastify({
    text: message,
    duration: 3000,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "#A84D61",
    },
    onClick: function(){}
  }).showToast();
}
export const errorToast = () => {

  Toastify({
    text: MessageChannel,
    duration: 3000,
    close: true,
    gravity: "bottom"
  }).showToast();
}
export const warnToast = () => {

  Toastify({
    text: MessageChannel,
    duration: 3000,
    close: true,
    gravity: "bottom"
  }).showToast();
}
export const infoToast = () => {

  Toastify({
    text: MessageChannel,
    duration: 3000,
    close: true,
    gravity: "bottom"
  }).showToast();
}