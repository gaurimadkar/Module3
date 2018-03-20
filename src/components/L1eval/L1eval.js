import React from 'react';
import { Component } from 'react';
import InputText from '../resuableComponent/InputText';
import InputSelect from '../resuableComponent/InputSelect';
import InputTextArea from '../resuableComponent/InputTextArea';
import Label from '../resuableComponent/Label';
import Button from '../resuableComponent/Button';


class L1eval extends Component {
  constructor(props) {
    super(props);
    this.state = {
      EvaluateSelection: ['Select Option', 'Selected', 'Rejected'],
      SenioritySelections: ['Select Option', 'Jr', 'S.Sr', 'Sr', 'SD'],
      HrNameSelections: ['Select Option', 'Namrata', 'Kapil', 'Sunaina'],  
    };
    this.onGetdata = this.onGetdata.bind(this);
    //console.log(this.props);
   

  }
  onGetdata = (e) => {
    let obj = {     
      evaluateresult: this.state.evalSel,
      seniority: this.state.Seniority,
      feedback: this.state.feedback,
      id: this.props.data.id
    }
    // console.log("L1obj", obj);
    this.props.transferDataToInputModal(obj);
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
                    <input type="hidden"  name="id" value={this.props.data.id}/>
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
                        <Label LabelName={"Resume"} />
                      </div>
                      <div className="col-xs-10  col-sm-10 col-md-10 col-lg-10 ">
                        <p><a href={this.props.data.evallink}  target="_blank">{this.props.data.cvlink}</a></p>
                      </div>
                    </div>

                    <div className="row form_group">
                      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        <Label LabelName={"Evaluation Sheet"} />
                      </div>
                      <div className="col-xs-10  col-sm-10 col-md-10 col-lg-10 ">
                        <p><a href={this.props.data.evallink}  target="_blank">{this.props.data.evallink}</a></p>
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
