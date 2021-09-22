function func(num){
    document.form.textview.value += num; 
}
function back(){
    var exp = document.form.textview.value;
    if(exp){
        document.form.textview.value = exp.substring(0,exp.length-1);
    }
}
function clean(){
    document.form.textview.value = ""; 
    console.log(document.form.textview.value);
}
function equal(){
    let a = document.form.textview.value;
    document.form.textview.value = eval(a);
}
