import React from 'react';
import PropTypes from 'prop-types';
import {Field} from 'redux-form';

export function renderField(field) {
    // Logic to render an input field
    const {meta} = field;
    const error = meta.touched && meta.error ? "error" : "";

    // Return a representation of an input field
    return (
        <div className={`${error} field`}>
            <div className="ui left icon input">
                <i className={`${field.icon} icon`}/>
                <input type={field.type}
                       name={field.name}
                       placeholder={field.placeholder}
                       {...field.input} />
            </div>
            <span className="errorText">
                {meta.touched ? meta.error : ""}
            </span>
        </div>
    );
}

const FormInput = ({type, name, placeholder, icon, required}) => {
    // Return an input field
    return (
        <Field
            type={type}
            placeholder={placeholder}
            name={name}
            required={required}
            icon={icon}
            component={renderField}/>
    );
};

// Validate propTypes
FormInput.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    required: PropTypes.string
};

export default FormInput;
