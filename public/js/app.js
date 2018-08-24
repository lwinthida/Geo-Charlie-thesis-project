$(document).ready(function(){
	var database= firebase.database().ref().child("Interns");
	database.on("child_added", snap => {
		var project= snap.child("Abstract").val();
		var degree = snap.child("Degree").val();
		var name = snap.child("Student_name").val();
		var supervisor= snap.child("Supervisor").val();
		var title = snap.child("Thesis Title").val();
		var year = snap.child("Year").val();
		$("#interns").append("<tr><td >"+ name + "</td><td>" + degree + "</td><td>" + supervisor
			 + "</td><td>" + year + "</td><td>" + title + "</td><td>" + project + "</td></tr>");
		$("#authors").append("<div class=demo-list-action mdl-list><div class=mdl-list__item><span class=mdl-list__item-primary-content><i class=material-icons mdl-list__item-avatar style=padding-right:20px;>person</i><span>"+ name +"</span></span><a class=mdl-list__item-secondary-action href=authordetail.html><i class=material-icons>star</i></a></div></div>");
	});

	$('#internGetInfo').bind('click', function () {
		var name = $('input[name="internNameRead"]').val();
		console.log(name);
		database.orderByChild('Student_name').equalTo(name).on("child_added", function(snapshot){
			console.log(snapshot.val());
			var project= snapshot.child("Abstract").val();
			var degree = snapshot.child("Degree").val();
			var name = snapshot.child("Student_name").val();
			var supervisor= snapshot.child("Supervisor").val();
			var title = snapshot.child("Thesis Title").val();
			var year = snapshot.child("Year").val();
			//$("#internNameResult").val(name);
			//$("#internIDResult").val(title);
			//$("#internTeamResult").val(year);
			$("#internsNameResult").append("<tr><td >"+ name + "</td><td>" + degree + "</td><td>" + supervisor
			 	+ "</td><td>" + year + "</td><td>" + title + "</td><td>" + project + "</td></tr>");
		});
	});
	//event.preventDefault();
	$('#internGetYear').bind('click', function () {
		var year = $('input[name="internYearRead"]').val();
		console.log(year);
		database.orderByChild('Year').equalTo(year).on("child_added", function(Snapshot){
			console.log(Snapshot.val());
			var project= Snapshot.child("Abstract").val();
			var degree = Snapshot.child("Degree").val();
			var name = Snapshot.child("Student_name").val();
			var supervisor= Snapshot.child("Supervisor").val();
			var title = Snapshot.child("Thesis Title").val();
			var year = Snapshot.child("Year").val();
			//$("#internNameResult").val(name);
			//$("#internIDResult").val(title);
			//$("#internTeamResult").val(year);
			$("#internsYearResult").append("<tr><td>"+ name + "</td><td>"+ degree + "</td><td>" + supervisor
			 	+ "</td><td>" + year + "</td><td>" + title + "</td><td>" + project + "</td></tr>");
		});
	});
	$('#internGetBachelor').bind('click', function () {
		var degree = $('input[name="internBachelorRead"]').val();
		console.log(degree);
		database.orderByChild('Degree').equalTo(degree).on("child_added", function(snapShot){
			console.log(snapShot.val());
			var project= snapShot.child("Abstract").val();
			var degree = snapShot.child("Degree").val();
			var name = snapShot.child("Student_name").val();
			var supervisor= snapShot.child("Supervisor").val();
			var title = snapShot.child("Thesis Title").val();
			var year = snapShot.child("Year").val();
			//$("#internNameResult").val(name);
			//$("#internIDResult").val(title);
			//$("#internTeamResult").val(year);
			$("#internsBachelorResult").append("<tr><td>"+ name + "</td><td>"+ degree + "</td><td>" + supervisor
			 	+ "</td><td>" + year + "</td><td>" + title + "</td><td>" + project + "</td></tr>");
		});
	});
});


