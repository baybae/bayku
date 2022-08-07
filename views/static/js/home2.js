const gambar = document.querySelector('.image');
const hover = document.querySelector('.hover');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

fungsi tampilkan() {
     hover.classList.add('aktif');
     modal.classList.add('tampilkan');
}

fungsi sembunyikan() {
     hover.classList.remove('aktif');
     modal.classList.remove('tampilkan');
}

image.addEventListener('klik', tampilkan);
close.addEventListener('klik', sembunyikan);

var chkbtn = document.getElementById("chkbtn");
const bilah sisi = document.getElementById('bilah sisi');

fungsi alat() {
     var chk = document.getElementById('check').diperiksa;
     jika (!chk) {
          sidebar.style.display = 'blok';
     } kalau tidak {
          sidebar.style.display = 'tidak ada';
     }
}

chkbtn.addEventListener('klik', toogle);

const wadah = document.querySelector('#body');
const toggle = document.querySelector('.toggle-input');
const initialState = 'salah';
toggle.checked = initialState;

toggle.addEventListener('ubah', fungsi() {
  if (!toggle.checked) {
       container.className = 'ringan';
  }
  kalau tidak {
       container.className = 'gelap';
 }
});


var cferrmsg='<h3 class="title">Kesalahan</h3><p>Maaf, terjadi kesalahan saat menerima pesan Anda, Coba hubungi saya dengan metode lain.</p>',cfsuccessmsg='<h3 class="title">Pesan Terkirim</h3><p>Pesan Anda telah berhasil sampai kepada saya, saya akan segera menghubungi Anda.</p>',cfformcontent='<h3 class="title">Kontak< /h3><p>Kirim pesan kepada saya, saya akan segera menghubungi Anda.</p><div><input class="element" onchange="cfonChange(\'cfname\')" id="cfname" type= "text" name="name" placeholder="Name" autocomplete="off" data-required="true"><input class="element" onchange="cfonChange(\'cfemail\')" id="cfemail" type="text" name="email" placeholder="Email" autocomplete="off" data-required="true" data-validation="email"><input class="element" onchange="cfonChange(\ 'cfphone\')" id="cfphone" type="number" name="phoneno" placeholder="No Phone" autocomplete="off" data-required="false"><input class="element" onchange=" cfonChange(\'cfsubject\')" id="cfsubject" type="text" name="subject" placeholder="Subject" autocomplete="off" data-required="true"><textarea class="element" onchange ="cfonChange(\'cfmessage\')" id="cfmessage" name="message"placeholder="Pesan Anda" data-required="true"></textarea><button id="cfbutton" onclick="cfmessageSend()" class="form-button color">Kirim pesan Anda</button><a href="https://github.com/mjvbz" class="cfpromo">dibuat oleh @mjvbz</a></div>';function cfClick(){document.getElementById("cf").classList.toggle ("showing-state"),document.getElementById("cf").classList.toggle("showing")}fungsi asinkron cfmessageSend(){var cfvalue={name:document.getElementById("cfname").value,email :document.getElementById("cfemail").value.toLowerCase(),phone_no:document.getElementById("cfphone").value,subject:document.getElementById("cfsubject").value,message:document.getElementById("cfmessage").value};if(""===cfvalue.name)document.getElementById("cfname").classList.add("error");else if(""!==cfvalue.email&& /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+) *)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\ .[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/. test(cfvalue.email))if(""===cfvalue.phone_no)document.getElementById("cfphone").classList.add("error");else if(""===cfvalue.subject)document. getElementById("cfsubject").classList.add("error");else if(""===cfvalue.message)document.getElementById("cfmessage").classList.add("error");else{document. getElementById("cfbutton").removeAttribute("onclick"),document.getElementById("cfbutton").classList.remove("color"),document.getElementById("cfbutton").classList.add("onclick"),document.getElementById("cfbutton").innerHTML="Mengirim... ";coba{var sendmessage;if(!(menunggu(menunggu fetch(document.getElementById("contactform").getAttribute("form_worker_url"),{method:"POST",body:JSON.stringify(cfvalue)})) .json()).status)throw new Error("Error");document.getElementById("cfcontent").innerHTML=cfsuccessmsg,localStorage.setItem("contact-form",JSON.stringify({sent:!0, canSendUnix:(Tanggal baru).getTime()+864e5}))}catch(error){console.log(error),document.getElementById("cfcontent").innerHTML=cferrmsg}}else document.getElementById("cfemail" ).classList.add("kesalahan")}fungsi cfonChange(id){document.getElementById(id).classList.remove("error")}window.onload=()=>{var cfstylesheet=document.createElement("link");cfstylesheet.rel=" stylesheet",cfstylesheet.href="https://cdn.jsdelivr.net/gh/cachecleanerjeet/contact-form@master/src/style.min.css",document.getElementsByTagName("head")[0].appendChild (cfstylesheet),cfstylesheet.onload=function(){var cfdiv=document.createElement("section");cfdiv.classList.add("contact-form-cf"),cfdiv.innerHTML='<div class="box right-button" id="cf" style="display: inline-block; z-index: 9999;"><div class="button color" onclick="cfClick();"><span class="m- cf-icon-default"><i class="material-icons">email</i></span><span class="icon"><i class="material-icons">tutup</i></span></div><div class="panel" id="cfcontent"></div ></div>',document.getElementsByTagName("body")[0].appendChild(cfdiv);var cfresult=JSON.parse(localStorage.getItem("contact-form"));cfresult&&cfresult.sent&&cfresult.canSendUnix>( Tanggal baru).getTime()?document.getElementById("cfcontent").innerHTML=cfsuccessmsg:document.getElementById("cfcontent").innerHTML=cfformcontent}};appendChild(cfdiv);var cfresult=JSON.parse(localStorage.getItem("contact-form"));cfresult&&cfresult.sent&&cfresult.canSendUnix>(Tanggal baru).getTime()?document.getElementById("cfcontent").innerHTML= cfsuccessmsg:document.getElementById("cfcontent").innerHTML=cfformcontent}};appendChild(cfdiv);var cfresult=JSON.parse(localStorage.getItem("contact-form"));cfresult&&cfresult.sent&&cfresult.canSendUnix>(Tanggal baru).getTime()?document.getElementById("cfcontent").innerHTML= cfsuccessmsg:document.getElementById("cfcontent").innerHTML=cfformcontent}};