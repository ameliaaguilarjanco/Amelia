
function loguear()
{
let user=document.getElementById('a1').value;
let pass=document.getElementById('a2').value;

if(user=="amelia" && pass=="1234")	
{
	alert("DATOS CORRECTOS");
      window.location="index2.html";

    }else{
      alert("DATOS INCORRECTOS");
  }
}