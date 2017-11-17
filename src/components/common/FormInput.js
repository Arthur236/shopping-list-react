import React, { PropTypes } from 'react';
import { Field } from 'redux-form';

function renderField(field) {
    const { meta } = field;

    return(
        <div className="input-field col s12">
            <input type={ field.type }
                   required={ field.required }
                   { ...field.input } />
            <label htmlFor={ field.name }>
                { field.label }
            </label>
            <span className="errorText">
                { meta.touched ? meta.error : "" }
            </span>
        </div>
    );
}

const FormInput = ({type, name, label, required}) => {
    return (
        <Field
            type={type}
            label={label}
            name={name}
            required={required}
            component={renderField}/>
    );
};

export default FormInput;
