import React, {Component} from 'react';
import axios from 'axios';
import Post from './post';
import NewPost from './newpost';

class Posts extends Component {
	state = {
		title: '',
		content: '',
		posts: [
			{_id: 0, postTitle: 'A Post About Something', postBody: 'Something'},
			{_id: 1, postTitle: 'A Post About Another Thing', postBody: 'Other Thing'},
			{_id: 2, postTitle: 'A Post About Goofawungoo', postBody: 'What'}
		]
	};

	componentDidMount = () => {
		this.getBlogPosts();
	};

	getBlogPosts = () => {
	    axios.get('/api')
	      .then((res) => {
	        const data = res.data;
	        this.setState({posts:data});
	        console.log('Data has been received!!');
	      })
	      .catch((error) => {
	        alert('Error retrieving data!!');
	      });
  	};

	handleSubmit = (event) => {
		event.preventDefault();

		/*const posts = [...this.state.posts];*/
		const payload = {
			postTitle: this.state.title,
			postBody: this.state.content
		};

		axios({
			url: '/api/save',
			method: 'POST',
			data: payload
		})
			.then(() => {
				alert('Your post was saved');
			})
			.catch((error) => {
				alert(error);
			});
		/*const nPost = {id: posts.length, title: title, text: content};
		posts.push(nPost);
		this.setState({posttitle: '', postcontent: '',posts});*/

		/*console.log('Submitted: ', content);
*/	};

	handleChange = ({target}) => {
		const {name, value} = target;
		this.setState({ [name]: value });
		console.log(`Changed ${name} to ${value}`)
	};

	render() {
		return (
			<React.Fragment>
				<NewPost
					title={this.state.posttitle}
					content={this.state.postcontent}
					handleSubmit={this.handleSubmit}
					handleChange={this.handleChange}
				/>
				{this.state.posts.map(post => (
					<Post
						key={post._id}
						title={post.postTitle}
						text={post.postBody}
						selected={true}
					/>
				))}
			</React.Fragment>
		);
	}
}

export default Posts;