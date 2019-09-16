import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deletePost } from '../../actions/post';

const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, text, name, user, Incident_Type, Call_Type, Disposition, Location, Location_Type, person_last_name, person_first_name, officer_last_name, officer_fisrt_name, time, date },
  showActions
}) => (
  <div className='post bg-white p-1 my-1'>
    <div>
      {/* <Link to={`/profile/${user}`}>
        <h4>{_id}</h4>
      </Link> */}
      <h4>{_id}</h4>
    </div>
    <div>
      <p className='my-1'> Incident Type:{Incident_Type}</p>
      <p className='my-1'> Call Type:{Call_Type}</p>
      <p className='my-1'> Disposition:{Disposition}</p>
      <p className='my-1'> Location: {Location}</p>
      <p className='my-1'> Location Type:{Location_Type}</p>
      <p className='my-1'> Persons Last Name:{person_last_name}</p>
      <p className='my-1'> Persons First Name:{person_first_name}</p>
      <p className='my-1'> Officers Last Name:{officer_last_name}</p>
      <p className='my-1'> Officers First Name:{officer_fisrt_name}</p>
      <p className='my-1'> Descreption: {text}</p>
      <p className='my-1'> Time: {time}</p>
      <p className='post-date'>
        Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
      </p>

      {showActions && (
        <Fragment>
    
          {!auth.loading && user === auth.user._id && (
            <button
              onClick={() => deletePost(_id)}
              type='button'
              className='btn btn-danger'
            >
              <i className='fas fa-times' />
            </button>
          )}
        </Fragment>
      )}
    </div>
  </div>
);

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired,
  showActions: PropTypes.bool
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deletePost }
)(PostItem);
