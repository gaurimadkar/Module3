import React from 'react';
import { Component } from 'react';
import Const from "../../common/Constants";
import InputText from '../resuableComponent/InputText';
import InputSelect from '../resuableComponent/InputSelect';
import InputTextArea from '../resuableComponent/InputTextArea';
import Label from '../resuableComponent/Label';
import Button from '../resuableComponent/Button';


class L1eval extends Component {
  constructor(props) {
    super(props);
    this.state = {
      EvaluateSelection: Const.EvaluateSelection,
      SenioritySelections: Const.SenioritySelections,
      HrNameSelections:  Const.HrNameSelections
    };
    this.onGetdata = this.onGetdata.bind(this);
  }
  onGetdata = (e) => {
    let obj = {
      l1evaluate: this.state.evalSel,
      l1seniority: this.state.Seniority,
      feedbackL1: this.state.feedback,
      id: this.props.data.id,
      formName: 'L1'
    }
    this.props.transferDataToInputModal(obj);
    this.props.handleCloseModal();
    e.preventDefault();
  };

  onNameChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    return (
      <div>
        <div className="L1eval">
          <div className="col-lg-12 defaultAlign">
            <section>
              <header className="panel-heading">
                L1 Evaluation form:
              </header>
              <form data-toggle="validator" role="form" onSubmit={this.onGetdata}>
                <input type="hidden" name="id" value={this.props.data.id} />
                <div className="row form_group">
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <Label LabelName={"Name"} />
                  </div>
                  <div className="col-xs-9  col-sm-9 col-md-9 col-lg-9">
                    <p>{this.props.data.name}</p>
                  </div>
                </div>
                <div className="row form_group">
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <Label LabelName={"Resume"} />
                  </div>
                  <div className="col-xs-9  col-sm-9 col-md-9 col-lg-9">
                    <p><a href={this.props.data.evallink} target="_blank">{this.props.data.cvlink}</a></p>
                  </div>
                </div>
                <div className="row form_group">
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <Label LabelName={"Evaluation Sheet"} />
                  </div>
                  <div className="col-xs-9  col-sm-9 col-md-9 col-lg-9">
                    <p><a href={this.props.data.evallink} target="_blank">{this.props.data.evallink}</a></p>
                  </div>
                </div>
                <div className="row form_group">
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <Label LabelName={"HR Name"} />
                  </div>
                  <div className="col-xs-9  col-sm-9 col-md-9 col-lg-9">
                    <p>{this.props.data.hrname}</p>
                  </div>
                </div>
                <div className="row form_group">
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <Label LabelName={"Testscore"} />
                  </div>
                  <div className="col-xs-9  col-sm-9 col-md-9 col-lg-9">
                    <span>11</span>
                  </div>
                </div>
                <div className="row form_group">
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                      <Label LabelName={"Evalulate"} />
                    </div>
                    <div className="col-xs-9  col-sm-9 col-md-9 col-lg-9">
                      <InputSelect
                        onNameChange={this.onNameChange.bind(this)}
                        name="evalSel"
                        selectedOption={this.state.EvaluateSelection} />
                    </div>
                  </div>
                  <div className="row form_group">
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                      <Label LabelName={"Seniority"} />
                    </div>
                    <div className="col-xs-9  col-sm-9 col-md-9 col-lg-9">
                      <InputSelect
                        onNameChange={this.onNameChange.bind(this)}
                        name="Seniority"
                        selectedOption={this.state.SenioritySelections} />
                    </div>
                  </div>
                <div className="row form_group">
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <Label LabelName={"Feedback"} />
                  </div>
                  <div className="col-xs-9  col-sm-9 col-md-9 col-lg-9">
                    <InputTextArea
                      rows={5}
                      onNameChange={this.onNameChange.bind(this)}
                      name="feedback" />
                  </div>
                </div>
                <div className="row form_group">
                  <div className="col-sm-offset-5 col-sm-7">
                    <span>
                      <button type="submit" className="btn btn-primary">Submit</button>
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
};

export default L1eval;
