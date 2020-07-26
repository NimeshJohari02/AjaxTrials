FetchBtn= document.getElementById('fetchBtn');
fetchBtn.addEventListener('click',loadText);
function loadText() {
    console.log('Buttom CLicked');
    const xhr = new XMLHttpRequest();
    xhr.open('GET','./ajax1.txt',true);
    xhr.onload=function (){
         if(this.status==200){
        // console.log(this.responseText);
        let mydiv=document.getElementById('Text');
        let str=`<p>${this.responseText}</p>`;
        mydiv.innerHTML=str;}
        if(this.status==404)
        {
            document.getElementById('Text').innerHTML=`ERROR 404 NOT FOUND `;

        }

    }
    //optional gui ke liye hai
    xhr.onprogress=function(){
        console.log('Waiing .....');

    }
    xhr.onreadystatechange=function(){
         if(this.readyState==4&&this.status==200)
         {
            console.log(this.responseText);

         }
    }
    //optional error 
    xhr.onerror=function(){
        console.log('Error AA gya hai bhai ');
    
    }

    xhr.send();

}