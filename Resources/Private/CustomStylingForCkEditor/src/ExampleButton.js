import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {IconButton} from '@neos-project/react-ui-components';
import {neos} from '@neos-project/neos-ui-decorators';

import {executeCommand} from '@neos-project/neos-ui-ckeditor5-bindings';

@neos(globalRegistry => ({
    i18nRegistry: globalRegistry.get('i18n')
}))
export default class ExampleButton extends PureComponent {
    static propTypes = {
        i18nRegistry: PropTypes.object,
        tooltip: PropTypes.string,
        isActive: PropTypes.boolean,
    };
    handleClick = () => {
        // this command name must match the identifier of the command from examplePlugin.js, this.editor.commands.add(...)
        executeCommand('highlightCommand');
    };
    render() {
        const props = {
            onClick: this.handleClick,
            isActive: Boolean(this.props.isActive),
            title: this.props.i18nRegistry.translate(this.props.tooltip),
            icon: this.props.icon,
        };
        return <IconButton {...props} />;
    }
}
