header = {
    extendSearch : function() {
        var linkExtendSearch = element(by.css('a[href="/level/7/"]'));
        
        return linkExtendSearch.click();
    },
    clickOnHelp : function() {
        var linkWhy = element(by.css('a[href="/docs/join/"]'));
        
        return linkWhy.click();
    },
    clickOnWhatSearch : function (){
        var whatSearch = element(by.css('a[href="/level/81/"]'));
        
        return whatSearch.click();
    },
    clickOnReturnToHomePage : function(){
        var buttonHomePage = element(by.src('https://st.kp.yandex.net/images/logoWhite.png'));
        
        return buttonHomePag.click();
    },
    clickOnSearch : function() {
        var linkChoosenFilm = element.all(by.css('.js-serp-metrika')).get(7);

        return linkChoosenFilm.click();
    }

}

module.exports = header; 
