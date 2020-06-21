function insert(num) {
    document.form.textview.value = document.form.textview.value + num;
}

function reset() {
    document.form.textview.value = '';
}

function equal() {
    var expression = document.form.textview.value;

    if (expression) {
        document.form.textview.value = eval(expression);
    }
} 

function back() {
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, --exp.length)
}