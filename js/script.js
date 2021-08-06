$("#menu").click(function(obj) {
			obj.preventDefault(); $("#page-wrapper").toggleClass("showmenu");
});

function submit() {
	let hobby=document.getElementsByName("hobbies");
	console.log(hobby);
	let hobby_names=["",
		"TV Series",
		"Anime",
		"Movies",
		"Chess"
	];
	let details=["",
		"I love to watch TV Series",
		"Anime details",
		"Movie details",
		"Chess details"
	];
	let selected_items=[];
	let selected_items_str="";
	let htmlStrToAdd="<h3> Details </h3> <hr> <ol>";
	let cnt=1;
	for(let i=0; i<hobby.length; i++) {
		if(hobby[i].checked) {
			console.log(i);
			selected_items.push(i);
			selected_items_str+="\n"+cnt+". "+hobby_names[i];
			htmlStrToAdd+="<li><u>"+hobby_names[i]+" :-</u><br>"+details[i]+"</li>";
			cnt++;
		}
	}
	htmlStrToAdd+="</ol><button type=\"submit\" class=\"btn btn-primary\" onclick=\"goback()\">Back</button>";
	if(selected_items.length == 0) {
		alert("No hobbies selected. Try again!"); return;
	}

	let reply = window.confirm("You selected"+selected_items_str+"\nClick OK to see details!");
	if(!reply) {
		return;
	}

	document.getElementById("checkboxes-content").style.display="none";
	document.getElementById("checkboxes-selected-content").style.display="block";
	document.getElementById("checkboxes-selected-content").innerHTML=htmlStrToAdd;
}
function goback() {
	document.getElementById("checkboxes-content").style.display="block";
	document.getElementById("checkboxes-selected-content").style.display="none";
}