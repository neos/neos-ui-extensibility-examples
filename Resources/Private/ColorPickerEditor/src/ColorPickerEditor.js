import React, {PropTypes, PureComponent} from 'react';
import { SketchPicker } from 'react-color';

import {TextInput} from '@neos-project/react-ui-components';

//import TextInput from '@neos-project/react-ui-components/lib/TextInput/';
//import unescape from 'lodash.unescape';
//import {neos} from '@neos-project/neos-ui-decorators';

@neos(globalRegistry => ({
    i18nRegistry: globalRegistry.get('i18n')
}))
export default class ColorPickerEditor extends PureComponent {

    static propTypes = {
        value: PropTypes.string,
        commit: PropTypes.func.isRequired,
        validationErrors: PropTypes.array,
        highlight: PropTypes.bool,
        options: PropTypes.object,

        i18nRegistry: PropTypes.object.isRequired
    };

    handleChangeColor = newColor => {
        this.props.commit(newColor.hex);
    };

    render() {
        const {value, commit, validationErrors, options, i18nRegistry, highlight} = this.props;

        // Placeholder text must be unescaped in case html entities were used
        const placeholder = "HI"; //options && options.placeholder && i18nRegistry.translate(unescape(options.placeholder));
        return (<div>
            <SketchPicker color={value} onChange={this.handleChangeColor}/>
            <TextInput value={value} onChange={this.props.commit}/>

        </div>);
    }
}
