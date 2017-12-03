import React from 'react';
import { Field } from 'redux-form';

function renderField(field) {
    const { meta } = field;
    const error = meta.touched && meta.error ? "error" : "";

    return(
        <div className={`${error} field`}>
            <div className="ui left icon input">
                <i className={`${field.icon} icon`} />
                <input type={ field.type }
                       name={ field.name }
                       placeholder={ field.placeholder }
                       { ...field.input } />
            </div>
            <span className="errorText">
                { meta.touched ? meta.error : "" }
            </span>
        </div>
    );
}

const FormInput = ({type, name, placeholder, icon, required}) => {
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

export default FormInput;
