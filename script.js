

function displayText(textToDisplay) {
    var intro = "<h1>Introduction</h1><br><p>Nam eget diam sit amet enim ultrices aliquam. Duis pellentesque sapien venenatis sapien sodales, nec bibendum nunc euismod. Vivamus pellentesque dictum enim et hendrerit. Mauris at ullamcorper diam. Donec imperdiet dui pharetra, venenatis lacus non, sollicitudin ex. Donec ornare eu augue congue congue.</p>";
    var info = "<h1>Information about me</h1><br><p>Duis pellentesque sapien venenatis sapien sodales, nec bibendum nunc euismod. Vivamus pellentesque dictum enim et hendrerit. Mauris at ullamcorper diam. Donec imperdiet dui pharetra, venenatis lacus non, sollicitudin ex. Donec ornare eu augue congue congue.</p>";
    var portfolio = "<h1>Portfolio</h1><p>Nam eget diam sit amet enim ultrices aliquam.</p>"
    var contact = "<h1>Portfolio</h1><div>Display portfolio</div>"

    if (textToDisplay == "intro") {
        document.getElementById("mainDisplay").innerHTML = intro;
    }

    else if (textToDisplay == "info") {
        document.getElementById("mainDisplay").innerHTML = info;
    }

    else if (textToDisplay == "portfolio") {
        document.getElementById("mainDisplay").innerHTML = portfolio;
    }

    else if (textToDisplay == "contact") {
        document.getElementById("mainDisplay").innerHTML = contact;
    }
}