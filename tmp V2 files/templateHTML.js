preamble = `<!DOCTYPE html>
<head>
<style>
		/* Increase radio button's size */
		input[type='radio']{
			width: 25px;
			height: 25px;
		}

		.slidecontainer {
		  width: 10cm; /* Width of the outside container */
		}
				
		/* The slider itself */
		.slider {
		  -webkit-appearance: none;  /* Override default CSS styles */
		  appearance: none;
		  width: 100%; /* Full-width */
		  height: 5px; /* Specified height */
		  border-radius: 5px;  
		  background: #d3d3d3; /* Grey background */
		  outline: none; /* Remove outline */
		  opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
		  -webkit-transition: .2s; /* 0.2 seconds transition on hover */
		  transition: opacity .2s;
		}
		
		/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
		.slider::-webkit-slider-thumb {
		  -webkit-appearance: none; /* Override default look */
		  appearance: none;
		  width: 15px; /* Set a specific slider handle width */
		  height: 15px; /* Slider handle height */
		  border-radius: 50%; 
		  /* background: #4CAF50;*/ /* Green background */
		  background: #6495ED; /* Green background */
		  cursor: pointer; /* Cursor on hover */
		}

		/* Table layout */
		td {
		  background-color: #ffffff;
		}
</style>

<meta charset = "UTF-8" />
<script language="JavaScript">
	// Before anything else, warn IE users
	var ua = window.navigator.userAgent;
	// If Internet Explorer, warn user
	var msie = ua.indexOf("MSIE ");
	if(msie > 0){
		alert("This experiment does not work with Internet Explorer. Please, use Chrome, Firefox, Safari or related browsers");
	};
</script>

<script language="JavaScript" src="./XXEXPERIMENTNAMEXX_Stimuluslist.js"></script>
<script language="JavaScript">
// Insert stimulus table
var stimulusTableJSON = XXstimulusTableJSONXX;

var NumberOfScales = XXNUMBEROFSCALESXX;
var RandomizeAB = XXRANDOMIZEABXX;
var PracticeItems = XXPracticeItemsXX;
var ShuffleStimulusList = XXSHUFFLESTIMULUSLISTXX;
var CurrentExperimentID = "XXEXPERIMENTNAMEXX";

var audioBaseURL = './Stimuli/';
var stimulusTable = [];
var audioNames = [];
var columnNames = [];
var audioPos = [];

var answerList = [];
var requiredNames = [];
var requiredAnswers = new Array(requiredNames.length).fill(false);
var playedSamples = false;
var finishedExperiment = false;

var answer = new Array(NumberOfScales).fill(-1);
var stimulusNbr = 0;
function loadList () {
	columnNames = audioNames;
	// Check whether there is an ongoing experiment
	if(typeof(Storage) !== "undefined" && localStorage.getItem(CurrentExperimentID+'stimuluslist')){
		// Store
		data = JSON.parse(localStorage.getItem(CurrentExperimentID+'stimuluslist'));
		if(localStorage.getItem(CurrentExperimentID+'columnnames')){
			columnNames = JSON.parse(localStorage.getItem(CurrentExperimentID+'columnnames'));
		} else {
			localStorage.setItem(CurrentExperimentID+'columnnames', JSON.stringify(columnNames));
		};
		if(localStorage.getItem(CurrentExperimentID+'answerlist')){
			answerList = JSON.parse(localStorage.getItem(CurrentExperimentID+'answerlist'));
			stimulusNbr = answerList.length;
		};
		if(localStorage.getItem(CurrentExperimentID+'lastDigest')){
			lastDigest = localStorage.getItem(CurrentExperimentID+'lastDigest');
		};
	} else {
		// Read and process the stimulus list

		// First try the JSON options
		if(typeof stimulusTableJSON !== 'undefined' && stimulusTableJSON.length > 0) {
			var stimulusTableParsed = JSON.parse(stimulusTableJSON);
			// Use Array version if possible, but not if expnum > length
			if(! Array.isArray(stimulusTableParsed) || stimulusTableParsed.length < 2){
				stimulusTableParsed = [["A","B","X"], ["", "", ""]];
				alert("ERROR: invalid stimulus list");
				document.getElementById('TitleText').innerHTML = "ERROR: invalid stimulus list";
			};
			columnNames = stimulusTableParsed [0];
			data = stimulusTableParsed [1];
		
		// No JSON data, use CSV			
		} else if (typeof csv != 'undefined' && csv != null) {
			// Split the input into lines
			lines = csv.split('\\n');
		
			// Extract column names from the first line
			columnNamesLine = lines[0];
			columnNames = columnNamesLine.split(/[;\t]/g).filter(e => e);
		
			// Extract data from subsequent lines
			dataLines = lines.slice(1);
			while(dataLines[dataLines.length-1] == [])dataLines.pop();
			data = dataLines.map(function(x){return x.split(/[;\t]/g).filter(e => e)});
		};	

		if(RandomizeAB) {
			columnNames.push("ABswitch");
		};

		// Prepare the stimulus list
		if(RandomizeAB)data = shuffleAB(data, audioPos[0], audioPos[1]);

		if(ShuffleStimulusList){
			if(PracticeItems < 0){
				practiceList = data.slice(0,-PracticeItems);
				shuffleList = shuffle(data.slice(-PracticeItems,));
				data = practiceList.concat(shuffleList);
			} else {
				data = shuffle(data);
			};
		};
		if(PracticeItems > 0){
			practise = data.slice(data.length-PracticeItems, data.length).reverse();
			tmp = practise.concat(data);
			data = tmp.concat();
		};
		// Store the stimulus data
		if (typeof(Storage) !== "undefined") {
			// Store
			localStorage.setItem(CurrentExperimentID+'stimuluslist', JSON.stringify(data));
			localStorage.setItem(CurrentExperimentID+'columnnames', JSON.stringify(columnNames));
		};
	};
	
	// Locate the stimuli
	audioPos = [];
	for(i in audioNames){
		audioPos.push(columnNames.indexOf(audioNames[i]));
		if(audioPos[i] < 0)audioPos[i] = -1;
	};
	
	document.getElementById('StimulusNumberText').innerHTML = document.getElementById('StimulusNumberText').innerHTML.replace(/[0-9]+/g, (data.length - stimulusNbr)+"");

	stimulusTable = [columnNames, data];
	
	// The experiment has been finished, but not reset
	if(stimulusNbr >= data.length){
		// The experiment has been finished, but not reset
		FinishExperimentRun ();
		onSave ();
	};
	
	return stimulusTable;
};


function unblockNext (x) {
	requiredAnswers[requiredNames.indexOf(x)] = true;
	playedSamples = requiredAnswers.reduce((a, b) => a & b) ;
	if(playedSamples) {
		document.getElementById('NextText').style.backgroundColor="white";
		document.getElementById('NextButton').style.backgroundColor="white";
	};
	if(x.match("Audio")){
		document.getElementById(x).style.backgroundColor = "#EEFFEE";
		document.getElementById("Play"+x+"Text").style.backgroundColor = "#EEFFEE";
	};
};


function setAudio(i, stimulusTable) {
	if(finishedExperiment) return;
	for(var i in  audioNames) {
		if(stimulusTable[1][stimulusNbr][audioPos[i]] != undefined && stimulusTable[1][stimulusNbr][audioPos[i]].length > 0){
			document.getElementById('Audio'+audioNames[i]).src = audioBaseURL + stimulusTable[1][stimulusNbr][audioPos[i]];
			document.getElementById('Audio'+audioNames[i]).title = stimulusTable[1][stimulusNbr][audioPos[i]].replace(/^.*\\/([^\\/]+)\.wav$/, "$1");
			document.getElementById('Audio'+audioNames[i]).style.backgroundColor = "#F0F0F0";
			document.getElementById('Audio'+audioNames[i]).parentNode.parentNode.style.backgroundColor = "#F0F0F0";
		} else {
			alert("No Audio " + audioNames[i]);
		};
	};

	document.getElementById('StimulusNumberText').innerHTML = document.getElementById('StimulusNumberText').innerHTML.replace(/[0-9]+/, (stimulusTable[1].length - stimulusNbr)+"");
	
	setProgress(100*stimulusNbr/data.length);
};

function collectAnswer () {
	var newLine = (stimulusNbr+1)+";"+answer.join(";")+";"+(stimulusTable[1][stimulusNbr]).join(";");
	answerList.push(newLine);
	if (typeof(Storage) !== "undefined") {
		// Store
		localStorage.setItem(CurrentExperimentID+'answerlist', JSON.stringify(answerList));
	};
};

function displayArray (x) {
	var answerNums = Array.from(Array(NumberOfScales+1).keys());
	var answerTexts = Array(NumberOfScales).fill("Answer");
	answerTexts = answerTexts.map(function(el, idx){return el+answerNums[idx+1]});
	var output = "Num;"+answerTexts.join(";")+";"+(stimulusTable[0]).join(";")+"\\n";
	for (var i=0; i<x.length; i++) {
		line = "";
		output += x[i] + '\\n';
	}
	var blob = new Blob([output], {type: "text/plain"});
	var blobURL = URL.createObjectURL(blob);
	document.getElementById('SaveButtonText').innerHTML = "XXSaveButtonTextXX";
	document.getElementById('SaveButton').style.visibility = 'visible';
	document.getElementById('ToolTipSave').style.visibility = 'visible';
	document.getElementById('SaveLink').href = blobURL;
	document.getElementById('SaveLink').download = CurrentExperimentID+"LK5buttons_Results_"+((new Date()).toISOString()).replace(/\.[0-9Z]+/, "").replace(/\:/g,".") + ".txt";
}

function nextStimulus () {
	if(finishedExperiment)return false;
	if(playedSamples) {
		// Reset played
		playedSamples = false
		requiredAnswers = new Array(requiredNames.length).fill(false);
		for(i in audioNames) {
			document.getElementById('Audio'+audioNames[i]).style.backgroundColor = "white";
			document.getElementById("Play"+'Audio'+audioNames[i]+"Text").style.backgroundColor = "white";
		};
		
		playedSamples = false;
		for(q in requiredNames) {
			optionsList = document.getElementsByName(requiredNames[q]);
			for(o in optionsList) {
				object = optionsList[o];
				if(object.type == "radio") {
					object.checked = false;
				} else if (object.type == "range") {
					object.value = 500;
				};
			};
		}

		// Process answers
		collectAnswer ();
		stimulusNbr = answerList.length;
		
		// Block Next button
		document.getElementById('NextText').style.backgroundColor = "gray";
		document.getElementById('NextButton').style.backgroundColor = "gray";
		
		// Check whether the run is finished
		// If so, display results and restart
		if(stimulusNbr >= data.length){
			FinishExperimentRun ();
			return true;
		};
		// Next stimulus
		setAudio(stimulusNbr, stimulusTable);
		return true;
	} else {
		alert('XXNextAlertTextXX');
		return false;
	};
	
};

function FinishExperimentRun () {
	displayArray(answerList);
	document.getElementById('NextText').innerHTML = "XXReadyTextXX";
	document.getElementById('NextText').title = "XXToolTipReadyXX";
	document.getElementById('NextText').style.backgroundColor = "gray";
	document.getElementById('SaveText').innerHTML =  "XXSaveTextXX";
	finishedExperiment = true;
	setProgress(100);
	document.getElementById('StimulusNumberText').innerHTML = StimulusNumberText.innerHTML.replace("[0-9]+", "0");
};

function onSave () {
	document.getElementById('RestartPage').style.visibility = 'visible'
	document.getElementById('ToolTipRestart').style.visibility = 'visible'
	document.getElementById('SaveText').innerHTML =  'XXSaveTextXX';
};

function resetPage () {
	// Reset all
	localStorage.removeItem(CurrentExperimentID+'stimuluslist');
	localStorage.removeItem(CurrentExperimentID+'columnnames');
	localStorage.removeItem(CurrentExperimentID+'answerlist');

	playedSamples = false;
	for(q in requiredNames) {
		optionsList = document.getElementsByName(requiredNames[q]);
		for(o in optionsList) {
			object = optionsList[o];
			if(object.type == "radio") {
				object.checked = false;
			} else if (object.type == "range") {
				object.value = 500;
			};
		};
	};

	finishedExperiment = false;
	answerList = [];
	answer = new Array(NumberOfScales).fill(-1);
	stimulusNbr = 0;
};


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

	// Pick a remaining element...
	randomIndex = Math.floor(Math.random() * currentIndex);
	currentIndex -= 1;

	// And swap it with the current element.
	temporaryValue = array[currentIndex];
	array[currentIndex] = array[randomIndex];
	array[randomIndex] = temporaryValue;
  }

  return array;
}

function shuffleAB(array, apos, bpos) {
  var temporaryValue, switchAB, currentSubarray;

  // While there remain elements to shuffle...
  for (var i=0; i<array.length; i++) {
	currentSubarray = array[i];
	// Random uniform Integer [0, 2>
	switchAB = Math.floor(Math.random() * 2) == 1;
	if (switchAB){
		temporaryValue = currentSubarray[apos];
		currentSubarray[apos] = currentSubarray[bpos];
		currentSubarray[bpos] = temporaryValue;
	};
	currentSubarray.push(switchAB)
  }

  return array;
}

// Warning before leaving the page (back button, or outgoing link)
window.onbeforeunload = function () {
	if(answerList.length > 0){
		return "-";
	} else {
		return;
	};
};

function setProgress(percentComplete) {
  var elem = document.getElementById("progressBar");
  elem.style.width = percentComplete + '%';
}
	
</script>

<script type="text/javascript">
function SetUp() {
	// Check whether JavaScript is enabled
	document.getElementById('JavaScriptWarningText').style.display = 'none';
	// The following are set by the Init function
	answerList = [];
	answer = new Array(NumberOfScales).fill(-1);
	stimulusNbr = 0;
	stimulusTable = loadList (); 
	setAudio(stimulusNbr, stimulusTable);
	return 0;
};

</script>
</head>
<body onload="SetUp();">
	
	<h1 style="text-align:center" id="JavaScriptWarningText">Please enable JavaScript in your browser</h1>

	<div id="progress" style="background-color:#F0F0F0;height:10px;text-align:left;width:60%;margin-left:auto;margin-right:auto;">
	  <div id="progressBar" style="background-color:#cce6ff;height:8px;width:0%"></div>
	</div> 

`

postamble = `
	  <p>
	  <table style="text-align:center;width:50%;margin-left:auto;margin-right:auto;">
	  <tr style="font-size:30px">
	    <td>&nbsp;</td>
	    <td><a href="javascript:void(0)" id="ToolTipNext" data-toggle="tooltip" title="XXToolTipNextXX"><button id="NextButton" onclick="nextStimulus ();" style="font-size:30px;background-color:gray"><strong><div id="NextText" style="font-size:30px;background-color:gray">XXNextTextXX</div></strong></button></a></td>
	    <td>&nbsp;</td>
	  </tr>
	  <tr style="font-size:30px">
	    <td>&nbsp;</td>
	    <td>&nbsp;</td>
	    <td>&nbsp;</td>
	  </tr>
	  <tr style="font-size:30px">
	    <td><a href="javascript:void(0)" id="ToolTipRestart" data-toggle="tooltip" title="XXToolTipRestartXX" style="visibility:hidden"><button id="RestartPage" onclick="resetPage(); location.reload();" style="font-size:30px;visibility:hidden;"><strong><div id="RestartPageText">XXRestartPageTextXX</div></strong></button></a></td>
	    <td>&nbsp;</td>
	    <td><a href="javascript:void(0)" id="ToolTipSave" data-toggle="tooltip" title="XXToolTipSaveXX" style="visibility:hidden"><button onclick="document.getElementById('SaveLink').click();" style="font-size:30px;visibility:hidden;" id="SaveButton"><strong><div id="SaveButtonText"style="color:blue;">XXSaveButtonTextXX</div></strong></button></a></td>
	  </tr>
	  </table>
	  <br />
	  <h2 style="text-align:center"><div id="SaveText"></div></h2>
	  <a href="" Id="SaveLink" download onclick="onSave ()" style="font-size:30px;visibility:hidden"></a>
	  </p>
	  
	<table style="text-align:center;width:99%;margin-left:auto;margin-right:auto;">
		<col width="90%">
		<col width="10%">
	  <tr style="font-size:30px">
	    <td>&nbsp;</td>
	    <td><div style="text-align:right;height:25px;width:25px;border-radius: 45px;background:#ee9090;" id="LocalStoragePresent">&nbsp;</div></td>
	  </tr>
	</table>
	
</body>	
`
