var dataPath = "/SiteData";
var blogPath = "/partials/blog";
var postPath = "/partials/post";
var alumniDSvc = "https://script.google.com/macros/s/AKfycby04N7LotTrhxNZ8wMPRW9Pskoo2bRt4HnQ3NwECHGpNK1V3Ywg/exec";
var accountsSvc = "https://script.google.com/macros/s/AKfycbzGS-NsFvOXmnWs_SCm16ccWJyiXiYEnsTh5ZV3jbCuvELsYIMD/exec";

var MainApp = angular.module('MainApp', [
    'ngRoute',
    'MainAppControllers'
]);

MainApp.filter('reverse', function () {
    return function (items) {
        return items.slice().reverse();
    };
});

MainApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/partials/pages/home.html',
            controller: 'IndexCtrl'
        })
        .when('/home', {
            templateUrl: '/partials/pages/home.html',
            controller: 'HomeCtrl'
        })
        .when('/about', {
            templateUrl: '/partials/pages/about.html',
            controller: 'AboutCtrl'
        })
        .when('/alumni', {
            templateUrl: '/partials/pages/alumni.html',
            controller: 'AlumniCtrl'
        })
        .when('/search', {
            templateUrl: '/partials/pages/search.html',
            controller: 'SearchCtrl'
        })
        .when('/advsearch', {
            templateUrl: '/partials/pages/asearch.html',
            controller: 'AdvSearchCtrl'
        })
        .when('/accounts', {
            templateUrl: '/partials/pages/accounts.html',
            controller: 'AccountsCtrl'
        })
        .when('/media', {
            templateUrl: '/partials/pages/media.html',
            controller: 'MediaCtrl'
        })
        .when('/links', {
            templateUrl: '/partials/pages/links.html',
            controller: 'LinksCtrl'
        })
        .when('/career', {
            templateUrl: '/partials/pages/career.html',
            controller: 'CareerCtrl'
        })
        .when('/post', {
            templateUrl: '/partials/pages/post.html',
            controller: 'PostCtrl'
        })
        .when('/post/:param1', {
            templateUrl: '/partials/pages/post.html',
            controller: 'PostCtrl'
        })
        .when('/blog', {
            templateUrl: '/partials/pages/blog.html',
            controller: 'BlogCtrl'
        })
        .when('/blog/:param1', {
            templateUrl: '/partials/pages/blog.html',
            controller: 'BlogCtrl'
        })
        .when('/privacy', {
            templateUrl: '/partials/pages/privacy.html',
            controller: 'PrivacyCtrl'
        })
        .when('/copyright', {
            templateUrl: '/partials/pages/copyright.html',
            controller: 'CopyrightCtrl'
        })
        .when('/regulations', {
            templateUrl: '/partials/pages/regulations.html',
            controller: 'RegulationsCtrl'
        })
        .when('/error', {
            templateUrl: '/partials/pages/error.html',
            controller: 'ErrorCtrl'
        })
        .otherwise({
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

function searchsubmit() {
    $('#alsearch').blur();
    window.location = window.location.href.split('?')[0] + "?q=" + $('#alsearch').val();
    return 0;
}

function pupulateShareLinks() {
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

// Function to retrieve a query string value.
function getQueryStringParameter(paramToRetrive) {
    try {
        var params = document.URL.split("?")[1].split("&");
        for (var i = 0; i < params.length; i = i + 1) {
            var singleParam = params[i].split("=");
            if (singleParam[0] == paramToRetrive) return singleParam[1];
        }
    }
    catch (e) {
        console.log('No Query Sring Found');
    }
}

function getFormattedDate() {
    var date = new Date();
    var str = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getHours() + "-" + date.getMinutes() + "-" + date.getSeconds();
    return str;
}

var xTime = getFormattedDate();

// Controllers

var MainAppControllers = angular.module('MainAppControllers', []);

MainAppControllers.controller('IndexCtrl', function ($scope, $http) {
    document.getElementById('pgTitle').innerHTML = "JNVS Alumni";
});

MainAppControllers.controller('HomeCtrl', function ($scope, $http) {
    document.title = "JNV Sitamarhi Alumni Association";
    document.getElementById('pgTitle').innerHTML = "JNVS Alumni";
    var serviceURL = dataPath + "/home_news.json?x=" + xTime;
    $http.get(serviceURL)
        .success(function (data, status, headers, config) {
            $scope.news = data;
        })
        .error(function (data, status, headers, config) {
            console.log("No data found..");
        });
});

MainAppControllers.controller('AboutCtrl', function ($scope, $http) {
    document.title = "About | JNVS Alumni Association";
    document.getElementById('pgTitle').innerHTML = "About Us";
});

MainAppControllers.controller('AlumniCtrl', function ($scope, $http) {
    document.title = "Alumni Registration | JNVS Alumni Association";
    document.getElementById('pgTitle').innerHTML = "Alumni Registration";
    var submitted = false;
    $('#formError').hide();
    profileSelection();
});

MainAppControllers.controller('SearchCtrl', function ($scope, $http) {
    document.title = "Alumni Search | JNVS Alumni Association";
    document.getElementById('pgTitle').innerHTML = "Alumni Search";
    var searchText = getQueryStringParameter('q');
    if (searchText) {
        $("#progressBar").show();
        $scope.status = "progress";
        $scope.searchString = decodeURI(searchText);
        var serviceURL = alumniDSvc;
        $http.get(serviceURL)
            .success(function (data, status, headers, config) {
                $scope.items = data;
                $("#progressBar").hide();
            })
            .error(function (data, status, headers, config) {
                console.log("No data found..");
                $("#progressBar").hide();
            });
    }
});

MainAppControllers.controller('AdvSearchCtrl', function ($scope, $http) {
    document.title = "Advanced Search | JNVS Alumni Association";
    document.getElementById('pgTitle').innerHTML = "Advanced Search";
});

MainAppControllers.controller('AccountsCtrl', function ($scope, $http) {
    $("#progressBar").show();
    document.title = "Accounts | JNVS Alumni Association";
    document.getElementById('pgTitle').innerHTML = "Accounts";
    var serviceURL = accountsSvc;
    $http.get(serviceURL)
        .success(function (data, status, headers, config) {
            $scope.transactions = data;
            var totalBalance = 0;
            for (var i = 0; i < data.length; i++) {
                totalBalance += (data[i].Credit);
                totalBalance -= (data[i].Debit);
            }
            $scope.totalBalance = totalBalance;
            $("#progressBar").hide();
        })
        .error(function (data, status, headers, config) {
            console.log("No data found..");
            $("#progressBar").hide();
        });
    $scope.creditClass = "demo-card mdl-shadow--2dp abt-card color3 crd";
    $scope.debitClass = "demo-card mdl-shadow--2dp abt-card color4 crd";
});

MainAppControllers.controller('MediaCtrl', function ($scope, $http) {
    document.title = "Photos | JNVS Alumni Association";
    document.getElementById('pgTitle').innerHTML = "Photos";
    var serviceURL = dataPath + "/media_photos.json?x=" + xTime;
    $http.get(serviceURL)
        .success(function (data, status, headers, config) {
            $scope.albums = data;
        })
        .error(function (data, status, headers, config) {
            console.log("No data found..");
        });
});

MainAppControllers.controller('LinksCtrl', function ($scope, $http) {
    document.title = "Important Links | JNVS Alumni Association";
    document.getElementById('pgTitle').innerHTML = "Links";
    var jnvLink_serviceURL = dataPath + "/links_jnv.json?x=" + xTime;
    $http.get(jnvLink_serviceURL)
        .success(function (data, status, headers, config) {
            $scope.jnvLinks = data;
        })
        .error(function (data, status, headers, config) {
            console.log("No data found..");
        });
    var careerLink_serviceURL = dataPath + "/links_career.json?x=" + xTime;
    $http.get(careerLink_serviceURL)
        .success(function (data, status, headers, config) {
            $scope.careerLinks = data;
        })
        .error(function (data, status, headers, config) {
            console.log("No data found..");
        });
});

MainAppControllers.controller('CareerCtrl', function ($scope, $http) {
    document.title = "Career | JNVS Alumni Association";
    document.getElementById('pgTitle').innerHTML = "Career";
    var serviceURL = dataPath + "/career.json?x=" + xTime;
    $http.get(serviceURL)
        .success(function (data, status, headers, config) {
            $scope.careers = data;
        })
        .error(function (data, status, headers, config) {
            console.log("No data found..");
        });
});

MainAppControllers.controller('PostCtrl', function ($scope, $http, $routeParams, $location) {
    var url = $location.path().split('/');
    basePath = url[0]
    var postItem = url[2];
    document.title = "Posts | JNVS Alumni Association";
    document.getElementById('pgTitle').innerHTML = "Notifications";
    if (postItem != null) {
        var serviceURL = postPath + "/" + postItem + ".html?x=" + xTime;
        $http.get(serviceURL)
            .success(function (data, status, headers, config) {
                document.getElementById('divPost').innerHTML = data;
                document.title = document.getElementById('divPost').getElementsByTagName('h5')[0].innerHTML + " | JNVS Alumni Association";
            })
            .error(function (data, status, headers, config) {
                console.log("No data found..");
            });
    }
    else {
        var serviceURL = dataPath + "/post.json?x=" + xTime;
        $http.get(serviceURL)
            .success(function (data, status, headers, config) {
                $scope.posts = data;
            })
            .error(function (data, status, headers, config) {
                console.log("No data found..");
            });
    }
});

MainAppControllers.controller('BlogCtrl', function ($scope, $http, $routeParams, $location) {
    var url = $location.path().split('/');
    basePath = url[0]
    var blogItem = url[2];
    document.title = "Articles | JNVS Alumni Association";
    document.getElementById('pgTitle').innerHTML = "Articles";
    if (blogItem != null) {
        var serviceURL = blogPath + "/" + blogItem + ".html?x=" + xTime;
        $http.get(serviceURL)
            .success(function (data, status, headers, config) {
                document.getElementById('divPost').innerHTML = data;
                document.title = document.getElementById('divPost').getElementsByTagName('h5')[0].innerHTML + " | JNVS Alumni Association";
            })
            .error(function (data, status, headers, config) {
                console.log("No data found..");
            });
    }
    else {
        var serviceURL = dataPath + "/blog.json?x=" + xTime;
        $http.get(serviceURL)
            .success(function (data, status, headers, config) {
                $scope.blogs = data;
            })
            .error(function (data, status, headers, config) {
                console.log("No data found..");
            });
    }
});

MainAppControllers.controller('PrivacyCtrl', function ($scope, $http) {
    document.title = "Privacy Policy | JNVS Alumni Association";
    document.getElementById('pgTitle').innerHTML = "Privacy Policy";
});

MainAppControllers.controller('CopyrightCtrl', function ($scope, $http) {
    document.title = "Copyright Policy | JNVS Alumni Association";
    document.getElementById('pgTitle').innerHTML = "Copyright Policy";
});

MainAppControllers.controller('RegulationsCtrl', function ($scope, $http) {
    document.title = "Regulations | JNVS Alumni Association";
    document.getElementById('pgTitle').innerHTML = "Regulations";
});

MainAppControllers.controller('ErrorCtrl', function ($scope, $http) {
    document.title = "Error | JNVS Alumni Association";
    document.getElementById('pgTitle').innerHTML = "Error Page";
});
