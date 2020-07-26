console.log('Hello Ajax 2.js ');
let b1=document.getElementById('button1');
let b2=document.getElementById('button2');
b1.addEventListener('click',showUser);
b2.addEventListener('click',pokemons);
function showUser(){
    const xhr= new XMLHttpRequest();
    xhr.open("GET",'./user.json',true);
    xhr.onload=function(){
        if(this.status==200){
            console.log('All OK ');
            const pokemon=JSON.parse(this.responseText);
            let str=`<li>${pokemon.name}</li>`;
            document.getElementById('user').innerHTML=str;

        }
    }
    xhr.send();
}
function pokemons(){
    console.log('b2 Clicked');
    const xhr= new XMLHttpRequest();
    xhr.open('GET','./users.json',true);
    xhr.onload=function(){
        if(this.status==200)
        {
            const pokearr=JSON.parse(this.responseText);
            console.log(pokearr);
            let str='';

            pokearr.forEach(element => {
                str+=`<ul><li>${element.id}</li>
                <li>${element.name}</li>
                <li>${element.type}</li></ul>`
            });
            document.getElementById('users').innerHTML=str
        }
    }
    xhr.send();

}
