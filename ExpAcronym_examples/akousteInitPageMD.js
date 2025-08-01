initialMarkdown = ` 
[//comment]: # "Use the 'Start of coverpage' - 'End of coverpage' comments to insert a coverpage"
[//coverpage]: # "Start of coverpage"

<center>

# The Cover Page

</center>

A cover page is optional, but often useful. A cover page is generally used to explain the aim and procedure of the experiment, and how to save and convey the results after completion of the experiment.

It is adviseable to include a [[[ sound sample|<https://upload.wikimedia.org/wikipedia/commons/2/2d/Nl-aardhommel.ogg>{font-size:1em}]]] to check the sound quality and level. 

### If you continue by clicking <span style="font-family: Arial, Helvetica, sans-serif;font-weight:normal;">Next</span>, this web page will  <span style="color:red;">store your responses</span> locally in this browser on this device. 

This information will remain stored in your browser until you erase it by clicking **Restart** after completing the experiment and saving the results. You can remove this information at any time by erasing the relevant history of your browser.

[//coverpage]: # "End of coverpage"

<center>

# Title of this page

### A table setup to position three *audio play buttons* representing columns *A*, *B* and *X* in the stimulus table.

|     |         |         |         |     |
| ---:| -------:|:-------:|:------- |:--- |
|     | [[[A]]] |         | [[[B]]] |     |
|     |         | [[[X]]] |         |     |

</center>

All elements, eg, radio and audio buttons, sliders are positioned in tables. 
Tables are defined using the |-bar character together with the :--: separator. See this [tutorial](https://htmlmarkdown.com/syntax/markdown-tables/). The full syntax of the markdown used is described [here](https://markdown-it.github.io/). You can freely mix in HTML and JavaScript, but you need to leave empty lines between HTML+JavaScript and markdown.

Audio buttons are enclosed in tripple &#91;&#91;&#91;&#93;&#93;&#93;-brackets with content inside. The format is &#91;&#91;&#91;**text|name{style}**&#93;&#93;&#93;, 
with the displayed **text**, a "**|**", the **name** of a stimulus (column) and a CSS **style** of the button, eg, font-size. When the **name** is enclosed in &lt;&gt;-brackets, eg, &lt;**url-or-local-file-path**&gt;, this is used as a fixed sound. Everything but the name is optional.

<center>

[//comment]: // "Start of No Change"

## {{{!answerstogo!|font-weight:bold}}} answers to go

[//comment]: // "End of No Change"

</center>

The tripple &#123;&#123;&#123;**name|style**&#125;&#125;&#125;-bracket pairs insert text. A simple **name** is interpreted as the name of a Stimulus table column and is replaced with the current content of that stimulus value. If **name** has the form **&lt;URL&gt;**, the page behind that URL is loaded. If **name** has the form of **!parameter!** (parameter is a variable name enclosed between two !-characters), the value of that variable is subtituted, as is done above.

---------------------------

Here you can put the text which tells the subjects what they are supposed to do. You can add or remove &lt;center&gt; &lt;/center&gt; pairs if you want to change the text alignment. The [&lt;div&gt; tag](https://elementor.com/blog/what-is-div-in-html/) gives many more layout options.

---------------------------

<center>

### Question text. Which sound is most like the X sound? The double &#40;&#40;&#41;&#41;-brackets are converted into radio buttons

|     |      |      |     |
| ---:|:----:|:----:|:--- |
|     | (()) | (()) |     |
|     | A    | B    |     |

### Question text. How well does Sound X resemble the chosen A or B sound?

|            |      |      |      |      |      |           |
| ----------:|:----:|:----:|:----:|:----:|:----:|:--------- |
| Not at all | (()) | (()) | (()) | (()) | (()) | Very Much |
| 1          |      |      | 3    |      |      | 5         |

### More question can be added, with different numbers of options. Also, audio buttons can be added pointing to fixed URLs/files

|                                                                                                       |      |      |      |                                                                                                           |      |      |      |                                                                                                        |
| -----------------------------------------------------------------------------------------------------:|:----:|:----:|:----:|:---------------------------------------------------------------------------------------------------------:|:----:|:----:|:----:|:------------------------------------------------------------------------------------------------------ |
| Not at all                                                                                            | (()) | (()) | (()) | (())                                                                                                      | (()) | (()) | (()) | Very Much                                                                                              |
| [[[example \\| <https://upload.wikimedia.org/wikipedia/commons/e/e7/Fr-bordure.ogg>{font-size:15px}]]] |      |      |      | [[[equal \\| <https://upload.wikimedia.org/wikipedia/commons/d/db/En-uk-illustrate.ogg>{font-size:15px}]]] |      |      |      | [[[example\\| <https://upload.wikimedia.org/wikipedia/commons/6/62/De-Aluminium.ogg>{font-size:15px}]]] |

### Other response options can be added. A VAS slider is indicated by &gt;&gt;----------&lt;&lt; (&gt;&gt;&lt;&lt; separated by 10 or more dashes)

|            |                                 |           |
| ----------:|:-------------------------------:|:--------- |
| Not at all | >>---------------------------<< | Very Much |
| 0          | 50                              | 100       |

### Stimulus text labels can be added with triple {**name|style**}-brackets. Which language are you most familiar with?

|     |             |             |             |     |
| ---:|:-----------:|:-----------:|:-----------:|:--- |
|     | (())        | (())        | (())        |     |
|     | {{{LangA}}} | {{{LangB}}} | {{{LangX}}} |     |

### And you can also request text input from the user with a &lt;&lt;| text {style} |&gt;&gt; construct

What do you think?  <<|  your opinion here {width:5cm;color:gray;text-align:center} |>>

</center>

---------------------------

[//comment]: # "These are internal parameters for the experiment and visible texts not in this Markdown"
[//comment]: # "----------"
[//parameter]: # "ExperimentAcronym:name_without_spaces"
[//parameter]: # "audioBaseURL:https://upload.wikimedia.org/wikipedia/commons/"
[//parameter]: # "PracticeItems:4"
[//parameter]: # "ShuffleStimuli:true"
[//parameter]: # "RandomizeAB:false"
[//buttontext]: # "NextText:Next"
[//buttontext]: # "NextAlertText:Please listen to the recordings and answer the questions first"
[//buttontext]: # "ReadyText:Ready"
[//buttontext]: # "PlayText:Play"
[//buttontext]: # "RestartPageText:Restart"
[//buttontext]: # "SaveButtonText:Save Results"
[//buttontext]: # "SaveText:Please click XXSaveButtonTextXX and store the file"
[//tooltiptext]: # "ToolTipPlay:Play sound"
[//tooltiptext]: # "ToolTipNext:Go to next item"
[//tooltiptext]: # "ToolTipReady:Ready, please save results"
[//tooltiptext]: # "ToolTipRestart:Start a new experiment session"
[//tooltiptext]: # "ToolTipSave:Save the answer to a file"
[//comment]: # "----------"
[//comment]: # "These are stimuli for this experiment"
[//comment]: # "----------"
[//stimulus0]: # "A,B,X,LangA,LangB,LangX"
[//stimulus1]: # "6/62/De-Aluminium.ogg,e/e7/Fr-bordure.ogg,d/db/En-uk-illustrate.ogg,German (DE),French (FR),English (EN)"
[//stimulus1]: # "2/2d/Nl-aardhommel.ogg,8/8e/Or-ଅନୁଶୀଳନ.oga,d/da/L1188694-F1.oga,Dutch (NL),Oriya (OR),Arabic (AR)"
[//comment]: # "----------"
`
