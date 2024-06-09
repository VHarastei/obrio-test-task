## Requirements

- Node 18+

## Getting started

First, install the dependencies:

- npm i

To start development version, run:

- npm run dev

To start production version, run:

- npm build && npm start

## Quesstionnaire

### Features

- typed dynamic configuration
- input types: button, input, select
- text templates for title/subtitle using Moustashe templating
- customization: theme, question type

### Config description

You can find the configuration file by following this path: src/data/config. Below you can find a commented config that shows the questionnaire with custom components

Configuration keys description:

- id: A unique identifier for the question. This is used to reference the question in other parts of the configuration, such as the nextQuestionId and prevQuestionId fields.
- dataKey: The key in the user's data object where the answer to the question will be stored. If the question doesn't require user input (e.g. an informational question), this field can be left empty.
- themeMode: The theme mode for the question. This can be used to apply a specific visual style to the question. In this configuration, the only theme mode used is dark.
- title: The title of the question. This is the text that will be displayed to the user.
- subtitle: An optional subtitle for the question. This can be used to provide additional context or instructions to the user.
- options: An array of objects that represent the possible answers to the question. Each object has a type field that specifies the type of input field to use (e.g. button, select, input), a value field that specifies the value of the answer, and a label field that specifies the text to display to the user.
- nextQuestionId: The ID of the question that should be displayed after the current question. This is used to navigate through the questionnaire.
- prevQuestionId: The ID of the question that should be displayed before the current question. This is used to allow the user to go back and change their answers.
- nextQuestionIdByDataKeyValue: An object that specifies the ID of the question that should be displayed after the current question, based on the user's answer to a previous question. This is used to create a dynamic questionnaire that adapts to the user's answers.
- isLastQuestion: A boolean value that indicates whether the current question is the last question in the questionnaire.
