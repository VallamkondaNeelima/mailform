
function myfun()
{
	
	
	var k = document.querySelector(".sub-certificates")
	var y = document.createElement("div")
	y.innerHTML = 
	"<input type='text'  name = 'certificate[]'" +
	"placeholder='Certificate-name'> <input type='text' name = 'institute[]'" +
	 "placeholder='Institute-name'>"
	y.classList.add("box")
	k.appendChild(y)
	y.querySelector("input").focus()
	k.appendChild(document.createElement("br"))
	


}

function myfun1()
{
	var k = document.querySelector("#work_experience")
	var y = document.createElement("div")
	y.innerHTML = 
	'<input type="text" name="role[]" placeholder="JOB-ROLE"><br>' +
		'<input type="text" name="company[]" placeholder="Company Name"><br>'+
		'DURATION:'+
		'<br><div><input type="month" name="from[]" > to <input type="month" name="to[]" ></div>'+
		'<textarea placeholder="SHORT DESCRIPTION ABOUT YOUR EXPERIENCE" name="internexp[]"></textarea><br>'
	k.appendChild(y)
	y.querySelector("input").focus()


}

function myfun3()
{
	
	var k = document.querySelector("#skills")
	var y = document.createElement("div")
	y.innerHTML =
	 '<input type="text" name="skill[]" placeholder="SKILL"> '
	k.appendChild(y)
	y.querySelector("input").focus()
}

function myfun4()
{
	var k = document.querySelector("#awards")
	var y = document.createElement("div")
	y.innerHTML = 
	'<input type="text" name="award[]" placeholder="AWARD-NAME">'
	k.appendChild(y)
	y.querySelector("input").focus()
}

function myfun5() {
	var k = document.querySelector("#projects")
	var y = document.createElement("div")
	y.innerHTML = 
	'<input type="text" name="project[]" placeholder="PROJECT_NAME" >' +
		'<textarea  placeholder="DESCRIPTION ABOUT YOUR PROJECT" name="d[]" ></textarea>'
	k.appendChild(y)	
	y.querySelector("input").focus()
}


