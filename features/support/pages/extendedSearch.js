var EC = protractor.ExpectedConditions;

var extendedSearch = { 
    dataInput : function(partName, filmYear){
      var fileldFilmName = element.all(by.id('find_film')).get(0);
      var fieldFilmYear = element.all(by.id('year')).get(0);
      var buttonExtendedSearch = element(by.css('.el_18.submit.nice_button')); 

        return browser.wait(EC.visibilityOf($('.text-orange')), 20000)
        .then (function(){
              return fileldFilmName.sendKeys(partName)})
        .then (function(){
               return browser.sleep(3000)})
         .then (function(){
               return fieldFilmYear.sendKeys(filmYear)})
         .then (function(){
               return browser.sleep(3000)})
         .then (function(){
                return buttonExtendedSearch.click()})
         .then (function(){
                browser.sleep(3000);})
       
    },

    checkFilm : function(filmName){
      var factualElement = element.all(by.css('a[href="/level/1/film/645333/sr/1/"]')).get(1);   
      
      return factualElement.getText()
       .then(function(textvalue) {
            return expect(textvalue).to.deep.equal(filmName) })
 },

   inputActorsInformation : function(actorName){
      var fieldActorName = element.all(by.id('find_people')).get(0);
      var buttonExtendedSearchByActor = element.all(by.css('.el_8.submit.nice_button')).get(0);
     
      return browser.wait(EC.visibilityOf($('.form_6')), 20000)
       .then(function(){
            return fieldActorName.sendKeys(actorName)})
       .then (function(){
        browser.sleep(2000);
            })
       .then (function(){
            return  buttonExtendedSearchByActor.click()})
       .then( function(){
            browser.sleep(2000);       
       })                                   
          
}
}
module.exports= extendedSearch;