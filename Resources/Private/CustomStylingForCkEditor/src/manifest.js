import manifest from '@neos-project/neos-ui-extensibility';
import {$add, $get} from 'plow-js';
import ExamplePlugin from './examplePlugin';
import ExampleButton from './ExampleButton';

// addExamplePlugin gets passed two parameters:
// - `ckEditorConfiguration` contains the so-far built CKEditor configuration.
// - `options` is an object with the following fields:
//   - `editorOptions`: gets `[propertyName].ui.inline.editorOptions` from the NodeTypes.yaml
//   - `userPreferences`: `user.preferences` from redux store
//   - `globalRegistry`: the global registry
//   - `propertyDomNode`: the DOM node where the editor should be initialized.
//
// it needs to return the updated ckEditorConfiguration.
const addExamplePlugin = (ckEditorConfiguration, options) => {
    if ($get(['formatting', 'Neos.Neos.Ui.ExtensibilityExamples:MyCustomSpan'], options.editorOptions)) {
        ckEditorConfiguration.plugins = ckEditorConfiguration.plugins || [];
        return $add('plugins', ExamplePlugin, ckEditorConfiguration);
    }
    return ckEditorConfiguration;
};

manifest('Neos.Neos.Ui.ExtensibilityExamples:CustomStylingForCkEditor', {}, globalRegistry => {
    const richtextToolbar = globalRegistry.get('ckEditor5').get('richtextToolbar');

    richtextToolbar.set('exampleExtension', {
        // the command name must match the command in examplePlugin.js this.editor.commands.add(...)
        commandName: 'highlightCommand',
        // the path in isActive must match the commandName from the line above, to ensure the active state
        // of the button automatically toggles.
        isActive: $get('highlightCommand'),
        isVisible: $get(['formatting', 'Neos.Neos.Ui.ExtensibilityExamples:MyCustomSpan']),

        component: ExampleButton,
        icon: 'plus-square',
        tooltip: 'Mark a span',
    }, 'before strong');

    const config = globalRegistry.get('ckEditor5').get('config');
    config.set('exampleExtension', addExamplePlugin);
});
