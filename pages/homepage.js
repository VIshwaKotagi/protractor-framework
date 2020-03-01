let homepage = function(){

    let firstNumber_input = element(by.model('first'));
    let secondNumber_input = element(by.model('second'));
    let goButton = element(by.css('[ng-click="doAddition()"]'));

    this.get = function(url){
        BhxBrowser.get(url)
    };
    this.enterFirstNumber = function(firstNo){
         firstNumber_input.sendkeys(firstNo);
    };  

    this.entersecondNumber = function(secondNo){
         secondNumber_input.sendkeys(secondNo);
    };

    this.clickGo = function(){
        goButton.click();
    };
    
    this.verifyResult = function(result){
     let output =element(by.cssContainingText('.ng-binding', 'result'));
     expect(outut.getText()).toEqual('result');
   
    };
};


module.exports =new homepage();