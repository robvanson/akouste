# akoúste markdown 

akoúste creates listening experiments from a markdown text. The markdown follows the commonmark format for text and layout with some extensions to include stimulus presentation and response collection. Markdown tables should have a header line and a line with the text alignments.

When creating a new markdown file, do not add a comment with hints or notes into the markdown!

## akoúste experiment with cover page

A general experiment starts with an explanation of the aims of the experiment, what is expected from the subject, and instructions on how to complete the task of the experiment. To this end, a *cover page* can be demarcated in the markdown.

A cover page is started by a single line that says:

```[//coverpage]: # "Start of coverpage"```

After entering the page, the cover page is closed with a single line:

```[//coverpage]: # "End of coverpage"```

Both lines are preceded and followed by an empty line.

This will translate to an HTML file that contains two pages, the cover page and the experiment page. Only one of these pages will be visible at any time. When the experiment file is loaded, only the cover page will be visible.

## HTML tags and JavaScript 

akoúste markdown files can contain HTML tags and JavaScript code for layout and extra functions. These should not be translated and are not part of the akoúste format. 

Paragraph level HTML tags, like <center>, <div>, or <script> should be preceded and followed by an empty line. Markdown tables should also be preceded and followed by an empty line. 

## Stimulus constructs in akoúste markdown 

Four constructs are defined to present stimulus sounds, videos, images, and texts to subjects:

- Sound: [[[text|name{style}]]] creates an audio button showing text in style, playing the audio files mentioned in column name.   
  For instance, [[[Speaker A|A{font-style: italic;}]]] would show a button with the text Speaker A in italic and play the current stimulus in the column labeled A of the stimulus table.
  
- Video: [[§ alt-text|name{style} §]] embeds a video in the page in style, playing the video files mentioned in column name. The alt-text appears as a tooltip. Style should include the desired dimensions, width or height, of the video, eg, {width=30%;height:auto;}.  
  Note: Browsers differ in which video formats they support. Test your browser platforms before deployment.
  
- Text: {{{name|style}}} creates a text field showing the string in column name in style.   
  For instance, {{{LangA|font-style: italic;}}} would show the text in italic of the current stimulus in the column labeled LangA of the stimulus table.
  
- Image: {{§name|style§}} inserts an image showing the image linked in column name in style.  The style should include the dimensions of the image, eg, {{§name|width:30%;height:auto;§}}

For clarity, the | inside the stimulus constructs can be preceded by a backslash character, eg., {{{name\|style}}}. These constructs can also contain spaces.

## Response constructs in akoúste markdown

Four constructs are defined to collect subject responses from the questionnaire:

- A row of (()) is translated to a row of radio buttons (eg, Likert scale). All radio buttons on a line will be combined in a single radio-button row. It is best to put the individual buttons and their labels into a table for consistent placement (see example markdown files).

- >>----------<< (10 -dashes or more) will be transformed into a visual analogue scale (VAS) slider. Sliders should not take the complete width of a page and should be put inside a markdown table.

- <<| text {style} |>> becomes a text input field with the text as default value displayed in style (optional).

- @@@ text [keys] {style} @@@ captures general keystrokes. Only a single such construct can be present. The text is shown before a key is pressed, eg, Press q or p., and is also the tooltip. Only the (optional) comma-separated keys in [keys] are accepted, eg, [q,p] for only q and p or [ArrowLeft,ArrowRight] for the left- and right-arrow keys ([,,.] is a valid way to accept the comma ',' and period '.' keys). Captured keys trigger the Next button and stimulus if all requisites for the next stimulus are fulfilled.

When present, an optional {style} CSS construct controls how the text is presented. Style can also be {visibility: hidden}, which might be usefull for keystrokes if neither the text nor the keypresses should be shown.

# Examples

Examples of all these constructs are available in the [Demonstrations and examples](#demonstrations-and-examples) section of https://robvanson.github.io/akouste/ .

An example of an akoúste markdown file with a cover page presenting a three way ABX listening test with questions is presented between the following two ====== rows:


Here follows the example akoúste markdown:

====== 


[//comment]: # "Use the 'Start of coverpage' - 'End of coverpage' comments to insert a coverpage"


[//coverpage]: # "Start of coverpage"

<center>

# The Cover Page

</center>

A cover page is optional, but often useful. A cover page is generally used to explain the aim and procedure of the experiment, and how to save and convey the results after completion of the experiment.

It is adviseable to include a sound sample to check the sound quality and level. 

### If you continue by clicking *Next*, this web page will  <span style="color:red;">store your responses</span> locally in this browser on this device. 

This information will remain stored in your browser until you erase it by clicking **Restart** after completing the experiment and saving the results. You can remove this information at any time by erasing the relevant history of your browser.

[//coverpage]: # "End of coverpage"

<center>

# Title of this page

### A table setup to position three *audio play buttons* representing columns *A*, *B* and *X* in the stimulus table.

|     |         |         |         |     |
| ---:| -------:|:-------:|:------- |:--- |
|     | [[[Label A \| A]]] |         | [[[Label B \| B]]] |     |
|     |         | [[[Label X \| X]]] |         |     |

</center>

Here can be put any general information about the stimuli.

<center>

[//comment]: // "Start of No Change"

## {{{!answerstogo!|font-weight:bold}}} answers to go

[//comment]: // "End of No Change"

</center>

---------------------------

Here you can put the text which tells the subjects what they are supposed to do.

---------------------------

<center>

### Question text. Which sound is most like the *Label X* sound?

|     |      |      |     |
| ---:|:----:|:----:|:--- |
|     | (()) | (()) |     |
|     | A    | B    |     |

### Question text. How well does Sound *Label X* resemble the chosen *Label A* or *LabelB* sound?

|            |      |      |      |      |      |           |
| ----------:|:----:|:----:|:----:|:----:|:----:|:--------- |
| Not at all | (()) | (()) | (()) | (()) | (()) | Very Much |
| 1          |      |      | 3    |      |      | 5         |

### And you can also request text input from the user with a &lt;&lt;\| text {style} \|&gt;&gt; construct

What do you think?  <<|  your opinion here {width:5cm;color:gray;text-align:center} |>>

</center>

---------------------------

====== 

 

# Create a new akoúste experiment markdown 

Target language: German.

Create an akoúste markdown file in the target language presenting an ABX experiment where you label the stimuli 'Left', 'Right', 'Which', (Label A, Label B, Label X) respectively, with three questions:

1. Ask the subject which of the speech sounds 'Left' or 'Right' is most like the stimulus sound 'Which' using two radio buttons labelled 'Left' and 'Right'.

2. Ask the subject to judge the intelligibility of the X stimulus on a 5 point Likert scale of radio buttons, from very unintelligible to very intelligible.

3. Ask the subject to judge the pleasantness of the X stimulus on a visual analogue scale (VAS), from very unpleasant to very pleasant.

Please, also translate the labels into the target language.

