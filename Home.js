let a;
function show_hide()
{
  if(a==1)
  {document.getElementById("fireofring").style.display="inline";
  return a=0;
}

else
  {document.getElementById("fireofring").style.display="none";
  return a=1;
}}


const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('mobile-navlist');

hamburger.addEventListener('click',() =>{
  navUL.classList.toggle('show');

});


document.body.classList.toggle('js-enabled')
document.addEventListener('DOMContentLoaded', function(event){

let ken = document.getElementById('hamburger')  
ken.setAttribute('aria-expanded','false')
ken.onclick = function(){
  if(this.getAttribute('aria-expanded') == 'false')
  {
this.setAttribute('aria-expanded' ,'true');
  }else{
    this.setAttribute('aria-expanded' ,'false');
  }}});

  



// swich
  document.querySelectorAll(".switch").forEach(function(theSwitch) {
    theSwitch.addEventListener("click", handleClickEvent, false);
  });
  

  // swich aria
  function handleClickEvent(evt) {
    let el = evt.target;
  
    if (el.getAttribute("aria-checked") == "true") {
        el.setAttribute("aria-checked", "false");
    } else {
        el.setAttribute("aria-checked", "true");
    }
  }
  

  
