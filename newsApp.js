var app = angular.module("newsApp", []);
app.controller("newsCtrl", function($scope, $http) {
    //initial data
    $scope.selectCategory = "Select a category";
    $scope.articleCount = 0;
    $scope.articleDisplay = false;
    $scope.readMore = false;
    $scope.more = "show more"

    //creating an event for Business category
    $scope.business = function() {
        $scope.articleDisplay = true;

        //calling api data
        $http.get("https://saurav.tech/NewsAPI/top-headlines/category/business/in.json").then(function(response) {
            $scope.articleCount = response.data.totalResults;
            $scope.apiStatus = response.status;
            $scope.apiData = response.data.articles;
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
        $http.get("https://saurav.tech/NewsAPI/top-headlines/category/entertainment/in.json").then(function(response) {
            $scope.articleCount = response.data.totalResults;
            $scope.apiStatus = response.status;
            $scope.apiData = response.data.articles;
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
        $http.get("https://saurav.tech/NewsAPI/top-headlines/category/health/in.json").then(function(response) {
            $scope.articleCount = response.data.totalResults;
            $scope.apiStatus = response.status;
            $scope.apiData = response.data.articles;
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
        $http.get("https://saurav.tech/NewsAPI/top-headlines/category/science/in.json").then(function(response) {
            $scope.articleCount = response.data.totalResults;
            $scope.apiStatus = response.status;
            $scope.apiData = response.data.articles;
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
        $http.get("https://saurav.tech/NewsAPI/top-headlines/category/sports/in.json").then(function(response) {
            $scope.articleCount = response.data.totalResults;
            $scope.apiStatus = response.status;
            $scope.apiData = response.data.articles;
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
        $http.get("https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json").then(function(response) {
            $scope.articleCount = response.data.totalResults;
            $scope.apiStatus = response.status;
            $scope.apiData = response.data.articles;
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


    //creating an event for World category
    $scope.world = function() {
        $scope.articleDisplay = true;

        //calling api data
        $http.get("https://saurav.tech/NewsAPI/top-headlines/category/general/in.json").then(function(response) {
            $scope.articleCount = response.data.totalResults;
            $scope.apiStatus = response.status;
            $scope.apiData = response.data.articles;
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