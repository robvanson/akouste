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

<script language="JavaScript" src="XXEXPERIMENTNAMEXX_Stimuluslist.js"></script>
<script language="JavaScript">
// temp Kludge
var stimulusTableJSON = '[["A","B","X","Col1","Col2"],[["LA_D_9121123_LA_0030[0].wav","LA_D_9841321_LA_0100[1].wav","LA_D_9919064_LA_0103[2].wav","1","A"],["LA_D_9523504_LA_0021[0].wav","LA_D_9835881_LA_0030[1].wav","LA_T_9429183_LA_0043[2].wav","2","B"],["LA_D_9834938_LA_0104[0].wav","LA_D_9820905_LA_0040[1].wav","LA_T_9497115_LA_0011[2].wav","3","C"],["LA_D_9922523_LA_0099[0].wav","LA_D_9668611_LA_0081[1].wav","LA_T_9635654_LA_0058[2].wav","4","D"],["LA_D_9965439_LA_0057[0].wav","LA_D_9567593_LA_0093[1].wav","LA_T_9896961_LA_0011[2].wav","5","E"]]]';

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
var requiredAnswers = [];
playedSamples = false;

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
		if(stimulusNbr >= data.length){
			// The experiment has been finished, but not reset
			FinishExperimentRun ();
			onSave ();
		};
	} else {
		// Read and process the stimulus list
		// If a list number has been given, read it
		var expnum = 0;
		var params = new URLSearchParams(location.search);
		if(params.get('expnum') != "undefined" && Number(params.get('expnum')) > 0) {
					   expnum = Number(params.get('expnum'));
		};

		// First try the JSON options
		if(typeof stimulusTableJSON !== 'undefined' && stimulusTableJSON) {
			var stimulusTableParsed;
			// Use Array version if possible, but not if expnum > length
			if(Array.isArray(stimulusTableJSON) && stimulusTableJSON.length > 0 && expnum <= stimulusTableJSON.length){
				// Default if there is no expnum
				if(expnum <= 0) { expnum = 1;};
				stimulusTableParsed = JSON.parse(stimulusTableJSON[expnum - 1]);
			// Old: single JSON string
			} else if((stimulusTableJSON instanceof String) || (typeof stimulusTableJSON === "string")) {
				stimulusTableParsed = JSON.parse(stimulusTableJSON);
			} else {
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
		
		// Locate the stimuli
		audioPos = [];
		for(i in audioNames){
			audioPos.push(columnNames.indexOf(audioNames[i]));
			if(audioPos[i] < 0)audioPos[i] = -1;
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
	
	document.getElementById('StimulusNumberText').innerHTML = document.getElementById('StimulusNumberText').innerHTML.replace(/[0-9]+/g, (data.length - stimulusNbr)+"");
	
	return [columnNames, data];
};


function unblockNext (x) {
	requiredAnswers[requiredNames.indexof(x)] = true;
	playedSamples = requiredAnswers.reduce((a, b) => a & b) ;
	if(playedSamples) {
		document.getElementById('NextText').style.backgroundColor="#F0F0F0";
		document.getElementById('NextButton').style.backgroundColor="#F0F0F0";
	};
	if(x.match("Audio")){
		document.getElementById(x).style.backgroundColor = "#EEFFEE";
		document.getElementById(x).parentNode.parentNode.style.backgroundColor = "#EEFFEE";
	};
};


function setAudio(i, stimulusTable) {
	for(var i in  audioNames) {
		document.getElementById('Audio'+audioNames[i]).src = audioBaseURL + stimulusTable[1][i][audioPos[0]];
		//document.getElementById('Audio'+audioNames[i]).title = stimulusTable[1][i][0].replace(/^.*\/([^\/]+)\.wav$/, "$1");
		document.getElementById('Audio'+audioNames[i]).style.backgroundColor = "#F0F0F0";
		document.getElementById('Audio'+audioNames[i]).parentNode.parentNode.style.backgroundColor = "#F0F0F0";
	};

	document.getElementById('StimulusNumberText').innerHTML = document.getElementById('StimulusNumberText').innerHTML.replace("XXX", (data.length - i)+"");
	
	setProgress(100*stimulusNbr/data.length);
};


function nextStimulus () {
	if(finishedExperiment)return false;
	if(playedSamples) {
		// Reset played
		playedSamples = false
		for(i in audioNames) {
			document.getElementById('Audio'+audioNames[i]).style.backgroundColor = "#EEFFEE";
			document.getElementById('Audio'+audioNames[i]).parentNode.parentNode.style.backgroundColor = "#EEFFEE";
		};
		playedSamples = changedLikert5 = playedA = playedB = false;
		document.getElementById('LK5buttons0.1').checked = document.getElementById('LK5buttons0.2').checked = document.getElementById('LK5buttons0.3').checked = document.getElementById('LK5buttons0.4').checked = document.getElementById('LK5buttons0.5').checked = false;
		document.getElementById('LK5buttons1.1').checked = document.getElementById('LK5buttons1.2').checked = document.getElementById('LK5buttons1.3').checked = document.getElementById('LK5buttons1.4').checked = document.getElementById('LK5buttons1.5').checked = false;
		document.getElementById('LK5buttons2.1').checked = document.getElementById('LK5buttons2.2').checked = document.getElementById('LK5buttons2.3').checked = document.getElementById('LK5buttons2.4').checked = document.getElementById('LK5buttons2.5').checked = false;
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
		alert(NextAlert [language]);
		return false;
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
