import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {TextInput} from '@neos-project/react-ui-components';
import {neos} from '@neos-project/neos-ui-decorators';
import I18n from '@neos-project/neos-ui-i18n';


export default function makeCustomImageEditor(DefaultImageEditor) {
    return class MyImageEditor extends PureComponent {

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
            const {value, commit, options, i18nRegistry, highlight} = this.props;

            return (<div>
                <DefaultImageEditor {...this.props} />
                <b>Something below</b>
            </div>);
        }
    }

}
