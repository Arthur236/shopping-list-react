import React, {PropTypes} from 'react';

const PasswordInput = ({name, label, onChange, required, value, error}) => {
    return(
        <div className="input-field col s12">
            <label htmlFor={name}>{label}</label>
            <input
                type="password"
                name={name}
                required={required}
                minLength="6"
                value={value}
                onChange={onChange} />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
};

PasswordInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.string.isRequired,
    value: PropTypes.string,
    error: PropTypes.string
};

export default PasswordInput;