import React from 'react';
import { Component } from 'react';
import InputText from '../resuableComponent/InputText';
import InputSelect from '../resuableComponent/InputSelect';
import InputTextArea from '../resuableComponent/InputTextArea';
import Label from '../resuableComponent/Label';
import InputNumber from '../resuableComponent/InputNumber';
import Button from '../resuableComponent/Button';
import InputFile from '../resuableComponent/InputFile';

class L1eval extends Component {
  constructor(props) {
    super(props);
    this.state = {
      EvaluateSelection: ['Select Option', 'Selected', 'Rejected'],
      SenioritySelections: ['Select Option', 'Jr', 'S.Sr', 'Sr', 'SD'],
      HrNameSelections: ['Select Option', 'Namrata', 'Kapil', 'Sunaina'],
      formdata:
        {
          name: "Amit Jadav",
          resume: "resume1",
          evalsheet: 'www.googledrive.com/aaa',
          hrname: 'kapil',
          evaluate: 'www.googledrive.com/aaa',
          seniority: 'sr',
          feedback: 'pass'
        }


    };
    this.onGetdata = this.onGetdata.bind(this);
    
  }
  onGetdata = (e) => {
    console.log("1" + e.target.value);
    let obj = {
      name: this.state.name,
      hrname: this.state.HrName,
      resume: this.state.resume,
      evalsheet: this.state.evalsheet,
      evaluate: this.state.evalSel,
      seniority: this.state.Seniority,
      feedback: this.state.feedback
    }
    console.log(obj);
    this.setState({
      formdata: [...this.state.formdata, obj]
    });
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
          <div className="container">
            <div className="col-lg-12">
              <section className="panel">
                <header className="panel-heading">
                  L1 Evaluation form:
                </header>

                <div className="panel-body">

                  <form data-toggle="validator" role="form" onSubmit={this.onGetdata}>

                    <div className="row form_group">
                      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        <Label LabelName={"Name"} />
                      </div>
                      <div className="col-xs-10  col-sm-10 col-md-10 col-lg-10">
                        <InputText
                          onNameChange={this.onNameChange.bind(this)}
                          name="name"
                          title={'Full name'}
                          PlaceHolder={"Enter Name"} />
                      </div>
                    </div>


                    <div className="row form_group">
                      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        <Label LabelName={"Resume"} />
                      </div>
                      <div className="col-xs-10  col-sm-10 col-md-10 col-lg-10 ">
                        <InputFile name="resume" onNameChange={this.onNameChange.bind(this)} />
                        {/* <Label name="resume" LabelName={"www.doc.in"} /> */}
                      </div>
                    </div>

                    <div className="row form_group">
                      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        <Label LabelName={"Evaluation Sheet"} />
                      </div>
                      <div className="col-xs-10  col-sm-10 col-md-10 col-lg-10 ">
                        <InputFile name="evalsheet" onNameChange={this.onNameChange.bind(this)} />
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
                        <InputSelect
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
                        <InputSelect
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
                        <InputTextArea
                          rows={5}
                          placeholder={'Feedback'}
                          onNameChange={this.onNameChange.bind(this)}
                          name="feedback" />
                      </div>
                    </div>

                    <div className="row form_group">
                      <div className="col-sm-offset-5 col-sm-7">
                        <span>
                          {/* <Button ButtonName={"Submit"}  onClick={() => this.onGetdata()} /> */}
                          <button type="submit" className="btn btn-primary">Submitt</button>
                        </span><span className="margin-l-5"><Button ButtonName={"Cancel"} /></span>
                      </div>
                    </div>

                  </form>
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
