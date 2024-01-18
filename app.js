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

const inputDir = path.dirname(process.argv[2]);
const outputDir = path.dirname(process.argv[3]);

// Input directory must exist, or no processing can occur
if (!fs.existsSync(inputDir))
{
    console.error(`${inputDir} does not exist or is not an accessible directory. Unable to process files.`)
    process.exit(1);
}

console.log(`Placing files from ${inputDir} into ${outputDir}`);