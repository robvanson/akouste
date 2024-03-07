// Shuffle stimuli or not
ShuffleStimulusList = true;

// If practice items > 0, the last PracticeItems stimuli will be 
// prepended in reverse order. (NOT YET IMPLEMENTED)
PracticeItems = 4;

// Set number of visible sliders
var NumberOfScales = 1;

// Allow to dynamically change the base URL of the stimulus files
var audioBaseURL = ""; // Default = nothing
// Example, if located at Github, read from URL
if(document.location.href.match(/github\.io\/akouste/)){ 
	audioBaseURL = "https://www.fon.hum.uva.nl/rob/PseudonymizedSpeechExp/";
};

// Add languages to your heart's content
var languageSet = new Set(["EN", "NL"]);

// Define language specific texts
var TitleText = [];
var IntroductionText = [];
var StimulusNumberText = [];
var PlayAText = [];
var NextText = [];
var HeaderLineText0 = [];
var RightText0 = [];
var LeftText0 = [];
var LK5label = new Array(2);
// Use actual NumberOfScales defined
LK5label ["EN"] = Array.from({length: 3}, e => Array(5).fill(0));
LK5label ["NL"] = Array.from({length: 3}, e => Array(5).fill(0));
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
PageTitleText ["EN"] = "Likert 5 point scale Listening Experiment";
TitleText ["EN"] = "How distorted is the speech?";
IntroductionText ["EN"] = "The speech has been manipulated. How distorted does it sound?";
StimulusNumberText ["EN"] = "XXX answers to go";
PlayAText ["EN"] = " Speech &#9658; ";
NextText ["EN"] = "Next &rarr;";
HeaderLineText0 ["EN"] = "The speech sounds distorted";
RightText0 ["EN"] = "Strongly disagree";
LeftText0 ["EN"] = "Strongly agree";
LK5label ["EN"] [0] [0] = "&nbsp;";
LK5label ["EN"] [0] [1] = "agree";
LK5label ["EN"] [0] [2] = "neutral";
LK5label ["EN"] [0] [3] = "disagree";
LK5label ["EN"] [0] [4] = "&nbsp;";
HeaderLineText1 ["EN"] = "The speech sounds distorted";
RightText1 ["EN"] = "Strongly disagree";
LeftText1 ["EN"] = "Strongly agree";
LK5label ["EN"] [1] [0] = "&nbsp;";
LK5label ["EN"] [1] [1] = "agree";
LK5label ["EN"] [1] [2] = "neutral";
LK5label ["EN"] [1] [3] = "disagree";
LK5label ["EN"] [1] [4] = "&nbsp;";
HeaderLineText2 ["EN"] = "The speech sounds distorted";
RightText2 ["EN"] = "Strongly disagree";
LeftText2 ["EN"] = "Strongly agree";
LK5label ["EN"] [2] [0] = "&nbsp;";
LK5label ["EN"] [2] [1] = "agree";
LK5label ["EN"] [2] [2] = "neutral";
LK5label ["EN"] [2] [3] = "disagree";
LK5label ["EN"] [2] [4] = "&nbsp;";
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

PageTitleText ["NL"] = "Likert 5 punt schaal Luisterexperiment";
TitleText ["NL"] = "Hoe vervormd klinkt de spraak?";
IntroductionText ["NL"] = "De spraak is gemanipuleerd. Hoe vervormd klinkt het?";
StimulusNumberText ["NL"] = "XXX antwoorden te gaan";
PlayAText ["NL"] = " Spraak &#9658; ";
NextText ["NL"] = "Volgende &rarr;";
HeaderLineText0 ["NL"] = "De spraak klinkt vervormd";
RightText0 ["NL"] = "Helemaal<br />mee oneens";
LeftText0 ["NL"] = "Helemaal<br />mee eens";
LK5label ["NL"] [0] [0] = "&nbsp;";
LK5label ["NL"] [0] [1] = "mee eens";
LK5label ["NL"] [0] [2] = "neutraal";
LK5label ["NL"] [0] [3] = "mee oneens";
LK5label ["NL"] [0] [4] = "&nbsp;";
HeaderLineText1 ["NL"] = "De spraak klinkt vervormd";
RightText1 ["NL"] = "Helemaal<br />mee oneens";
LeftText1 ["NL"] = "Helemaal<br />mee eens";
LK5label ["NL"] [1] [0] = "&nbsp;";
LK5label ["NL"] [1] [1] = "mee eens";
LK5label ["NL"] [1] [2] = "neutraal";
LK5label ["NL"] [1] [3] = "mee oneens";
LK5label ["NL"] [1] [4] = "&nbsp;";
HeaderLineText2 ["NL"] = "De spraak klinkt vervormd";
RightText2 ["NL"] = "Helemaal<br />mee oneens";
LeftText2 ["NL"] = "Helemaal<br />mee eens";
LK5label ["NL"] [2] [0] = "&nbsp;";
LK5label ["NL"] [2] [1] = "mee eens";
LK5label ["NL"] [2] [2] = "neutraal";
LK5label ["NL"] [2] [3] = "mee oneens";
LK5label ["NL"] [2] [4] = "&nbsp;";
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

// Copy all scale button texts for "undefined" scales
languageArray = Array.from(languageSet);
for(var l in languageArray) {
	for(var j = 0; j < 5; j++) {
		for(var i = 1; i < NumberOfScales; i++) {		
			if ( LK5label [languageArray [l]] [i] [j] == 0 ) {
				LK5label [languageArray [l]] [i] [j] = LK5label [languageArray [l]] [0] [j];
			};
		};
	};
};


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
	
	document.getElementById('PageTitleText').innerHTML = PageTitleText[language];
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
	for(var j = 0; j < 5; j++) {
		document.getElementById('LK5.0-'+(j+1)).innerHTML = LK5label [language] [0] [j];
	};

	// Make the required number of sliders visible
	for(var i = 1; i < NumberOfScales; i++) {
		document.getElementById('EmptyRow'+i).style.display = '';
		document.getElementById('HeaderLineRow'+i).style.display = '';
		document.getElementById('LK5row'+i).style.display = '';
		document.getElementById('HeaderLineText'+i).style.visibility = 'visible';
		document.getElementById('RightText'+i).style.visibility = 'visible';
		document.getElementById('LeftText'+i).style.visibility = 'visible';
		for(var j = 0; j < 5; j++) {
			document.getElementById('LK5.'+ i +'-'+(j+1)).innerHTML = LK5label [language] [i] [j];
		};
	};
};
