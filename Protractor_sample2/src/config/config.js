const { SpecReporter } = require('jasmine-spec-reporter');
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  specs: ['../testcases/login_app.spec.js','../testcases/create_project.spec.js'],
  
  //specs: ['../testcases/*spec.js'],

    framework: 'jasmine',
    
/* to set a single browser for execution
    capabilities: {
      'browserName':'firefox',
    }, 

 to execute script in multiple browsers parallelly
      multiCapabilities: [
      {'browserName': 'chrome'},
      {'browserName': 'firefox'},
    ], 

to override default properties of browser before executing
    capabilities: {
        'browserName':'chrome',
        'chromeOptions': {     
          'args': [ '--start-maximized', 'disable-infobars']   }          
      }, 

to execute scripts on same browser with multiple instances. 
      capabilities: {
        'browserName':'chrome',
        'shardTestFiles': true,
      'maxInstances': 2
      },*/

   // directconnect:'true',
    jasmineNodeOpts: {
    showColors: true,
     defaultTimeoutInterval: 6000000,
    print: function() {}
    },

 onPrepare: function() {
        browser.driver.manage().window().maximize();
        jasmine.getEnv().addReporter(
             new Jasmine2HtmlReporter({
             savePath: 'target/screenshots',
             fixedScreenshotName:true,
             cleanDestination: true,
            showSummary: true,
            fileName:'Myreportname',
            FileNameSeperator:'-',
            showQuickLinks: true
              })
            );
            jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
          },

   /*onComplete:function()
   {

   }*/       

   capabilities: {
       'browserName':'chrome'}
//  seleniumAddress: 'http://localhost:4444/wd/hub',
};
