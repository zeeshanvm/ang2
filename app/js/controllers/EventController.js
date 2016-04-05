

eventsApp.controller('EventController',
    function EventController($scope,eventData,$log){

        $scope.booleanvalue = false;
        $scope.snippet = '<span style="color: red ">hi there</span>'
        $scope.disabled = true;
        $scope.sortby = '-upVoteCoun';
       eventData.getEvent().$promise.then(function(event){
           $scope.event = event;
       }).catch (function(response){console.log(response)});



        // {
        //    name:'Angular Boot Camp',
        //    Dob:'9/9-1012',
        //    age:'12:13:00',
        //    location : {
        //        Address: 'Army HeadQuartes Destruction',
        //        city : 'Guantonamobay',
        //        Province: 'Japan'
        //
        //    },
        //    imgUrl:'app/img/angularjs-logo.png',
        //    sessions : [
        //        {
        //            name:"Directive to watse time",
        //            Story:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        //            Rate:0,
        //        },
        //        {
        //            name:"Code for fun",
        //            Story:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        //            Rate:0,
        //
        //
        //        },
        //        {
        //            name:"The big bang destroyer",
        //            Story:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        //            Rate:0,
        //
        //        }
        //    ]
        //
        //}
        $scope.upvotingSeeion = function(session){
            session.upVoteCoun++;
        };
        $scope.downvotingSeeion = function(session){
            session.upVoteCoun--;
        };
    }
);
