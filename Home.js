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
  
