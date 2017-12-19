export default function validate(values) {
    const errors = {};
    const mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    // Validate inputs from 'values' object
    if (!values.username) {
        errors.username = "Enter a username";
    }
    if (!values.email) {
        errors.email = "Enter an email";
    }
    if (!values.password) {
        errors.password = "Enter a password";
    }
    if (!values.c_password) {
        errors.c_password = "Confirm your password";
    }
    if (values.password) {
        if (values.password.length < 6) {
            errors.password = "Password should be at least 6 characters";
        }
    }
    if (values.password && values.c_password) {
        if (values.password !== values.c_password) {
            errors.password = "Passwords do not match";
            errors.c_password = "Passwords do not match";
        }
    }
    if (!mailFormat.test(values.email)) {
        errors.email = "Email is not valid";
    }
    if (!values.name) {
        errors.name = "Enter a name";
    }
    if (values.quantity < 0) {
        errors.quantity = "Quantity must be a positive number";
    }
    if (values.unit_price < 0) {
        errors.unit_price = "Unit Price must be a positive number";
    }

    // If errors is empty, the form can be submitted
    // If errors  has any properties, redux-form assumes form is invalid
    return errors;
}
