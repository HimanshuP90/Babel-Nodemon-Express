import React from 'react';
import classnames from 'classnames';

class SignupForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			email: '',
			password: '',
			confirmPassword:'',
			errors: {},
			isLoading: false
		}

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value});
	}

	onSubmit(e) {
		this.setState({ errors: {}, isLoading: true });
		e.preventDefault();
		this.props.userSignupRequest(this.state).then(
			(resolve) => {console.log(resolve)},
			(reject) => this.setState({errors: reject.response.data, isLoading: false})
		);
	}

	render() {
		const { errors } = this.state;
		return (
			<form>
				<div className="col-md-4 col-md-offset-4">
				<h1>Join Our React Team</h1>
				<div className={classnames("form-group", {'has-error': errors.username})}>
					<label className="control-label">Username</label>
					<input
						onChange={this.onChange}
						value={this.state.username}
						type="text"
						name="username"
						className="form-control"
					/>
					{errors.username && <span className="help-block">{errors.username}</span>}
				</div>
				<div className={classnames("form-group", {'has-error': errors.email})}>
					<label className="control-label">Email</label>
					<input
						onChange={this.onChange}
						value={this.state.email}
						type="text"
						name="email"
						className="form-control"
					/>
					{errors.email && <span className="help-block">{errors.email}</span>}
				</div>
				<div className={classnames("form-group", {'has-error': errors.password})}>
					<label className="control-label">Password</label>
					<input
						onChange={this.onChange}
						value={this.state.password}						type="password"
						name="password"
						className="form-control"
					/>
					{errors.password && <span className="help-block">{errors.password}</span>}
				</div>
				<div className={classnames("form-group", {'has-error': errors.confirmPassword})}>
					<label className="control-label">Connfirm Password</label>
					<input
						onChange={this.onChange}
						value={this.state.confirmPassword}
						type="password"
						name="confirmPassword"
						className="form-control"
					/>
					{errors.confirmPassword && <span className="help-block">{errors.confirmPassword}</span>}
				</div>	
				<div className="form-group">
					<button disabled={this.state.isLoading} className="btn btn-primary btn-lg" onClick={this.onSubmit}>
						Sign up 
					</button>
				</div>			
				</div>	
			</form>
		)
	}
}

SignupForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
}

export default SignupForm;