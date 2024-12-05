// Name of the experiment, make it unique!
CurrentExperimentID = 'ID1-';

// Uncomment to unfix/fix language independent of browser settings
//FixedLanguage = 'NL';
FixedLanguage = false;

// Variable or fxed text. 
// If the text is variable (true), eg, by language, the text will be adapted by the code below.
// If the text is fixed (false), the text in the HTML page will be displayed as is. 
VariableText = true;

// Shuffle stimuli or not
ShuffleStimulusList = true;

// Set to true if each answer relates to two stimuli (A and B)
ShowPlayBbutton = false;
// Set to true if the A and B stimuli should be randomly change place.
RandomizeAB = false;

// Set true if it should be an AB binary choice experiment
BinaryChoiceExperiment = false;

// If practice items > 0, the last PracticeItems stimuli will be 
// prepended in reverse order.
PracticeItems = 4;

// Set number of visible questions (1-3)
var NumberOfScales = 3;

// Allow to dynamically change the base URL of the stimulus files
var audioBaseURL = "Stimuli/"; // Default = "Stimuli/", can be nothing ""
// Example, if located at Github, read from URL
if(document.location.href.match(/github\.io\/akouste/)){ 
	audioBaseURL = "https://www.fon.hum.uva.nl/rob/PseudonymizedSpeechExp/";
};

// Add languages to your heart's content
var languageSet = new Set(["EN"]);

// Define language specific texts
var TitleText = [];
var IntroductionText = [];
var StimulusNumberText = [];
var PlayAText = [];
var PlayBText = [];
var NextText = [];
var HeaderLineText0 = [];
var RightText0 = [];
var LeftText0 = [];
var LK3label = new Array(2);
// Use actual NumberOfScales defined
LK3label ["EN"] = Array.from({length: 3}, e => Array(3).fill(0));
LK3label ["NL"] = Array.from({length: 3}, e => Array(3).fill(0));
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
var ToolTipPlayB = [];
var ToolTipNext = [];
var ToolTipSave = [];
var ToolTipRestart = [];

// Specify language specific texts
// Language = EN
PageTitleText ["EN"] = "Likert 3 point scale Listening Experiment";
TitleText ["EN"] = "How distorted is the speech?";
IntroductionText ["EN"] = "The speech has been manipulated. How distorted does it sound?";
StimulusNumberText ["EN"] = "XXX answers to go";
PlayAText ["EN"] = " Speech &#9658; ";
PlayBText ["EN"] = " Speech &#9658; ";
NextText ["EN"] = "Next &rarr;";
HeaderLineText0 ["EN"] = "The speech sounds distorted";
RightText0 ["EN"] = "Strongly disagree";
LeftText0 ["EN"] = "Strongly agree";
LK3label ["EN"] [0] [0] = "&nbsp;";
LK3label ["EN"] [0] [1] = "neutral";
LK3label ["EN"] [0] [2] = "&nbsp;";
HeaderLineText1 ["EN"] = "The speech sounds distorted-2";
RightText1 ["EN"] = "Strongly disagree";
LeftText1 ["EN"] = "Strongly agree";
LK3label ["EN"] [1] [0] = "&nbsp;";
LK3label ["EN"] [1] [1] = "neutral";
LK3label ["EN"] [1] [2] = "&nbsp;";
HeaderLineText2 ["EN"] = "The speech sounds distorted-3";
RightText2 ["EN"] = "Strongly disagree";
LeftText2 ["EN"] = "Strongly agree";
LK3label ["EN"] [2] [0] = "&nbsp;";
LK3label ["EN"] [2] [1] = "neutral";
LK3label ["EN"] [2] [2] = "&nbsp;";
ReadyText ["EN"] = "Ready";
SaveLinkText ["EN"] = 'Save Results';
RestartPageText ["EN"] = 'Restart';
SaveText ["EN"] = 'Please, click "'+SaveLinkText ["EN"] + '" and store the file';
RestartButtonText ["EN"] = 'The experiment can be restarted by clicking "'+RestartPageText ["EN"]+'"';
NextAlert ["EN"] = "Please, listen to the recording and select a level";
ToolTipPlayA ["EN"] = "Play sound";
ToolTipPlayB ["EN"] = "Play sound";
ToolTipNext ["EN"] = "Go to next item";
ToolTipSave ["EN"] = "Save the answer to a file";
ToolTipRestart ["EN"] = "Start a new experiment session";

// Add Language = NL
languageSet.add("NL");

PageTitleText ["NL"] = "Likert 3 punt schaal Luisterexperiment";
TitleText ["NL"] = "Hoe vervormd klinkt de spraak?";
IntroductionText ["NL"] = "De spraak is gemanipuleerd. Hoe vervormd klinkt het?";
StimulusNumberText ["NL"] = "XXX antwoorden te gaan";
PlayAText ["NL"] = " Spraak &#9658; ";
PlayBText ["NL"] = " Spraak &#9658; ";
NextText ["NL"] = "Volgende &rarr;";
HeaderLineText0 ["NL"] = "De spraak klinkt vervormd";
RightText0 ["NL"] = "Helemaal<br />mee oneens";
LeftText0 ["NL"] = "Helemaal<br />mee eens";
LK3label ["NL"] [0] [0] = "&nbsp;";
LK3label ["NL"] [0] [1] = "neutraal";
LK3label ["NL"] [0] [2] = "&nbsp;";
HeaderLineText1 ["NL"] = "De spraak klinkt vervormd";
RightText1 ["NL"] = "Helemaal<br />mee oneens";
LeftText1 ["NL"] = "Helemaal<br />mee eens";
LK3label ["NL"] [1] [0] = "&nbsp;";
LK3label ["NL"] [1] [1] = "neutraal";
LK3label ["NL"] [1] [2] = "&nbsp;";
HeaderLineText2 ["NL"] = "De spraak klinkt vervormd";
RightText2 ["NL"] = "Helemaal<br />mee oneens";
LeftText2 ["NL"] = "Helemaal<br />mee eens";
LK3label ["NL"] [2] [0] = "&nbsp;";
LK3label ["NL"] [2] [1] = "neutraal";
LK3label ["NL"] [2] [2] = "&nbsp;";
ReadyText ["NL"] = "Klaar";
SaveLinkText ["NL"] = 'Bewaar resultaten';
RestartPageText ["NL"] = 'Opnieuw';
SaveText ["NL"] = 'Klik AUB op "'+SaveLinkText ["NL"] + '" en sla het bestand op';
RestartButtonText ["NL"] = 'Het experiment kan opnieuw gestart worden door op "'+RestartPageText ["NL"]+'" te drukken';
NextAlert ["NL"] = "Luister naar de opname en selecteer een anwoord, AUB";
ToolTipPlayA ["NL"] = "Luister naar de opname";
ToolTipPlayB ["NL"] = "Luister naar de opname";
ToolTipNext ["NL"] = "Ga naar de volgende stimulus";
ToolTipSave ["NL"] = "Bewaar de antwoorden in een bestand";
ToolTipRestart ["NL"] = "Begin een nieuwe luster sessie";

// Copy all scale button texts for "undefined" scales
languageArray = Array.from(languageSet);
for(var l in languageArray) {
	for(var j = 0; j < 3; j++) {
		for(var i = 1; i < NumberOfScales; i++) {		
			if ( LK3label [languageArray [l]] [i] [j] == 0 ) {
				LK3label [languageArray [l]] [i] [j] = LK3label [languageArray [l]] [0] [j];
			};
		};
	};
};


// Set language
var language = "EN";
var userLanguage = (navigator.language) ? navigator.language : navigator.userLanguage;
userLanguage = userLanguage.substr(0,2).toUpperCase();
if (languageSet.has(userLanguage)) {
	language = userLanguage;
} else {
	language = "EN";
};

// If language should be fixed
if(FixedLanguage) {
	language = FixedLanguage;
};

// Funtion that changes the texts
function replaceTexts (language) {
		
	if(VariableText){
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
		document.getElementById('HeaderLineText2').innerHTML = HeaderLineText2[language];
		document.getElementById('RightText2').innerHTML = RightText2[language];
		document.getElementById('LeftText2').innerHTML = LeftText2[language];
		document.getElementById('RestartPageText').innerHTML = RestartPageText[language];
		document.getElementById('ToolTipPlayA').title = ToolTipPlayA [language];
		document.getElementById('ToolTipNext').title = ToolTipNext [language];
		document.getElementById('ToolTipSave').title = ToolTipSave [language];
		document.getElementById('ToolTipRestart').title = ToolTipRestart [language];
		for(var j = 0; j < 3; j++) {
			document.getElementById('LK3.0-'+(j+1)).innerHTML = LK3label [language] [0] [j];
		};
		for(var i = 1; i < NumberOfScales; i++) {
			for(var j = 0; j < 3; j++) {
				if(typeof( LK3label [language] [i]) == "undefined") {
					document.getElementById('LK3.'+ i +'-'+(j+1)).innerHTML = document.getElementById('LK3.'+ (i-1) +'-'+(j+1)).innerHTML;
				} else {
					document.getElementById('LK3.'+ i +'-'+(j+1)).innerHTML = LK3label [language] [i] [j];
				}
			};
		};		
	};
	
	// If there is a PlayB button
	if(ShowPlayBbutton){
		document.getElementById('PlayBText').innerHTML = PlayBText[language];
		document.getElementById('ToolTipPlayB').title = ToolTipPlayB [language];
		document.getElementById('ButtonBVisible').style.display = 'inline';
		document.getElementById('ButtonBVisible').style.visibility = 'visible';
	};

	// Make the required number of questions visible
	for(var i = 1; i < NumberOfScales; i++) {
		document.getElementById('EmptyRow'+i).style.display = '';
		document.getElementById('HeaderLineRow'+i).style.display = '';
		document.getElementById('LK3row'+i).style.display = '';
		document.getElementById('HeaderLineText'+i).style.visibility = 'visible';
		document.getElementById('RightText'+i).style.visibility = 'visible';
		document.getElementById('LeftText'+i).style.visibility = 'visible';
	};
		
	// Remove middle option in Binary choice
	if(BinaryChoiceExperiment){
		for(var i = 0; i < NumberOfScales; i++) {
				document.getElementById('LK3buttons'+i+'.2').style.display = 'none';
				document.getElementById('LK3buttons'+i+'.2').style.visibility = 'hidden';
				document.getElementById('LK3.'+i+'-2').style.display = 'none';
				document.getElementById('LK3.'+i+'-2').style.visibility = 'hidden';
		};
	};
};
