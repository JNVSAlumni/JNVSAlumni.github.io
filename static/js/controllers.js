var MainAppControllers = angular.module('MainAppControllers', []);
function getFormattedDate() {
    var date = new Date();
    var str = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getHours() + "-" + date.getMinutes() + "-" + date.getSeconds();
    return str;
}

var xTime = getFormattedDate();
var gitHub_CDN_Base_URL = "https://raw.githubusercontent.com/JNVSAlumni/JNVSAA/master/contents/";
var gitHub_CDN_Base_URL_Posts = "https://raw.githubusercontent.com/JNVSAlumni/JNVSAA/master/contents/post/";

MainAppControllers.controller('IndexCtrl', ['$scope', '$http',
    function ($scope, $http) {
        document.getElementById('pgTitle').innerHTML = "JNVS Alumni";
    }]);

MainAppControllers.controller('HomeCtrl', ['$scope', '$http',
    function ($scope, $http) {
        document.title = "JNV Sitamarhi Alumni Association";
        document.getElementById('pgTitle').innerHTML = "JNVS Alumni";
        var serviceURL = gitHub_CDN_Base_URL + "home_news.json?x=" + xTime;
        $http.get(serviceURL).success(function (data, status, headers, config) {
            $scope.news = data;
        }).error(function (data, status, headers, config) {
            console.log("No data found..");
        });
    }]);


MainAppControllers.controller('AboutCtrl', ['$scope', '$http',
    function ($scope, $http) {
        document.title = "About | JNVS Alumni Association";
        document.getElementById('pgTitle').innerHTML = "About Us";
    }]);


MainAppControllers.controller('AlumniCtrl', ['$scope', '$http',
    function ($scope, $http) {
        document.title = "Alumni Registration | JNVS Alumni Association";
        document.getElementById('pgTitle').innerHTML = "Alumni Registration";
        var submitted = false;
        $('#formError').hide();
        profileSelection();
    }]);

MainAppControllers.controller('SearchCtrl', ['$scope', '$http',
    function ($scope, $http) {
        document.title = "Alumni Search | JNVS Alumni Association";
        document.getElementById('pgTitle').innerHTML = "Alumni Search";
        var searchText = getQueryStringParameter('q');
        if (searchText) {
            $("#progressBar").show();
            $scope.status = "progress";
            $scope.searchString = decodeURI(searchText);
            var serv = "https://script.google.com/macros/s/AKfycbwTqZ2zG6MtLgCZq4vhUo_oMKUYOYQyAMc3u8rGkHFhao3emA0/exec";
            var serviceURL = "https://script.google.com/macros/s/AKfycby04N7LotTrhxNZ8wMPRW9Pskoo2bRt4HnQ3NwECHGpNK1V3Ywg/exec";
            $http.get(serviceURL).success(function (data, status, headers, config) {
                $scope.items = data;
                $("#progressBar").hide();
            }).error(function (data, status, headers, config) {
                console.log("No data found..");
                $("#progressBar").hide();
            });
        }
    }]);

MainAppControllers.controller('AdvSearchCtrl', ['$scope', '$http',
    function ($scope, $http) {
        document.title = "Advanced Search | JNVS Alumni Association";
        document.getElementById('pgTitle').innerHTML = "Advanced Search";
    }]);

MainAppControllers.controller('AccountsCtrl', ['$scope', '$http',
    function ($scope, $http) {
        $("#progressBar").show();
        document.title = "Accounts | JNVS Alumni Association";
        document.getElementById('pgTitle').innerHTML = "Accounts";
        var serviceURL = "https://script.google.com/macros/s/AKfycbzGS-NsFvOXmnWs_SCm16ccWJyiXiYEnsTh5ZV3jbCuvELsYIMD/exec";
        $http.get(serviceURL).success(function (data, status, headers, config) {
            $scope.transactions = data;
            var totalBalance = 0;
            for(var i = 0; i < data.length; i++){
                totalBalance += (data[i].Credit);
                totalBalance -= (data[i].Debit);
            }
            $scope.totalBalance = totalBalance;
            $("#progressBar").hide();
        }).error(function (data, status, headers, config) {
            console.log("No data found..");
            $("#progressBar").hide();
        });
        $scope.creditClass = "demo-card mdl-shadow--2dp abt-card color3 crd";
        $scope.debitClass = "demo-card mdl-shadow--2dp abt-card color4 crd";
    }]);

MainAppControllers.controller('MediaCtrl', ['$scope', '$http',
    function ($scope, $http) {
        document.title = "Photos | JNVS Alumni Association";
        document.getElementById('pgTitle').innerHTML = "Photos";
    }]);

MainAppControllers.controller('LinksCtrl', ['$scope', '$http',
    function ($scope, $http) {
        document.title = "Important Links | JNVS Alumni Association";
        document.getElementById('pgTitle').innerHTML = "Links";        
    }]);

MainAppControllers.controller('CareerCtrl', ['$scope', '$http',
    function ($scope, $http) {
        document.title = "Career | JNVS Alumni Association";
        document.getElementById('pgTitle').innerHTML = "Career";
        var serviceURL = gitHub_CDN_Base_URL + "career_streams.json?x=" + xTime;
        $http.get(serviceURL).success(function (data, status, headers, config) {
            $scope.careers = data;
        }).error(function (data, status, headers, config) {
            console.log("No data found..");
        });
    }]);

MainAppControllers.controller('PostCtrl', function ($scope, $http, $routeParams, $location) {
        var url = $location.path().split('/');
        basePath = url[0]
        var postItem = url[2] ;
        document.title = "Posts | JNVS Alumni Association";
        document.getElementById('pgTitle').innerHTML = "Notifications";
        if (postItem != null) {
            var serviceURL = basePath +"/partials/post/"+ postItem +".html?x=" + xTime;
            $http.get(serviceURL).success(function (data, status, headers, config) {
                // $scope.post = data;
                document.getElementById('divPost').innerHTML = data;
                document.title = document.getElementById('divPost').getElementsByTagName('h5')[0].innerHTML + " | JNVS Alumni Association";
            }).error(function (data, status, headers, config) {
                console.log("No data found..");
            });
        }
        else {
            var serviceURL = basePath + "/data/post.json?x=" + xTime;
            $http.get(serviceURL).success(function (data, status, headers, config) {
                $scope.posts = data;
            }).error(function (data, status, headers, config) {
                console.log("No data found..");
            });
        }
    });

    MainAppControllers.controller('BlogCtrl', function ($scope, $http, $routeParams, $location) {
        var url = $location.path().split('/');
        basePath = url[0]
        var blogItem = url[2] ;
        document.title = "Articles | JNVS Alumni Association";
        document.getElementById('pgTitle').innerHTML = "Articles";
        if (blogItem != null) {
            var serviceURL = basePath +"/partials/blog/"+ blogItem +".html?x=" + xTime;
            $http.get(serviceURL).success(function (data, status, headers, config) {
                // $scope.post = data;
                document.getElementById('divPost').innerHTML = data;
                document.title = document.getElementById('divPost').getElementsByTagName('h5')[0].innerHTML + " | JNVS Alumni Association";
            }).error(function (data, status, headers, config) {
                console.log("No data found..");
            });
        }
        else {
            var serviceURL = basePath + "/data/blog.json?x=" + xTime;
            $http.get(serviceURL).success(function (data, status, headers, config) {
                $scope.posts = data;
            }).error(function (data, status, headers, config) {
                console.log("No data found..");
            });
        }
    });

MainAppControllers.controller('PrivacyCtrl', ['$scope', '$http',
    function ($scope, $http) {
        document.title = "Privacy Policy | JNVS Alumni Association";
        document.getElementById('pgTitle').innerHTML = "Privacy Policy";
    }]);

MainAppControllers.controller('CopyrightCtrl', ['$scope', '$http',
    function ($scope, $http) {
        document.title = "Copyright Policy | JNVS Alumni Association";
        document.getElementById('pgTitle').innerHTML = "Copyright Policy";
    }]);

MainAppControllers.controller('ErrorCtrl', ['$scope', '$http',
    function ($scope, $http) {
        document.title = "Error | JNVS Alumni Association";
        document.getElementById('pgTitle').innerHTML = "Error Page";
    }]);


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