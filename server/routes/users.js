import express from 'express';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

let router = express.Router();

function validateInput(data) {
	let errors = {};

	if (typeof data != String || Validator.isNull(data.username)) {
		errors.username = 'This field is required';
	}
	
	if (typeof data != String || Validator.isEmail(data.email)) {
		errors.email = 'Email is invalid';
	}

	if (typeof data != String || Validator.isNull(data.password)) {
		errors.password = 'This field is required';
	}

	if (typeof data != String || Validator.isNull(data.confirmPassword)) {
		errors.confirmPassword = 'This field is required';
	}

	return {
		errors,
		isValid: isEmpty(errors)
	}

}

router.post('/', (req, res) => {
 	const { errors, isValid} = validateInput(req.body);

 	if (!isValid) {
 		res.status(400).json(errors);
 	}

});

export default router;