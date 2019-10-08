// Shuffle stimuli or not
ShuffleStimulusList = true;

// If practice items > 0, the last PracticeItems stimuli will be 
// prepended in reverse order. (NOT YET IMPLEMENTED)
PracticeItems = 4;

// Set number of visible sliders
var NumberOfScales = 1;

// Add languages to your heart's content
var languageSet = new Set(["EN"]);

// Define language specific texts
var TitleText = [];
var IntroductionText = [];
var StimulusNumberText = [];
var PlayAText = [];
var NextText = [];
var HeaderLineText0 = [];
var RightText0 = [];
var LeftText0 = [];
var HeaderLineText1 = [];
var RightText1 = [];
var LeftText1 = [];
var HeaderLineText2 = [];
var RightText2 = [];
var LeftText2 = [];
var ReadyText = [];
var SaveText = [];
var SaveLinkText = [];
var RestartPageText = [];
var RestartButtonText = [];
var NextAlert = [];
var ToolTipPlayA = [];
var ToolTipNext = [];
var ToolTipSave = [];
var ToolTipRestart = [];

// Specify language specific texts
// Language = EN
TitleText ["EN"] = "How distorted is the speech?";
IntroductionText ["EN"] = "The speech has been manipulated. How distorted does it sound?";
StimulusNumberText ["EN"] = "XXX answers to go";
PlayAText ["EN"] = " Speech &#9658; ";
NextText ["EN"] = "Next &rarr;";
HeaderLineText0 ["EN"] = "The speech sounds distorted";
RightText0 ["EN"] = "Not at all";
LeftText0 ["EN"] = "Very";
HeaderLineText1 ["EN"] = "The speech sounds distorted";
RightText1 ["EN"] = "Not at all";
LeftText1 ["EN"] = "Very";
HeaderLineText2 ["EN"] = "The speech sounds distorted";
RightText2 ["EN"] = "Not at all";
LeftText2 ["EN"] = "Very";
ReadyText ["EN"] = "Ready";
SaveLinkText ["EN"] = 'Save Results';
RestartPageText ["EN"] = 'Restart';
SaveText ["EN"] = 'Please, click "'+SaveLinkText ["EN"] + '" and store the file';
RestartButtonText ["EN"] = 'The experiment can be restarted by clicking "'+RestartPageText ["EN"]+'"';
NextAlert ["EN"] = "Please, listen to the recording and select a level";
ToolTipPlayA ["EN"] = "Play sound";
ToolTipNext ["EN"] = "Go to next item";
ToolTipSave ["EN"] = "Save the answer to a file";
ToolTipRestart ["EN"] = "Start a new experiment session";

// Add Language = NL
languageSet.add("NL");

TitleText ["NL"] = "Hoe vervormd klinkt de spraak?";
IntroductionText ["NL"] = "De spraak is gemanipuleerd. Hoe vervormd klinkt het?";
StimulusNumberText ["NL"] = "XXX antwoorden te gaan";
PlayAText ["NL"] = " Spraak &#9658; ";
NextText ["NL"] = "Volgende &rarr;";
HeaderLineText0 ["NL"] = "De spraak klinkt vervormd";
RightText0 ["NL"] = "Helemaal niet";
LeftText0 ["NL"] = "Heel erg";
HeaderLineText1 ["NL"] = "De spraak klinkt vervormd";
RightText1 ["NL"] = "Helemaal niet";
LeftText1 ["NL"] = "Heel erg";
HeaderLineText2 ["NL"] = "De spraak klinkt vervormd";
RightText2 ["NL"] = "Helemaal niet";
LeftText2 ["NL"] = "Heel erg";
ReadyText ["NL"] = "Klaar";
SaveLinkText ["NL"] = 'Bewaar resultaten';
RestartPageText ["NL"] = 'Opnieuw';
SaveText ["NL"] = 'Klik AUB op "'+SaveLinkText ["NL"] + '" en sla het bestand op';
RestartButtonText ["NL"] = 'Het experiment kan opnieuw gestart worden door op "'+RestartPageText ["NL"]+'" te drukken';
NextAlert ["NL"] = "Luister naar de opname en selecteer een anwoord, AUB";
ToolTipPlayA ["NL"] = "Luister naar de spreker";
ToolTipNext ["NL"] = "Ga naar de volgende stimulus";
ToolTipSave ["NL"] = "Bewaar de antwoorden in een bestand";
ToolTipRestart ["NL"] = "Begin een nieuwe luster sessie";

// Set language
var language = "NL";
var userLanguage = (navigator.language) ? navigator.language : navigator.userLanguage;
userLanguage = userLanguage.substr(0,2).toUpperCase();
if (languageSet.has(userLanguage)) {
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
	document.getElementById('NextText').innerHTML = NextText[language];
	document.getElementById('HeaderLineText0').innerHTML = HeaderLineText0[language];
	document.getElementById('RightText0').innerHTML = RightText0[language];
	document.getElementById('LeftText0').innerHTML = LeftText0[language];
	document.getElementById('HeaderLineText1').innerHTML = HeaderLineText1[language];
	document.getElementById('RightText1').innerHTML = RightText1[language];
	document.getElementById('LeftText1').innerHTML = LeftText1[language];
	document.getElementById('HeaderLineText2').innerHTML = HeaderLineText1[language];
	document.getElementById('RightText2').innerHTML = RightText2[language];
	document.getElementById('LeftText2').innerHTML = LeftText2[language];
	document.getElementById('RestartPageText').innerHTML = RestartPageText[language];
	document.getElementById('ToolTipPlayA').title = ToolTipPlayA [language];
	document.getElementById('ToolTipNext').title = ToolTipNext [language];
	document.getElementById('ToolTipSave').title = ToolTipSave [language];
	document.getElementById('ToolTipRestart').title = ToolTipRestart [language];

	// Make the required number of sliders visible
	for(var i = 1; i < NumberOfScales; i++) {
		document.getElementById('EmptyRow'+i).style.display = '';
		document.getElementById('HeaderLineRow'+i).style.display = '';
		document.getElementById('VASrow'+i).style.display = '';
		document.getElementById('HeaderLineText'+i).style.visibility = 'visible';
		document.getElementById('RightText'+i).style.visibility = 'visible';
		document.getElementById('LeftText'+i).style.visibility = 'visible';
		document.getElementById('VASslider'+i).style.visibility = 'visible';
	};
};
