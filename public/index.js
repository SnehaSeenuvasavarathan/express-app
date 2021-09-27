function add() {
    val_1 = parseInt(document.getElementById("value1").value);
    val_2 = parseInt(document.getElementById("value2").value);
    console.log("Sum is", val_1+val_2)
    document.getElementById("sum").innerHTML = val_1 + val_2;
}

function submit() {
    id = document.getElementById("value1").value;
    pass = document.getElementById("value2").value;
    console.log(pass)
    var xhr = new XMLHttpRequest();
    console.log("reaches here")
    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
            result_obj = (this.responseText);
            result_obj = JSON.parse(result_obj);
            console.log(result_obj)
            document.getElementById("sum").innerHTML = result_obj;
        }  
    });
    xhr.open("POST", "/api/send/");
    xhr.setRequestHeader("content-type", "text/plain");
    xhr.send(pass);
}