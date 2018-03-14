import React from 'react';
import { Component } from 'react';


class TextArea extends Component {
  constructor(props) {
    super(props);

  }

 // class="form-control" rows="5" id="comment"
  render() {
    return (
      <form>
        <div>
          <textarea className="form-control" rows="5"></textarea>
        </div>
      </form>

    );
  }
}

export default TextArea;
