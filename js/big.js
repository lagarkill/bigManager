var btnCargar = document.getElementById('button');
var xhr = new XMLHttpRequest();
var section = document.getElementById('section');

onload = function hidden (){
    document.getElementById('hidden').style.display='block';
};

//debugger 
function promise ( METHOD , url , boolean ) {
return new Promise(function(resolve , reject){
  
        xhr.open( METHOD , url , boolean);
        xhr.onreadystatechange = function(){
            console.log(xhr.readyState);
            if(xhr.readyState == 4 && xhr.status == 200){
                resolve(xhr.response);   
            } else {
                reject(Error(xhr.statusText));
            }}

           /* if(xhr.readyState == 4 && xhr.status == 200){  
                console.log('Cargada correctamente')
                let section = document.getElementById('section');
                section.innerHTML = xhr.responseText;
               
            } else {
                reject(Error(xhr.statusText));
            };
             };*/
        xhr.onerror = function(){
            reject(Error("fucking error"))
        }
            
        xhr.send();
 
    }
 )
};

promise( "GET", "http://api.icndb.com/jokes/random" , true).then(function(response) { 
    console.log('Cargada correctamente' , response)
    section.innerHTML = xhr.responseText;
})


btnCargar.addEventListener('click', );


/*function button (){
    alert('No dijiste la palabra magica!')
};*/

//document.getElementById('button').onclick = peticionAJAX;

