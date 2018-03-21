import React from 'react';
import { Component } from 'react';

import Button from '../resuableComponent/Button';
import InputSelect from '../resuableComponent/InputSelect';
import InputText from '../resuableComponent/InputText';
import InputTextArea from '../resuableComponent/InputTextArea';
import Label from '../resuableComponent/Label';

class Gkeval extends Component {
  constructor(props) {
    super(props);
    this.state = {
      objGkEval: props.data,
      EvaluateSelection: ['Select Option', 'Selected', 'Rejected'],
      SenioritySelections: ['Select Option', 'Jr', 'S.Sr', 'Sr', 'SD'],
      HrNameSelections: ['Select Option', 'Namrata', 'Kapil', 'Sunaina']
    };
    this.handlecloseModal = this.handlecloseModal.bind(this);
    this.onGetdata = this.onGetdata.bind(this);
  }

  onGetdata = (e) => {
    let obj = {
      evaluateresult: this.state.evalSel,
      seniority: this.state.Seniority,
      feedback: this.state.feedback,
      id: this.props.data.id,
      l1result: true,
      evaluate: true
    }
    this.props.transferDataToInputModal(obj);
    e.preventDefault();
  };

  onNameChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handlecloseModal() {
    this.setState(this.state.hide);
  }

  render() {
    return (
      <div>
        <div className="L1eval">         
            <div className="col-lg-12 defaultAlign">
              <section>
                <header className="panel-heading">
                  GK Evaluation form:
                </header>               
                  <form data-toggle="validator" role="form" onSubmit={this.onGetdata}>
                    <input type="hidden" name="id" value={this.props.data.id} />
                    <div className="row form_group">
                      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        <Label LabelName={"Name"} />
                      </div>
                      <div className="col-xs-10  col-sm-10 col-md-10 col-lg-10">
                        <p>{this.props.data.name}</p>
                      </div>
                    </div>
                    <div className="row form_group">
                      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        <Label LabelName={"L1 Evaluation"} />
                      </div>
                      <div className="col-xs-10  col-sm-10 col-md-10 col-lg-10">
                        <Label LabelName={"Selected"} />
                      </div>
                    </div>
                    <div className="row form_group">
                      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        <Label LabelName={"Resume"} />
                      </div>
                      <div className="col-xs-10  col-sm-10 col-md-10 col-lg-10 ">
                        <p><a href={this.props.data.evallink} target="_blank">{this.props.data.cvlink}</a></p>
                      </div>
                    </div>
                    <div className="row form_group">
                      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        <Label LabelName={"Evaluation Sheet"} />
                      </div>
                      <div className="col-xs-10  col-sm-10 col-md-10 col-lg-10 ">
                        <p><a href={this.props.data.evallink} target="_blank">{this.props.data.evallink}</a></p>
                      </div>
                    </div>
                    <div className="row form_group">
                      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        <Label LabelName={"HR Name"} />
                      </div>
                      <div className="col-xs-10  col-sm-10 col-md-10 col-lg-10 ">
                        <p>{this.props.data.hrname}</p>
                      </div>
                    </div>
                    <div className="row form_group">
                      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        <Label LabelName={"Testscore"} />
                      </div>
                      <div className="col-xs-10  col-sm-10 col-md-10 col-lg-10 ">
                        <span>11</span>
                      </div>
                    </div>
                    <div className="row form_group">
                      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        <Label LabelName={"Evalulate"} />
                      </div>
                      <div className="col-xs-10  col-sm-10 col-md-10 col-lg-10 ">
                        <InputSelect selectedValue={this.props.data.evaluate}
                          onNameChange={this.onNameChange.bind(this)}
                          name="evalSel"
                          selectedOption={this.state.EvaluateSelection} />
                      </div>
                    </div>
                    <div className="row form_group">
                      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        <Label LabelName={"Seniority"} />
                      </div>
                      <div className="col-xs-10  col-sm-10 col-md-10 col-lg-10 ">
                        <InputSelect selectedValue={this.props.data.seniority}
                          onNameChange={this.onNameChange.bind(this)}
                          name="Seniority"
                          selectedOption={this.state.SenioritySelections} />
                      </div>
                    </div>
                    <div className="row form_group">
                      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        <Label LabelName={"Feedback"} />
                      </div>
                      <div className="col-xs-10  col-sm-10 col-md-10 col-lg-10 ">
                        <InputTextArea setValue={this.props.data.feedbackGK}
                          rows={5}
                          onNameChange={this.onNameChange.bind(this)}
                          name="feedback" />
                      </div>
                    </div>
                    <div className="row form_group">
                      <div className="col-sm-offset-5 col-sm-7">
                        <span>
                          <button type="submit" className="btn btn-primary" onClick={this.props.handleCloseModal} >Submit</button>
                        </span>
                        <span className="margin-l-5">
                          <button className="btn btn-primary" onClick={this.props.handleCloseModal} >Cancel</button>
                        </span>
                      </div>
                    </div>
                  </form>               
              </section>
            </div>
          </div>       
      </div>
    );
  }
}

export default Gkeval;
