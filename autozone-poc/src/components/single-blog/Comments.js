import React, { Fragment } from "react";
import "../single-blog/single-blog.css";
import Button from "../../utlis/button/Button";


const initialList = [];

const Comments = () => { 
  const [state, setState] = React.useState({
    name:'',
    email:'',
    comments:''
  });
  
  const [list, setList] = React.useState(initialList);

  const handleChange = (event) => {
    const values = event.target.value;
   };

  const handleSubmit = (event) => {
   
      setList(list.concat(state.name + " : " + state.comments));
      setState({name:'',email:'',comments:''})
    event.preventDefault();
  };
 
  if (!list.length) {
    return (
      <div>
        <div id="respond" className="comment-respond">
          <h3>Leave A Comment</h3>
        </div>
        <form className="comment-form" onSubmit={handleSubmit}>
          <div className="comment-input">
            <div className="form-group-name">
              <input
                type="text"
                placeholder="Name..."
                value={state.name}
                onChange={
                 (e)=> setState({nam:e.target.value})}
                className="form-control"
              />
            </div>
            <div className="form-group-email">
              <input
                type="text"
                placeholder="Email..."
                value={state.email}
                onChange={
                  (e)=>setState({email:e.target.value})}
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group-textarea">
            <textarea
              value={state.comments}
              onChange={
                (e)=>setState({comments:e.target.value})}
              placeholder="Comment..."
              cols="98"
              rows="8"
            ></textarea>
          </div>

          
            <Button btnText="Submit Comment"/>

        </form>
      </div>
    );
  } else {
    return (
      <div>
        <h4 className="comment-count">{list.length} Comment</h4>
        <ul>
          {list.map((item) => (
            <div className="comments-list">
              <li key={item}>{item}</li>
            </div>
          ))}
        </ul>

        <div id="respond" className="comment-respond">
          <h3>Leave A Comment</h3>
        </div>
        <form className="comment-form" onSubmit={handleSubmit}>
          <div className="comment-input">
            <div className="form-group-name">
              <input
                type="text"
                placeholder="Name..."
                value={state.name}
                onChange={(e)=>
                  setState({name:e.target.value})}
                className="form-control"
              />
            </div>

            <div className="form-group-email">
              <input
                type="text"
                placeholder="Email..."
                value={state.email}
                onChange={
                  (e)=>setState({email:e.target.value})}
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group-textarea">
            <textarea
              value={state.comments}
              onChange={
                (e)=>setState({comments:e.target.value})}
              placeholder="Comment..."
              cols="98"
              rows="8"
            ></textarea>
          </div>

         
            <Button btnText="Submit Comment"/>

        </form>
      </div>
    );
  }
};

export default Comments;
