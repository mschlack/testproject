var test;
function getData() {
    var form = document.getElementById("submit_form")
    console.log(form);
    var formdata = new FormData(form);
    test = formdata;
    console.log(formdata);
}