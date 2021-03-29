/*Contact Modal */

var contactModal = document.getElementById("contactModal");
var contactBtn = document.getElementById("contactBtn");
var contactClose = document.getElementsByClassName("contactClose")[0];

contactBtn.onclick = function() {
    contactModal.style.display = "block";
}

contactClose.onclick = function() {
    contactModal.style.display = "none";
}



/*Info Modal */

var infoModal = document.getElementById("infoModal");
var infoBtn = document.getElementById("infoBtn");
var infoClose = document.getElementsByClassName("infoClose")[0];

infoBtn.onclick = function() {
    infoModal.style.display = "block";
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
}