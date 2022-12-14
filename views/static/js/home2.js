const image = document.querySelector('.image');
const hover = document.querySelector('.hover');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

function show() {
     hover.classList.add('active');
     modal.classList.add('show');
}

function hide() {
     hover.classList.remove('active');
     modal.classList.remove('show');
}

image.addEventListener('click', show);
close.addEventListener('click', hide);

var chkbtn = document.getElementById("chkbtn");
const sidebar = document.getElementById('sidebar');

function toogle() {
     var chk = document.getElementById('check').checked;
     if (!chk) {
          sidebar.style.display = 'block';
     } else {
          sidebar.style.display = 'none';
     }
}

chkbtn.addEventListener('click', toogle);

const container = document.querySelector('#body');
const toggle = document.querySelector('.toggle-input');
const initialState = 'false';
toggle.checked = initialState;

toggle.addEventListener('change', function() {
  if (!toggle.checked) {
       container.className = 'light';
  }
  else {
       container.className = 'dark';
 }
});


var cferrmsg='<h3 class="title">Error</h3><p>Sorry, an error occurred while receiving your message, Try to contact with me in another method.</p>',cfsuccessmsg='<h3 class="title">Message Sent</h3><p>Your message has been successfully came to me, I will contact with you soon.</p>',cfformcontent='<h3 class="title">Contact</h3><p>Send me a message I will contact with you soon.</p><div><input class="element" onchange="cfonChange(\'cfname\')" id="cfname" type="text" name="name" placeholder="Name" autocomplete="off" data-required="true"><input class="element" onchange="cfonChange(\'cfemail\')" id="cfemail" type="text" name="email" placeholder="Email" autocomplete="off" data-required="true" data-validation="email"><input class="element" onchange="cfonChange(\'cfphone\')" id="cfphone" type="number" name="phoneno" placeholder="Phone No" autocomplete="off" data-required="false"><input class="element" onchange="cfonChange(\'cfsubject\')" id="cfsubject" type="text" name="subject" placeholder="Subject" autocomplete="off" data-required="true"><textarea class="element" onchange="cfonChange(\'cfmessage\')" id="cfmessage" name="message" placeholder="Your message" data-required="true"></textarea><button id="cfbutton" onclick="cfmessageSend()" class="form-button color">Send your message</button><a href="https://github.com/mjvbz" class="cfpromo">created by @mjvbz</a></div>';function cfClick(){document.getElementById("cf").classList.toggle("showing-state"),document.getElementById("cf").classList.toggle("showing")}async function cfmessageSend(){var cfvalue={name:document.getElementById("cfname").value,email:document.getElementById("cfemail").value.toLowerCase(),phone_no:document.getElementById("cfphone").value,subject:document.getElementById("cfsubject").value,message:document.getElementById("cfmessage").value};if(""===cfvalue.name)document.getElementById("cfname").classList.add("error");else if(""!==cfvalue.email&&/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(cfvalue.email))if(""===cfvalue.phone_no)document.getElementById("cfphone").classList.add("error");else if(""===cfvalue.subject)document.getElementById("cfsubject").classList.add("error");else if(""===cfvalue.message)document.getElementById("cfmessage").classList.add("error");else{document.getElementById("cfbutton").removeAttribute("onclick"),document.getElementById("cfbutton").classList.remove("color"),document.getElementById("cfbutton").classList.add("onclick"),document.getElementById("cfbutton").innerHTML="Sending...";try{var sendmessage;if(!(await(await fetch(document.getElementById("contactform").getAttribute("form_worker_url"),{method:"POST",body:JSON.stringify(cfvalue)})).json()).status)throw new Error("Error");document.getElementById("cfcontent").innerHTML=cfsuccessmsg,localStorage.setItem("contact-form",JSON.stringify({sent:!0,canSendUnix:(new Date).getTime()+864e5}))}catch(error){console.log(error),document.getElementById("cfcontent").innerHTML=cferrmsg}}else document.getElementById("cfemail").classList.add("error")}function cfonChange(id){document.getElementById(id).classList.remove("error")}window.onload=()=>{var cfstylesheet=document.createElement("link");cfstylesheet.rel="stylesheet",cfstylesheet.href="https://cdn.jsdelivr.net/gh/cachecleanerjeet/contact-form@master/src/style.min.css",document.getElementsByTagName("head")[0].appendChild(cfstylesheet),cfstylesheet.onload=function(){var cfdiv=document.createElement("section");cfdiv.classList.add("contact-form-cf"),cfdiv.innerHTML='<div class="box right-button" id="cf" style="display: inline-block; z-index: 9999;"><div class="button color" onclick="cfClick();"><span class="m-cf-icon-default"><i class="material-icons">email</i></span><span class="icon"><i class="material-icons">close</i></span></div><div class="panel" id="cfcontent"></div></div>',document.getElementsByTagName("body")[0].appendChild(cfdiv);var cfresult=JSON.parse(localStorage.getItem("contact-form"));cfresult&&cfresult.sent&&cfresult.canSendUnix>(new Date).getTime()?document.getElementById("cfcontent").innerHTML=cfsuccessmsg:document.getElementById("cfcontent").innerHTML=cfformcontent}};