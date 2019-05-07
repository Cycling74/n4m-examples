# Tonal Chord Builder
Uses the npm library Tonal to generate different chords based on a root note.

Note: Before you run this example, make sure that you run the npm install embedded into the patcher file, by clicking on the [script npm install] message.

***

## Files

`chord-builder.maxpat` : The Max patch to run the example.<br />
`n4m.chords.js` : The launcher JS for the NodeJS script.<br />
`poly.phatness.maxpat` : The Max patch for the [poly~] synthesizer.<br />
`package.json` : The Node package file.<br />
`README.md` : This file!<br />

## Usage

1. Launch the `chord-builder.maxpat` Max patch.
2. (First time only...) Click on the [script npm install] message at the lower-right to load the required packages and libraries.
3. Click on the [script start] message at the top-middle to start the Node process running.
4. Turn on the chord generation by clicking the "Chords Off" button, or pressing the spacebar.
5. Press a note on the upper keyboard. It should generate the "Maj7" version of that chord on the lower keyboard, and you should hear it.
6. Change the chord by clicking on the chord buttons, or using the number keys to switch between them.