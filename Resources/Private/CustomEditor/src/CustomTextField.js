import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
// import {TextInput} from '@neos-project/react-ui-components';

//import TextInput from '@neos-project/react-ui-components/lib/TextInput/';
//import unescape from 'lodash.unescape';
//import {neos} from '@neos-project/neos-ui-decorators';

//@neos(globalRegistry => ({
//    i18nRegistry: globalRegistry.get('@neos-project/neos-ui-i18n')
//}))
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
        const placeholder = "HI"; //options && options.placeholder && i18nRegistry.translate(unescape(options.placeholder));
        return (<div>HALLO MY TEXT FIELDX {placeholder}</div>);
    }
}
