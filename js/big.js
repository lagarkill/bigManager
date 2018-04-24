//var btnCargar = document.getElementById('button');
var xhr = new XMLHttpRequest();
var section = document.getElementById('section');
var jeison = JSON.parse(xhr.responseText);

onload = function hidden (){
    document.getElementById('hidden').style.display='block';
};

//debugger 
function promise ( METHOD , url , boolean ) {
return new Promise(function(resolve , reject){
  
        xhr.open( METHOD , url , boolean);
        xhr.onload = function(){
            if(xhr.readyState == 4 && xhr.status == 200){
                resolve(jeison); 
                //document.getElementById('button').onclick = resolve;  
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
    
    //document.write(jaison.value);
    for (let value in jeison){
        document.getElementById('button').onclick = jeison[value];
    }
},function (reject) {
    console.log("in da face")
});

/*var botones = function (){
    let promesa = promise ;
    document.getElementById('button').onclick = promesa();
}*/


//btnCargar.addEventListener('click', botones);


/*function button (){
    alert('No dijiste la palabra magica!')
};*/
