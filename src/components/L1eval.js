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
      EvaluateSelection: ['Select Option', 'Selected', 'Rejected'],
      SenioritySelections: ['Select Option', 'Jr', 'S.Sr', 'Sr', 'SD'],
      HrNameSelections: ['Select Option', 'Namrata', 'Kapil', 'Sunaina'],
      //ObjL1eval =[{}]
      ObjL1eval: [{
        name: "Amit Jadav",
        resume: "resume1",
        evalsheet: 'www.googledrive.com/aaa',
        hrname: 'kapil',
        evaluate: 'www.googledrive.com/aaa',
        seniority: 'sr',
        feedback: 'pass'
      }]
    };
    this.onGetdata = this.onGetdata.bind(this);
  }
  onGetdata = () => {  
   console.log("fullName" +this.state.fullName);
   console.log("LastName" +this.state.LastName);
   console.log("HrName" +this.state.HrName);
   console.log("feedback" +this.state.feedback);
   console.log("evallink" +this.state.evallink);
   
   
 
    // let obj = {
    //   name: task

    // };
    // console.log(obj);
    // this.setState({
    //   ObjL1eval: [...this.state.ObjL1eval, obj],
    //   isCompleted: true
    // })
  };

  onNameChange(e) {
    let key = e.target.name;  
    let value =  e.target.value;
    console.log(key,value);  
    this.setState({
      [key]: value, 
    })
  }
  render() {
    return (
      <div>
        <div className="L1eval">
          <div className="container">
            <div className="col-lg-12">
              <section className="panel">
                <header className="panel-heading">
                  L1 Evaluation form:
              </header>

                <div className="panel-body">

                  <div className="row form_group">
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                      <Label LabelName={"Name"} />
                    </div>
                    <div className="col-xs-10  col-sm-10 col-md-10 col-lg-10">
                      <InputText 
                        onNameChange={this.onNameChange.bind(this)} 
                        name="fullName"
                        title={'Full name'} 
                        PlaceHolder={"full name"}/>                    
                    </div>
                  </div>

                  <div className="row form_group">
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                      <Label LabelName={"Last Name"} />
                    </div>
                    <div className="col-xs-10  col-sm-10 col-md-10 col-lg-10">
                      <InputText 
                        onNameChange={this.onNameChange.bind(this)} 
                        name="LastName"
                        title={'Full name'} 
                        PlaceHolder={"full name"}/>                    
                    </div>
                  </div>

                  <div className="row form_group">
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                      <Label LabelName={"Resume"} />
                    </div>
                    <div className="col-xs-10  col-sm-10 col-md-10 col-lg-10 ">
                      <Label name="evallink" LabelName={"www.doc.in"} />
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
                      onNameChange={this.onNameChange.bind(this)} 
                      name="HrName"
                      selectedOption={this.state.HrNameSelections} />
                    </div>
                  </div>
                  <div className="row form_group">
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                      <Label LabelName={"Evalulate"} />
                    </div>
                    <div className="col-xs-10  col-sm-10 col-md-10 col-lg-10 ">
                      <InputSelect selectedOption={this.state.EvaluateSelection} />
                    </div>
                  </div>
                  <div className="row form_group">
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                      <Label LabelName={"Seniority"} />
                    </div>
                    <div className="col-xs-10  col-sm-10 col-md-10 col-lg-10 ">
                      <InputSelect selectedOption={this.state.SenioritySelections} />
                    </div>
                  </div>
                  <div className="row form_group">
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                      <Label LabelName={"Feedback"} />
                    </div>
                    <div className="col-xs-10  col-sm-10 col-md-10 col-lg-10 ">
                      <InputTextArea
                        rows={5}
                        placeholder={'Feedback'} 
                        onNameChange={this.onNameChange.bind(this)} 
                        name="feedback"/>
                    </div>
                  </div>

                  <div className="row form_group">
                    <div className="col-sm-offset-5 col-sm-7">
                      <span>
                        {/* <Button ButtonName={"Submit"}  onClick={() => this.onGetdata()} /> */}
                        <button type="button" className="btn btn-primary" onClick={this.onGetdata}>Submitt</button>
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
};

export default L1eval;
