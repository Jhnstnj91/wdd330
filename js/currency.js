////////////////////////////////////////
function getExchange() {
    
    var baseURL = "https://api.frankfurter.app/"
    var from = document.getElementById("current-curr").value;
    var to = document.getElementById("new-curr").value;
    var amount = document.getElementById("amount").value;
    var date = getDate();
    var URL = baseURL + date + '?' + 'amount=' + amount + '&from=' + from + '&to=' + to
    var request = new XMLHttpRequest();

    request.open('GET', URL);
    request.responseType = 'json';
    request.send();
    
    request.onload = function() {
        var results = request.response;
        document.getElementById('new-value').value = results.rates[to];
    }
}

////////////////////////////////////////
function getExchangeReverse() {
    
    var baseURL = "https://api.frankfurter.app/"
    var from = document.getElementById("new-curr").value;
    var to = document.getElementById("current-curr").value;
    var amount = document.getElementById("new-value").value;
    var date = getDate();
    var URL = baseURL + date + '?' + 'amount=' + amount + '&from=' + from + '&to=' + to
    var request = new XMLHttpRequest();

    request.open('GET', URL);
    request.responseType = 'json';
    request.send();
    
    request.onload = function() {
        var results = request.response;
        document.getElementById('amount').value = results.rates[to];
    }
}

////////////////////////////////////////
function getDate() {
    today = new Date();
    today = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
    if (document.getElementById("date").value == today) {
        return 'latest';
    }
    else {
        return document.getElementById("date").value;
    }

}