const fs = require('fs');
const path = require('path');

if (process.argv.length !== 4)
{
    console.error("Invalid input: file-organizer must be invoked as `node file-organizer.js {inputDirectory} {outputDirectory}");
    process.exit(1);
}

process.argv.forEach((value, index) => {
    console.log(`${index}: ${value}`);
});

const inputDir = process.argv[2];