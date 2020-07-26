console.log('AJAX 3 ');
let btn=document.getElementById('btn');
btn.addEventListener('click',handleClick);
function handleClick(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET','https://api.github.com/users',true);
    xhr.onprogress=function(){console.log('loading details please wait')}
    xhr.onload=function(){
        console.log('loaded');
        let mydata= JSON.parse(this.responseText);
        console.log(mydata);
        let str='';
        mydata.forEach(element => {
            str+=`<li>${element.login}<img src="${element.avatar_url}" /></li>`
        });
        document.getElementById('root').innerHTML=str;

    }
    xhr.send();

}