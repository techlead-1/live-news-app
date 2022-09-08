var app = angular.module("newsApp", []);
app.controller("newsCtrl", function($scope, $http) {
    //initial data
    $scope.selectCategory = "Select a category";
    $scope.articleCount = 0;
    $scope.articleDisplay = false;
    $scope.readMore = false;
    $scope.more = "show more"

    //preloaded api
    $http.get("https://newsdata.io/api/1/news?apikey=pub_990830c4eff110dc4b19e0247441c6ecde16&q=crypto&language=en").then(function(response) {
        $scope.articleCount = response.data.totalResults;
        $scope.apistatus = response.status;
        $scope.apiData = response.data.results;
        console.log($scope.apiData)
    })


    //creating an event for Business category
    $scope.business = function() {
        $scope.articleDisplay = true;

        //calling api data
        $http.get("https://newsdata.io/api/1/news?apikey=pub_990830c4eff110dc4b19e0247441c6ecde16&language=en&category=business").then(function(response) {
            $scope.articleCount = response.data.totalResults;
            $scope.apiStatus = response.status;
            $scope.apiData = response.data.results;
            console.log(response.status)

            //api response status popup
        if($scope.apiStatus == 200) {
            alert("Success: enjoy the latest business news");
            $scope.selectCategory = "Business News";
        }
        else{
            alert("There is an issue with the provider, please try again")
        };
        })
    }


    //creating an event for Entertainment category
    $scope.entertainment = function() {
        $scope.articleDisplay = true;

        //calling api data
        $http.get("https://newsdata.io/api/1/news?apikey=pub_990830c4eff110dc4b19e0247441c6ecde16&language=en&category=entertainment").then(function(response) {
            $scope.articleCount = response.data.totalResults;
            $scope.apiStatus = response.status;
            $scope.apiData = response.data.results;
            console.log(response.status)

            //api response status popup
        if($scope.apiStatus == 200) {
            alert("Success: enjoy the latest entertainment news");
            $scope.selectCategory = "Entertainment News";
        }
        else{
            alert("There is an issue with the provider, please try again")
        };
        })
    }


    //creating an event for Health category
    $scope.health = function() {
        $scope.articleDisplay = true;

        //calling api data
        $http.get("https://newsdata.io/api/1/news?apikey=pub_990830c4eff110dc4b19e0247441c6ecde16&language=en&category=health").then(function(response) {
            $scope.articleCount = response.data.totalResults;
            $scope.apiStatus = response.status;
            $scope.apiData = response.data.results;
            console.log(response.status)

            //api response status popup
        if($scope.apiStatus == 200) {
            alert("Success: enjoy the latest health news");
            $scope.selectCategory = "Health News";
        }
        else{
            alert("There is an issue with the provider, please try again")
        };
        })
    }


    //creating an event for Science category
    $scope.science = function() {
        $scope.articleDisplay = true;

        //calling api data
        $http.get("https://newsdata.io/api/1/news?apikey=pub_990830c4eff110dc4b19e0247441c6ecde16&language=en&category=science").then(function(response) {
            $scope.articleCount = response.data.totalResults;
            $scope.apiStatus = response.status;
            $scope.apiData = response.data.results;
            console.log(response.status)

            //api response status popup
        if($scope.apiStatus == 200) {
            alert("Success: enjoy the latest science news");
            $scope.selectCategory = "Science News";
        }
        else{
            alert("There is an issue with the provider, please try again")
        };
        })
    }


    //creating an event for Sports category
    $scope.sports = function() {
        $scope.articleDisplay = true;

        //calling api data
        $http.get("https://newsdata.io/api/1/news?apikey=pub_990830c4eff110dc4b19e0247441c6ecde16&language=en&category=sports").then(function(response) {
            $scope.articleCount = response.data.totalResults;
            $scope.apiStatus = response.status;
            $scope.apiData = response.data.results;
            console.log(response.status)

            //api response status popup
        if($scope.apiStatus == 200) {
            alert("Success: enjoy the latest sports news");
            $scope.selectCategory = "Sports News";
        }
        else{
            alert("There is an issue with the provider, please try again")
        };
        })
    }


    //creating an event for Technology category
    $scope.technology = function() {
        $scope.articleDisplay = true;

        //calling api data
        $http.get("https://newsdata.io/api/1/news?apikey=pub_990830c4eff110dc4b19e0247441c6ecde16&language=en&category=technology").then(function(response) {
            $scope.articleCount = response.data.totalResults;
            $scope.apiStatus = response.status;
            $scope.apiData = response.data.results;
            console.log(response.status)

            //api response status popup
        if($scope.apiStatus == 200) {
            alert("Success: enjoy the latest technology news");
            $scope.selectCategory = "Technology News";
        }
        else{
            alert("There is an issue with the provider, please try again")
        };
        })
    }

    //creating an event for Enviroment category
    $scope.enviroment = function() {
        $scope.articleDisplay = true;

        //calling api data
        $http.get("https://newsdata.io/api/1/news?apikey=pub_990830c4eff110dc4b19e0247441c6ecde16&language=en&category=environment").then(function(response) {
            $scope.articleCount = response.data.totalResults;
            $scope.apiStatus = response.status;
            $scope.apiData = response.data.results;
            console.log(response.status)

            //api response status popup
        if($scope.apiStatus == 200) {
            alert("Success: enjoy the latest enviroment news");
            $scope.selectCategory = "Enviroment News";
        }
        else{
            alert("There is an issue with the provider, please try again")
        };
        })
    }

    //creating an event for Food category
    $scope.food = function() {
        $scope.articleDisplay = true;

        //calling api data
        $http.get("https://newsdata.io/api/1/news?apikey=pub_990830c4eff110dc4b19e0247441c6ecde16&language=en&category=food").then(function(response) {
            $scope.articleCount = response.data.totalResults;
            $scope.apiStatus = response.status;
            $scope.apiData = response.data.results;
            console.log(response.status)

            //api response status popup
        if($scope.apiStatus == 200) {
            alert("Success: enjoy the latest food news");
            $scope.selectCategory = "Food News";
        }
        else{
            alert("There is an issue with the provider, please try again")
        };
        })
    }

    //creating an event for Top category
    $scope.top = function() {
        $scope.articleDisplay = true;

        //calling api data
        $http.get("https://newsdata.io/api/1/news?apikey=pub_990830c4eff110dc4b19e0247441c6ecde16&language=en&category=top").then(function(response) {
            $scope.articleCount = response.data.totalResults;
            $scope.apiStatus = response.status;
            $scope.apiData = response.data.results;
            console.log(response.status)

            //api response status popup
        if($scope.apiStatus == 200) {
            alert("Success: enjoy the latest top news");
            $scope.selectCategory = "Top News";
        }
        else{
            alert("There is an issue with the provider, please try again")
        };
        })
    }

    //creating an event for Politics category
    $scope.politics = function() {
        $scope.articleDisplay = true;

        //calling api data
        $http.get("https://newsdata.io/api/1/news?apikey=pub_990830c4eff110dc4b19e0247441c6ecde16&language=en&category=politics").then(function(response) {
            $scope.articleCount = response.data.totalResults;
            $scope.apiStatus = response.status;
            $scope.apiData = response.data.results;
            console.log(response.status)

            //api response status popup
        if($scope.apiStatus == 200) {
            alert("Success: enjoy the latest politics news");
            $scope.selectCategory = "Politics News";
        }
        else{
            alert("There is an issue with the provider, please try again")
        };
        })
    }


    //creating an event for World category
    $scope.world = function() {
        $scope.articleDisplay = true;

        //calling api data
        $http.get("https://newsdata.io/api/1/news?apikey=pub_990830c4eff110dc4b19e0247441c6ecde16&language=en&category=world").then(function(response) {
            $scope.articleCount = response.data.totalResults;
            $scope.apiStatus = response.status;
            $scope.apiData = response.data.results;
            console.log(response.status)

            //api response status popup
        if($scope.apiStatus == 200) {
            alert("Success: enjoy the latest world news");
            $scope.selectCategory = "World News";
        }
        else{
            alert("There is an issue with the provider, please try again")
        };
        })
    }
})