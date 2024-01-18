const fs = require('fs');
const path = require('path');

const processingDirectory = path.basename('C:\\Users\\Alec\\Downloads');
const processedDirectory = path.basename('C:\\Users\\Alec\\Pictures');

console.log(`Files will be processed in ${processingDirectory} and placed into ${processedDirectory}`);