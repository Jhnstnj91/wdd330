function getExchange() {
    
    var baseURL = "https://api.frankfurter.app/"
    var from = document.getElementById("current-curr").value;
    var to = document.getElementById("new-curr").value;
    var amount = document.getElementById("amount").value;
    var date = 'latest'
    var URL = baseURL + date + '?' + 'amount=' + amount + '&from=' + from + '&to=' + to
    var request = new XMLHttpRequest();

    request.open('GET', URL);
    request.responseType = 'json';
    request.send();
    
    request.onload = function() {
        var results = request.response;
        document.getElementById('new-value').innerHTML = results.rates[to];
    }
}