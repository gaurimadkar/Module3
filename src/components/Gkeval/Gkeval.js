import React from 'react';
import { Component } from 'react';
import InputText from '../resuableComponent/InputText';
import InputSelect from '../resuableComponent/InputSelect';
import InputTextArea from '../resuableComponent/InputTextArea';
import Label from '../resuableComponent/Label';
import Button from '../resuableComponent/Button';
import InputFile from '../resuableComponent/InputFile';

class Gkeval extends Component {
  constructor(props) {
    super(props);
    this.state = {
      objGkEval: props.data,
      EvaluateSelection:['Select Option','Selected','Rejected'],
      SenioritySelections: ['Select Option','Jr','S.Sr','Sr','SD'],
      HrNameSelections: ['Select Option','Namrata', 'Kapil', 'Sunaina'],
      GkModal: props.record
    };

    this.handlecloseModal = this.handlecloseModal.bind(this);
    this.onGetdataModal = this.onGetdataModal.bind(this);
  }

  onGetdataModal = (e) => {
    let obj = {
      name: this.state.GkModal.name,
      selectHrname: this.state.GkModal.HrName,
      resume: this.state.resume,
      evalsheet: this.state.evalsheet,
      evaluate: this.state.evalSel,
      seniority: this.state.Seniority,
      feedback: this.state.feedback
    }
    console.log(obj);
    this.setState({
      GkModal: [...this.state.GkModal, obj]
    });
    e.preventDefault();
  };

  handlecloseModal() {
    this.setState({showmodal:false});  
  }

  onNameChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    console.log(this.props.record);
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
                <InputText name='name' value={this.state.GkModal.name} title={'Full name'} onNameChange={this.onNameChange.bind(this)} className={'12'}/>
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
                <InputFile  name="txtresume" onNameChange={this.onNameChange.bind(this)} />
                </div>
              </div>
              <div className="row form_group">
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                  <Label LabelName={"Evaluation Sheet"} />
                </div>
                <div className="col-xs-10  col-sm-10 col-md-10 col-lg-10 ">
                <InputFile name="txtevalsheet" onNameChange={this.onNameChange.bind(this)} />
                </div>
              </div>
              <div className="row form_group">
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                  <Label LabelName={"HR Name"} />
                </div>
                <div className="col-xs-10  col-sm-10 col-md-10 col-lg-10 ">
                  <InputSelect name="selectHrname" onNameChange={this.onNameChange.bind(this)} selectedOption={this.state.HrNameSelections} />
                </div>
              </div>
              <div className="row form_group">
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                  <Label LabelName={"Evalulate"} />
                </div>
                <div className="col-xs-10  col-sm-10 col-md-10 col-lg-10 ">
                  <InputSelect name="selectEvaluate" onNameChange={this.onNameChange.bind(this)} selectedOption={this.state.EvaluateSelection}/>
                </div>
              </div>
              <div className="row form_group">
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                  <Label LabelName={"Seniority"} />
                </div>
                <div className="col-xs-10  col-sm-10 col-md-10 col-lg-10 ">
                  <InputSelect name="selectSeniority"  onNameChange={this.onNameChange.bind(this)} selectedOption={this.state.SenioritySelections}/>
                </div>
              </div>
              <div className="row form_group">
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                  <Label LabelName={"Feedback"} />
                </div>
                <div className="col-xs-10  col-sm-10 col-md-10 col-lg-10 ">
                  <InputTextArea name="txtFeedback"  onNameChange={this.onNameChange.bind(this)}
                    rows={5}
                    placeholder={'Feedback'} />
                </div>
              </div>

              <div className="row form_group">
                <div className="col-sm-offset-5 col-sm-7">
                  <span><Button ButtonName={"Submit"} /></span>
                  <span className="margin-l-5"><Button ButtonName={"Cancel"} onClick ={this.handlecloseModal}  /></span>
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
