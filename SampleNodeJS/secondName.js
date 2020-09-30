function returnSecondName(lastName)
{
    try{
        if (typeof lastName === 'string') {
            return lastName;
        }
        else{
            throw 'Err';
        }
    }
    catch (Error){
        console.log("Enter the second name in string format");
    }
}
module.exports.lastName=returnSecondName;