import manifest from '@neos-project/neos-ui-extensibility';
import {IconButton} from '@neos-project/react-ui-components';

manifest('main', {}, globalRegistry => {
    const ckEditorRegistry = globalRegistry.get('ckEditor');

    const richtextToolbar = ckEditorRegistry.get('richtextToolbar');

    richtextToolbar.set('Neos.Neos.Ui.ExtensibilityExamples:MyCustomButton1', {
        formattingRule: 'Neos.Neos.Ui.ExtensibilityExamples:MyCustomSpan',
        component: IconButton,
        callbackPropName: 'onClick',

        icon: 'facebook',
        hoverStyle: 'brand'
    });

    const formattingRules = ckEditorRegistry.get('formattingRules');

   formattingRules.set('Neos.Neos.Ui.ExtensibilityExamples:MyCustomSpan', {
       style: {element: 'span', attributes: {style: 'background-color: red'}},
       config: formattingRules.config.addToExtraAllowedContent('span[style]')
    });

});
