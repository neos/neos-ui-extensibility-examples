import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
export default class TextField extends PureComponent {

    static propTypes = {
        className: PropTypes.string,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        commit: PropTypes.func.isRequired,
        options: PropTypes.object,
        onKeyPress: PropTypes.func,
        onEnterKey: PropTypes.func,
        id: PropTypes.string,

        i18nRegistry: PropTypes.object.isRequired,
    };

    render() {
        // Placeholder text must be unescaped in case html entities were used
        const placeholder = "HI";
        return (<div>HALLO MY TEXT FIELDX {placeholder}</div>);
    }
}
