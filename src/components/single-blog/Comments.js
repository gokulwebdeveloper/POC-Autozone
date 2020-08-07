import React, { Fragment } from "react";
import "../single-blog/single-blog.css";
import Button from "../../utlis/button/Button";
import InputWithLabel from "../../utlis/formComponents/InputWithLabel";

const initialList = [];

const Comments = () => {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    comments: "",
  });

  const [list, setList] = React.useState(initialList);

  const handleSubmit = (event) => {
   
    setList(list.concat(state.name + " : " + state.comments));
    setState({ name: "", email: "", comments: "" });
    event.preventDefault();
  };

  if (!list.length) {
    return (
      <div>
       <form className="comment-form" onSubmit={handleSubmit}>
        <h3>Leave A Comment</h3>
          <div className="col-25">
              <InputWithLabel
                inputId="Name"
                inputType="inputWithoutLabel"
                placeholder="Name..."
                onChange={(e) => setState({ ...state, name: e.target.value })}
                className="form-control"
              />
            </div>
            <div className="col-25">
              <InputWithLabel
                inputId="Email"
                inputType="inputWithoutLabel"
                placeholder="Email..."
                onChange={(e) => setState({ ...state, email: e.target.value })}
                className="form-control"
              />
            </div>
            
           <div className="col-75">
            <textarea className = "form-control" rows = "3"
             value={state.comments}
              onChange={(e) => setState({ ...state, comments: e.target.value })}
              placeholder="Comment..."
             
            ></textarea>
          </div>

          <Button btnText="Submit Comment" />
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <h4 >{list.length} Comment</h4>
        <ul>
          {list.map((item) => (
            <div className="comments-list">
              <li key={item}>{item}</li>
            </div>
          ))}
        </ul>
        <form className="comment-form" onSubmit={handleSubmit}>
        <h3>Leave A Comment</h3>
           <div className="col-25">
               <InputWithLabel
                 inputId="Name"
                 inputType="inputWithoutLabel"
                 placeholder="Name..."
                 onChange={(e) => setState({ ...state, name: e.target.value })}
                 className="form-control"
               />
             </div>
             <div className="col-25">
               <InputWithLabel
                 inputId="Email"
                 inputType="inputWithoutLabel"
                 placeholder="Email..."
                 onChange={(e) => setState({ ...state, email: e.target.value })}
                 className="form-control"
               />
             </div>
            
            <div className="col-75">
             <textarea className = "form-control" rows = "3"
              value={state.comments}
               onChange={(e) => setState({ ...state, comments: e.target.value })}
               placeholder="Comment..."
              
             ></textarea>
           </div>

          <Button btnText="Submit Comment" />
        </form>
      </div>
    );
  }
};

export default Comments;
