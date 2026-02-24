// const fs = require('fs');
// const path = require('path');
// const { JSDOM } = require('jsdom');
import JSDOM from "jsdom";
import fs from "fs";
const htmlFilePath = 'cypress/reports/html/index.html';
const jsFilePath = 'cypress/reports/html/assets/app.js';

const jsContent = fs.readFileSync(jsFilePath, 'utf-8');
const htmlContent = fs.readFileSync(htmlFilePath, 'utf-8');
const dom = new JSDOM(htmlContent);
const document = dom.window.document;
const scriptTag = document.querySelector('script');

if (scriptTag) {
    const inlineScript = document.createElement('script');
    inlineScript.textContent = jsContent.replaceAll("\n", "");
    scriptTag.replaceWith(inlineScript);
    console.log('Files embedded and original JS and CSS deleted');
}

fs.writeFileSync(htmlFilePath, dom.serialize());
