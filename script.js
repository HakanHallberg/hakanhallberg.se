

function displayText(textToDisplay) {
    var intro = "<h1>FrontEnd Utvecklare och certifierad ServiceNow administratör i Stockholm</h1><br><p>Behöver du eller ditt företag en hemsida, eller vill ni uppdatera den ni redan har?</p><br><p>Använder ni ServiceNow och är i behov av en administratör/utvecklare?</p><br><p>Kontakta mig för mindre eller större projekt, alternativt för en möjlig anställning.</p>";

    var info = "<h1>Vem är jag?</h1><br><p>Jag heter Håkan Hallberg. Jag är född och uppvuxen på Gotland i Visby. Flyttlasset gick till Stockholm 2001 då jag ville testa något nytt och komma bort ett tag ifrån ön. Sen blev jag kvar i Stockholm och bor idag här med 2 barn varannan vecka.</p><br><p>Jag har tidigare jobbat inom många olika branscher, mest inom vården. Efter över 10 år inom samma yrke kände jag dock att det var dags att gå vidare, och det var då jag påbörjade jakten på en karriär inom IT.</p><br><p>Jag avslutade en 2-årig YH-utbildning som systemutvecklare inom SharePoint innan sommaren 2018. Utbildningen hade dock inte bara fokus på SharePoint, utan både frontend (JavaScript), backend (C#) och databasteknik, och mitt stora intresse är frontend. jag håller på och lär mig React, vilket jag trivs väldigt bra att jobba med. I december 2018 fick jag upp ögonen för ServiceNow, vilket jag har jobbat med sedan dess. 2019 blev jag certifierad ServiceNow Administratör.</p>";

    /*     var blog = "<h1>Blog</h1><p>Nam eget diam sit amet enim ultrices aliquam. Duis pellentesque sapien venenatis sapien sodales, nec bibendum nunc euismod. Vivamus pellentesque dictum enim et hendrerit. Mauris at ullamcorper diam. Donec imperdiet dui pharetra, venenatis lacus non, sollicitudin ex. Donec ornare eu augue congue congue.</p>" */

    var portfolio = "<h1>Portfolio</h1><h3>Portfolion är under konstruktion, kolla gärna på min <a href=https://github.com/HakanHallberg target=_blank alt=länk>Github</a> för att se tidigare projekt.</h3><br><h3>Jag finns även på <a href=https://www.linkedin.com/in/h%C3%A5kan-hallberg-2699ba128 target=_blank alt=linkedin>LinkedIn</a></h3>";

    var contact = "<h1>Kontakt</h1><br><h3>Kontakta mig gärna på hakan@hakanhallberg.se</h3>"

    /*     var contact = "<h1>Kontakt</h1><form class=form><lable for=email>Email</lable><br><input type=email name=email></input><br><lable for=message>Message</lable><br><textarea cols=40 rows=10 name=message></textarea><br><input type=submit value=submit></input></form>"; */

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

    else if (textToDisplay == "blog") {
        document.getElementById("mainDisplay").innerHTML = blog;
    }
}