console.log('In AJAX 4');
const getName= document.getElementById('GetName');
getName.addEventListener('click',clickHandler);
function clickHandler()
{
    console.log('clicked');
    const xhr = new XMLHttpRequest();
    xhr.open('GET','./process.php?name=nimesh',true);
    xhr.onload=function(){
        console.log(this.responseText);
      }
      xhr.send();

}