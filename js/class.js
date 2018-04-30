class movie {
    constructor(name,year,duration){
        this.name = name ;
        this.year = year ;
        this.duration = duration ;
    }

    play(){
        console.log ('Play' + ' ' + this.name );
    }

    pause (){
        console.log ('The movie ' + this.name + ' is paused ' + 'press "resume" to reinitiate movie')
    }
    
    resume (){
        console.log ('Reinitiate movie: ' + this.name + ', your duration is ' + this.duration )
    }
};

var starWars = new movie ('starWars' , '1880' , '90 mins');

starWars.resume();