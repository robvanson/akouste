// Shuffle stimuli or not
ShuffleStimulusList = true;
// If practice items > 0, the last PracticeItems stimuli will be 
// prepended in reverse order. (NOT YET IMPLEMENTED)
PracticeItems = 4;

// Set language
var language = "NL";

// Define language specific texts
var TitleText = [];
var IntroductionText = [];
var StimulusNumberText = [];
var PlayAText = [];
var NextText = [];
var LeftText = [];
var RightText = [];
var ReadyText = [];
var SaveText = [];
var SaveLinkText = [];
var RestartPageText = [];
var RestartButtonText = [];
var NextAlert = [];

// Specify language specific texts
// Language = EN
TitleText ["EN"] = "How distorted is the speech?";
IntroductionText ["EN"] = "The speech has been manipulated. How distorted does it sound?";
StimulusNumberText ["EN"] = "XXX answers to go";
PlayAText ["EN"] = " Speech &#9658; ";
NextText ["EN"] = "Next &rarr;";
LeftText ["EN"] = "Not at all<br />distorted";
RightText ["EN"] = "Very<br />distorted";
ReadyText ["EN"] = "Ready";
SaveLinkText ["EN"] = 'Save Results';
RestartPageText ["EN"] = 'Restart';
SaveText ["EN"] = 'Please, click "'+SaveLinkText ["EN"] + '" and store the file';
RestartButtonText ["EN"] = 'The experiment can be restarted by clicking "'+RestartPageText ["EN"]+'"';
NextAlert ["EN"] = "Please, listen to the recording and select a level";

// Language = NL
TitleText ["NL"] = "Hoe vervormd klinkt de spraak?";
IntroductionText ["NL"] = "De spraak is gemanipuleerd. Hoe vervormd klinkt het?";
StimulusNumberText ["NL"] = "XXX antwoorden te gaan";
PlayAText ["NL"] = " Spraak &#9658; ";
NextText ["NL"] = "Volgende &rarr;";
LeftText ["NL"] = "Helemaal niet<br />vervormd";
RightText ["NL"] = "Heel erg<br \>vervormd";
ReadyText ["NL"] = "Klaar";
SaveLinkText ["NL"] = 'Bewaar resultaten';
RestartPageText ["NL"] = 'Opnieuw';
SaveText ["NL"] = 'Klik AUB op "'+SaveLinkText ["NL"] + '" en sla het bestand op';
RestartButtonText ["NL"] = 'Het experiment kan opnieuw gestart worden door op "'+RestartPageText ["NL"]+'" te drukken';
NextAlert ["NL"] = "Luister naar de opname en selecteer een anwoord, AUB";

// Funtion that changes the texts
function replaceTexts (language) {
	document.getElementById('TitleText').innerHTML = TitleText[language];
	document.getElementById('IntroductionText').innerHTML = IntroductionText[language];
	document.getElementById('StimulusNumberText').innerHTML = StimulusNumberText[language];
	document.getElementById('PlayAText').innerHTML = PlayAText[language];
	document.getElementById('NextText').innerHTML = NextText[language];
	document.getElementById('LeftText').innerHTML = LeftText[language];
	document.getElementById('RightText').innerHTML = RightText[language];
	document.getElementById('RestartPageText').innerHTML = RestartPageText[language];
};
