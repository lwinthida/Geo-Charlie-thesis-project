internsApp = {};

(function(){

	function fnCreate(){
		uid = $('#internID').val();
		var path = 'Interns/' + uid;
		var internName = $("#internName").val();
		var internDegree = $("#internDegree").val();
		var internSupervisor = $("#internSupervisor").val();
		var internTitle = $("#internTitle").val();
		var internAbstract = $("#internAbstract").val();
		var internYear = $("#internYear").val();
		var data = {
			Abstract: internAbstract,
			Degree: internDegree,
			Student_name: internName,
			Supervisor: internSupervisor,
			Thesis_Title: internTitle,
			Year: internYear

		}
		fb.data.create(path, data, messageHandler);
	}

	function fnRead(){
		var path = 'interns/';
		fb.data.read(path, successFn, messageHandler);
		function successFn(snapShot){
			if(!snapShot){
				console.log("No data found:");
			}else{
				var results = snapShot.val();
				console.log(results);
				var keys = Object.keys(results);
				console.log("Key: " + keys); 
				var interns = [];
				keys.forEach(function(key){
					var newElement = {}
					var name = results[key].name;
					var project = results[key].project;
					var team = results[key].team;
					newElement['key'] = key;
					newElement['name'] = name;
					newElement['team'] = team;
					newElement['project'] = project;
					interns.push(newElement);
					console.log(key, name, project, team);
	  		});
				console.log(interns);
				internsObj = { internsBinding: interns}
				ko.applyBindings(internsObj);
		}
}
}

	function messageHandler(err){
		if(!!err){
			console.log(err)
		}else{
			console.log("success");
		}
	}
	internsApp.Create = fnCreate;
	internsApp.Read = fnRead;
})()

//internsApp.Read();
