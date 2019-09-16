var test;
function getData() {
    var form = document.getElementById("send_message")
    console.log(form);
    var formdata = new FormData(form);
    test = formdata;
    console.log(formdata);
}