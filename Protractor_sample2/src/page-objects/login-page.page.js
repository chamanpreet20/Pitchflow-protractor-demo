var LoginPage=function(){
    this.userName=element(by.id('userNameInput'));
    this.password=element(by.id('passwordInput'));
    this.submitbtn=element(by.id('submitButton'));
    this.logout=element(by.css("img[class*='exit-icon']"));

this.getURL = function (url) {
    browser.get(url)
};

this.setuserName = function (name) {
    this.userName.sendKeys(name);
};

this.setPassword = function (pswd) {
    this.password.sendKeys(pswd);
};

this.submitClick=function()
{
    this.submitbtn.click();
};

this.getTitle=function()
{
    return browser.getTitle();
};

this.logintoapp=function()
{
this.getURL();
this.setuserName();
this.setPassword();
this.submitClick();
};
};
module.exports= new LoginPage();