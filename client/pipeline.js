// On load
window.onload = loadPx;

// Buttons
var submitPxBtnEl = document.getElementById('submitPx');
var savePxBtnEl = document.getElementById('saveInfo');
var loadPxBtnEl = document.getElementById('loadInfo');

// Creating the elements for the form
var hveListEl = document.getElementById('hveSch');

var historyHVE = [];

// Functions 

// Function - Add PX 

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
};

submitPxBtnEl.addEventListener("click", addPx);

// Function - Load PX 

function loadPx () {
    var loadedInfo = JSON.parse(localStorage.getItem("enteredPx"));
    console.log(loadedInfo);
    console.log(loadedInfo.length);

    for (i=0; i < loadedInfo.length; i ++) {
        console.log(
            "first name: " + loadedInfo[i][0],
            "last name: " + loadedInfo[i][1],
            "study: " + loadedInfo[i][2],
        );
    }
};

loadPxBtnEl.addEventListener("click", loadPx);

// Function - Save PX 

function savePx () {
    localStorage.setItem("enteredPx", JSON.stringify(historyHVE));
}

savePxBtnEl.addEventListener("click", savePx);

//