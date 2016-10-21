exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['features/*.feature'],

    capabilities: {
        browserName: 'chrome',
        chromeOptions : {
            args: ['start-maximized','--disable-extensions']
        }
    },

    allScriptsTimeout: 100000,
    getPageTimeout: 30000,

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts : {
        require : 'features/step_definitions/browser_steps.js'
    },
    onPrepare : function() {
        var chai = require('chai');
            chaiAsPromised = require('chai-as-promised');
        expect = chai.expect;
        chai.use(chaiAsPromised);
    }

};
