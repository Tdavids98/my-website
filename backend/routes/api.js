const express = require('express');
const router = express.Router();
const BlogPost = require('../models/blogPostModel');

router.post('/save', (req, res) => {
	console.log("Body: ", req.body)
	const data = req.body;

	const newBlogPost = new BlogPost(data);

	newBlogPost.save((error) => {
		if(error) {
			res.status(500).json({ msg: 'Sorry, internal server error' });
		} else {
			res.json({
				msg: 'We recieved your data!'
			});
		}
	});
});

router.get('/', (req, res) => {

	BlogPost.find({ })
		.then((data) => {
			console.log('Data: ', data);
			res.json(data);
		})
		.catch((error) => {
			console.log('Error: ', error);
		});

});

/*router.get('/name', (req, res) => {

});*/


module.exports = router;