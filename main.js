const { QMainWindow } = require("@nodegui/nodegui")

const window = new QMainWindow()
window.show()

global.window = window

const fs = require('fs');
const path = require('path');

const fileExtensions = [ '.jpg', '.jpeg', '.png', '.gif', '.webp'];

console.error(`Usage: org DIR\nTry 'org --help' for more information.`)

let dir;

try {
    dir = path.resolve(process.argv[2])
} catch (error) {
    if (error instanceof TypeError) {
        console.error(`org must be provided with an input path for argument 1`)
        process.exit(1)
    } else {
        console.error(`An unknown error was thrown: ${error.message}`)
        process.exit(1)
    }
}

// Input directory must exist, or no processing can occur
if (!fs.existsSync(inputDir))
{
    console.error(`${inputDir} does not exist or is not an accessible directory. Unable to process files.`)
    process.exit(1);
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
