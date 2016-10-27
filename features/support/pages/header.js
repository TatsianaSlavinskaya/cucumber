header = {
    extendSearch : function() {
        var linkExtendSearch = element(by.css('a[href="/level/7/"]'));
        return linkExtendSearch.click();
    }
}

module.exports = header; 
