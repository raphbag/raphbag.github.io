document.addEventListener('DOMContentLoaded', function() {
    var header = document.getElementById('header');

    fetch('/assets/includes/header.html')
        .then(function(response) {
            return response.text();
        })
        .then(function(html) {
            header.innerHTML = html;
        })
        .catch(function(error) {
            console.log('Une erreur s\'est produite : ', error);
        });
});
