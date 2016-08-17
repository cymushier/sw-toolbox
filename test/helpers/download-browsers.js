const seleniumAssistant = require('selenium-assistant');

const promises = [
  seleniumAssistant.downloadFirefoxDriver(),
  seleniumAssistant.downloadBrowser('chrome', 'stable'),
  seleniumAssistant.downloadBrowser('chrome', 'beta'),
  seleniumAssistant.downloadBrowser('chrome', 'unstable'),
  seleniumAssistant.downloadBrowser('firefox', 'stable'),
  seleniumAssistant.downloadBrowser('firefox', 'beta'),
  seleniumAssistant.downloadBrowser('firefox', 'unstable')
];

if (process.platform === 'linux') {
  promises.push(seleniumAssistant.downloadBrowser('opera', 'stable'));
  promises.push(seleniumAssistant.downloadBrowser('opera', 'beta'));
  promises.push(seleniumAssistant.downloadBrowser('opera', 'unstable'));
}

Promise.all(promises)
.then(() => {
  console.log('Browser download complete.');
});
