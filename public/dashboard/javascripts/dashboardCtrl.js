website.controller('dashboardCtrl', function($scope) {
    $scope.showNotif1 = false; 
    $scope.showNotif2 = false; 
    $scope.showNotif3 = false; 
    $scope.showProfile = false;
    $scope.showNotif = function(id) {
        if(id == 1){
            $scope.showNotif1 = !$scope.showNotif1;
            $scope.showNotif2 = false; 
            $scope.showNotif3 = false; 
            $scope.showProfile = false;     
        }else if(id == 2){
            $scope.showNotif2 = !$scope.showNotif2; 
            $scope.showNotif1 = false; 
            $scope.showNotif3 = false; 
            $scope.showProfile = false;    
        }else if(id == 3){
            $scope.showNotif3 = !$scope.showNotif3; 
            $scope.showNotif1 = false; 
            $scope.showNotif2 = false; 
            $scope.showProfile = false;    
        }else if(id == 4){
            $scope.showProfile = !$scope.showProfile;  
            $scope.showNotif1 = false; 
            $scope.showNotif2 = false; 
            $scope.showNotif3 = false;    
        }else{
            
        }
    }  
    $scope.navLinks = [
        {
            url: "#home",
            navName: "Home"
        },{
            url: "#about",
            navName: "About Me"
        },{
            url: "#services",
            navName: "Services"
        },{
            url: "#portfolio",
            navName: "Portfolio"
        },{
            url: "#skills",
            navName: "Skills"
        },{
            url: "#contact",
            navName: "Contact"
        },
    ];
});
window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
  animationEnabled: true,  
  title:{
    text: ""
  },
  axisY: {
    valueFormatString: "",
  },
  data: [{
    yValueFormatString: "#,### Units",
    xValueFormatString: "YYYY",
    type: "spline",
    dataPoints: [
      {x: 0, y: 20},
      {x: 4, y: 10},
      {x: 8, y: 20},
      {x: 12, y: 20},
      {x: 16, y: 15},
      {x: 20, y: 10},
      {x: 24, y: 5},
      {x: 30, y: 0},
      
    ]
  }]
});
chart.render();

var doughnutChart = new CanvasJS.Chart("doughnutContainer", {
    animationEnabled: true,
    title:{
        horizontalAlign: "left"
    },
    data: [{
        type: "doughnut",
        startAngle: 60,
        //innerRadius: 60,
        dataPoints: [
            { y: 67, label: "" },
            { y: 28, label: "" },
            { y: 10, label: "" },
            { y: 7, label: ""},
            { y: 15, label: ""},
            { y: 6, label: ""}
        ]
    }]
});
doughnutChart.render();
}