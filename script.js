for (let index = 1; index < 101; index++) {
    console.log(index);
    if (index % 3 === 0) {
       index = 'fizz';
       console.log(index); 
    } else if (index % 5 === 0) {
        index = 'buzz'; 
    }
    
}