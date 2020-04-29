import React from 'react';

import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import banner from '../../../images/banner-1.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: null
    }
  }

  renderDate() {
    let date = this.state.selectedDate
    date = moment(date).format("DD/MM/YYYY")

    return date
  }

  render() {
    return (
      <>
        <div className="top">
          <div className="top__body">
            <figure className="image">
              <img src={banner} alt="Placeholder" />
            </figure>

            <div className="is-flex top__content">
              <div className="container is-fluid">
                <div className="top__wrap">
                  <h1 className="title has-text-white is-size-1">
                    Busque eventos em qualquer lugar do Brasil
                  </h1>

                  <form className="form">
                    <div className="field has-addons">
                      <p className="control has-icons-left is-expanded form__control">
                        <input className="input is-medium form__input form__input--borderless" type="name" placeholder="Cidade desejada..." />
                        <span className="icon is-small is-left form__icon">
                          <FontAwesomeIcon icon={faMapMarkerAlt} />
                        </span>
                      </p>

                      <SingleDatePicker
                        date={this.state.selectedDate}
                        displayFormat={() => "DD/MM/YYYY"}
                        showDefaultInputIcon
                        hideKeyboardShortcutsPanel
                        onDateChange={selectedDate => this.setState({ selectedDate: selectedDate })}
                        focused={this.state.focused} // PropTypes.bool
                        onFocusChange={({ focused }) => this.setState({ focused })}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container is-fluid">
          <div className="section">
            <h2 className="title has-text-weight-light">
              Eventos em <span className="has-text-primary">todo o Brasil</span>
            </h2>

            <p className="subtitle has-text-weight-light">
              <span className="tag is-primary is-medium">
                {this.state.selectedDate !== null ? this.renderDate() : "Todas as datas"}
              </span>
            </p>

            <div className="columns is-multiline">
              <div className="column is-one-quarter">
                oi
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Events;
