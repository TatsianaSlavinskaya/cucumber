var header = require ("./header.js");
var EC = protractor.ExpectedConditions;

var homePage = {  
  login: function(login, password){
    var iframe = element(by.className('kp2-authapi-iframe'));
    var linkToStartLogin = element(by.css('.js-external-login-action'));
    var userLogin =  element(by.name('login'));
    var userPassword = element(by.name('password'));
    var buttonToLogin = element.all(by.css('button.button_type_action')).get(0);

    return linkToStartLogin.click()
      .then(function(){
        return browser.switchTo().frame(iframe.getWebElement());
      })
      .then(function(){
        return browser.wait(EC.visibilityOf($('.domik__content')), 20000);
      })
      .then(function(){
        return userLogin.sendKeys(login);
      })
      .then(function(){
        return browser.sleep(2000);
      })
      .then(function(){
        return userPassword.sendKeys(password);
      })
      .then(function(){
        return browser.sleep(2000);
      })
      .then(function(){
        return buttonToLogin.click();
      })
      .then(function(){
        return browser.wait(EC.visibilityOf($('.about')), 80000)
      });
    },

  comparationOfValues : function(name){  
    var factualElement = element(by.css('a[href="/level/79/user/13703548/go/"]'));

    factualElement.getText()
     .then(function(textvalue) {
      return expect(textvalue).to.deep.equal(name) 
    });
  },

  searchFilm: function(film){
    var linkToFilmName = element(by.id('search_input'));
    var buttonFilmSearch = element.all(by.css('.searchButton1')).get(0);
    
    linkToFilmName.sendKeys(film)
    .then(function(){
     return browser.sleep(3000);  
   })
    .then (function(){
      return buttonFilmSearch.click()
   })
    .then (function(){
     return browser.sleep(3000);   
    })
    .then (function(){
      return browser.sleep(3000);    
   });
  }
}
 Object.assign(homePage,header);

module.exports = homePage;
