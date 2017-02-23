import manifest from '@neos-project/neos-ui-extensibility';

import CustomTextField from './CustomTextField';

manifest('Neos.Neos.Ui.ExtensibilityExamples:CustomEditor', {}, globalRegistry => {
    const editorsRegistry = globalRegistry.get('inspector').get('editors');

    editorsRegistry.add('Neos.Neos/Inspector/Editors/TextFieldEditor', {
        component: CustomTextField
    });
});