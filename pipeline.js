// Collected the information from the participant information

// Creating the elements for the form

var submitPxBtnEl = document.getElementById('submitPx');

var hveListEl = document.getElementById('hveSch');

var historyHVE = [];

// Function
function addPx() {
    var firstNameEl = document.getElementById('fn').value;
    var lastNameEl = document.getElementById('ln').value;

    var studyChosen = "";

    if (document.getElementById('study1').checked == true) {
        studyChosen = 1;
    } else if (document.getElementById('study2').checked == true) {
        studyChosen = 2;
    } else if (document.getElementById('study3').checked == true) {
        studyChosen = 3;
    } else (console.log('a study was not chosen'));

    divEl = document.createElement('div');
    h1El = document.createElement('h1');
    h2El = document.createElement('h2');
    h3El = document.createElement('h3');

    h1El.textContent = firstNameEl;
    h2El.textContent = lastNameEl;
    h3El.textContent = studyChosen;

    divEl.appendChild(h1El);
    divEl.appendChild(h2El);
    divEl.appendChild(h3El);

    hveListEl.appendChild(divEl);

    historyHVE.push([firstNameEl, lastNameEl, studyChosen])

    console.log(historyHVE);
};

submitPxBtnEl.addEventListener("click", addPx);