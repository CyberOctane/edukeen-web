var cookie = {
    name: "edukeen_cookie_consent_status",
    path: "/",
    expiryDays: 365,
    value: "allow"
};


function setCookie(cname, cvalue, exdays, cpath) {
    var expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + (exdays || 365));

    var cookie = [cname + "=" + cvalue, 'expires=' + expirationDate.toUTCString(), 'path=' + (cpath || '/')];

    document.cookie = cookie.join(';');
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie(cookie.name);
    if (user != "") {
        console.log("Cookie Found !");
    } else {
        iziToast.show({
            id: 'cookie-toast',
            theme: 'dark',
            color: '#08164a',
            icon: 'fas fa-cookie-bite',
            iconColor: '#E71E26',
            title: 'Cookie Alert :',
            messageSize: '15',
            message: 'This website uses cookies to ensure you get the best experience on our website.',
            position: 'bottomCenter', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
            progressBarColor: '#E71E26',
            timeout: false,
            transitionIn: 'fadeInUp',
            buttons: [
                ['<button>Got It!</button>', function (instance, toast) {
                    instance.hide({
                        transitionOut: 'fadeOutDown',
                        onClosing: function (instance, toast, closedBy) {
                            setCookie(cookie.name, cookie.value, cookie.expiryDays, cookie.path);
                            // console.log("Cookie Added Successfully with your Permission");
                        }
                    }, toast, 'gotItButton');
                }]
            ],
            onClosing: function (instance, toast, closedBy) {
                console.info('closedBy: ' + closedBy); // tells if it was closed by 'drag' or 'button'
            }
        });
    }
}

window.addEventListener("load", function () {
    checkCookie();
});