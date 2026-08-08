function startQuiz() {
    alert("Dann geht's los! ❤️");
}

let aktuelleFrage = 0;

const fragen = [
    {
        frage: "Was magst du am meisten an mir? 🥰",
        antworten: [
            "Dein Lächeln ❤️",
            "Deine Art 🥰",
            "Alles an dir 💕"
        ]
    },

    {
        frage: "Score wie sehr du mich magst 💭",
        antworten: [
            "100%",
            "75%",
            "50%"
        ]
    },

    {
        frage: "Wie wichtig bin ich dir? 💗",
        antworten: [
            "Sehr wichtig ❤️",
            "Extrem wichtig 🥰",
            "Du bist mir alles 💕 (wäre bissi komisch wenn du das drückst)"
        ]
    },

    {
        frage: "Nächstes Treffen? 🥺",
        antworten: [
            "Ja ❤️",
            "Natürlich 🥰",
        ]
    },

    {
        frage: "Bleib ich dein einziger zukünftiger Sozius? 💕",
        antworten: [
            "Ja 🥰",
            "Klar ❤️",
            "Für immer und ewig 💍 (wäre bissi cringe wenn du das drückst)"
        ]
    }
];


function startQuiz() {

    document.getElementById("startseite").style.display = "none";

    document.getElementById("quiz").style.display = "block";

    zeigeFrage();

}


function zeigeFrage() {

    const frage = fragen[aktuelleFrage];

    document.getElementById("frageNummer").innerText =
        `Frage ${aktuelleFrage + 1} von ${fragen.length}`;

    document.getElementById("frage").innerText =
        frage.frage;


    const antwortContainer =
        document.getElementById("antworten");

    antwortContainer.innerHTML = "";


    frage.antworten.forEach(function(antwortText) {

        const button = document.createElement("button");

        button.innerText = antwortText;

        button.onclick = function() {
            antwort(antwortText);
        };

        antwortContainer.appendChild(button);

    });

}


function antwort(antwortText) {

    console.log("Antwort:", antwortText);

    aktuelleFrage++;

    if (aktuelleFrage < fragen.length) {

        zeigeFrage();

    } else {

        quizFertig();

    }

}


function quizFertig() {

    document.getElementById("quiz").style.display = "none";

    document.getElementById("kalender").style.display = "block";

}

let ausgewaehltesDatum = "";
let ausgewaehlteAktivitaet = "";


function datumAuswaehlen() {

    const datum = document.getElementById("datum").value;

    if (datum === "") {

        alert("Bitte such zuerst einen Tag aus. ❤️");

        return;
    }

    ausgewaehltesDatum = datum;

    document.getElementById("kalender").style.display = "none";

    document.getElementById("aktivitaeten").style.display = "block";

}


function aktivitaetAuswaehlen(aktivitaet) {

    ausgewaehlteAktivitaet = aktivitaet;

    document.getElementById("aktivitaeten").style.display = "none";

    document.getElementById("ergebnis").style.display = "block";


    const datum = new Date(ausgewaehltesDatum);

    const datumFormatiert = datum.toLocaleDateString("de-DE", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric"
    });


    document.getElementById("ausgewaehltesDatum").innerText =
        "📅 " + datumFormatiert;

    document.getElementById("ausgewaehlteAktivitaet").innerText =
        "💕 " + ausgewaehlteAktivitaet;

}