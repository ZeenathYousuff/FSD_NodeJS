function returnFirstName(fisrtName)
{
    try{
        if (typeof fisrtName === 'string') {
            return fisrtName;
        }
        else{
            throw 'Err';
        }
    }
    catch (Error){
       console.log("Enter the first name in string format");
    }

}
module.exports.firstName=returnFirstName;