var akoustePromptSummary = `
# A **structured summary** of **akoúste markdown files**:

***

## **akoúste markdown**

akoúste creates listening experiments from a markdown text. The markdown follows the commonmark format for text and layout with some extensions to include stimulus presentation and response collection. Markdown tables should have a header line and a line with the text alignments. Add empty lines around paragraph level content, eg., headers, tables, paragraphs, HTML-blocks, and around <center>, </center>, <div> or </div> tags. 

When creating a new markdown file, do not add a comment with hints or notes into the markdown!

***

## **HTML tags and JavaScript** 

akoúste markdown files can contain HTML tags and JavaScript code for layout and extra functions. These should not be translated and are not part of the akoúste format. 

Paragraph level HTML tags, like <center>, <div>, or <script> as well as markdown header lines (ie, those starting with #) and lines starting with ${"`"}[//comment]${"`"} should be preceded and followed by an empty line. Markdown tables should also be preceded and followed by an empty line. 

***

##  **Markdown Structure**

*   **Cover Page**:
        [//coverpage]: # "Start of coverpage"
        ...introduction and instructions...
        [//coverpage]: # "End of coverpage"
*   **Experiment Page**: Main content with stimuli and questions.
*   ${"`"}## {{{!answerstogo!|font-weight:bold}}} answers to go${"`"} inside the **Experiment Page**
*   **Settings Block** These should be used verbatim, not translated:
        [//comment]: # "These are internal parameters for the experiment and visible texts not in this Markdown"
        [//comment]: # "----------"
        [//label]: # "key:value"
*   **Stimulus Table Block**:
        [//comment]: # "These are stimuli for this experiment"
        The ${"`"}[//comment]: # "These are stimuli for this experiment"${"`"} should be used verbatim and not translated.
        [//stimulus0]: # "A,B,X,LangA,LangB"
        [//stimulus1]: # "fileA,fileB,fileX,German,French"

***

##  **Special Markdown Constructs**

Inside Special Markdown Constructs, **style** refers to CSS style parameters, eg., **font-weight:bold;** or **width:30%;**. The full set of CSS style parameters can be used.

ColumnName refers to on of the names in the **[//stimulus0]** list between "-quotes. 

### **Stimulus Presentation**

*   Audio button:
        [[[Button Text \| ColumnName{style}]]]
*   Video:
        [[§ alt-text \| ColumnName{width:30%;height:auto;} §]]
*   Image:
        {{{§ ColumnName \| style §}}}
*   Text:
        {{{ColumnName \| style }}}

### **Response Collection**

*   Likert scale or radio buttons:
        (())
        A line of (()) buttons is considered a single scale
*   Visual Analogue Scale (VAS) slider:
        >>----------<<
        A VAS slider should be encapsulated inside a markdown table with a header and text alignment line.
*   Text input:
        <<| text {style} |>>
*   Keystroke capture:
        @@@ text [keys] {style} @@@


***

##  **Settings & Parameters**

*   Stored at bottom of markdown.
*   Examples:
        [//parameter]: # "body.style: font-family: Arial;background-color:GhostWhite;"
        [//parameter]: # "addDigest:false"

***

## **Key Takeaways for Large Language Models**

To generate a valid akoúste markdown file:

*   Include **cover page**, **experiment page**, **settings**, and **stimulus table**.
*   The cover page starts with a single line ${"`"}[//coverpage]: # "Start of coverpage"${"`"}, used verbatim.
*   The cover page ends with a single line ${"`"}[//coverpage]: # "End of coverpage"${"`"}, used verbatim
*   Use **special constructs** for stimuli and responses.
*   Follow strict formatting for settings and stimulus table.

***

`

var akoustePromptPostExample = `

# Further instructions

In all transformations and translations:
* Markdown tables should have a header line and a line with the text alignments. 
* Add empty lines around paragraph level content, eg., headers, tables, paragraphs, HTML-blocks.
* Add empty lines around lines with opening or closing **center** or **div** HTML-tags.
* Lines containing ${"`"}[//comment]: # ${"`"}, followed by text on the same line should be used verbatim and never be translated
* Keep empty lines like they are present in the example.

`

