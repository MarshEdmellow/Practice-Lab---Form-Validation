function validating(){ 
    
	var event = document.forms["FormValidation"]["Event"];			 
	var title = document.forms["FormValidation"]["Title"]; 
	var dateFrom = document.forms["FormValidation"]["dateFrom"]; 
	var dateTo = document.forms["FormValidation"]["dateTo"]; 
	var datePost = document.forms["FormValidation"]["datePost"]; 
	var save = document.forms["FormValidation"]["save"]; 

	if (event.value == ""){ 
		alert("Please choose the kind of your Event."); 
		event.focus(); 
		return false; 
	} 

	if (title.value == ""){ 
		alert("Please enter the title of your Event."); 
		title.focus(); 
		return false; 
	} 
	
	if (dateFrom.value == ""){ 
		alert("Please enter a proper date on when will be the start of your Event."); 
		dateFrom.focus(); 
		return false; 
	} 

	if (dateTo.value == ""){ 
		alert("Please enter a proper date it will end."); 
		dateTo.focus(); 
		return false; 
	} 
	if(dateFrom.value > dateTo.value){
		alert("Invalid event dates.");
		dateFrom.focus();
		return false;
	}
	
	if(datePost.value<dateFrom.value){
		alert("Invalid posting date.");
		datePost.focus();
		return false;
	}
	if (datePost.value == ""){ 
		alert("Please enter the date when to post your Event."); 
		datePost.focus(); 
		return false; 
    } 
	return true; 
}

function Save(){
    if(validating()==true){
	alert("Thank you for your participation!");
	return true;
	}
	else{
		return false;
	}
    
}