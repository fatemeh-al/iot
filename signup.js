var btnObject = document.getElementById('btn');
var inpObject = document.getElementById('inp');
var signupbtn = document.getElementById('signupbtn');

btnObject.addEventListener("click",function(event){
    inp.innerHTML += '<div class="dont"><label for="MemberName">Member Name</label><input type="text" name="MemberName"  id="memberName" required><br></div>';
})

signupbtn.addEventListener("click", function(event){
	var groupName = document.getElementById('groupName');
	var ThingSpeakID = document.getElementById('ThingSpeakID');
	var password = document.getElementById('password');
	var memberName = document.getElementById('memberName');

	request = new XMLHttpRequest();
	request.open('POST', 'https://iot2256.herokuapp.com/signup');
	request.setRequestHeader('Content-Type', 'application/json');
	request.send(JSON.stringify({
		groupName:groupName,
		ThingSpeakID:ThingSpeakID,
		password:password,
		memberName:memberName
	}));
})
