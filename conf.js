exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  getPageTimeout: 15000,

  setDefaultTimeout: 60000,

  framework: 'custom',

  frameworkPath: require.resolve('protractor-cucumber-framework'),

  multiCapabilities: [
  {'browserName': 'chrome',
   chromeOptions : {
            args: ['start-maximized','--disable-extensions']
        },
  specs:['features/documentation.feature']
  }, 
  {'browserName': 'chrome',
   chromeOptions : {
            args: ['start-maximized','--disable-extensions']
        },
  specs:['features/search.feature']

  }],

  cucumberOpts: {
    require: 'features/step_definitions/browser_steps.js'
  },
  onPrepare : function() {
        var chai = require('chai');
            chaiAsPromised = require('chai-as-promised');
        expect = chai.expect;
        chai.use(chaiAsPromised);
}
};
