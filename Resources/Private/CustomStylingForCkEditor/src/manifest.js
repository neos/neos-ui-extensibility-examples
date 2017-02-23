import manifest from '@neos-project/neos-ui-extensibility';

manifest('main', {}, globalRegistry => {
   console.log('ADDDING TO MANIFEST', globalRegistry);
});