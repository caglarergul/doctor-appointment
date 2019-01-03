import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Icon} from 'semantic-ui-react';
class DateTimeButton extends Component {
    render() {
        return (
            <Button icon labelPosition='left'
                color={'teal'}
                onClick={this.props.onClick}>
                <Icon name='calendar' />
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
