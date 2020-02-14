function validating(){ 
    
	var event = document.forms["ValidationForm"]["Event"];			 
	var title = document.forms["ValidationForm"]["Title"]; 
	var dateFrom = document.forms["ValidationForm"]["dateFrom"]; 
	var dateTo = document.forms["ValidationForm"]["dateTo"]; 
	var datePost = document.forms["ValidationForm"]["datePost"]; 
	var save = document.forms["ValidationForm"]["save"]; 

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
		alert("Please enter the date when will be the start of your Event."); 
		dateFrom.focus(); 
		return false; 
	} 

	if (dateTo.value == ""){ 
		alert("Please enter the date it will end."); 
		dateTo.focus(); 
		return false; 
	} 
	if(dateFrom.value > dateTo.value){
		alert("Invalid start of date.");
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