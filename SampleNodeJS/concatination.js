function returnFullName(fName,lName)
{
    try{
        if (typeof fName === 'string' && typeof lName === 'string') {
            return fName+lName;
        }
        else{
            throw 'Err';
        }
    }
    catch (Error){
        console.log("Enter the names in string format");
    }
}
module.exports.fullName=returnFullName;