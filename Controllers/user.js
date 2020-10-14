const names=[];
exports.displayUser =(req, res)=>
{
    res.render('user',{names:names,pageTitle:'Display Name'})
}

exports.postUsers =(req, res)=>
{
    names.push({username:req.body.username})
    res.redirect('/user/print-name');
}

exports.getUser = (req,res)=>
{
    res.render('name',{pageTitle:"Add Name", path: '/'})
}



