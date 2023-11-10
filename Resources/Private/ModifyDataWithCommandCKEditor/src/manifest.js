import manifest from '@neos-project/neos-ui-extensibility';
import {$add, $get} from 'plow-js';
import ModifyDataPlugin from './modifyDataPlugin';
import ModifyDataButton from './ModifyDataButton';

const addPlugin = (Plugin, isEnabled) => (ckEditorConfiguration, options) => {
    // we duplicate editorOptions here so it would be possible to write smth like `$get('formatting.sup')`
    if (!isEnabled || isEnabled(options.editorOptions, options)) {
        ckEditorConfiguration.plugins = ckEditorConfiguration.plugins || [];
        return $add('plugins', Plugin, ckEditorConfiguration);
    }
    return ckEditorConfiguration;
};

manifest('Neos.Neos.Ui.ExtensibilityExamples:ModifyDataWithCommandCKEditor', {}, globalRegistry => {
    const richtextToolbar = globalRegistry.get('ckEditor5').get('richtextToolbar');

    richtextToolbar.set('modifyDataPlugin', {
        commandName: 'modifyDataCommand',
        isActive: $get('highlightCommand'),
        isVisible: $get(['formatting', 'Neos.Neos.Ui.ExtensibilityExamples:modifyDataCommand']),
        component: ModifyDataButton,
        icon: 'search-plus',
        tooltip: 'Create an example command',
    }, 'before strong');

    const config = globalRegistry.get('ckEditor5').get('config');
    config.set('modifyDataPlugin', addPlugin(ModifyDataPlugin));
});
