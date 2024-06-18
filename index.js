function onClickSubmitButton(){
    let inputValue = document.getElementById('inputText').value;
    if (inputValue>0){
        alert('Hey, the number is greater than zero')
    }
    if (inputValue<0){
        alert('Hey, the number is smaller than zero')
    }
    if (inputValue==0){
        alert('Attemp again')
    }
}