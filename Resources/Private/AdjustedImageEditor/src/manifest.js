import manifest from '@neos-project/neos-ui-extensibility';

import makeCustomImageEditor from './ImageEditor'

manifest('Neos.Neos.Ui.ExtensibilityExamples:AdjustedImageEditor', {}, globalRegistry => {
    const editorsRegistry = globalRegistry.get('inspector').get('editors');

    const standardImageEditorDefinition = editorsRegistry.get('Neos.Neos/Inspector/Editors/ImageEditor');

    editorsRegistry.set('Neos.Neos/Inspector/Editors/ImageEditor', {
        ...standardImageEditorDefinition,
        component: makeCustomImageEditor(standardImageEditorDefinition.component)
    });


});
