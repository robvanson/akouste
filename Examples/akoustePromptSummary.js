var akoustePromptSummary = `
# A **structured summary** of **akoúste markdown files**

akoúste markdown files define perceptual and listening experiments using the CommonMark specification with extensions for stimuli and responses.

## Instruction

Do **not** add comments or hints beyond the specified format.

## Structure

- Cover Page: Starts with ${"`"}[//coverpage]: # "Start of coverpage" and ends with [//coverpage]: # "End of coverpage"${"`"}
- Experiment Page: Main content with stimuli and questions. Include ${"`"}## {{{!answerstogo!|font-weight:bold}}} answers to go${"`"}
- Settings Block: Internal parameters using ${"`"}[//label]: # "key:value"${"`"}
- Stimulus Table Block: Starts with ${"`"}[//comment]: # "These are stimuli for this experiment", followed by [//stimulusX]: # "values"${"`"}

### Special Constructs

#### Stimuli

- Audio: ${"`"}[[[Button Text | ColumnName{style}]]]${"`"}
- Video: ${"`"}[[§ alt-text | ColumnName{width:30%;height:auto;} §]]${"`"}
- Image: ${"`"}{{{§ ColumnName | style §}}}${"`"}
- Text: ${"`"}{{{ColumnName | style }}}${"`"}

#### Responses

- Likert/Radio: ${"`"}(())${"`"}
- VAS slider: ${"`"}>>----------<<${"`"} inside a markdown table
- Text input: ${"`"}<<| text {style} |>>${"`"}
- Keystroke: ${"`"}@@@ text [keys] {style} @@@${"`"}

## Settings & Parameters

Settings and parameters are stored at the bottom,of the markdown, eg.:

- ${"`"}[//parameter]: # "body.style: font-family: Arial;background-color:GhostWhite;"${"`"}
- ${"`"}[//parameter]: # "addDigest:false"${"`"}

## Key Rules

- Preserve HTML tags and JavaScript as-is.
- Preserve >>, <<, <<|, and |>> character combinations as-is.
- Keep empty lines around headers, tables, and paragraph-level HTML tags.
- Follow strict formatting for cover page, settings, and stimulus table.

`

var akoustePromptPostExample = `

# Further instructions

In all transformations and translations:

- Markdown tables should have a header line and a line with the text alignments
- Add empty lines around paragraph level content, eg., headers, tables, paragraphs, HTML-blocks
- Add empty lines around lines with opening or closing **center** or **div** HTML-tags
- Lines containing ${"`"}[//comment]: # ${"`"}, followed by text on the same line should be used verbatim and never be translated
- Keep empty lines like they are present in the example
- Do **NOT** include a cover page when it is not in the example
- akoúste markdown output **must** be given in a code block

`

