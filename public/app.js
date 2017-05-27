var app = angular.module("myContactApp",[]);

app.controller("myContactComntroller",["$scope","$http",function($scope,$http){

	$scope.addContact = function(){
		$http.post("/createContact",$scope.contact)
		.then(function(response){
			console.log(respons.data)
			$scope.contact = {};
			refresh();
		})

	}

	var refresh = function(){
		$http.get("/getContacts")
		.then(function(response){
			console.log(response)

			$scope.contactlist = response.data;
		})
	}
 
$scope.editContact = function(id){
	console.log(id)
		$http.get("/getContactById/"+id)
		.then(function(response){
			console.log(respons.data)
			$scope.contact = response.data;
			
		})

	}

	$scope.updateContact = function(){
		$http.get("/editContact/"+$scope.contact_id,$scope.contact)
		.then(function(response){
			console.log(respons.data)
			refresh();
			
		})

	}

	refresh();
}])

