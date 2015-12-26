'use strict';
/**
 * @ngdoc overview
 * @name cattrApp
 * @description
 * # cattrApp
 *
 * Main module of the application.
 */
var cattr = angular.module('cattrApp', ['ui.router','satellizer','ngResource'])
  .config(['$stateProvider', '$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {
    //ROUTES HERE
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state( '/', {
        url:'/',
        templateUrl: 'views/main.partial.html'
      })
      .state( 'login', {
        url:'/login',
        templateUrl: 'views/login.html'
      })
      .state( 'tags', {
        url:'/tags/:tag',
        template: function(){
          console.log(arguments)
          return "<p>this is tags</p>"
        }
      })

      .state( 'order', {
        url:'/order/:catID/:availID',
        templateUrl: 'views/order.html'
      })
      
      .state( 'archive',{
        url:'/archive',
        templateUrl:'archive.html'
      })

      /* /USER/(list) */
      .state('user',{
        url:'/user',
        templateUrl: 'views/user.list.html',
        controller: 'UserViewController as userView'
      })

      /*.state( 'user.cats', {
        url:'/cats',
        templateUrl: 'views/cat.list.html'
      })
      .state( 'user.reservations', {
        url:'/reservations',
        templateUrl: 'views/cat.list.html'
      })*/


      /* /CATS/(list|new) */
      .state( 'cats', {
        abstract: true,
        url:'/cats',
        template: '<ui-view/>',
        controller: 'ReservationController as rsvp'
      })
      .state( 'cats.list', {
        url:'/list',
        templateUrl: 'views/cat.list.html'
        
      })
      .state( 'cats.detail', {
        url:'/:id',
        templateUrl: 'views/cat.one.html',
        controller: 'CatController as cat'
      })
      .state( 'cats.new', {
        url:'/new',
        templateUrl: 'views/cat.new.html',
        controller: 'CatController as newCat'
      })


  }])
.filter('dateConstrained', function(){
  
  return function(input,dates){
    
    var filtered = input || [];
    if (!dates) return filtered;
    
    // todo: change this so it actually filters out the out-of-range reservations on each cat. 
    // filter over the cats to find any items who have dates within our range.
    return filtered.filter( function(item) {
      // filter out those cats who don't meet the date criteria. 
      return item.availability.filter( function(avail){

          var inStart = isDate(dates.start) ? dates.start <= new Date(avail.start) : true;
          var inEnd   = isDate(dates.end)   ? dates.end   >=  new Date(avail.end)   : true;
            
          return inStart && inEnd;
        }
      ).length;
    });

  };
})
  ;
