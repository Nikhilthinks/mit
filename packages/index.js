document.addEventListener("DOMContentLoaded", function() {

    var xhttp = new XMLHttpRequest(); 

    // fetch('http://ec2-user@ec2-3-111-51-29.ap-south-1.compute.amazonaws.com:8626/api/packages', {
    //     method: 'GET'
    // }).then(function (response) {
    //     // The API call was successful!
    //     console.log('success!', response);
    // }).catch(function (err) {
    //     // There was an error
    //     console.warn('Something went wrong.', err);
    // });

    xhttp.addEventListener('load', {});
    xhttp.addEventListener('error', () => console.log("Request failed"));
    xhttp.open("GET", 'http://ec2-user@ec2-3-111-51-29.ap-south-1.compute.amazonaws.com:8626/api/packages', true);
    xhttp.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhttp.setRequestHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
    xhttp.setRequestHeader("Access-Control-Allow-Headers", "application/json");
    xhttp.setRequestHeader("Content-type", "Origin, X-Requested-With, Content-Type, Accept, Authorization, X-CSRF-Token");
    xhttp.send();
  });



   