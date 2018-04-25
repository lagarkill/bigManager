btnCargar = document.getElementById('button');
var xhr = new XMLHttpRequest();
//var section = document.getElementById('section');

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

    let array = [];
   /* function addToArray (data, array, callback) {

        if (!array) {
          callback(new Error('No existe el array'), null)
        } else {
          array.push(data)
          callback(null, array)
        };};
    addToArray(JSON.parse(xhr.responseText), array, function (err) {
            if (err) return console.log(err.message)
            console.log(array)
          })*/
    array.push(response.value.joke);
    console.log(array);
    section.innerHTML = array;
   /* for (let i = 0; i <= response.length; i++) {
    
        if( i < response.length){

        array.push(JSON.parse(xhr.responseText))
let section = document.getElementById('section');
    section.innerHTML = array;
        } 
    };*/
   
    
    //btnCargar.onclick = array;
    
   
}).catch(function (reject) {
    console.log("in da face");
})

