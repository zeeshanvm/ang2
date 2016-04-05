

eventsApp.controller('EditEventController',function($scope,eventData){
    $scope.event ={};
            $scope.saveEvent = function(event,newForm){
                if(newForm.$valid){
                    window.alert("success")
                     eventData.save(event).$promise.then(function(res){

                         console.log("Success : "+res);
                     }).catch(function(error){
                         console.log("Error : "+error);
                     })
                }
    };
    $scope.canEvent = function(){
       window.location = 'http://www.google.com'
    };
});