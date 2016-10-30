angular.module('Inventory')
    .controller('NavbarCtlr', ['$location', function ($location) {

        console.log('NavbarCtlr initialized');
        console.log(document.getElementById('partsItem'));
        console.log(document.getElementById('partsLink'));

        var path = $location.path();

        if(path.includes('parts')) {

            $('#partsItem').addClass("active");
            var elm = document.createElement('SPAN');
            elm.setAttribute("class", "sr-only");
            elm.innerHTML = '(current)';
            console.log('elm');
            document.getElementById('partsLink').appendChild(elm);
        }

        else if(path.includes('requests')) {

        }

        else if(path.includes('wearables')) {

        }
    }]);

