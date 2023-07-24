function display (value){
    document.getElementById('textarea').value +=value;
    

}
function calculate(){
    let val = document.getElementById('textarea').value;
    let answer = eval(val);
    document.getElementById('textarea').value =answer
}
function clr(){
    document.getElementById('textarea').value =" "
}