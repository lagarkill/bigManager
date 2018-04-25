
var xhr = new XMLHttpRequest();

var section = document.getElementById('section');

var array = [];

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

            }
        };

        xhr.onerror = function(){
            reject(Error("fucking error"))
        };
            
        xhr.send();
 
    }
 )

 return promesa ;
};

promise( "GET", "http://api.icndb.com/jokes/random" , true).then((response) => { 

    

    for (let i = 0; i <= response.length; i++) {

        const element = response[i];

        if( !response ){
            return
        } else {
            array.push(element)
        }
        
    }
    

    console.log(array);


}).catch(function (reject) {
    console.log("in da face");
})

section.innerHTML = array;

