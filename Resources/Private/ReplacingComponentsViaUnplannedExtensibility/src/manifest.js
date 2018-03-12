import manifest from '@neos-project/neos-ui-extensibility';

import makeAdjustedSidebar from './AdjustedSidebar';

manifest('Neos.Neos.Ui.ExtensibilityExamples:ReplacingComponentsViaUnplannedExtensibility', {}, globalRegistry => {
    const containerRegistry = globalRegistry.get('containers');

    const OriginalLeftSideBar = containerRegistry.get('LeftSideBar')

    containerRegistry.set('LeftSideBar', makeAdjustedSidebar(OriginalLeftSideBar));

});
