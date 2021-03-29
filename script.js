/*Contact Modal */

var contactModal = document.getElementById("contactModal");
var contactBtn = document.getElementById("contactBtn");
var contactClose = document.getElementsByClassName("contactClose")[0];

contactBtn.onclick = function() {
    contactModal.style.display = "table";
}

contactClose.onclick = function() {
    contactModal.style.display = "none";
}

/*Portfolio Modal */

var portfolioModal = document.getElementById("portfolioModal");
var portfolioBtn = document.getElementById("portfolioBtn");
var portfolioClose = document.getElementsByClassName("portfolioClose")[0];

portfolioBtn.onclick = function() {
    portfolioModal.style.display = "table";
}

portfolioClose.onclick = function() {
    portfolioModal.style.display = "none";
}

/*Info Modal */

var infoModal = document.getElementById("infoModal");
var infoBtn = document.getElementById("infoBtn");
var infoClose = document.getElementsByClassName("infoClose")[0];

infoBtn.onclick = function() {
    infoModal.style.display = "table";
}

infoClose.onclick = function() {
    infoModal.style.display = "none";
}

/*Close modal if click outside */

window.onclick = function(event) {
    if (event.target == infoModal) {
        infoModal.style.display = "none";
    } 
    else if (event.target == contactModal) {
        contactModal.style.display = "none";
    }

    else if (event.target == portfolioModal) {
        portfolioModal.style.display = "none";
    }
}