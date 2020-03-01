let homepage = require('../pages/homepage')

describe('demo calculator tests',function(){
    it('addition test',function(){
        
     //browser.get('http://juliemr.github.io/protractor-demo/');
     homepage.get('http://juliemr.github.io/protractor-demo/');
     //element(by.model('first')).sendKeys('6');
     homepage.enterFirstNumber(6);

     //element(by.model('second')).sendKeys('8');
     homepage.entersecondNumber(7);

     //element(by.css('[ng-click="doAddition()"]')).click();
     homepage.clickGo();

     //let result =element(by.cssContainingText('.ng-binding', '14'));

     //expect(result.getText()).toEqual('14');
     homepage.verifyResult(13);

     browser.sleep(2000)

    });

});
    