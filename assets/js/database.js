$(document).ready(function(){
	
	$("#saveBtn").click(function(){
		let id 		=  $("#uniqueCode").val();
		let fname 	=  $("#firstName").val();
		let mname 	=  $("#middleName").val();
		let lname 	=  $("#lastName").val();
		let gndr 	=  $("input[name='gender']").val();
		let instrc  =  $("select[name='instructors']").val();

		const o = {	
			"fname": fname,
			"mname": mname, 
			"lname": lname,
			"gender": gndr,
			"instructors": instrc
		}

		if (typeof(Storage) !=="undefined") {
			localStorage.setItem(id, JSON.stringify(o));
		} else {
			window.alert("Your browser does not support Web Storage");
		}

		reset();
	}); 

	// Clear all fields
	function reset() {
		$("#uniqueCode").val("");
		$("#firstName").val("");
		$("#middleName").val("");
		$("#lastName").val("");
		$("select[name='instructors']").val("default");
	}

});

$(document).ready(function(e){
	// Get student data from localstorage
	$("#engine").on("keyup", function(){
		var prop = $("#engine").val();
		String(prop);
		if(localStorage.hasOwnProperty(prop)){

			$("#error-page").css("display", "none");
			var res = localStorage.getItem(prop);
			var data = JSON.parse(res);
			$("#student-code").text("ID - " + prop);
			// $("#student-code .badge").text(prop);
			$("#student-fname").text("First Name --> "  +  data.fname);
			$("#student-mname").text("Middle Name --> " +  data.mname);
			$("#student-lname").text("Last Name --> "   +  data.lname);
			$("#student-gender").text("Gender --> "     +  data.gender);
			$("#student-instructors").text("Instructors --> "   +  data.instructors);

		} 
		else {
			$("#student-code").text("");
			$("#student-fname").text("");
			$("#student-mname").text("");
			$("#student-lname").text("");
			$("#student-gender").text("");
			$("#student-instructors").text("");

			$("#error-page").css("display", "block");
		}
	});
});