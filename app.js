var app = angular.module('myApp', []);
	function PlayersCtrl($scope, $http) {
	
	    $scope.players = [];
	    
	    $scope.people = [
	        { name: "Nick",   picks: [ 7, 22, 0, 19, 20, 13, 4, 5 ] },
	        { name: "Harley", picks: [ 1, 22, 19, 9, 13, 20, 4, 5 ] },
	        { name: "Paul",   picks: [ 1, 0, 19, 20, 13, 2, 11, 5 ] },
	        { name: "Kyle",   picks: [ 7, 19, 18, 12, 20, 13, 2, 5 ] },
	        { name: "Evan",   picks: [ 1, 7, 22, 9, 8, 17, 11, 5 ] },
	        { name: "Ian",    picks: [ 7, 19, 9, 8, 18, 20, 13, 11 ] },
	        { name: "Jesse",  picks: [ 0, 18, 20, 16, 13, 17, 11, 5 ] },
	        { name: "Ryan",   picks: [ 22, 23, 8, 20, 2, 14, 5, 10 ] }
	    ];
	
	    $scope.totalScore = function( pId ) {
	         var total = 0;
	         var i;
	         for( i = 0; i < $scope.people[pId].picks.length; i++ ) {
	             total += $scope.players[$scope.people[pId].picks[i]].points;
	         }
	         return total;
	    };
	    
	    $scope.scoreColor = function( pId ) {
	        var maxScore = 0;
	        var minScore = 999;
	        var myScore;
	        var tmp;
	
	        var totals = [];
	        var i;
	        
	        for( i = 0; i < $scope.people.length; i++ ) {
	            if( $scope.totalScore(i) < minScore ) minScore = $scope.totalScore(i);
	            if( $scope.totalScore(i) > maxScore ) maxScore = $scope.totalScore(i);
	            if( i == pId ) myScore = $scope.totalScore(i);
	        }
	        
	        var x = (myScore - minScore) / (maxScore - minScore);
	        return 'rgb( '+Math.round(225*(1-x))+', '+Math.round(225*x)+', 0 )';
	    }
	    
	    $scope.pointSort = function( pick ) {
	    	return $scope.players[pick].points;
	    };
	         
	    $scope.loadPlayers = function() {
	        
	        $http.get('data.json').then( function ( res ) {
	        	$scope.players = res.data;
	        	$scope.hasLoaded = true;
	        });
	
	    };
	    
	    $scope.hasLoaded = false;
	    
	    $scope.loadPlayers();
	
	}
