
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class CommentContainer extends React.Component {
	constructor () {
  super();

  this.state = {
    comments: [
      {name: "Aaron", text: "Hey man!"},
      {name: "JimBob", text: "Yo, it's been too long! Come back to Texas!"},
      {name: "Piña colada", text: "Vamos a la playa oh oh oh oh oh "}

    ]
  };
};

//create a new comment using the map function to generate a comment
getComments() {
  return this.state.comments.map((comment) => {
    return (
    	//new instance of comment
      <Comment
        name={comment.name} text={comment.text}
        key={this.state.comments.indexOf(comment)} />
    )
  });
}

//display the number of comments on the page
commentCount() {
    return this.state.comments.length;
};

//inside the render invoke the getComments function
  render() {
  	 return(
		    <div className="col-md-6 col-md-offset-3">
		      <h1 className="text-center">Comments</h1>
		      <button className="btn pull-right">Hide Comments</button>
		      <h4 className="comment-count">{this.commentCount()} comments</h4>
		      <div className="comment-list">

		          {this.getComments()}

		      </div>

		      <CommentForm/>

		   </div>
    )
  }
 }


class Comment extends React.Component {
  render() {
  	return(
      <div className="comment">
        <span className="comment-title">
          {this.props.text}
        </span> -

        <span className="comment-author">
          {this.props.name}
        </span>
      </div>
    )
  }
}

class CommentForm extends React.Component {

	handleSubmit() {
	  let name = this.name;
	  let text = this.text;
	  this.props.addComment(name.value, text.value);
	}

  render() {
  	return(
  		<form className="form-group" onSubmit={this.handleSubmit.bind(this)}>
      <h3>Add a new post</h3>
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Comment"></input>
      </div>
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Name"></input>
      </div>
      <button type="submit" className="btn btn-primary">Add Comment</button>
    </form>
  	)
  }
}


ReactDOM.render(
	  <CommentContainer />,
  document.getElementById('root')
);
