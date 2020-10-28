function touchRock(){
    //Hacemos una variable que pedirá el nombre del usuario 
    var userName = prompt('What is your name?', 'Enter your name here.');

    //Indicamos que si el usuario ingresa el nombre, la roca lo saludará por su nombre y con una sonrisa, por ello se coloca el src="happy_rock.png para hacer el cambio un avez se ejecute el evento"
    if(userName) {
        alert('It is good to meet you, ' + userName + '.');
        document.getElementById('rockImg').src = 'assets/img/happy_rock.png';  
    } else if(!userName) {
        alert('Oh cmmon!! dont be rude!');
        document.getElementById('rockImg').src = 'assets/img/sad_rock.png';
        
    }
}