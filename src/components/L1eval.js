import React from 'react';
import { Component } from 'react';
import InputText from './InputText';
import InputSelect from './InputSelect';
import InputTextArea from './InputTextArea';
<script type="text/javascript" src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>



class L1eval extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: '',
      EvaluateSelection:['Selected','Rejected'],
      SenioritySelections: ['Jr.','S.Sr','Sr.','SD.']
    };
  }

  render() {
    return (
      <form>
        <div className="header">
        <InputText
          title={'Full name'}
          className={'4'}
          placeholder={'Full name'} />


          <InputSelect
          placeholder={'--Evaluate--'}
          options={this.state.EvaluateSelection}
          selectedOption={this.state.EvaluateSelection} />


          <InputSelect
          placeholder={'--Seniority--'}
          options={this.state.SenioritySelections}
          selectedOption={this.state.SenioritySelections} />

          <InputTextArea
          rows={5}
          placeholder={'Feedback'} />

        </div>
      </form>

    );
  }
}

export default L1eval;
