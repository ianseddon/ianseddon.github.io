var app = angular.module('myApp', []);
	function PlayersCtrl($scope, $http) {
	
	    $scope.players = [ 
	        { name: "Shahar Shenhar", points: 15 },          // 0
	        { name: "Patrick Chapin", points: 21 },          // 1
	        { name: "Stanislav Cifka", points: 9 },          // 2
	        { name: "Lars Dam", points: 12 },                // 3
	        { name: "Jeremy Dezani", points: 6 },            // 4
	        { name: "Reid Duke", points: 6 },                // 5
	        { name: "Willy Edel", points: 9 },               // 6
	        { name: "Ivan Floch", points: 15 },              // 7
	        { name: "Yuuki Ichikawa", points: 12 },          // 8
	        { name: "William Jensen", points: 12 },          // 9
	        { name: "Lee Shi Tian", points: 3 },             // 10
	        { name: "Raphael Levy", points: 9 },             // 11
	        { name: "Tom Martell", points: 12 },             // 12
	        { name: "Shaun McLaren", points: 9 },            // 13
	        { name: "Nam Sung Wook", points: 6 },            // 14
	        { name: "Raymond Perez Jr.", points: 6 },        // 15
	        { name: "Paulo Vitor Damo da Rosa", points: 9 }, // 16
	        { name: "Paul Rietzl", points: 9 },              // 17
	        { name: "Sam Black", points: 12 },               // 18
	        { name: "Owen Turtenwald", points: 12 },         // 19
	        { name: "Yuuya Watanabe", points: 12 },          // 20
	        { name: "Jacob Wilson", points: 6 },             // 21
	        { name: "Josh Utter-Leyton", points: 15 },       // 22
	        { name: "Kentarou Yamamoto", points: 15 }        // 23
	    ];
	    
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
	         
	    $scope.loadPlayers = function() {
	        var httpRequest = $http({
	            method: 'POST',
	            url: '/echo/json/',
	            data: playerData
	
	        }).success(function(data, status) {
	            $scope.players = data;
	        });
	
	    };
	
	}
