'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var modal = document.querySelector('.modal');
  var buttonClose = document.querySelector('.modal__shut');
  var buttonOpen = document.querySelector('.button--modal-open');
  var fieldName = document.querySelector('.modal__item input[type="text"]');
  var overlay = document.querySelector('.overlay');

  var onOpenPopup = function () {
    modal.classList.remove('modal--closed');
    modal.classList.add('modal--opened');
    overlay.classList.remove('overlay--closed');
    overlay.classList.add('overlay--opened');
    document.addEventListener('keydown', onPopupEscPress);
    fieldName.focus();
  };

  var closePopup = function () {
    modal.classList.add('modal--closed');
    modal.classList.remove('modal--opened');
    overlay.classList.add('overlay--closed');
    overlay.classList.remove('overlay--opened');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
    }
  };

  buttonOpen.addEventListener('click', onOpenPopup);
  buttonClose.addEventListener('click', function () {
    closePopup();
  });
  overlay.addEventListener('click', function () {
    closePopup();
  });
})();
