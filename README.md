## 🛠️🏗️  We are renovating to release version 2 🏗️🛠️

The original akoúste v1 has moved to [Github akouste-v1](https://github.com/robvanson/akouste-v1)

![](akouste-ear.png)

#  akoúste  

[Try the demo](https://robvanson.github.io/akouste/akousteCreate.html)

## Client-side listening experiments in the browser

The akoúste project aims to provide tools for simple, adaptable listening experiments aimed at situations where the use of a dynamic host server storing and serving the speech and collecting the responses over the internet is unpractical or unwanted, e.g., due to privacy concerns. Akoúste pages can be used both on desk/laptops and on mobile devices, with and without a network connection.

Akoúste experiments can as easily be run off thumbdrives, or local hard drives, with all data kept locally, as they can be run from a web server. Submission of results is under the control of the subject doing the experiment. The whole experiment is run inside the browser and intermediate results are stored in the browser\'s local storage. After completing the experiment, the subject can download the results in text format which can be submitted to the experimenter.

## Under the hood

The akoúste experiments are constructed as a self-contained web page in plain HTML + CSS + Javascript. Experiments can be constructed in a [self contained Web page editor](https://robvanson.github.io/akouste/akousteCreate.html). The basis is a markdown text file using [markdown-it](https://github.com/markdown-it/markdown-it) ([demo](https://markdown-it.github.io/)). The markdown file will have experimental settings and the stimulus table appended in a comment section.

Stimulus tables are incorporated into the experiment web page from CSV tables. Stimuli can be presented with fixed or dynamic practice items, in pseudo-randomized order, with pseudo-randomized pairs if two sounds are to be presented. The answers are added as seperate columns to the stimulus table Stimulus tables can contain more information than just the stimuli which makes the results tables directly usable for analysis.

The tasks can be any number of stimulus sounds, A, AB, ABX testing and responses can be any number of Likert scales with any number of choices as well as any number of computerized Visual Analogue Scales (VAS), or mixed.

It is possible to create *<name>\_stimuluslist.js* files to use different stimulus tables for the same experiment page.

<details>

<summary><h2>User Interface</h2></summary>

The editor is a web page with on top two blocks of experiment settings. Top-left are setting relevant to the stimulus presentation. Top-right the texts used for the buttons and information to steer the responses and experiment.

At the bottom are two windows. To the left is the Markdown edit window. The text and audio presented during the experiment can be edited and formated here. To the right is a Display/HTML window. It shows the rendered HTML created from the Markdown (*Display HTML*) or the HTML source text (*HTML text*). This is just the HTML created from the Markdown. This is not functional. The HTML source text can be edited directly. However, this will disappear easily, so any changes should be saved.

When the *Show Page* button is clicked, a popup with a functioning page will appear. This shows the experiment as it appears to the actual user. If the experiment is ready to be deployed, it can be saved using the *Save HTML...* button on top of the HTML window. If work has to be interrupted before it is finished, the Markdown window can be saved using the *Save MD...* button. The resulting Markdown file will contain all information to continue later. It can be opened again with the *Open a Markdown file* selection/upload button.

</details>