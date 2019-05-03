import manifest from '@neos-project/neos-ui-extensibility';
import {$add, $get} from 'plow-js';
import ExamplePlugin from './examplePlugin';
import ExampleButton from './ExampleButton';

const addPlugin = (Plugin, isEnabled) => (ckEditorConfiguration, options) => {
    // we duplicate editorOptions here so it would be possible to write smth like `$get('formatting.sup')`
    if (!isEnabled || isEnabled(options.editorOptions, options)) {
        ckEditorConfiguration.plugins = ckEditorConfiguration.plugins || [];
        return $add('plugins', Plugin, ckEditorConfiguration);
    }
    return ckEditorConfiguration;
};

manifest('Neos.Neos.Ui.ExtensibilityExamples:CustomStylingForCkEditor', {}, globalRegistry => {
    const richtextToolbar = globalRegistry.get('ckEditor5').get('richtextToolbar');

    richtextToolbar.set('exampleExtension', {
        commandName: 'exampleCommand',
        component: ExampleButton,
        icon: 'plus-square',
        tooltip: 'Create an example command',
        isVisible: $get('formatting.examplePlugin'),
    }, 'before strong');

    const config = globalRegistry.get('ckEditor5').get('config');
    config.set('exampleExtension', addPlugin(ExamplePlugin));
});
