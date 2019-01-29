var CreateProject = function () {
this.linkText1=element(by.linkText('New Project'));
this.projectName=element(by.name('name'));
this.formpage=element.all(by.css("input[class*=form-control]"));
this.optionsector = element(by.cssContainingText("Select[class*='form-control'] option","Healthcare"));
this.optiondealtype = element(by.cssContainingText("Select[class*='form-control'] option","Pitch"));
this.optionprojecttype = element(by.cssContainingText("Select[class*='form-control'] option","Powerpoint"));
this.optionsecurity = element(by.cssContainingText("Select[class*='form-control'] option","Public"));
this.date = element(by.className('dateText'));
this.datefield = element.all(by.css("button[class='btn btn-sm btn-default']"));
this.buildproject1 = element(by.css("button[class='btn btn-success buildProject']"));
this.dialogbox = element.all(by.css("div[class='row']")).get(6);
this.OKbuttontest =element(by.buttonText('OK'));
this.logout=element(by.css("img[class*='exit-icon']"));

//for clicking new project link case

this.clickLinktext=function()
{
    this.linkText1.click();
};

this.getCurrentUrl=function()
{
    return browser.getCurrentUrl();
};

//for create project test case

this.clickProjectName=function(name)
{
    this.projectName.sendKeys(name);
};

this.formPage1=function(fill1)
{
    this.formpage.get(1).sendKeys(fill1);
};

this.formPage2=function(fill2)
{
    this.formpage.get(2).sendKeys(fill2);
};

this.optionSector=function()
{
    this.optionsector.click();
};

this.optionDealType=function()
{
    this.optiondealtype.click();
};

this.optionProjectType=function()
{
    this.optionprojecttype.click();
};

this.optionSecurity=function()
{
    this.optionsecurity.click();
};

this.selectDate=async function()
{
await this.date.click();
this.datefield.get(0).click();
};

this.buildProject=async function()
{
    await this.buildproject1.click();
    browser.sleep(4000);
    var okbtn=(element.all(by.css("div[class='row']")).get(6)).element(by.buttonText('OK'));
    await okbtn.click();
}
};
module.exports=new CreateProject();