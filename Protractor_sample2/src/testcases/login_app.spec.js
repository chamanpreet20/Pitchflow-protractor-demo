describe('to login to Pitchflow applicaton', function () {
    var login = require("../page-objects/login-page.page.js");
    var datav=require("../data_files/project_data.js");

    beforeEach(function()
    {
        browser.waitForAngularEnabled(false);
        login.getURL(datav.datadrive.url);        
    });
    it('login to an application',function () {  //login to a application by entering a username and password
        var EC = protractor.ExpectedConditions;
        var buttonClickable = EC.elementToBeClickable(login.userName);
        browser.wait(buttonClickable, 5000).then(function () {
         login.setuserName(datav.datadrive.username);
         login.setPassword(datav.datadrive.password);
         login.submitClick();
        browser.sleep(6000);
        });
        expect(login.getTitle()).toContain(datav.datadrive.pagetitle);
    }, 60000);
});
