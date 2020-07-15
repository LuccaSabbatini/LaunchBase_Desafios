// HTML SELECTORS:
const body = document.querySelector('body');
const cards = document.querySelectorAll('.card');
const modalOverlay = document.querySelector('.modal-overlay');
const modal = modalOverlay.querySelector('.modal');
const fullscreenIcon = modal.querySelector('#fullscreen-icon');
const iframe = modal.querySelector('iframe');

// OBJECTS:
// Model Manager Object:
const modalManager = { 
    modalContent: function() { // Updates iframe content.
        iframe.src = arguments.length > 0 ? `https://rocketseat.com.br/${arguments[0]}` : ""; // If a card is clicked, iframe's content receives that card's id. If there are no parameters, iframe's contentet is reset to default.
    },
    modalSwitch: function() { // Opens or closes the modal.
        body.classList.toggle('hidden-overflow'); // Toggles 'hidden-overflow' class in body to make modal visible or invisible.
        modalOverlay.classList.toggle('active'); // Toggles 'active' class to modalOverlay in make modal visible or invisible.
        arguments.length > 0 ? this.modalContent(arguments[0]) : this.modalContent(); // If a card is clicked, iframe's content receives that card's id. If there are no parameters, iframe's contentet is reset to default.
    },
    modalSizeToggle: function() { // Switched between fullscreen and minimized modal view.
        const newIcon = fullscreenIcon.innerHTML == 'fullscreen' ? 'fullscreen_exit' : 'fullscreen'; // Switches the modal icon to the opposite of the current screen state.
    
        modal.classList.toggle('mini'); // Toggles 'mini' class in modal to select maximized or minimized CSS configurations.
        iframe.classList.toggle('mini'); // Toggles 'mini' class in modal's iframe to select maximized or minimized CSS configurations.
        fullscreenIcon.innerHTML = newIcon; // Updates screen size icon.
    },
    modalClose: function() { // Closes modal and resets it's content.
        modal.classList.add('mini'); // Adds 'mini' class in modal to select to reset modal to the default minimized size after closing.
        iframe.classList.add('mini'); // Adds 'mini' class in modal's iframe to reset modal to the default minimized size after closing.
        this.modalSwitch(); // Since there are no parameters, this call only closes the modal and resets it's content.
        fullscreenIcon.innerHTML = 'fullscreen'; // Resets screen size icon.
    },
    modalClickRegion: function(evt) { // Detects if click was inside or outside the modal limits.
        if (evt.target == modalOverlay) { // If click was in modalOverlay area, closes the modal.
            this.modalClose(); // Closes modal.
        }
    }
};

// FUNCTIONALITIES:
// Making the cards in section.cards clickable.
for (let card of cards) { // Goes through ever card in section.card.
    card.addEventListener("click", () => { modalManager.modalSwitch(card.getAttribute('id')); }); // Adds Click Event Listeners to every div.card in div.cards. Click opens the modal with the clicked card's info.
}

// Maximizing Modal:
modal.querySelector('.fullscreen-modal').addEventListener("click", () => { modalManager.modalSizeToggle(); }); // Adds Click Event Listener to .fullscreen-modal. Click switches between fullscreen and minimized modal view.

// Making the modal closeable:
modalOverlay.querySelector('.close-modal').addEventListener("click", () => { modalManager.modalClose(); }); // Adds Click Event Listener to .close-modal. Click closes the modal.
document.addEventListener("click", (evt) => { modalManager.modalClickRegion(evt); }); // Adds Click Event Listener to the area outside the modal. Click closes the modal.
