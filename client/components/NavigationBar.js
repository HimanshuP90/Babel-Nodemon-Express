import React from 'react';
import { Link } from 'react-router';

export default () => {
	return (
		<nav className="navbar navbar-inverse">
		  <div className="container-fluid">
		    <div className="navbar-header">
		      <a className="navbar-brand" href="#">LifeAsReact</a>
		    </div>
		    <ul className="nav navbar-nav">
		      <li><Link to="/home">Home</Link></li>
		      <li><a href="#">About</a></li>
		    </ul>
		   <ul className="nav navbar-nav navbar-right">
		      <li><Link to="/signup">Signup</Link></li>
		      <li><a href="#">Login</a></li>
		    </ul>
		    <div className="navbar-form navbar-left">
		      <div className="input-group">
		        <input type="text" className="form-control" placeholder="Search" />
		        <div className="input-group-btn">
		          <button className="btn btn-default" type="submit">
		            <i className="glyphicon glyphicon-search"></i>
		          </button>
		        </div>
		      </div>
		    </div>
		  </div>
		</nav>

	)
}