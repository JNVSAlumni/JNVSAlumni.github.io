var MainApp = angular.module('MainApp', [
    'ngRoute',
    'MainAppControllers'
]);

MainApp.filter('reverse', function() {
    return function(items) {
      return items.slice().reverse();
    };
  });

MainApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'partials/home.html',
                controller: 'IndexCtrl'
            }).
            when('/home', {
                templateUrl: 'partials/home.html',
                controller: 'HomeCtrl'
            }).
            when('/about', {
                templateUrl: 'partials/about.html',
                controller: 'AboutCtrl'
            }).
            when('/alumni', {
                templateUrl: 'partials/alumni.html',
                controller: 'AlumniCtrl'
            }).
            when('/search', {
                templateUrl: 'partials/search.html',
                controller: 'SearchCtrl'
            }).
            when('/advsearch', {
                templateUrl: 'partials/advsearch.html',
                controller: 'AdvSearchCtrl'
            }).
            when('/accounts', {
                templateUrl: 'partials/accounts.html',
                controller: 'AccountsCtrl'
            }).
            when('/media', {
                templateUrl: 'partials/media.html',
                controller: 'MediaCtrl'
            }).
            when('/links', {
                templateUrl: 'partials/links.html',
                controller: 'LinksCtrl'
            }).
            when('/career', {
                templateUrl: 'partials/career.html',
                controller: 'CareerCtrl'
            }).
            when('/post', {
                templateUrl: 'partials/post.html',
                controller: 'PostCtrl'
            }).
            when('/privacy', {
                templateUrl: 'partials/privacy.html',
                controller: 'PrivacyCtrl'
            }).
            when('/copyright', {
                templateUrl: 'partials/copyright.html',
                controller: 'CopyrightCtrl'
            }).
            when('/error', {
                templateUrl: 'partials/error.html',
                controller: 'ErrorCtrl'
            }).
            otherwise({
                redirectTo: '/error'
            });
    }]);

function OpenInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

function close() {
    var d = document.querySelector('.mdl-layout');
    d.MaterialLayout.toggleDrawer();
}

function profileSelection() {
    $('#alumni_form_msg').hide();
    $('#frm_org').hide();
    $('#frm_dsg').hide();
    $('#frm_ins').hide();
    $('#frm_deg').hide();
    $("#alumni_form_msg").click(function () {
        $('#alumni_form').show();
        $('#alumni_form_msg').hide();
    });
    $("#entry_1072180231").change(function () {
        var x = $('#entry_1072180231').val();
        if (x == 'Student') {
            $('#entry_1601452556').val("");
            $('#entry_1485639544').val("");
            $('#entry_1096792936').val("NA");
            $('#entry_645748317').val("NA");
            $('#frm_ins').show();
            $('#frm_deg').show();
            $('#frm_org').hide();
            $('#frm_dsg').hide();
        }
        else {
            $('#entry_1096792936').val("");
            $('#entry_645748317').val("");
            $('#entry_1601452556').val("NA");
            $('#entry_1485639544').val("NA");
            $('#frm_org').show();
            $('#frm_dsg').show();
            $('#frm_ins').hide();
            $('#frm_deg').hide();
        }
    });
}


function searchsubmit() {
    $('#alsearch').blur();
    window.location = window.location.href.split('?')[0] + "?q=" + $('#alsearch').val();
    return 0;
}

function validateForm() {
    var _name = $('#entry_2059521736').val();
    var _batch = $('#entry_23321339').val();
    var _exams = $('#entry_2020491004').val();
    var _mobile = $('#entry_219439507').val();
    var _email = $('#entry_2110054454').val();
    var _location = $('#entry_2022448842').val();
    var _profile = $('#entry_1072180231').val();
    var _organisation = $('#entry_1096792936').val();
    var _designation = $('#entry_645748317').val();
    var _institute = $('#entry_1601452556').val();
    var _degree = $('#entry_1485639544').val();

    if (_name == undefined || _name == "" || _batch == undefined || _batch == "" || _exams == undefined || _exams == "" || _mobile == undefined || _mobile == "" || _email == undefined || _email == "" || _location == undefined || _location == "" || _profile == undefined || _profile == "" || _organisation == undefined || _organisation == "" || _designation == undefined || _designation == "" || _institute == undefined || _institute == "" || _degree == undefined || _degree == "") {
        alert('Somethimg went wrong !! Refresh the page.');
        document.getElementById('ss-form').reset();
        location.reload();
        return false;
    }
    else {
        submitted = true;
    }
}


function alumniFormSuccess() {
    document.getElementById('ss-form').reset();
    $('#alumni_form').hide();
    $('#alumni_form_msg').show();
}

function alumniFormFailure() {
    alert('Somethimg went wrong !! Refresh the page.');
}

function pupulateShareLinks() {
    console.log('hello');
    var url = encodeURI(window.location);
    var title = encodeURI(document.title);
    $('#shareFacebook').attr('href', "https://www.facebook.com/dialog/share?app_id=425089481182651&href=" + url + "&t=" + title);
    $('#shareFacebook').attr('target', "new");
    $('#shareTwitter').attr('href', "https://twitter.com/intent/tweet?text=" + title + "&url=" + url);
    $('#shareTwitter').attr('target', "new");
    $('#shareLinkedin').attr('href', "https://www.linkedin.com/shareArticle?mini=true&url=" + url + "&title=" + title);
    $('#shareLinkedin').attr('target', "new");
    $('#shareGoogleplus').attr('href', "https://plus.google.com/share?u=" + url + "&t=" + title);
    $('#shareGoogleplus').attr('target', "new");
}