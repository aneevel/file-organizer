const fs = require('fs');
const path = require('path');

const basePath = "C:\\";

let inputDir = path.resolve(basePath, "Users\\Alec\\Downloads")
let outputDir = path.resolve(basePath, "Users\\Alec\\images")

const fileExtensions = [ '.jpg', '.jpeg', '.png', '.gif', '.webp'];

if (process.argv[2])
    inputDir = path.resolve(basePath, process.argv[2]);
if (process.argv[3])
    outputDir = path.resolve(basePath, process.argv[3]);

// Input directory must exist, or no processing can occur
if (!fs.existsSync(inputDir))
{
    console.error(`${inputDir} does not exist or is not an accessible directory. Unable to process files.`)
    process.exit(1);
}

// A non existent output directory should be created
if (!fs.existsSync(outputDir))
{
    console.log(`${outputDir} not found: Creating directory...`);
    try {
        fs.mkdirSync(outputDir, { recursive: false });
    } catch (error) {
        console.error(`Unable to create outpdir with Error: ${error}`);
    }
} else {
    console.log(`${outputDir} found!`);
}

// Begin reading files
processFiles();

function processFiles() {
    let files;
    try { 
        files = fs.readdirSync(inputDir,);
    } catch (error) {
        console.error(`Unable to read files with Error: ${error}`);
    }

    files = files.filter((file) => hasValidExtension(file))
    files.forEach(file => {
        try {
            console.log(`Moving ${file} to ${outputDir}`);
            fs.renameSync(path.join(inputDir, file), path.join(outputDir, file), () => {})
        } catch (error) {
            console.error(error);
        }
    });
}

function hasValidExtension(filename) {
    return fileExtensions.includes(path.extname(filename))
}