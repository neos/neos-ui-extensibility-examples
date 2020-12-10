import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {$get, $transform} from 'plow-js';
import {IconButton} from '@neos-project/react-ui-components';
import {neos} from '@neos-project/neos-ui-decorators';

import {executeCommand} from '@neos-project/neos-ui-ckeditor5-bindings';
import {connect} from 'react-redux';
import {actions} from '@neos-project/neos-ui-redux-store';

@connect($transform({
    fusionPath: $get('cr.nodes.focused.fusionPath')
}), {
    persistChanges: actions.Changes.persistChanges,
    commenceNodeCreation: actions.CR.Nodes.commenceCreation
})
@neos(globalRegistry => ({
    i18nRegistry: globalRegistry.get('i18n')
}))
export default class ModifyDataButton extends PureComponent {
    static propTypes = {
        i18nRegistry: PropTypes.object,
        tooltip: PropTypes.string
    };
    handleClick = () => {
        executeCommand('modifyData');
    };
    render() {
        const props = {
            onClick: this.handleClick,
            isActive: Boolean(this.props.isActive),
            title: this.props.i18nRegistry.translate(this.props.tooltip),
            icon: this.props.icon
        };
        return <IconButton {...props} />;
    }
}
