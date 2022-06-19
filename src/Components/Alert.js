import React from 'react';

const propTypes = {};

const defaultProps = {};

const Alert = (props) => {
    return (
          <div style={{height:"40px"}}>
           { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show text-center`} role="alert"><strong>{props.alert.msg}</strong>
            </div>}
          </div>
    )
}

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

export default Alert;