import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button} from 'semantic-ui-react';
class DateTimeButton extends Component {
    render() {
        return (
            <Button
                secondary
                onClick={this.props.onClick}>
                {this.props.value}
            </Button>
        );
    }
}
DateTimeButton.propTypes = {
    onClick: PropTypes.func,
    value: PropTypes.string
};
export default DateTimeButton;
