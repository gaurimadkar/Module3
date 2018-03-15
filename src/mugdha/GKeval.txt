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



class Gkeval extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      EvaluateSelection: ['Selected', 'Rejected'],
      SenioritySelections: ['Jr.', 'S.Sr', 'Sr.', 'SD.'],
      HrNameSelections: ['Namrata', 'Kapil', 'Sunaina']
    };
  }

  render() {
    return (
      <div>
        <div className="Gkeval">
          <div className="container">
            <div className="col-lg-12">

              <header className="panel-heading">
                GK Evaluation Form
              </header>

              <div className="panel-body">

                <div className="row form_group">
                  <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    <Label LabelName={"Name"} />
                  </div>
                  <div className="col-xs-10  col-sm-10 col-md-10 col-lg-10 ">
                    <TextBox title={'Full name'} placeholder={'Full name'} />
                  </div>
                </div>

                <div className="row form_group">
                  <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    <Label LabelName={"L1 evaluation"} />
                  </div>
                  <div className="col-xs-10  col-sm-10 col-md-10 col-lg-10 ">
                    <Label LabelName={"L1 evaluation result"} />
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
                    <InputSelect
                      placeholder={'--HR Name--'}
                      options={this.state.HrNameSelections}
                      selectedOption={this.state.HrNameSelections} />
                  </div>
                </div>

                <div className="row form_group">
                  <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    <Label LabelName={"Test Score"} />
                  </div>
                  <div className="col-xs-10  col-sm-10 col-md-10 col-lg-10 ">
                    <InputNumber />
                  </div>
                </div>

                <div className="row form_group">
                  <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    <Label LabelName={"Evalulate"} />
                  </div>
                  <div className="col-xs-10  col-sm-10 col-md-10 col-lg-10 ">
                    <InputSelect
                      name={"evalselection"}
                      placeholder={'--Evalulate--'}
                      options={this.state.EvaluateSelection}
                      selectedOption={this.state.EvaluateSelection} />
                  </div>
                </div>

                <div className="row form_group">
                  <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    <Label LabelName={"Seniority"} />
                  </div>
                  <div className="col-xs-10  col-sm-10 col-md-10 col-lg-10 ">
                    <InputSelect
                      placeholder={'--Seniority--'}
                      options={this.state.SenioritySelections}
                      selectedOption={this.state.SenioritySelections} />
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

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gkeval;
