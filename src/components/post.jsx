import React, {Component} from 'react';

class Post extends Component{
	render() {
		return (
			<div className="card m-2 p-2">
				<h5 name="title" className="card-title">{this.props.title}</h5>
				<p name="body" className="card-text">{this.props.text}</p>
			</div>
		);
	}
}

export default Post;