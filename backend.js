var dbLocation = "http://localhost:3000/api/v1/pokemon"

$("#submitButton").click(function(event){
	apiQuery(String($("#userIn").val()));
});

function apiQuery(pokemon){
	var apiCall = "http://pokeapi.co/api/v2/pokemon/" + pokemon;
	console.log(apiCall);
	$.get(apiCall, function(response) {
		postAPI(response);
	});
};

function postAPI(response){
	console.log(response);
	var name = response["name"];
	var rtypes = response["types"];
	console.log("rtypes", rtypes)
	var types = {};

	//parse out the types
	for (var i = 0; i < rtypes.length; ++i) {
		types[rtypes[i]["slot"]] = rtypes[i]["type"]["name"];
	};

	if(!types[2]){
		types[2] = "N/A";
	}

	var sendData = JSON.stringify({name: name, type: types[1], type_2: types[2]});
	
	console.log(sendData);

	$.post(dbLocation, sendData)
		 .success(function(data) {
        console.log(data);
        var htmlString = "<tr><td>" + name + "</td><td>" + types[1] +"</td><td>" + types[2] + "</td></tr>"
				$('#pokeTable').append(htmlString);
				$('#pokeTable').show();
    })
    .error(function(error) {
        console.log('Error: ' + error);
    });


	
}

// var apiCallTest = "http://pokeapi.co/api/v2/pokemon/mudkip";
// $.get(apiCallTest, function(response) {
// 		console.log(response["name"]);
// 	});	