import React, { Component } from 'react';

class NewPost extends Component {
	render () {
		return (
			<React.Fragment>
				<form className="mb-3" onSubmit={this.props.handleSubmit}>
					<input type="text" name="title" className="form-control" value={this.props.title} onChange={this.props.handleChange}/>
					<textarea name="content" className="form-control" rows="4" value={this.props.value} onChange={this.props.handleChange} />
					<input className="btn btn-primary btn-sm m-2" type="submit" value="Submit" />
				</form>
			</React.Fragment>
		);
	}
} 

export default NewPost;