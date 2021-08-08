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
		"Love to watch TV Series, mainly of these genres: sci-fi, thriller and sometimes drama/sitcom. \
		My favourites include Breaking Bad, Twelve Monkeys, and The Expanse.",
		"I started watching Anime recently, thanks to the recommendations by friends. \
		One Punch Man, Death Note and Attack on Titan were fun to watch!",
		"Hardly care about genres while watching movies, but yeah, make sure to check out the reviews first...\
		:)",
		"Didn't know all the rules until last year(yes, <i>En Passant</i> was gibberish to me). \
		But then, got addicted to it. Reached 1050 on chess.com"
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