import React from 'react';
import { Component } from 'react';
import InputText from './resuableComponent/InputText';
import InputSelect from './resuableComponent/InputSelect';
import InputTextArea from './resuableComponent/InputTextArea';
import Label from './resuableComponent/Label';
import DropDown from './resuableComponent/DropDown';
import InputNumber from './resuableComponent/InputNumber';
import Button from './resuableComponent/Button';

class L1eval extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: '',
      EvaluateSelection:['Select','Selected','Rejected'],
      SenioritySelections: ['Select','Jr.','S.Sr','Sr.','SD.']
    };
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <section className="panel">
              <header className="panel-heading">
              L1 Evaluation form:
              </header>
                <div className="row">
                  <div className="col-sm-2">
                    <Label LabelName={"Name"} />
                  </div>
                    <InputText title={'Full name'} className={'12'}/>
                </div>
                <div className="row">
                  <div className="col-sm-2">
                    <Label LabelName={"Resume"} />
                  </div>
                  <div className="col-sm-9">
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-2">
                    <Label LabelName={"Evaluation sheet"} />
                  </div>
                  <div className="col-sm-9">
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-2">
                    <Label LabelName={"HR"} />
                  </div>
                  <div className="col-sm-9">
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-2">
                    <Label LabelName={"Evaluate"} />
                  </div>
                  <div className="col-sm-9">
                    <InputSelect options={this.state.EvaluateSelection} selectedOption={this.state.EvaluateSelection} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-2">
                    <Label LabelName={"Seniority"} />
                  </div>
                  <div className="col-sm-9">
                    <InputSelect options={this.state.SenioritySelections} selectedOption={this.state.SenioritySelections} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-2">
                    <Label LabelName={"Feedback"} />
                  </div>
                    <InputTextArea rows={4}/>
                </div>
                  <div className="row">
                    <Button ButtonName={"Submit"} />
                    <Button ButtonName={"Cancel"} />
                  </div>
          </section>
        </div>
      </div>
    </div>
    );
  }
}

export default L1eval;
