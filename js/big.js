btnCargar = document.getElementById('button');
var xhr = new XMLHttpRequest();
var section = document.getElementById('section');

onload = function hidden (){
    document.getElementById('hidden').style.display='block';
};

 
function promise ( METHOD , url , boolean ) {
let promesa = new Promise(function(resolve , reject){
  
        xhr.open( METHOD , url , boolean);
        xhr.onload = function(){
            if(xhr.readyState == 4 && xhr.status == 200){
                console.log("cargado");
                resolve(JSON.parse(xhr.responseText)); 
                
              
            } else {
                reject(Error(xhr.statusText));
            }};

        xhr.onerror = function(){
            reject(Error("fucking error"))
        };
            
        xhr.send();
 
    }
 )

 return promesa ;
};

promise( "GET", "http://api.icndb.com/jokes/random" , true).then(function(response) { 

    let array = [];

    for (let i = 0; i <= response.length; i++) {

        if( i < response.length){

        array.push(JSON.parse(xhr.responseText))

        } 
    };

    
    btnCargar.onclick = array;
    let section = document.getElementById('section');
    section.innerHTML = array;
   
}).catch(function (reject) {
    console.log("in da face");
})

