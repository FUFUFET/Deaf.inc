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
}
}


// (function () {
//   $('#js-buttonHamburger').click(function () {
//     $('body').toggleClass('is-drawerActive');

//     if ($(this).attr('aria-expanded') == 'false') {
//       $(this).attr('aria-expanded', true);
//     } else {
//       $(this).attr('aria-expanded', false);
//     }
//   });
// }) ();