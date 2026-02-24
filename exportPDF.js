const path = require('path');
const puppeteer = require('puppeteer');
var fs = require('fs');

async function generatePDFOne(dir_name) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    // Load your HTML file using a relative path
    const htmlFilePath = path.join(__dirname, 'cypress/reports/html/index.html');
    await page.goto(`file://${htmlFilePath}`, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await sleep(6000);
    // Your JavaScript code for making changes
    await page.evaluate(() => {
        const sleep = ms => new Promise(r => setTimeout(r, ms));
        function cleanup() {
            const xpath = "//button[contains(@class, 'test--header-btn')]";

            // Use document.evaluate to find the element
            const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);

            // Check if the element is found
            if (result.singleNodeValue) {
                // Click the element
                result.singleNodeValue.click();
            } else {
                console.error("Element not found");
            }

            let element1;
            while ((element1 = document.evaluate("//h4[contains(@class, 'test--context-item-title')]//..", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue) !== null) {
                element1.remove();
            }

            const images = document.evaluate('//img', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
            for (let i = 1; i < images.snapshotLength; i++) {
                const image = images.snapshotItem(i);
                image.style.marginTop = '75px';
            }
            var imageElement = document.evaluate('(//img)[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

            // Check if the image element is found before attempting to resize
            if (imageElement) {
                // Set the width and height attributes to 300x441 pixels
                imageElement.width = 750;
                imageElement.height = 441;
                imageElement.style.marginLeft = 'auto';
                imageElement.style.marginRight = 'auto';
                imageElement.style.marginTop = 'auto';
                imageElement.style.marginBottom = 'auto';
            } else {
                console.error('Image element not found');
            }
        }

        function keepOnly(num) {
            // Specify the index of the element you want to keep
            var indexToKeep = num; // Replace 3 with the actual index you want to keep

            // Select all <ul> elements with class 'suite--list' using XPath
            var elements = document.evaluate("//ul[contains(@class, 'suite--list')]", document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

            // Loop through the elements and remove those that don't match the specified index
            for (var i = 0; i < elements.snapshotLength; i++) {
                if ((i + 1) !== indexToKeep) {
                    elements.snapshotItem(i).parentNode.removeChild(elements.snapshotItem(i));
                }
            }

        }

        keepOnly(5)
        cleanup();
        sleep(3000);
    });
    let currentTime = new Date();
    // Export as PDF in landscape mode
    await page.pdf({
        path: path.join(__dirname, './' + dir_name + '/PR01.pdf'),
        format: 'A4',
        landscape: true,
        timeout: 360000
    });

    await browser.close();
}

async function generatePDFTwo(dir_name) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    // Load your HTML file using a relative path
    const htmlFilePath = path.join(__dirname, 'cypress/reports/html/index.html');
    await page.goto(`file://${htmlFilePath}`, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await sleep(6000);
    // Your JavaScript code for making changes
    await page.evaluate(() => {
        const sleep = ms => new Promise(r => setTimeout(r, ms));
        function cleanup() {
            const xpath = "//button[contains(@class, 'test--header-btn')]";

            // Use document.evaluate to find the element
            const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);

            // Check if the element is found
            if (result.singleNodeValue) {
                // Click the element
                result.singleNodeValue.click();
            } else {
                console.error("Element not found");
            }

            let element1;
            while ((element1 = document.evaluate("//h4[contains(@class, 'test--context-item-title')]//..", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue) !== null) {
                element1.remove();
            }

            const images = document.evaluate('//img', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
            for (let i = 1; i < images.snapshotLength; i++) {
                const image = images.snapshotItem(i);
                image.style.marginTop = '75px';
            }
            var imageElement = document.evaluate('(//img)[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

            // Check if the image element is found before attempting to resize
            if (imageElement) {
                // Set the width and height attributes to 300x441 pixels
                imageElement.width = 750;
                imageElement.height = 441;
                imageElement.style.marginLeft = 'auto';
                imageElement.style.marginRight = 'auto';
                imageElement.style.marginTop = 'auto';
                imageElement.style.marginBottom = 'auto';
            } else {
                console.error('Image element not found');
            }
        }

        function keepOnly(num) {
            // Specify the index of the element you want to keep
            var indexToKeep = num; // Replace 3 with the actual index you want to keep

            // Select all <ul> elements with class 'suite--list' using XPath
            var elements = document.evaluate("//ul[contains(@class, 'suite--list')]", document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

            // Loop through the elements and remove those that don't match the specified index
            for (var i = 0; i < elements.snapshotLength; i++) {
                if ((i + 1) !== indexToKeep) {
                    elements.snapshotItem(i).parentNode.removeChild(elements.snapshotItem(i));
                }
            }

        }

        keepOnly(1)
        cleanup();
        sleep(3000);
    });
    let currentTime = new Date();
    // Export as PDF in landscape mode
    await page.pdf({
        path: path.join(__dirname, './' + dir_name + '/PR02.pdf'),
        format: 'A4',
        landscape: true,
        timeout: 360000
    });

    await browser.close();
}

async function generatePDFThree(dir_name) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    // Load your HTML file using a relative path
    const htmlFilePath = path.join(__dirname, 'cypress/reports/html/index.html');
    await page.goto(`file://${htmlFilePath}`, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await sleep(6000);
    // Your JavaScript code for making changes
    await page.evaluate(() => {
        const sleep = ms => new Promise(r => setTimeout(r, ms));
        function cleanup() {
            const xpath = "//button[contains(@class, 'test--header-btn')]";

            // Use document.evaluate to find the element
            const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);

            // Check if the element is found
            if (result.singleNodeValue) {
                // Click the element
                result.singleNodeValue.click();
            } else {
                console.error("Element not found");
            }

            let element1;
            while ((element1 = document.evaluate("//h4[contains(@class, 'test--context-item-title')]//..", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue) !== null) {
                element1.remove();
            }

            const images = document.evaluate('//img', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
            for (let i = 1; i < images.snapshotLength; i++) {
                const image = images.snapshotItem(i);
                image.style.marginTop = '75px';
            }
            var imageElement = document.evaluate('(//img)[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

            // Check if the image element is found before attempting to resize
            if (imageElement) {
                // Set the width and height attributes to 300x441 pixels
                imageElement.width = 750;
                imageElement.height = 441;
                imageElement.style.marginLeft = 'auto';
                imageElement.style.marginRight = 'auto';
                imageElement.style.marginTop = 'auto';
                imageElement.style.marginBottom = 'auto';
            } else {
                console.error('Image element not found');
            }
        }

        function keepOnly(num) {
            // Specify the index of the element you want to keep
            var indexToKeep = num; // Replace 3 with the actual index you want to keep

            // Select all <ul> elements with class 'suite--list' using XPath
            var elements = document.evaluate("//ul[contains(@class, 'suite--list')]", document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

            // Loop through the elements and remove those that don't match the specified index
            for (var i = 0; i < elements.snapshotLength; i++) {
                if ((i + 1) !== indexToKeep) {
                    elements.snapshotItem(i).parentNode.removeChild(elements.snapshotItem(i));
                }
            }

        }

        keepOnly(2)
        cleanup();
        sleep(3000);
    });
    let currentTime = new Date();
    // Export as PDF in landscape mode
    await page.pdf({
        path: path.join(__dirname, './' + dir_name + '/PR03.pdf'),
        format: 'A4',
        landscape: true,
        timeout: 360000
    });

    await browser.close();
}

async function generatePDFFour(dir_name) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    // Load your HTML file using a relative path
    const htmlFilePath = path.join(__dirname, 'cypress/reports/html/index.html');
    await page.goto(`file://${htmlFilePath}`, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await sleep(6000);
    // Your JavaScript code for making changes
    await page.evaluate(() => {
        const sleep = ms => new Promise(r => setTimeout(r, ms));
        function cleanup() {
            const xpath = "//button[contains(@class, 'test--header-btn')]";

            // Use document.evaluate to find the element
            const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);

            // Check if the element is found
            if (result.singleNodeValue) {
                // Click the element
                result.singleNodeValue.click();
            } else {
                console.error("Element not found");
            }

            let element1;
            while ((element1 = document.evaluate("//h4[contains(@class, 'test--context-item-title')]//..", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue) !== null) {
                element1.remove();
            }

            const images = document.evaluate('//img', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
            for (let i = 1; i < images.snapshotLength; i++) {
                const image = images.snapshotItem(i);
                image.style.marginTop = '75px';
            }
            var imageElement = document.evaluate('(//img)[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

            // Check if the image element is found before attempting to resize
            if (imageElement) {
                // Set the width and height attributes to 300x441 pixels
                imageElement.width = 750;
                imageElement.height = 441;
                imageElement.style.marginLeft = 'auto';
                imageElement.style.marginRight = 'auto';
                imageElement.style.marginTop = 'auto';
                imageElement.style.marginBottom = 'auto';
            } else {
                console.error('Image element not found');
            }
        }

        function keepOnly(num) {
            // Specify the index of the element you want to keep
            var indexToKeep = num; // Replace 3 with the actual index you want to keep

            // Select all <ul> elements with class 'suite--list' using XPath
            var elements = document.evaluate("//ul[contains(@class, 'suite--list')]", document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

            // Loop through the elements and remove those that don't match the specified index
            for (var i = 0; i < elements.snapshotLength; i++) {
                if ((i + 1) !== indexToKeep) {
                    elements.snapshotItem(i).parentNode.removeChild(elements.snapshotItem(i));
                }
            }

        }

        keepOnly(3)
        cleanup();
        sleep(3000);
    });
    let currentTime = new Date();
    // Export as PDF in landscape mode
    await page.pdf({
        path: path.join(__dirname, './' + dir_name + '/PR04.pdf'),
        format: 'A4',
        landscape: true,
        timeout: 360000
    });

    await browser.close();
}

async function generatePDFFive(dir_name) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    // Load your HTML file using a relative path
    const htmlFilePath = path.join(__dirname, 'cypress/reports/html/index.html');
    await page.goto(`file://${htmlFilePath}`, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await sleep(6000);
    // Your JavaScript code for making changes
    await page.evaluate(() => {
        const sleep = ms => new Promise(r => setTimeout(r, ms));
        function cleanup() {
            const xpath = "//button[contains(@class, 'test--header-btn')]";

            // Use document.evaluate to find the element
            const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);

            // Check if the element is found
            if (result.singleNodeValue) {
                // Click the element
                result.singleNodeValue.click();
            } else {
                console.error("Element not found");
            }

            let element1;
            while ((element1 = document.evaluate("//h4[contains(@class, 'test--context-item-title')]//..", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue) !== null) {
                element1.remove();
            }

            const images = document.evaluate('//img', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
            for (let i = 1; i < images.snapshotLength; i++) {
                const image = images.snapshotItem(i);
                image.style.marginTop = '75px';
            }
            var imageElement = document.evaluate('(//img)[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

            // Check if the image element is found before attempting to resize
            if (imageElement) {
                // Set the width and height attributes to 300x441 pixels
                imageElement.width = 750;
                imageElement.height = 441;
                imageElement.style.marginLeft = 'auto';
                imageElement.style.marginRight = 'auto';
                imageElement.style.marginTop = 'auto';
                imageElement.style.marginBottom = 'auto';
            } else {
                console.error('Image element not found');
            }
        }

        function keepOnly(num) {
            // Specify the index of the element you want to keep
            var indexToKeep = num; // Replace 3 with the actual index you want to keep

            // Select all <ul> elements with class 'suite--list' using XPath
            var elements = document.evaluate("//ul[contains(@class, 'suite--list')]", document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

            // Loop through the elements and remove those that don't match the specified index
            for (var i = 0; i < elements.snapshotLength; i++) {
                if ((i + 1) !== indexToKeep) {
                    elements.snapshotItem(i).parentNode.removeChild(elements.snapshotItem(i));
                }
            }

        }

        keepOnly(4)
        cleanup();
        sleep(3000);
    });
    let currentTime = new Date();
    // Export as PDF in landscape mode
    await page.pdf({
        path: path.join(__dirname, './' + dir_name + '/PR05.pdf'),
        format: 'A4',
        landscape: true,
        timeout: 360000
    });

    await browser.close();
}
async function work() {
    let currentTime = new Date();
    var currentMonth = currentTime.getMonth() + 1;
    var dir_name = 'exported-pdfs';
    // var dir_name = currentMonth + '-' + currentTime.getDate() + '-' + currentTime.getFullYear();
    var dir = './' + dir_name;

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
        console.log('Directory ' + dir_name + ' created')
    } else {
        console.log('Directory ' + dir_name + ' already exists')
    }
    console.log('Generating PDF 1')
    await generatePDFOne(dir_name);
    console.log('PDF 1 Generated')



    console.log('Generating PDF 2')
    await generatePDFTwo(dir_name);
    console.log('PDF 2 Generated')



    console.log('Generating PDF 3')
    await generatePDFThree(dir_name);
    console.log('PDF 3 Generated')



    console.log('Generating PDF 4')
    await generatePDFFour(dir_name);
    console.log('PDF 4 Generated')


    console.log('Generating PDF 5')
    await generatePDFFive(dir_name);
    console.log('PDF 5 Generated')
}
work()