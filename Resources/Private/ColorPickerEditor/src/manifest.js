import manifest from '@neos-project/neos-ui-extensibility';

import ColorPickerEditor from './ColorPickerEditor';

manifest('Neos.Neos.Ui.ExtensibilityExamples:ColorPickerEditor', {}, globalRegistry => {
    const editorsRegistry = globalRegistry.get('inspector').get('editors');

    editorsRegistry.set('Neos.Neos.Ui.ExtensibilityExamples/ColorPickerEditor', {
        component: ColorPickerEditor
    });
});
