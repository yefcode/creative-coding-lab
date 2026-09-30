let cube = document.querySelector('.cube');
let radioGroup = document.querySelector('.radio-group');
let currentClass = '';

function changeSide() {
  let checkedRadio = radioGroup.querySelector(':checked');
  let showClass = 'show-' + checkedRadio.value;
  if ( currentClass ) {
    cube.classList.remove( currentClass );
  }
  console.log(currentClass);
  cube.classList.add( showClass );
  currentClass = showClass;
}
// set initial side
changeSide();

radioGroup.addEventListener( 'change', changeSide );