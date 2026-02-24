require('cypress-xpath')
import addContext from 'mochawesome/addContext'
Cypress.on('test:after:run', (test, runnable) => {
    const videoName = `${Cypress.spec.name}.mp4`;
    const videoUrl = `videos/${videoName}`;
    addContext({ test }, videoUrl);
});

// let timestamp;
// Cypress.Screenshot.defaults({
//   onBeforeScreenshot($el) {
//     timestamp = document.createElement('span')
//     timestamp.innerText = new Date();
//     $el[0].appendChild(timestamp)
//   },
//   onAfterScreenshot($el, props) {
//     timestamp.remove()
//   },
// })