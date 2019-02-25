function formCheck(form) {
	
	var name = form.name.value;
	var surname = form.surname.value;

	if(form.name.value == ""){
		return false;
	}

	if(form.surname.value == ""){
		return false;
	}

	return true;
}

function checkboxTicked(param) {
	
	var sel1 = document.getElementById("sel1");
	if (param.checked) {
		sel1.disabled = false;
	} else {
		sel1.disabled = true;
	}

}

var dest1 = {
	"name" : "south",
	"type" : "space"  
  };

  var dest2 = {
	"name" : "west",
	"type" : "space"  
  };

  var dest3 = {
	"name" : "north",
	"type" : "space"  
  };

  var dest4 = {
	"name" : "east",
	"type" : "space"  
  };

  var dest5 = {
	"name" : "past",
	"type" : "time"  
  };

  var dest6 = {
	"name" : "future",
	"type" : "time"  
  };

  
  var destinations = [];
  destinations.push(dest1);
  destinations.push(dest2);
  destinations.push(dest3);
  destinations.push(dest4);
  destinations.push(dest5);
  destinations.push(dest6);

  window.onload = function(){
	var search = window.location.search;

	if(!search){
		return;
	}

	var items = search.substring(1).split("&");
	
	var obj = {};
	for (var i in items) {
	  var tmp = items[i].split("=");
	  obj[tmp[0]]=tmp[1];
	}

	var hello = document.getElementById("welcome_user");
	hello.innerHTML = "Hello, " + obj.name + " " + obj.surname + "!";

	var passenger_status = obj.status;
	if (passenger_status) {
	  var doctorsCompanion = document.getElementById("doctors-companion");
	  doctorsCompanion.innerHTML = "You are my new companion. <br> Your wish is to travel through " + getTravelWish(obj.option) + ".";
	}
	
	var sel1 = document.getElementById('sel1');
	if (passenger_status) {
	 
	  var travelWish = getTravelWish(obj.option);
	  for (var i in destinations) {

		var canAdd = false;
		var destination = destinations[i];
		
	   
		if (travelWish == "Space"  && destination.type == "space") {
		  canAdd = true;
		} else if (travelWish == "Time" && destination.type == "time") {
		  canAdd = true;
		} else if (travelWish == "Time and Space" && (destination.type == "time" || destination.type == "space")){
		  canAdd = true;
		} else {
		  canAdd = false;
		}

		if (canAdd){
		  sel1.options[sel1.options.length] = new Option(destinations[i].name, destinations[i].name);
		}
	  }
	} else {
		
	}
  };

  function getTravelWish(value) {
		if (value == 1) {
			return "Space";
		} else if (value == 2) {
			return "Time";
		} else {
			return "Time and Space";
		}
  }
