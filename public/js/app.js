(function () {
  window.Sooftly = angular.module('sooftly', []);

  Sooftly.config(function ($routeProvider) {
    return $routeProvider.when("/", {
      templateUrl: "/views/home.html"
    }).when("/projects", {
      templateUrl: "/views/projects.html",
      controller: "ProjectsController"
    }).when("/lab", {
      templateUrl: "/views/lab.html",
      controller: "LabController"
    }).when("/about", {
      templateUrl: "/views/about.html",
    });
  });

  Sooftly.factory("LabProjectsFactory", function () {
    var projects = [{
      code: 'topthat',
      name: 'jquery-topthat',
      repoUrl: 'https://github.com/pasierb/jquery-topthat',
      readmeUrl: '/views/lab/topthat_readme.html'
    },{
      code: 'countdown5',
      name: 'Countdown5',
      repoUrl: 'https://github.com/pasierb/countdown5',
      readmeUrl: '/views/lab/countdow5_readme.html'
    }];
    return {
      getProjects: function () { return projects }
    };
  });
  Sooftly.factory("ProjectsFactory", function () {
    var projects = [{
      code: 'sw',
      name: 'Sharewise',
      url: 'http://www.sharewise.com',
      description: "sharewise is a stock market-centric community meant for people looking for meaningful and substantiated information about stocks and related topics. You can speak with like-minded investors and find out whose predictions have come true in the past. Conventional forums may contain lots of stock recommendations, but they never review the quality of recommendations or whether a recommendation ends up coming true. Not so sharewise.",
      image: '/img/projects/sharewise.png'
    },{
      code: 'hopee',
      name: 'Hopee',
      url: 'http://www.hopee.com',
      description: "hopee is a trading community for everyone to obtain relevant and reliable information on the shares. Here you have the possibility to communicate with investors who share the same interests as you and know who gave the best stock market forecasting. While traditional forums pretend to make a number of recommendations, however, no follow-up is then performed to determine which recommendation to buy has actually proved astute."+
        "It is quite different from hopee. We store the following data in order to analyze:"+
        "Estimate the user about the rise or fall of an action."+
        "Market price at the time of the recommendation."+
        "Fixing the user a target price in six months."+
        "Justification of the rise or fall of an action."+
        "Then check what recommendations to buy or sell proved right and has the best performance. For hopee, it is a good recommendation to buy when the price has increased by at least 5% in six months.",
      image: '/img/projects/hopee.png'
    },{
      code: 'grabiezca',
      name: 'Grabiezca',
      url: 'http://www.grabiezca.pl',
      description: "Based on Spree ecommerce platform online store selling games, consoles and accessories.",
      image: '/img/projects/grabiezca.png'
    },{
      code: 'recentphotos',
      name: 'RecentPhotosApp',
      url: 'http://www.recentphotosapp.com',
      description: "Share the best moments with your best friends! Take a photo, apply a great vintage filter, and instantly - instantly! - share it with your friends using push and badges.",
      image: '/img/projects/recentphotos.png'
    },{
      code: 'niepirace',
      name: 'Niepirace',
      url: 'http://www.niepirace.pl',
      description: "Fanpage bringing together all kinds of players to buy the original game. Frequent contests and games are supposed to show that it is fun to buy original games.",
      image: '/img/projects/niepirace.png'
    },{
      code: 'holiday',
      name: 'HolidayPlannerApp',
      url: 'http://www.holidayplannerapp.com',
      description: 'HolidayPlanner is a simple tool that allows, in a simple and transparent way, to schedule leave to maximize lenght of Your holidays.',
      image: '/img/projects/holidayplanner.png'
    }];

    return {
      getProjects: function () { return projects; }
    }
  });

  Sooftly.controller('ApplicationController', function ($scope) {
  });

  Sooftly.controller('LabController', function ($scope, LabProjectsFactory , $http) {
    $scope.project = null;
    $scope.projects = LabProjectsFactory.getProjects();

    $scope.showProject = function (project, $event) {
      $scope.project = project;
      $http.get(project.readmeUrl).success(function (data) {
        $(".readme").html(data);
      });
      if ($event) $event.preventDefault();
    }

    $scope.showProject($scope.projects[0]);
  });

  Sooftly.controller('ProjectsController', function ($scope, ProjectsFactory) {
    $scope.projects = ProjectsFactory.getProjects();
    var listContainer = $("#projects-list-container");

    $scope.showProject = function (project, $event) {
      var li = $("li.project-"+project.code);
      if ($scope.project) $scope.hideProject($scope.project, $event);
      $scope.project = project;
      $('.project-image', li).animate({
        height: '0px',
        marginLeft: '550px',
        marginBottom: '0px' },300);
      listContainer.addClass("span4").removeClass('span12');
      if ($event) $event.preventDefault();
    }

    $scope.hideProject = function (project, $event, clearSearch) {
      listContainer.addClass("span12").removeClass('span4');
      if (clearSearch) $scope.search = {};
      $scope.project = null;
      var li = $("li.project-"+project.code);
      $('.project-image', li).animate({
        height: '100px',
        marginLeft: '0px',
        marginBottom: '20px' },300);
      $event.preventDefault();
    }

    // init
    $scope.showProject($scope.projects[0]);
  });

  $("ul.nav a").click(function () {
    var $this = $(this)
      , ul = $this.parents('ul.nav');

    $("li", ul).removeClass('active');
    $this.parent('li').addClass('active');
  });
})();
