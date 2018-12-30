var btnObject = document.getElementById('btn');
var inpObject = document.getElementById("inp");
var singupbtn = document.getElementById("singupbtn");

btnObject.addEventListener("click",function(event){
    inp.innerHTML += '<div class="dont"><label for="MemberName">Member Name</label><input type="text" name="MemberName" required><br></div>';
})

singupbtn.addEventListener("click", function(event){
	request = new XMLHttpRequest();
	request.open('POST', 'URL');
	request.send(JSON.strigify({
		//get username o ina
	}));
})