void (function onLoad() {

		var modal        = document.querySelector('.focus-modal');
		var modalButton  = document.querySelector('.focus-modal-button');
		var modalOverlay = document.querySelector('.focus-modal-overlay');
		var cancelButton = document.querySelector('.focus-modal-cancel');
		var selector = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';

        var elements = $('.focus-modal').find(selector);
        var first = elements[0];
        var last = elements.slice(-1)[0];
        console.log(first);
        console.log(last);
		modalButton.addEventListener('click', open);
		cancelButton.addEventListener('click', close);

		var lastFocus;

		function open() {
		  // Show the modal and overlay
		  lastFocus = document.activeElement;
		  modal.style.display = 'block';
		  modalOverlay.style.display = 'block';
		  first.focus();
		}

		function close() {
		  // Hide the modal and overlay
		  modal.style.display = 'none';
		  modalOverlay.style.display = 'none';
		  lastFocus.focus();
		}

        $(first).bind('keydown', function trapStart(event) {
          console.log('trapStart', event.keyCode);
          if (event.keyCode === 9 && event.shiftKey) {
          	event.preventDefault();
            last.focus();
          }
        });
        $(last).bind('keydown', function trapEnd(event) {
          console.log('trapEnd', event.keyCode);
          if (event.keyCode === 9 && !event.shiftKey) {
          	event.preventDefault();
            first.focus();
          }
        });

      })(); 
