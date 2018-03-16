import React from 'react';
import { Component } from 'react';
import InputText from './resuableComponent/InputText';
import InputSelect from './resuableComponent/InputSelect';
import InputTextArea from './resuableComponent/InputTextArea';
import Label from './resuableComponent/Label';
// import DropDown from './resuableComponent/DropDown';
import InputNumber from './resuableComponent/InputNumber';
import Button from './resuableComponent/Button';

class Gkeval extends Component {
  constructor(props) {
    super(props);
    this.state = {
      EvaluateSelection:['Select Option','Selected','Rejected'],
      SenioritySelections: ['Select Option','Jr','S.Sr','Sr','SD'],
      HrNameSelections: ['Select Option','Namrata', 'Kapil', 'Sunaina']
    };
  }

  render() {
    return (
      <div>
      <div className="L1eval">
        <div className="container">
        <div className="col-lg-12">
          <section className="panel">
            <header className="panel-heading">
            GK Evaluation form:
            </header>
            <div className="panel-body">
              <div className="row form_group">
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                  <Label LabelName={"Name"} />
                </div>
                <div className="col-xs-10  col-sm-10 col-md-10 col-lg-10">
                <InputText title={'Full name'} className={'12'}/>
                </div>
              </div>
              <div className="row form_group">
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                  <Label LabelName={"L1 Evaluation"} />
                </div>
                <div className="col-xs-10  col-sm-10 col-md-10 col-lg-10">
                <Label LabelName={"L1 Evaluation result"} />
                </div>
              </div>
              <div className="row form_group">
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                  <Label LabelName={"Resume"} />
                </div>
                <div className="col-xs-10  col-sm-10 col-md-10 col-lg-10 ">
                  <Label LabelName={"www.doc.in"} />
                </div>
              </div>
              <div className="row form_group">
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                  <Label LabelName={"Evaluation Sheet"} />
                </div>
                <div className="col-xs-10  col-sm-10 col-md-10 col-lg-10 ">
                  <Label LabelName={"www.eval.in"} />
                </div>
              </div>
              <div className="row form_group">
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                  <Label LabelName={"HR Name"} />
                </div>
                <div className="col-xs-10  col-sm-10 col-md-10 col-lg-10 ">
                  <InputSelect selectedOption={this.state.HrNameSelections} />
                </div>
              </div>
              <div className="row form_group">
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                  <Label LabelName={"Evalulate"} />
                </div>
                <div className="col-xs-10  col-sm-10 col-md-10 col-lg-10 ">
                  <InputSelect selectedOption={this.state.EvaluateSelection}/>
                </div>
              </div>
              <div className="row form_group">
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                  <Label LabelName={"Seniority"} />
                </div>
                <div className="col-xs-10  col-sm-10 col-md-10 col-lg-10 ">
                  <InputSelect selectedOption={this.state.SenioritySelections}/>
                </div>
              </div>
              <div className="row form_group">
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                  <Label LabelName={"Feedback"} />
                </div>
                <div className="col-xs-10  col-sm-10 col-md-10 col-lg-10 ">
                  <InputTextArea
                    rows={5}
                    placeholder={'Feedback'} />
                </div>
              </div>

              <div className="row form_group">
                <div className="col-sm-offset-5 col-sm-7">
                  <span><Button ButtonName={"Submit"} />
                  </span><span className="margin-l-5"><Button ButtonName={"Cancel"} /></span>
                </div>
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

export default Gkeval;
