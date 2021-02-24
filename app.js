// let links = document.getElementsByClassName("links");
// console.log(links);
// links[0].style.background = "teal";

// for (let i = 1; i <= links.length; i++) {
// 	if (i % 2 == 0) links[i].style.background = "red";
// 	else {
// 		links[i].style.background = "black";
// 	}
// }

// let tname = document.getElementsByTagName("p");
// for (let j = 0; j < tname.length; j++) {
// 	tname[j].style.color = "teal";
// }

// let demo = document.getElementById("demo");
// demo.setAttribute("class", "btn btn-danger");
// demo.setAttribute("title", "this is title");

// console.log(demo.getAttribute("id"));

// demo.className = "lead";

// demo.classList.add("sai", "shashank");
// console.log(demo.classList);
// console.log(demo.className);

// demo.classList.remove("sai");
// demo.removeAttribute("class");

// let tname = document.getElementsByTagName("a");

// for (let i = 0; i < tname.length; i++) {
// 	tname[i].setAttribute("class", "link" + (i + 1));
// }

// let link = document.getElementsByTagName("a");
// for (let i = 0; i < link.length; i++) {
// 	tname[i].className = "links" + i;
// }

// let link = document.getElementsByTagName("a");
// for (let i of link) {
// 	i.className = "links";
// }

// link.forEach(function (lnk, i) {
// 	console.log(lnk);
// }); //app.js:47 Uncaught TypeError: link.forEach is not a function

//convert htmlCollection into array using spread operator or Array.from()

// [...link].forEach(function (lnk, i) {
// 	lnk.className = "spread" + (i + 1);
// });

// Array.from(link).forEach(function (lnk, i) {
// 	lnk.className = "method" + (i + 1);
// });

// let users = "sai";
// for (let s of users) {
// 	console.log(s);
// }

// function something() {
// 	return arguments;
// }
// let user = something("sai", "shashank");
// for (let usr of user) {
// 	console.log(usr);
// }

// let linksOdd = document.querySelectorAll("a:nth-child(odd)");
// let linksEven = document.querySelectorAll("a:nth-child(even)");

// linksOdd.forEach(odd => odd.classList.add("btn", "btn-success"));
// linksEven.forEach(even => even.classList.add("btn", "btn-danger"));

// let template = document.querySelector(".template");
// console.log(template);
// let demo = document.querySelector("#demo");
// console.log(demo);

// let template = document.querySelector("#template .list");
// console.log(template);

// let p = document.createElement("p");
// p.textContent = "welcome to jsp";
// template.appendChild(p);
// //console.log(p);
// // //p.innerHTML = "welcome to jsp";
// let form = document.createElement("form");
// form.setAttribute("method", "Get");
// form.setAttribute("action", "#");

// let lable_username = document.createElement("label");
// lable_username.textContent = "username";
// lable_username.setAttribute("for", "username");

// let lable_password = document.createElement("label");
// lable_password.textContent = "password";
// lable_password.setAttribute("for", "password");

// let username_input = document.createElement("input");
// username_input.setAttribute("type", "text");
// username_input.setAttribute("id", "username");
// username_input.setAttribute("name", "username");
// username_input.setAttribute("placeholder", "enter user name");
// username_input.className = "form-control";

// let password_input = document.createElement("input");
// password_input.setAttribute("type", "text");
// password_input.setAttribute("id", "password");
// password_input.setAttribute("name", "password");
// password_input.setAttribute("placeholder", "enter password");
// password_input.className = "form-control";

// let btn = document.createElement("button");
// btn.textContent = "login";
// btn.classList.add("btn", "btn-success", "my-2");

// form.append(
//   lable_username,
//   username_input,
//   lable_password,
//   password_input,
//   btn
// );
// document.body.classList.add("container", "my-2", "col-md-4", "mx-auto");
// document.body.appendChild(form);

/////DOM EVENTS///////////
// let template = document.getElementById("template");
// console.log("template");
// template.onclick = function () {
//   console.log("hey template music");
//   this.textContent = "im gopi";
// };
// template.onclick = function () {
//   this.innerHTML = `<video controls  src="./video/honey.mp4"></video>`;
// };
// template.onmouseleave = function () {
//   this.textContent = "Gopi 😆";
// };
// let template = document.getElementById("template");
// template.addEventListener("click", () => {
//   console.log("im sreekanth please subscribe");
// });

// let template = document.getElementById("template");
// template.addEventListener("click", event => {
//   console.log("im sreekanth please subscribe");
//   console.log(event.target); //it prints current element
//   console.log(event.type); //type of event
//   console.log(this.template); //window
//   console.log(event.clientX); //x-axis position
//   console.log(event.clientY); //y-axis position
// });
// let btn = document.getElementById("btn");
// btn.addEventListener("click", e => {
//   btn.classList.toggle("active");
//   let getActiveClass = btn.getAttribute("class", "active");
//   console.log(getActiveClass);
// });
// let btn = document.getElementById("btn");
// btn.addEventListener("click", e => {
//   let changclr = e.target.classList.toggle("active");
//   console.log(changclr);
//   if (changclr === true) {
//     document.body.style.backgroundColor = "crimson";
//     e.target.style.backgroundColor = "white";
//     e.target.style.border = "none";
//     e.target.style.color = "#111";
//   } else {
//     document.body.style.background = "hotpink";
//     e.target.style.backgroundColor = "crimson";
//     e.target.style.border = "crimson";
//     e.target.style.color = "#fff";
//   }
// });

// let btn = document.getElementById("btn");
// btn.addEventListener("click", e => {
//   let changclr = e.target.classList.toggle("active");
//   console.log(changclr);
//   if (changclr === true) {
//     e.target.innerHTML = "successfully completed";
//     e.target.style.backgroundColor = "green";
//     e.target.style.border = "none";
//     e.target.style.color = "#111";
//   } else {
//     e.target.innerHTML = "it is failed";
//     e.target.style.backgroundColor = "crimson";
//     e.target.style.border = "crimson";
//     e.target.style.color = "#fff";
//   }
// });

// let btn = document.getElementById("btn");
// btn.addEventListener("click", e => {
//   let changclr = e.target.classList.toggle("active");
//   console.log(changclr);
//   if (changclr === true) {
//     e.target.innerHTML = "successfully completed";
//     e.target.className = "btn btn-success active";
//   } else {
//     e.target.innerHTML = "it is failed";
//     e.target.className = "btn btn-success active";
//   }
// });//under excution
//--------------19/2/2021----------------------
// let HeaderBlock = document.getElementById("HeaderBlock");
// let toggle = document.getElementById("toggle");

// toggle.addEventListener("click", e => {
//   let hideOrShow = e.target.classList.toggle("active");
//   if (hideOrShow === true) {
//     HeaderBlock.style.display = "none";
//     e.target.innerHTML = "show";

//     HeaderBlock.classList.add("hide");
//     HeaderBlock.style.transform = "transulate(-70px)";
//     HeaderBlock.style.transition = " ease-in ease-in-out 0.7s;";
//   } else {
//     HeaderBlock.style.display = "block";
//     e.target.innerHTML = "hide";

//     HeaderBlock.classList.remove("hide");
//   }
// });
// let username = document.getElementById("username");
// console.log(username);
// username.addEventListener("keyup", e => {
//   console.log(e.target.value);
// });
///.............................................reverse after 20charcters---------
// let textArea = document.getElementById("textArea");

// let textAreaClone = document.getElementById("textAreaClone");
// console.log(textArea);
// console.log(textAreaClone);
// textArea.addEventListener("keyup", e => {
//   let rs = e.target.value;
//   textAreaClone.innerHTML = rs;
//   if (rs.length >= 20) {
//     textAreaClone.innerHTML = [...rs].reverse().join();
//   }
// });
////---------------------------------------- display img after 20--------------------------
// let textArea = document.getElementById("textArea");

// let textAreaClone = document.getElementById("textAreaClone");
// console.log(textArea);
// console.log(textAreaClone);
// textArea.addEventListener("keyup", e => {
//   let rs = e.target.value;
//   textAreaClone.innerHTML = rs;
//   if (rs.length >= 20) {
//     document.body.innerHTML = `<img src="./images/th.jpg" alt="">`;
//   }
// });
// let username = document.getElementById("username");

// let username = document.getElementById("password");
// username.addEventListener("submit", e => {
// 	let rs = e.target.value;

// if (rs.length <= 6) {
//   username.style.borderColor = "red";
//   username.style.color = "white";
//   username.style.background = "orange";
// } else if (rs.length < 7) {
//   username.borderColor.color = "orange";
// }
// });
// function user() {
//   document.getElementById("myform").onsubmit();
// }

/*-------------------22-2-2021--------------------------*/

// let username = document.getElementById("username");
// let password = document.getElementById("password");
// let form = document.getElementById("form");
// let errorBlock = document.getElementById("errorBlock");
// let errorBlock2 = document.getElementById("errorBlock2");
// form.addEventListener("submit", e => {
// 	let errorMessages = [];

// 	e.preventDefault();
// 	var name = username.value;
// 	var pass = password.value;

// 	if (name === "" || name === null) {
// 		errorMessages.push("Username required");
// 	}
// 	if (pass === "" || pass === null) {
// 		errorMessages.push("Password required");
// 	} else if (pass.length < 6) {
// 		errorMessages.push("Password should be minimum 6 characters");
// 	}
// 	if (errorMessages.length > 0)
// 		errorBlock.innerHTML = errorMessages.join("<br>");
// 	else {
// 		alert(`Username - ${name}
//         Password: ${pass}`);
// 		username.value = "";
// 		password.value = "";
// 	}
// });

/*--------------------------------------------23-2-2021-------------------------------------- */
let ul = document.getElementsByTagName("ul");
let lists = document.querySelectorAll("li");
let form = document.getElementById("form");
let input = document.getElementById("input");

form.addEventListener("submit", e => {
	e.preventDefault();
	let item = input.nodeValue;
	let li = document.createElement("li");

	li.classList.add("list-group-item");
	li.innerHTML = `<a>${item}</a>`;

	let ul = document.getElementById("ul");
	ul.appendChild(li);
	let btn = document.createElement("button");
	btn.classList.add("btn", "btn-danger", "btn-sm", "float-right");
	btn.textContent = "Remove";
	li.appendChild(btn);
});

for (let list of lists) {
	let btn = document.createElement("button");
	btn.classList.add("btn", "btn-danger", "btn-sm", "float-right");
	btn.textContent = "Remove";
	list.appendChild(btn);
	//DOM events
	btn.addEventListener("click", e => {
		console.log(e.target);
		//list.remove(); //used for deleting nodelist
		btn.parentElement.remove();
	});
}

/*------------------------------------------------------------*/
// let child = document.getElementById("child");
// let parent = document.getElementById("parent");
// let grandParent = document.getElementById("grandParent");

// child.addEventListener("click", e => {
// 	console.log("child clicked");
// 	e.stopPropagation();
// });

// parent.addEventListener("click", e => {
// 	console.log("parent clicked");
// 	e.stopPropagation();
// });
// grandParent.addEventListener("click", e => {
// 	console.log("grand parent clicked");
// });
