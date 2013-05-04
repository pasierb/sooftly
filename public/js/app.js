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
      url: 'www.sharewise.com',
      description: 'sharewise is a stock market community for people looking for meaningful and well-founded information about stocks. Since 03.2011 we are proudly taking part of developing this great app.',
      image: '/images/projects/sharewise.png'
    },{
      code: 'hopee',
      name: 'Hopee',
      url: 'www.hopee.com',
      description: 'sharewise is a stock market community for people looking for meaningful and well-founded information about stocks. Since 03.2011 we are proudly taking part of developing this great app.',
      image: '/images/projects/hopee.png'
    },{
      code: 'grabiezca',
      name: 'Grabiezca',
      url: 'www.grabiezca.pl',
      description: 'sharewise is a stock market community for people looking for meaningful and well-founded information about stocks. Since 03.2011 we are proudly taking part of developing this great app.',
      image: '/images/projects/grabiezca.png'
    },{
      code: 'recentphotos',
      name: 'RecentPhotosApp',
      url: 'www.recentphotosapp.com',
      description: 'sharewise is a stock market community for people looking for meaningful and well-founded information about stocks. Since 03.2011 we are proudly taking part of developing this great app.',
      image: '/images/projects/recentphotos.png'
    },{
      code: 'niepirace',
      name: 'Niepirace',
      url: 'www.niepirace.pl',
      description: 'sharewise is a stock market community for people looking for meaningful and well-founded information about stocks. Since 03.2011 we are proudly taking part of developing this great app.',
      image: '/images/projects/niepirace.png'
    },{
      code: 'holiday',
      name: 'HolidayPlannerApp',
      url: 'www.holidayplannerapp.com',
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
      li.data('offsetTop', li.offset().top);
      li.animate({
        marginLeft: '260px'
      }, 300, function () {

      }).animate({}, 300, function () {
        $(".small-hide", li).slideDown();
        li.addClass('selected');
        if ($scope.project) $scope.hideProject($scope.project, $event);
        $scope.project = project;
      });
      listContainer.removeClass("big")
      $event.preventDefault();
    }

    $scope.hideProject = function (project, $event) {
      var li = $("li.project-"+project.code);
      $(".small-hide", li).slideUp(100);
      li.animate({
        marginLeft: '0px',
        top: li.data('offsetTop')+"px"
      }, 200, function () {
        li.removeClass('selected');
      });
      $("#projects-list-container").addClass("big");
      $scope.project = null;
      $event.preventDefault();
    }
  });
})();
