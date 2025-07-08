preamble = `<!DOCTYPE html>
<head>
<meta charset="UTF-8">
<style>
		/* Increase radio button's size */
		input[type='radio']{
			width: 25px;
			height: 25px;
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

		/* center tag *
		center {
			background: none;
		}
	
		/* Table layout */
		table {
		  width: 80%;
		  table-layout: fixed;
		  background: none;
		}
		
		table, tr, td {
		  background: none;
		}
</style>

<meta charset = "UTF-8" />
<script type="text/javascript">
	// Before anything else, warn IE users
	var ua = window.navigator.userAgent;
	// If Internet Explorer, warn user
	var msie = ua.indexOf("MSIE ");
	if(msie > 0){
		alert("This experiment does not work with Internet Explorer. Please, use Chrome, Firefox, Safari or related browsers");
	};
</script>
<script type="text/javascript">
	// Stub Hash Function definitions
	function hex_sha1 (plaintext) {
		return "Not Available";
	};
	function hex_sha256 (plaintext) {
		return "Not Available";
	};
	function hex_sha512 (plaintext) {
		return "Not Available";
	};
	function chained_sha (plaintext) {
		return "Not Available";
	};
</script>
<script type="text/javascript" src="./sha.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jssha@3.3.1/dist/sha.js"></script>
<script type="text/javascript">
	if(typeof jsSHA == "function") {
		// Hash Function definitions
		function hex_sha1 (plaintext) {
			var shaObj = new jsSHA("SHA-1", "TEXT");
			shaObj.update(plaintext);
			return shaObj.getHash("HEX");
		};
		function hex_sha256 (plaintext) {
			var shaObj = new jsSHA("SHA-256", "TEXT");
			shaObj.update(plaintext);
			return shaObj.getHash("HEX");
		};
		function hex_sha512 (plaintext) {
			var shaObj = new jsSHA("SHA-512", "TEXT");
			shaObj.update(plaintext);
			return shaObj.getHash("HEX");
		};
		function chained_sha (plaintext) {
			return hex_sha256( hex_sha256( hex_sha512(plaintext) ) );
		};
	}
</script>

<script type="text/javascript">
var audioBaseURL = 'XXaudioBaseURLXX';
</script>
<script type="text/javascript" src="./XXEXPERIMENTNAMEXX_stimuluslist.js"></script>
<script type="text/javascript">
// Insert stimulus table
if(typeof stimulusTableJSON == 'undefined' || stimulusTableJSON == null || stimulusTableJSON.length == 0){
	stimulusTableJSON = XXstimulusTableJSONXX;
};

var NumberOfScales = XXNUMBEROFSCALESXX;
var RandomizeAB = XXRANDOMIZEABXX;
var PracticeItems = XXPracticeItemsXX;
var ShuffleStimulusList = XXSHUFFLESTIMULUSLISTXX;
var CurrentExperimentID = "XXEXPERIMENTNAMEXX";

var stimulusTable = [];
var audioNames = [];
var textNames = [];
var columnNames = [];
var audioPos = [];
var textPos = [];
var answerstogo = 0;

var answerList = [];
var requiredNames = [];
var requiredAnswers = new Array(requiredNames.length).fill(false);
var playedSamples = false;
var finishedExperiment = false;

var answer = new Array(NumberOfScales).fill(-1);
var stimulusNbr = 0;
function loadList () {
	columnNames = audioNames;
	columnNames.concat(textNames).flat();
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

		// Locate the stimuli
		audioPos = [];
		for(i in audioNames){
			audioPos.push(columnNames.indexOf(audioNames[i]));
			if(audioPos[i] < 0)audioPos[i] = -1;
		};
		textPos = [];
		for(i in textNames){
			textPos.push(columnNames.indexOf(textNames[i]));
			if(textPos[i] < 0)textPos[i] = -1;
		};

		// Prepare the stimulus list
		// First shuffle list
		if(ShuffleStimulusList){
			if(PracticeItems < 0){
				// Make sure this is REALY a clone
				var practiceList = JSON.parse(JSON.stringify(data.slice(0,-PracticeItems)));
				var shuffleList = shuffle(data.slice(-PracticeItems,));
				data = practiceList.concat(shuffleList);
			} else {
				data = shuffle(data);
			};
		};

		// Then add practice items
		if(PracticeItems > 0){
			var practise = JSON.parse(JSON.stringify(data.slice(data.length-PracticeItems, data.length).reverse()));
			var tmp = practise.concat(data);
			data = tmp.concat();
		};

		// Then shuffle AB
		if(RandomizeAB){
			if(PracticeItems < 0){
				var practiceList = data.slice(0,-PracticeItems);
				var shuffleList = data.slice(-PracticeItems,);
				data = shuffleAB(shuffleList, audioPos[0], audioPos[1]);
				data = practiceList.concat(shuffleList);
			} else {
				data = shuffleAB(data, audioPos[0], audioPos[1]);
			};
		};
		
		
		// Store the stimulus data
		if (typeof(Storage) !== "undefined") {
			// Store
			localStorage.setItem(CurrentExperimentID+'stimuluslist', JSON.stringify(data));
			localStorage.setItem(CurrentExperimentID+'columnnames', JSON.stringify(columnNames));
		};
	};
	
	// Locate the stimuli (again?)
	audioPos = [];
	for(i in audioNames){
		audioPos.push(columnNames.indexOf(audioNames[i]));
		if(audioPos[i] < 0)audioPos[i] = -1;
	};
	textPos = [];
	for(i in textNames){
		textPos.push(columnNames.indexOf(textNames[i]));
		if(textPos[i] < 0)textPos[i] = -1;
	};
	
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
		document.getElementById(x+"Button").style.backgroundColor = "#EEFFEE";
		document.getElementById("Play"+x+"Text").style.backgroundColor = "#EEFFEE";
	};
};

function stopAllAudio () {
	var audioPlayers = document.getElementsByTagName('Audio');
	for(i in audioPlayers){
		if(typeof audioPlayers[i] == 'object'){
			audioPlayers[i].pause();
			audioPlayers[i].currentTime = 0;
		};
	};
};

function setAudio(i, stimulusTable) {
	if(finishedExperiment) return;
	for(var i in  audioNames) {
		if(stimulusTable[1][stimulusNbr][audioPos[i]] != undefined && stimulusTable[1][stimulusNbr][audioPos[i]].length > 0){
			var currentAudio = stimulusTable[1][stimulusNbr][audioPos[i]];
			if(! currentAudio.match("http(s)?://")) {
				currentAudio = audioBaseURL + currentAudio;
			};
			document.getElementById('Audio'+audioNames[i]).src = currentAudio;
			document.getElementById('Audio'+audioNames[i]).title = currentAudio.replace(/^.*\\/([^\\/]+)\.wav$/, "$1");
			document.getElementById('Audio'+audioNames[i]).style.backgroundColor = "#F0F0F0";
			document.getElementById('Audio'+audioNames[i]).parentNode.parentNode.style.backgroundColor = "#F0F0F0";
		} else {
			alert("No Audio " + audioNames[i]);
		};
	};
	// Text from stimuli
	for(var i in  textNames) {
		if(stimulusTable[1][stimulusNbr][textPos[i]] != undefined && stimulusTable[1][stimulusNbr][textPos[i]].length > 0){
			var currentText = stimulusTable[1][stimulusNbr][textPos[i]];
			document.getElementById('Text'+textNames[i]).innerText = currentText;
		};
	};
	
	// Text from parameters
	answerstogo = (stimulusTable[1].length - stimulusNbr);
	parameterTextList = document.getElementsByName('parameterText');
	for(o in parameterTextList) {
		if(typeof parameterTextList[o] == 'object'){
			parameterTextList[o].innerHTML = window[parameterTextList[o].id];
		};
	};
	
	setProgress(100*stimulusNbr/data.length);
};

function collectAnswerOLD () {
	var newLine = (stimulusNbr+1)+";"+answer.join(";")+";"+(stimulusTable[1][stimulusNbr]).join(";");
	answerList.push(newLine);
	if (typeof(Storage) !== "undefined") {
		// Store
		localStorage.setItem(CurrentExperimentID+'answerlist', JSON.stringify(answerList));
	};
};

var addDigest = false;
var lastDigest = hex_sha256 (" ".repeat(256));
function collectAnswer () {
	var newLine = (stimulusNbr+1)+";"+answer.join(";")+";"+(stimulusTable[1][stimulusNbr]).join(";");
	
	if(addDigest) {
		if(typeof(Storage) !== "undefined" && localStorage.getItem(CurrentExperimentID+'lastDigest') != null){
			lastDigest = localStorage.getItem(CurrentExperimentID+'lastDigest');
		} else {
			lastDigest = hex_sha256 (" ".repeat(256));
		};
		var newDigest = hex_sha256(lastDigest + newLine);
		lastDigest = newDigest;
		answerList.push(newLine + ";" + newDigest.substr(0,6));
		if (typeof(Storage) !== "undefined") {
			localStorage.setItem(CurrentExperimentID+'lastDigest', lastDigest);
		};
		 digestText = ';Digest';
	} else {
		answerList.push(newLine);
	};
	
	// Store
	if (typeof(Storage) !== "undefined") {
		localStorage.setItem(CurrentExperimentID+'answerlist', JSON.stringify(answerList));
	};

};
var digestText = '';
var displayBlobURL = '';
function displayArray (x) {
	var answerNums = Array.from(Array(NumberOfScales+1).keys());
	var answerTexts = Array(NumberOfScales).fill("Answer");
	answerTexts = answerTexts.map(function(el, idx){return el+answerNums[idx+1]});
	var output = "Num;"+answerTexts.join(";")+";"+(stimulusTable[0]).join(";")+digestText+"\\n";
	for (var i=0; i<x.length; i++) {
		line = "";
		output += x[i] + '\\n';
	};
	
	var currentDateTime = new Date().toISOString();
	currentDateTime = currentDateTime.replace(/\.[0-9Z]+$/, "").replace(/\:/g,".");
	var resultFileName = CurrentExperimentID + currentDateTime + ".txt";
	
	var blob = new Blob([output], {type: "text/plain"});
	if(displayBlobURL.length > 0){
		URL.revokeObjectURL(displayBlobURL);
		displayBlobURL = '';
	};
	displayBlobURL = URL.createObjectURL(blob);
	document.getElementById('SaveButtonText').innerHTML = "XXSaveButtonTextXX";
	document.getElementById('SaveButton').style.visibility = 'visible';
	document.getElementById('ToolTipSave').style.visibility = 'visible';
	document.getElementById('SaveLink').href = displayBlobURL;
	document.getElementById('SaveLink').download = resultFileName;
}

function nextStimulus () {
	// if on cover page, unblock button
	if(document.getElementById('coverpage') && document.getElementById('coverpage').style.display != 'none'){
		document.getElementById('coverpage').style.display = 'none';
		document.getElementById('experimentpage').style.display = 'block';
		SetUp ();
		return false;
	};
	
	// Ready, no next
	if(finishedExperiment)return false;
	
	// Genuine Next stimulus
	if(playedSamples) {
		// Reset played
		playedSamples = false
		requiredAnswers = new Array(requiredNames.length).fill(false);
		for(i in audioNames) {
			document.getElementById('Audio'+audioNames[i]).style.backgroundColor = "white";
			document.getElementById('Audio'+audioNames[i]+"Button").style.backgroundColor = "white";
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
				} else if (object.type == "text" && object.name.match(/^Question/)) {
					questionNum = Number(object.name.replace(/^Question/g, ""))
					object.value = object.title;
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
	localStorage.removeItem(CurrentExperimentID+'lastDigest');

	playedSamples = false;
	for(q in requiredNames) {
		optionsList = document.getElementsByName(requiredNames[q]);
		for(o in optionsList) {
			object = optionsList[o];
			if(object.type == "radio") {
				object.checked = false;
			} else if (object.type == "range") {
				object.value = 500;
			} else if (object.type == "text" && object.name.match(/^Question/)) {
				questionNum = Number(object.name.replace(/^Question/g, ""))
				object.value = object.title;
			};
		};
	};

	finishedExperiment = false;
	answerList = [];
	answer = new Array(NumberOfScales).fill(-1);
	stimulusNbr = 0;
	
	// Reset cover page, if there is one
	if(document.getElementById('coverpage')) {
		document.getElementById('coverpage').style.display = 'block';
		document.getElementById('experimentpage').style.display = 'none';
	};
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

function shuffleAB(stimarray, posA, posB) {
  var temporaryValue, switchAB, currentRow;
  // While there remain elements to shuffle...
  for (var i=0; i<stimarray.length; i++) {
	currentRow = stimarray[i];
	// Random uniform Integer [0, 2>
	switchAB = Math.floor(Math.random() * 2) == 1;
	if (switchAB){
		temporaryValue = currentRow[posA];
		currentRow[posA] = currentRow[posB];
		currentRow[posB] = temporaryValue;
	};
	currentRow.push(switchAB)
  }

  return stimarray;
}

// Switches the elements PosA and PosB based on the boolean value of the last element of the row
function switchAB(stimarray, posA, posB) {
  var temporaryValue, switchAB, currentRow;
  // While there remain elements to shuffle...
  for (var i=0; i<stimarray.length; i++) {
	currentRow = stimarray[i];
	switchAB = currentRow[currentRow.length - 1];
	if (switchAB){
		temporaryValue = currentRow[posA];
		currentRow[posA] = currentRow[posB];
		currentRow[posB] = temporaryValue;
	};
  }

  return stimarray;
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
	
	// Check whether local storage is enabled!
	if(typeof(Storage) !== "undefined"){
		document.getElementById('LocalStoragePresent').style.background = '#90EE90';
	};

	// Defer setup on cover page if there is no stored stimulus list
	if(document.getElementById('coverpage') && document.getElementById('coverpage').style.display != 'none' && !localStorage.getItem(CurrentExperimentID+'stimuluslist')){
		document.getElementById('NextText').style.backgroundColor = "white";
		document.getElementById('NextButton').style.backgroundColor = "white";

		return false;
	} else if(document.getElementById('coverpage')) {
		document.getElementById('coverpage').style.display = 'none';
		document.getElementById('experimentpage').style.display = 'block';
	};

	// Set layout
	//initTableClasses ();
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
<body onload="SetUp();" style="">
	
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
