describe('to create new Pitchflow project', function () {
    var createproject = require("../page-objects/create-project.page.js");
    var login = require("../page-objects/login-page.page.js");
    var datav=require("../data_files/project_data.js");
    
  /*  beforeEach(function()
    {
        login.getURL(datav.datadrive.url);
        browser.waitForAngularEnabled(false);
        // var LoginPage=new login();
         var EC = protractor.ExpectedConditions;
         var buttonClickable = EC.elementToBeClickable(login.userName);
         browser.wait(buttonClickable, 5000).then(function () {
            login.setuserName(datav.datadrive.username);
            login.setPassword(datav.datadrive.password);
            login.submitClick();
         });
    });*/

    it('clicking on new project button', function () {      //To click on New Project button
       // browser.waitForAngularEnabled(false);
        browser.driver.sleep(1000);
        browser.waitForAngular();
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
            debugger;
            expect(browser.getCurrentUrl()).toContain(datav.datadrive.Urllink1);
        });
    });
       
           /* var EC4 = protractor.ExpectedConditions;
            browser.wait(EC4.elementToBeClickable(obj.buildproject1), 1500).then(function () {
                obj.buildproject1.click().then(function () {
                    obj.dialogbox.element(by.buttonText('OK')).click().then(function () {
                        var EC2 = protractor.ExpectedConditions;
                        browser.wait(EC2.urlContains(d.datadrive.Urllink1), 15000).then(function () {
                            obj.evalueservelogo1.click().then(function () {
                                var EC3 = protractor.ExpectedConditions;
                                var buttonClickable2 = EC3.elementToBeClickable(obj.projectName);
                                browser.wait(buttonClickable2, 15000).then(function () {
                                    obj.projectDetails.filter(function (item2) {                //On pitchflow homepage i am searching for project which i have created and hitting on it
                                        return item2.element(by.css("h3[class*='projectName']")).getText().then(function (text123) {
                                            return text123 == d.datadrive.name
                                        });
                                    }).first().click();
                                });
                                var EC4 = protractor.ExpectedConditions;
                                var buttonClickable3 = EC4.elementToBeClickable(obj.projecttitle);
                                browser.wait(buttonClickable3, 15000).then(function () {
                                    expect(obj.projecttitle.getText()).toBe(d.datadrive.name)
                                });
                            });
                        });
                    });
                });
            });
        });
    }, 60000);*/

   /* afterEach(function () {
        browser.waitForAngularEnabled(false);
        createproject.logout.click();
    });*/

});
