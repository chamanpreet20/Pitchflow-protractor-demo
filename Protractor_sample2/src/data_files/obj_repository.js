function pitchflow(){

    //creating project--
        this.username=element(by.id('userNameInput'));
        this.password=element(by.id('passwordInput'));
        this.submitButton=element(by.id('submitButton'));
        this.linkText1=element(by.linkText('New Project'));
        this.name = element(by.name('name'));
        this.formpage = element.all(by.css("input[class*=form-control]"));
        this.optionsector = element(by.cssContainingText("Select[class*='form-control'] option","Healthcare"));
        this.optiondealtype = element(by.cssContainingText("Select[class*='form-control'] option","Pitch"));
        this.optionprojecttype = element(by.cssContainingText("Select[class*='form-control'] option","Powerpoint"));
        this.optionsecurity = element(by.cssContainingText("Select[class*='form-control'] option","Public"));
        this.date = element(by.className('dateText'));
        this.datefield = element.all(by.css("button[class='btn btn-sm btn-default']"));
        this.buildproject1 = element(by.css("button[class='btn btn-success buildProject']"));
        this.dialogbox = element.all(by.css("div[class='row']")).get(6);
        this.OKbuttontest =element(by.buttonText('OK'));
        this.projecttitle=element(by.css("div[class*='title-inside']"));
        this.logout=element(by.css("img[class*='exit-icon']"));
        this.evalueservelogo1 = element(by.className("logo"));

        this.getURL = function()
		{
		 browser.get('https://pitchflow.evalueserve.com/cs')
		};
    };
    module.exports = new pitchflow();    