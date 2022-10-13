////////////////////////////////////////
function loadPage() {
    loadDate();
    getList();
}


////////////////////////////////////////
function loadDate() {
    document.getElementById('date').valueAsDate = new Date();
}


////////////////////////////////////////
function getList() {
    
    var URL = "https://api.frankfurter.app/currencies"
    var request = new XMLHttpRequest();
    
    request.open('GET', URL);
    request.responseType = 'json';
    request.send();
    
    request.onload = function() {
        var currencyList = request.response;
        //alert(currencyList.AUD);
        keys = Object.keys(currencyList)
        var from = '<option value="" disabled selected>Current Currency</option>'
        var to = '<option value="" disabled selected>New Currency</option>'
        for (i = 0; i < keys.length ; i++) {
            var input = '<option value="' + keys[i] + '">' + currencyList[keys[i]] +  '</option>'
            from = from + input;
            to = to + input;
        }
        document.getElementById('current-curr').innerHTML = from;
        document.getElementById('new-curr').innerHTML = to;
    }
}