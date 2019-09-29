import React, { useState, Fragment } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';

const PostForm = ({ addPost }) => {
  const [formData, setFormData] = useState({
    Call_Type: "",
    Disposition: "",
    Location: "",
    Location_Type: "",
    person_last_name: "",
    person_first_name: "",
    officer_last_name: "",
    officer_fisrt_name: "",
    text: "",
    time: "",
    date: "",
  });
  const {
    Call_Type,
    Disposition,
    Location,
    Location_Type,
    person_last_name,
    person_first_name,
    officer_last_name,
    officer_fisrt_name,
    text,
    time,
    date,
  } = formData;
  const onChange = e =>
  setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    addPost(formData);
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Create an Investigation File</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Let's get some information
      </p>
      <small>* = required field</small>
      <form className='form' onSubmit={e => onSubmit(e)}>

        <div className='form-group'>
        <small className='form-text'>
        *Call Type:
         </small>
          <select name='Call_Type' value={Call_Type} onChange={e => onChange(e)}>
            <option value='0'> Select Call Type</option>
            <option value='711 Hang up- CALL'>711 Hang up- CALL</option>
            <option value='ABC'>ABC</option>
            <option value='ABDT'>ABDT</option>
            <option value='ABNV'>ABNV</option>
            <option value='Admin Detail'>Admin Detail</option>
            <option value='Adopt-A-Hall'>Adopt-A-Hall</option>
            <option value='Alcohol Violation'>Alcohol Violation</option>
            <option value='ALRB'>ALRB</option>
            <option value='ALRF'>ALRF</option>
            <option value='ALRP'>ALRP</option>
            <option value='ALRU'>ALRU</option>
            <option value='ANML'>ANML</option>
            <option value='ARSN'>ARSN</option>
            <option value='ASLI'>ASLI</option>
            <option value='ASLT'>ASLT</option>
            <option value='ASTA'>ASTA</option>
            <option value='ASTC'>ASTC</option>
            <option value='ASTO'>ASTO</option>
            <option value='ASTP'>ASTP</option>
            <option value='BDOG'>BDOG</option>
            <option value='Bias – Anonymous Report'>Bias – Anonymous Report</option>
            <option value='Bias – Case Report'>Bias – Case Report</option>
            <option value='Bias – Incident Report'>Bias – Incident Report</option>
            <option value='Bike Check'>Bike Check</option>
            <option value='BIOA'>BIOA</option>
            <option value='Blue Light Alarm'>Blue Light Alarm</option>
            <option value='BOMB'>BOMB</option>
          </select>
        </div>

        <div className='form-group'>
        <small className='form-text'>
        *Disposition:
        </small>
          <select name='Disposition' value={Disposition} onChange={e => onChange(e)}>
            <option value='0'> Select Disposition</option>
            <option value='Closed/Cleared'>Closed/Cleared</option>
            <option value='TOT – Outside Agency'>TOT – Outside Agency</option>
            <option value='CSC Referral'>CSC Referral</option>
            <option value='Arrest Made'>Arrest Made</option>
            <option value='No Prosecution'>No Prosecution</option>
          </select>
        </div>

        <div className='form-group'>
        <small className='form-text'>
            *Location of Incident
          </small>
          <input
            type='text'
            placeholder='Location / address'
            name='Location'
            value={Location}
            onChange={e => onChange(e)}
          />
        </div>

        <div className='form-group'>
        <small className='form-text'>
        *Location Type:
          </small>
          <select name='Location_Type' value={Location_Type} onChange={e => onChange(e)}>
            <option value='0'> Select Location_Type</option>
            <option value='Address'>Address</option>
            <option value='Intersection'>Intersection</option>
            <option value='Common Name'>Common Name</option>
            <option value='Lat/Long'>Lat/Long</option>
            <option value='Rural Address'>Rural Address</option>
          </select>
        </div>

        <div className='form-group'>
        <small className='form-text'>
            *Persons last name:
          </small>
          <input
            type='text'
            placeholder='Persons lastname'
            name='person_last_name'
            value={person_last_name}
            onChange={e => onChange(e)}
          />
        </div>

        <div className='form-group'>
        <small className='form-text'>
            *Persons first name:
          </small>
          <input
            type='text'
            placeholder='person first name'
            name='person_first_name'
            value={person_first_name}
            onChange={e => onChange(e)}
          />
        </div>

        <div className='form-group'>
        <small className='form-text'>
         * Officers last name:
          </small>
          <input
            type='text'
            placeholder='Officer lastname'
            name='officer_last_name'
            value={officer_last_name}
            onChange={e => onChange(e)}
          />
        </div>

        <div className='form-group'>
        <small className='form-text'>
          *Officers fisrt name:
          </small>
          <input
            type='text'
            placeholder='Officer fisrtname'
            name='officer_fisrt_name'
            value={officer_fisrt_name}
            onChange={e => onChange(e)}
          />
          
        </div>


        <small className='form-text'>
          *Write inceident description:
          </small>
        <textarea
          name='text'
          cols='30'
          rows='5'
          placeholder='Description'
          value={text}
          onChange={e => onChange(e)}
          required
        />

<div className='form-group'>
        <small className='form-text'>
          *Time of incident:
          </small>
          <input
            type='text'
            placeholder='00:00 am/pm'
            name='time'
            value={time}
            onChange={e => onChange(e)}
          />
          
        </div>

        <div className='form-group'>
        <small className='form-text'>
          *Date of incident:
          </small>
          <input
            type='text'
            placeholder='mm/dd/yyyy'
            name='date'
            value={date}
            onChange={e => onChange(e)}
          />
          
        </div>



        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </Fragment>
   


   
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { addPost }
)(PostForm);
