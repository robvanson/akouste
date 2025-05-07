## 🏗️  We are renovating to release akoúste v2 🛠️

The original akoúste v1 has moved to [Github akouste-v1](https://github.com/robvanson/akouste-v1)

![](akouste-ear.png)

#  akoúste  

[Try the demo](https://robvanson.github.io/akouste/akousteCreate.html)

## Client-side listening experiments in the browser

The akoúste project aims to provide tools for simple, adaptable listening experiments aimed at situations where the use of a dynamic host server storing and serving the speech and collecting the responses over the internet is unpractical or unwanted, e.g., due to privacy concerns. Akoúste pages can be used both on desk/laptops and on mobile devices, with and without a network connection.

Akoúste experiments can as easily be run off thumbdrives, or local hard drives, with all data kept locally, as they can be run from a web server. Submission of results is under the control of the subject doing the experiment. The whole experiment is run inside the browser and intermediate results are stored in the browser\'s local storage. After completing the experiment, the subject can download the results in text format which can be submitted to the experimenter.

## Under the hood

The akoúste experiments are constructed as a self-contained web page in plain HTML + CSS + Javascript. Experiments can be constructed in a [self contained Web page editor](https://robvanson.github.io/akouste/akousteCreate.html). The basis is a markdown text file using [markdown-it](https://github.com/markdown-it/markdown-it) ([demo](https://markdown-it.github.io/))

Stimulus tables are incorporated into the experiment web page from CSV tables. Stimuli can be presented with fixed or dynamic practice items, in pseudo-randomized order, with pseudo-randomized pairs if two sounds are to be presented. The answers are added as seperate columns to the stimulus table Stimulus tables can contain more information than just the stimuli which makes the results tables directly usable for analysis.

The tasks can be any number of stimulus sounds, A, AB, ABX testing and responses can be any number of Likert scales with any number of choices as well as any number of computerized Visual Analogue Scales (VAS), or mixed.

It is possible to create *<name>\_stimuluslist.js* files to use different stimulus tables for the same experiment page.
