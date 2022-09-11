const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
	postTitle:{
		type:String,
		required:true
	},
	postBody:{
		type:String,
		required:true
	},
	date:{
		type:Date,
		default:Date.now
	}
});

module.exports = mongoose.model('BlogPost', postSchema);