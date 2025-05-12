
![](akouste-ear.png)

#  akoúste
Version 2 [^1]

[Try the demo](https://robvanson.github.io/akouste/akousteCreate.html)

## Client-side listening experiments in the browser

The akoúste project aims to provide tools for simple, adaptable listening experiments aimed at situations where the use of a dynamic host server storing and serving the speech and collecting the responses over the internet is unpractical or unwanted, e.g., due to privacy concerns. akoúste pages can be used both on desk/laptops and on mobile devices, with and without a network connection.

akoúste experiments can as easily be run off thumbdrives, or local hard drives, with all data kept locally, as they can be run from a web server. Submission of results is under the control of the subject doing the experiment. The whole experiment is run inside the browser and intermediate results are stored in the browser\'s local storage. After completing the experiment, the subject can download the results in text format which can be submitted to the experimenter.

## What is needed

List of materials
- Stimuli
- A table listing which stimuli should be presented at each turn
- A web page that presents the stimuli to the listeners and collects their responses

To create a listening experiment stimulus audio files are required, preferably in a folder. The stimulus files can be accessed locally, or over https. Any audio format that can be played by the web browsers of choice can be used.

akoúste will read .csv tables (comma-separated-values) as can be derived from most spreadsheet, database, or statistics applications. Columns in these tables should have names in a header row. The table should contain columns that contain the names of the stimulus files. The tables can store any other information that is convenient in other columns. It is OK if there is only a single column with stimulus file names. The path or URL to the folder that contains the stimulus files can be supplied seperately, so it is not necessary to write ou the path to each individual stimulus.

The visual layout and text of the web page that presents the experiment is written in an easy to use Markdown format in an edit frame in akoústeCreate.html. The web version is visible in another frame on the same page. The page can be tested in a functional popup window (**Show Page**). As most, if not all, browsers block access to local files on the user's computer from a self-generated web page, it is not possible to test the audio and full functionality in the popup window. 

In our demonstrations, we use web URLs to demonstrate the full functionality. But when designing and testing an experiment using local audio files, the experiment page should be saved to the local drive (**Save HTML...**) and opened from there.

Examples (random audio examples courtesy of [Wikimedia Commons](https://commons.wikimedia.org/wiki/Main_Page)):
- [AB comparison](https://robvanson.github.io/akouste/akousteCreate.html?ExperimentAcronym=ABexample)
- [ABX comparison](https://robvanson.github.io/akouste/akousteCreate.html?ExperimentAcronym=ABXexample)
- [Transcription](https://robvanson.github.io/akouste/akousteCreate.html?ExperimentAcronym=Transcribe)
- [SToPS (Sunderland
Tracheoesophageal Perceptual Scale)](https://robvanson.github.io/akouste/akousteCreate.html?ExperimentAcronym=SToPS) [^2]<br />
  with fancy formatting

## What you get

A self contained web page that can run the experiment and can be distributed together with the stimuli, if the stimuli are local. Contrary to what the name suggests, the experiment web page works completely off-line. Internet is only used when stimuli are not available locally.

## What you do *not* get 

Although akoúste stores progress of the experiment in the local browser, absolutely ***no*** information is send out. Even the results of the experiment will be stored locally in a text file, and only if the user saves them. The results only leave the computer when the user conveys them by email of  DM to the addressee.

## Under the hood

The akoúste experiments are constructed as a self-contained web page in plain HTML + CSS + Javascript. Experiments can be constructed in a [self contained Web page editor](https://robvanson.github.io/akouste/akousteCreate.html). The basis is a markdown text file using [markdown-it](https://github.com/markdown-it/markdown-it) ([demo](https://markdown-it.github.io/)). The markdown file will have experimental settings and the stimulus table appended in a comment section at the end. This information can be edited directly in the markdown file, but care should be taken as the formatting requirements are rather strict.

Stimulus tables are incorporated into the experiment web page from CSV tables uploaded with the **Open a Stimulus Table** selection and upload buttons. Stimuli can be presented with fixed or dynamic practice items, in pseudo-randomized order, with pseudo-randomized pairs if two sounds are to be presented. The answers are added as seperate columns to the stimulus table Stimulus tables can contain more information than just the stimuli which makes the results tables directly usable for analysis.

The tasks can be any number of stimulus sounds, A, AB, ABX testing and responses can be any number of Likert scales with any number of choices as well as any number of computerized Visual Analogue Scales (VAS) and text entry fields, or mixed.

It is possible to create *\<name\>\_stimuluslist.js* files to use different stimulus tables for the same experiment page.

## User Interface

The editor is a web page with on top two blocks of experiment settings. Top-left are settings relevant to the stimulus presentation. Top-right the texts used for the buttons and information to steer the responses and experiment.

At the bottom are two frames. To the left is the Markdown edit window. The text and audio presented during the experiment can be edited and formated here. To the right is a Display/HTML frame. It shows the rendered HTML created from the Markdown (**Display HTML**) or the HTML source text (**HTML text**). This is just the HTML created from the Markdown. This is not functional. The HTML source text can be edited directly. However, this will disappear easily, so any changes not transfered to the markdown should be saved using the **Save HTML...** button.

When the **Show Page** button is clicked, a popup with a functioning page will appear. This shows the experiment as it appears to the actual user. This page is fully functional. However, if the page refers to stimuli on the local computer, almost all browsers will block the audio. It generally only works for audio files accessed through *HTTPS://* URLs.

When the experiment is ready to be deployed, it can be saved using the **Save HTML...** button on top of the HTML window. If work has to be interrupted before it is finished, the Markdown window can be saved using the **Save MD...** button. The resulting Markdown file will contain all information needed to continue later. It can be opened again with the **Open a Markdown file** selection/upload button.

## Markdown

The user facing part of the experiment is a web-page. The text and layout of this page are designed using an adapted Markdown language, [markdown-it](https://markdown-it.github.io/). Several constructs have been added to easy the placement of active elements for the experiments.

### Stimulus related constructs

Two constructs are defined to present stimulus sounds and texts to subjects:

- \[\[\[text\|name\{style\}\]\]\] audio button showing *text* in *style*, playing the audio of column *name*.   
For instance, \[\[\[Speaker A\|A\{font-style: italic;\}\]\]\] would show a button with the text *Speaker A* in italic and play the current stimulus in the column labeled *A* of the stimulus table.
- \{\{\{name|style\}\}\} text showing the text in column *name* in *style*.   
For instance, \{\{\{LangA|font-style: italic;\}\}\} would show the text in *italic* of the current stimulus in the column labeled *LangA* of the stimulus table.

All sounds have to be played before the subject can proceed to the next stimulus.

Three constructs are defined to collect subject evaluations based on answers to questionaire questions:

- A row of \(\(\)\) is translated to a row of radio buttons. All radio buttons on a line will be combined in a single radio-button row. It is best to put the individual buttons and their labels into a table.
- \>\>----------\<\< (10 -dashes or more) will be transformed into a visual analogue slider.
- \<\<| text |\>\> becomes a text input field with the *text* as default value.

All questions have to be answered (changed) before the subject can move to the next stimulus. Answers will be added to the Stimulus table with each question getting their own column, tagged Answer1, Answer2..., numbered in order of the questions on the page.

[^1]: Version 1 has moved to [Github akouste-v1](https://github.com/robvanson/akouste-v1)
[^2]: [Guidance for SToPS (PDF)](https://eprints.leedsbeckett.ac.uk/id/eprint/4126/3/Guidance%20notes%20for%20SToPS.pdf)
