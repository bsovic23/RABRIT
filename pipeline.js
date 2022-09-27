// Collected the information from the participant information

// Creating the elements for the form

var submitPxBtnEl = document.getElementById('submitPx');

var hveListEl = document.getElementById('hveSch');


// Function

function addPx() {
    var firstNameEl = document.getElementById('fn').value;
    var lastNameEl = document.getElementById('ln').value;

    divEl = document.createElement('div');
    h1El = document.createElement('h1');
    h2El = document.createElement('h2');

    h1El.textContent = firstNameEl;
    h2El.textContent = lastNameEl;

    divEl.appendChild(h1El);
    divEl.appendChild(h2El);

    hveListEl.appendChild(divEl);
};

submitPxBtnEl.addEventListener("click", addPx);