const handleProfileGet((req,res)=>
{
	const{id}=req.params;
	db.select('*').from('users')
	.then(user=>{
		if (user.length) {
			res.json(user[0])
		}else{
			res.status(400).json('Not Found')
		}
     
     
})
	.catch(err => res.status(400).json('Error'))


	

})
module.exports ={
	handleProfileGet
}