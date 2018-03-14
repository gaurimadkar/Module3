import React from 'react';
import { Component } from 'react';
import InputText from './InputText';
import InputSelect from './InputSelect';
import InputTextArea from './InputTextArea';
import Label from './Label';
import TextBox from './TextBox';
import DropDown from './DropDown';
import InputNumber from './InputNumber';
import TextArea from './TextArea';
import Button from './Button';



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
    const { colId } = this.props;
    console.log(colId);


    return (
      <div>
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


      <div className="L1eval">
        <div className="row">
          <div className="col-lg-12">
            <section className="panel">
              <header className="panel-heading">
                L1 Evaluation Form
              </header>
              <div className="panel-body">

                <div className="form-group">
                  <div className="col-sm-2">
                    <Label LabelName={"Name"} />
                  </div>
                  <div className="col-sm-9">
                    <TextBox />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-2">
                    <Label LabelName={"Resume"} />
                  </div>
                  <div className="col-sm-9">
                    <TextBox title={'Full name'} className={'sm-4'} placeholder={'Full name'} />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-2">
                    <Label LabelName={"Evaluation Sheet"} />
                  </div>
                  <div className="col-sm-9">
                    <TextBox />
                  </div>
                </div>
                <div className="row">
                  <Button ButtonName={"Submit"} />
                  <Button ButtonName={"Cancel"} />
                </div>

              </div>
            </section>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default L1eval;
