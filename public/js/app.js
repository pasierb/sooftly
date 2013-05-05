(function () {
  window.Sooftly = angular.module('sooftly', []);

  Sooftly.config(function ($routeProvider) {
    return $routeProvider.when("/", {
      templateUrl: "/views/home.html"
    }).when("/projects", {
      templateUrl: "/views/projects.html",
      controller: "ProjectsController"
    }).when("/about", {
      templateUrl: "/views/about.html"
    });
  });

  Sooftly.factory("ProjectsFactory", function () {
    var projects = [{
      code: 'sw',
      name: 'Sharewise',
      url: 'http://www.sharewise.com',
      description: 'Sharewise is a stock market community for people looking for meaningful and well-founded information about stocks. Since 03.2011 we are proudly taking part of developing this great app.',
      image: '/images/projects/sharewise.png'
    },{
      code: 'hopee',
      name: 'Hopee',
      url: 'http://www.hopee.com',
      description: 'sharewise is a stock market community for people looking for meaningful and well-founded information about stocks. Since 03.2011 we are proudly taking part of developing this great app.',
      image: '/images/projects/hopee.png'
    },{
      code: 'grabiezca',
      name: 'Grabiezca',
      url: 'http://www.grabiezca.pl',
      description: 'sharewise is a stock market community for people looking for meaningful and well-founded information about stocks. Since 03.2011 we are proudly taking part of developing this great app.',
      image: '/images/projects/grabiezca.png'
    },{
      code: 'recentphotos',
      name: 'RecentPhotosApp',
      url: 'http://www.recentphotosapp.com',
      description: "Share the best moments with your best friends! Take a photo, apply a great vintage filter, and instantly - instantly! - share it with your friends using push and badges.",
      image: '/images/projects/recentphotos.png'
    },{
      code: 'niepirace',
      name: 'Niepirace',
      url: 'http://www.niepirace.pl',
      description: 'sharewise is a stock market community for people looking for meaningful and well-founded information about stocks. Since 03.2011 we are proudly taking part of developing this great app.',
      image: '/images/projects/niepirace.png'
    },{
      code: 'holiday',
      name: 'HolidayPlannerApp',
      url: 'http://www.holidayplannerapp.com',
      description: 'HolidayPlanner is a simple tool that allows, in a simple and transparent way, to schedule leave to maximize lenght of Your holidays.',
      image: '/images/projects/holidayplanner.png'
    }];

    return {
      getProjects: function () { return projects; }
    }
  });

  Sooftly.controller('ProjectsController', function ($scope, ProjectsFactory) {
    $scope.projects = ProjectsFactory.getProjects();
    $scope.project = null;
    var listContainer = $("#projects-list-container");

    $scope.showProject = function (project, $event) {
      var li = $("li.project-"+project.code);
      if ($scope.project) $scope.hideProject($scope.project, $event);
      $scope.project = project;
      $('.project-image', li).animate({
        height: '0px',
        marginLeft: '250px',
        marginBottom: '0px' },300);
      listContainer.removeClass("big");
      $event.preventDefault();
    }

    $scope.hideProject = function (project, $event, clearSearch) {
      listContainer.addClass("big");
      if (clearSearch) $scope.search = {};
      $scope.project = null;
      var li = $("li.project-"+project.code);
      $('.project-image', li).animate({
        height: '100px',
        marginLeft: '0px',
        marginBottom: '20px' },300);
      $event.preventDefault();
    }
  });
})();
