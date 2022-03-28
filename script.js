let printingSelector = document.querySelector('.stamp');


for (let index = 1; index < 101; index++) {
    console.log(index);
    if (index % 3 === 0) {
        console.log('fizz');
    } else if (index % 5 === 0) {
        console.log('buzz');
    } else if (index % 3 === 0 && index % 5 === 0) {
        console.log('fizzbuzz');
    }
    
    let element = `<p>${index}</p>`;
 
    printingSelector.innerHTML += element;
}
