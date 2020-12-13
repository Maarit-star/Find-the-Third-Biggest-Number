//SELECTORS
const button = document.getElementById('buttonToAddNumber');
const input = document.getElementById('inputForNumbers');
let list = document.getElementById('listForNumbers');
let thirdBiggestNumber = document.getElementById('thirdBiggestNumber');
let count=0;
let arrayForNumbers = [];
let maxValues = [];


//EVENT LISTENERS
button.addEventListener('click', addNumberToList);
input.addEventListener('keypress', function(e){
    if(e.key==='Enter'){
        addNumberToList();
    }
})

//FUNCTIONS
function addNumberToList() {
    if(count <= 3){
    let number = document.createElement('LI');
    const inputContent = document.createTextNode(input.value);
    number.appendChild(inputContent);
    list.appendChild(number);
    arrayForNumbers.push(input.value);
    input.value = "";
    console.log(arrayForNumbers);
    }else {
        let number2 = document.createElement('LI');
        const inputContent2 = document.createTextNode(input.value);
        number2.appendChild(inputContent2);
        list.appendChild(number2);
        arrayForNumbers.push(input.value);
        input.value = "";

        // maxValues index values are 0 to begin with. We want to know the values for index 0 to 2.
        // > index 2 has the third biggest value
        maxValues[0] = 0;
        maxValues[1] = 0;
        maxValues[2] = 0;

        // Find the largest element
        for(let i = 0; i < arrayForNumbers.length; i++){
            if(arrayForNumbers[i] > maxValues[0]){
                maxValues[0] = arrayForNumbers[i];
               
            }
        }
        // Find the second largest element
        for(let i = 0; i < arrayForNumbers.length; i++){
            if(arrayForNumbers[i] > maxValues[1] && arrayForNumbers[i] < maxValues[0]){
                maxValues[1] = arrayForNumbers[i];
                
            }
        }
        // Find the third largest element
        for(let i = 0; i < arrayForNumbers.length; i++){
            if(arrayForNumbers[i] > maxValues[2] && arrayForNumbers[i] < maxValues[1]){
                maxValues[2] = arrayForNumbers[i];
                
            }  
        }
        const title = document.createTextNode("The third biggest number is: " + (maxValues[2]));
        thirdBiggestNumber.appendChild(title);
        console.log(maxValues[2]);
        

    }
    count++;
}

