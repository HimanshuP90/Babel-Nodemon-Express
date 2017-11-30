import React from 'react';

class SignupForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			email: '',
			password: '',
			confirmPassword:''
		}

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value});
	}

	onSubmit(e) {
		e.preventDefault();
		console.log(this.state);
	}

	render() {
		return (
			<form>
				<div className="col-md-4 col-md-offset-4">
				<h1>Join Our React Team</h1>
				<div className="form-group">
					<label className="control-label">Username</label>
					<input
						onChange={this.onChange}
						value={this.state.username}
						type="text"
						name="username"
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label className="control-label">Email</label>
					<input
						onChange={this.onChange}
						value={this.state.email}
						type="text"
						name="email"
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label className="control-label">Password</label>
					<input
						onChange={this.onChange}
						value={this.state.password}						type="password"
						name="password"
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label className="control-label">Connfirm Password</label>
					<input
						onChange={this.onChange}
						value={this.state.confirmPassword}
						type="password"
						name="confirmPassword"
						className="form-control"
					/>
				</div>	
				<div className="form-group">
					<button className="btn btn-primary btn-lg" onClick={this.onSubmit}>
						Sign up 
					</button>
				</div>			
				</div>	
			</form>
		)
	}
}

export default SignupForm;