// Shuffle stimuli or not
ShuffleStimulusList = true;
// If practice items > 0, the last PracticeItems stimuli will be 
// prepended in reverse order. (NOT YET IMPLEMENTED)
PracticeItems = 4;

// Add languages to your heart's content
var languageSet = ["EN", "NL"];

// Define language specific texts
var TitleText = [];
var IntroductionText = [];
var StimulusNumberText = [];
var PlayAText = [];
var PlayXText = [];
var PlayBText = [];
var AnswerAText = [];
var AnswerBText = [];
var YourChoiceText = [];
var NextText = [];
var ReadyText = [];
var SaveText = [];
var SaveLinkText = [];
var RestartPageText = [];
var RestartButtonText = [];
var ListenAlert = [];
var NextAlert = [];

// Specify language specific texts
TitleText ["EN"] = "Who is the unknown speaker? Spreaker A or B?";
IntroductionText ["EN"] = "The voices of the speakers have been changed. Which one do you think is the unknown speaker X?";
StimulusNumberText ["EN"] = "XXX answers to go";
PlayAText ["EN"] = " A &#9658; ";
PlayXText ["EN"] = " X &#9658; ";
PlayBText ["EN"] = " B &#9658; ";
AnswerAText ["EN"] = "A";
AnswerBText ["EN"] = "B";
YourChoiceText ["EN"] = "Your choice";
NextText ["EN"] = "Next &rarr;";
ReadyText ["EN"] = "Ready";
SaveLinkText ["EN"] = 'Save Results';
RestartPageText ["EN"] = 'Restart';
SaveText ["EN"] = 'Please, click "'+SaveLinkText ["EN"] + '" and store the file';
RestartButtonText ["EN"] = 'The experiment can be restarted by clicking "'+RestartPageText ["EN"]+'"';
ListenAlert ["EN"] = "Please, listen to the recordings before making a choice";
NextAlert ["EN"] = "Please, select an answer";

TitleText ["NL"] = "Wie is de onbekende spreker? Spreker A or B?";
IntroductionText ["NL"] = "De stemmen van de sprekers zijn vervormd. Wie denk je dat spreker X is?";
StimulusNumberText ["NL"] = "XXX antwoorden te gaan";
PlayAText ["NL"] = " A &#9658; ";
PlayXText ["NL"] = " X &#9658; ";
PlayBText ["NL"] = " B &#9658; ";
AnswerAText ["NL"] = "A";
AnswerBText ["NL"] = "B";
YourChoiceText ["NL"] = "Jouw keuze";
NextText ["NL"] = "Volgende &rarr;";
ReadyText ["NL"] = "Klaar";
SaveLinkText ["NL"] = 'Bewaar resultaten';
RestartPageText ["NL"] = 'Opnieuw';
SaveText ["NL"] = 'Klik AUB op "'+SaveLinkText ["NL"] + '" en sla het bestand op';
RestartButtonText ["NL"] = 'Het experiment kan opnieuw gestart worden door op "'+RestartPageText ["NL"]+'" te drukken';
ListenAlert ["NL"] = "AUB, luister eerst naar de opnamen, voordat je een keuze maakt";
NextAlert ["NL"] = "Selecteer een anwoord, AUB";


// Set language
var language = "NL";
var userLanguage = (navigator.language) ? navigator.language : navigator.userLanguage;
userLanguage = userLanguage.substr(0,2).toUpperCase();
if (userLanguage in languageSet) {
	language = userLanguage;
} else {
	language = "EN";
};

// Funtion that changes the texts
function replaceTexts (language) {
	document.getElementById('TitleText').innerHTML = TitleText[language];
	document.getElementById('IntroductionText').innerHTML = IntroductionText[language];
	document.getElementById('StimulusNumberText').innerHTML = StimulusNumberText[language];
	document.getElementById('PlayAText').innerHTML = PlayAText[language];
	document.getElementById('PlayXText').innerHTML = PlayXText[language];
	document.getElementById('PlayBText').innerHTML = PlayBText[language];
	document.getElementById('AnswerAText').innerHTML = AnswerAText[language];
	document.getElementById('AnswerBText').innerHTML = AnswerBText[language];
	document.getElementById('YourChoiceText').innerHTML = YourChoiceText[language];
	document.getElementById('NextText').innerHTML = NextText[language];
	document.getElementById('RestartPageText').innerHTML = RestartPageText[language];
};