const Clarifai=require('clarifai');

const app =new Clarifai.App({
  apiKey:'dacd8948582a4cccaf05955234d8ac67'
});

	const handleApiCall = (req,res) =>{
		app.models
 	.predict( Clarifai.FACE_DETECT_MODEL,this.state.input)
	.then(data => {
		res.json(data);
	})
	.catch(err => res.status(400).json('unable to get image'))
}


const handleImage(req,res,db)=>
{
	const{id}=req.body;
	db('users').where('id', '=',id)
	 .increment('entries',1)
	 .returning('entries')
	 .then(entries => {
	 	res.json(entries[0]);
	 })

	 .catch(err => res.status(400).json('Unable to get entries'))
	

})
module.exports ={
	handleImage,
	handleApiCall
}