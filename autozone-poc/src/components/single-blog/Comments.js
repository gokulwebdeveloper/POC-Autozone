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
        <div id="respond" className="comment-respond">
          <h3>Leave A Comment</h3>
        </div>
        <form className="comment-form" onSubmit={handleSubmit}>
          <div className="comment-input">
            <div className="form-group-name">
              <InputWithLabel
                inputId="Name"
                inputType="inputWithoutLabel"
                placeholder="Name..."
                value={state.name}
                onChange={(e) => setState({ ...state, name: e.target.value })}
                className="form-control"
              />
            </div>
            <div className="form-group-email">
              <InputWithLabel
                inputId="Email"
                inputType="inputWithoutLabel"
                placeholder="Email..."
                value={state.email}
                onChange={(e) => setState({ ...state, email: e.target.value })}
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group-textarea">
            <textarea
              value={state.comments}
              onChange={(e) => setState({ ...state, comments: e.target.value })}
              placeholder="Comment..."
              cols="98"
              rows="8"
            ></textarea>
          </div>

          <Button btnText="Submit Comment" />
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
              <InputWithLabel
                type="inputWithoutLabel"
                placeholder="Name..."
                value={state.name}
                onChange={(e) => setState({ ...state, name: e.target.value })}
                className="form-control"
              />
            </div>

            <div className="form-group-email">
              <InputWithLabel
                type="inputWithoutLabel"
                placeholder="Email..."
                value={state.email}
                onChange={(e) => setState({ ...state, email: e.target.value })}
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group-textarea">
            <textarea
              value={state.comments}
              onChange={(e) => setState({ ...state, comments: e.target.value })}
              placeholder="Comment..."
              cols="98"
              rows="8"
            ></textarea>
          </div>

          <Button btnText="Submit Comment" />
        </form>
      </div>
    );
  }
};

export default Comments;
