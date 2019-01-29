describe('to create new Pitchflow project', function () {
    var createproject = require("../page-objects/create-project.page.js");
    var login = require("../page-objects/login-page.page.js");
    var datav=require("../data_files/project_data.js");

    it('clicking on new project button', function () {      //To click on New Project button
      //  browser.waitForAngularEnabled(false);
        browser.driver.sleep(1000);
       // browser.waitForAngular();
        createproject.clickLinktext();
        expect(createproject.getCurrentUrl()).toContain(datav.datadrive.urllink);
    }, 60000);
       

    it('creating a new project', function () {    //creating a new project by entering an all required fields
        browser.waitForAngularEnabled(false);
        var EC1 = protractor.ExpectedConditions;
        var buttonClickable1 = EC1.elementToBeClickable(createproject.projectName);
        browser.wait(buttonClickable1, 8000).then(function () {
            createproject.clickProjectName(datav.datadrive.name);
            createproject.formPage1(datav.datadrive.formpage1);
            createproject.formPage2(datav.datadrive.formpage2);
            createproject.optionSector();
            createproject.optionDealType();
            createproject.optionProjectType();
            createproject.optionSecurity();
            createproject.selectDate();
            var EC4 = protractor.ExpectedConditions;
            browser.wait(EC4.elementToBeClickable(createproject.buildproject1), 1500);
            createproject.buildProject();
            browser.sleep(8000);
            //debugger;
            expect(browser.getCurrentUrl()).toContain(datav.datadrive.Urllink1);
        });
    });
});
