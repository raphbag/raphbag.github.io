document.addEventListener('DOMContentLoaded', function() {
    var header = document.getElementById('header');

    fetch('/assets/includes/header.html')
        .then(function(response) {
            return response.text();
        })
        .then(function(html) {
            header.innerHTML = html;
        })
        .then(function() {
            var burger = document.getElementById('burger');
            var mobileNav = document.querySelector('.mobile_nav');
            var opacity = document.querySelector('.opacity');
            burger.addEventListener('click', function() {
                if (mobileNav.style.right === '0px') {
                    mobileNav.style.right = '-250px';
                    opacity.style.display = 'none';
                } else {
                    mobileNav.style.right = '0';
                    mobileNav.style.transition = '0.5s ease';
                    opacity.style.display = 'initial';
                }
            });

            opacity.addEventListener('click', function() {
                mobileNav.style.right = '-250px';
                opacity.style.display = 'none';
            });

            var mobileLinks = document.querySelectorAll('.mobile-link');
            mobileLinks.forEach(function(link) {
                link.addEventListener('click', function() {
                    mobileNav.style.right = '-250px';
                    opacity.style.display = 'none';
                });
            });
        })
        .catch(function(error) {
            console.log('Une erreur s\'est produite : ', error);
        });
});
