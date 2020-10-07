function validate() {
    var name = document.getElementById("name").value;
    var idVal = document.getElementById("id").value;
    if(name.length < 5)
    {
        alert("Name should have length 5 or more");
    }
    else if(isNaN(idVal)){
        alert("Id should be a number");
    }
    else{
        alert("Added SuccessFully")
    }




}