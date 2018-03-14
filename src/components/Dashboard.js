import React from 'react';
import { Component } from 'react';


class Dashboard extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <form onSubmit={this.handleClick}>
        <div className="header">
          <div class="row">
            <div class="col-lg-12">
              <section class="panel">
                <header class="panel-heading">
                  Advanced Table
              </header>

                <table class="table table-striped table-advance table-hover">
                  <tbody>
                    <tr>
                      <th><i class="icon_profile"></i>Name</th>
                      <th><i class="icon_calendar"></i> Years of Experience</th>
                      <th><i class="icon_mail_alt"></i> CV Link</th>
                      <th><i class="icon_pin_alt"></i> Evaluation Link</th>
                      <th><i class="icon_mobile"></i> L1 Result</th>
                      <th><i class="icon_cogs"></i> Evaluate</th>
                    </tr>
                    <tr>
                      <td>Angeline Mcclain</td>
                      <td>5</td>
                      <td>dale@chief.info</td>
                      <td>dale@chief.info</td>
                      <td>dale@chief.info</td>
                      <td>
                        <div class="btn-group">
                          <a class="btn btn-primary" href="#"><i class="icon_plus_alt2"></i></a>
                          <a class="btn btn-success" href="#"><i class="icon_check_alt2"></i></a>
                          <a class="btn btn-danger" href="#"><i class="icon_close_alt2"></i></a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Martin Cylo</td>
                      <td>3</td>
                      <td>dale@chief.info</td>
                      <td>dale@chief.info</td>
                      <td>dale@chief.info</td>
                      <td>
                        <div class="btn-group">
                          <a class="btn btn-primary" href="#"><i class="icon_plus_alt2"></i></a>
                          <a class="btn btn-success" href="#"><i class="icon_check_alt2"></i></a>
                          <a class="btn btn-danger" href="#"><i class="icon_close_alt2"></i></a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </section>
            </div>
          </div>
        </div>
      </form>

    );
  }
}

export default Dashboard;
