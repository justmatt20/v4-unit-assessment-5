import React, { Component } from 'react';
import axios from 'axios';
import homeLogo from './../../assets/home_logo.png';
import newLogo from './../../assets/new_logo.png';
import logoutLogo from './../../assets/shut_down.png';
import './Nav.css';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateUser, logout} from '../../redux/reducer'


class Nav extends Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
    this.getUser = this.getUser.bind(this);
  }

  componentDidMount() {
    this.getUser()
  }

  getUser() {
    axios.get('/api/auth/me')
    .then(res => res.sendStatus(200))
  }
  
  logout(res,req) {
    axios.post('/api/auth/logout')
      .then(res => res.status(200).send())
      .catch(err => err.sendStatus(400))
  }
  
  render() {
      return this.props.location.pathname !== '/' &&
        <div className='nav'>
          <div className='nav-profile-container'>
            <div className='nav-profile-pic'></div>
            <p>placeholder username</p>
          </div>
          <div className='nav-links'>
            <Link to="/Dash"> <img className='nav-img' src={homeLogo} alt='home' /> </Link>
            <Link to="/Form"><img className='nav-img' src={newLogo} alt='new post' /> </Link>
          </div>
          <Link to="/Auth" onClick={this.logout}><img className='nav-img logout' src={logoutLogo} alt='logout' /> </Link>
        </div>
  }
}



function mapStateToProps(state) {
  return state;
}

export default withRouter(connect(mapStateToProps, { updateUser, logout })(Nav));