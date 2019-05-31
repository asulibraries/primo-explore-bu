// import npm package by name (recommended)
import 'primo-explore-unpaywall';

// import copy/pasted 'unpaywall.module.js' locally from js/
// import './unpaywall.module';

//load app 'viewCustom' as a module with [] dependencies
var app = angular.module('viewCustom', ['angularLoad', 'bulibUnpaywall']);

// - configure unpaywall - //
app.component('prmSearchResultAvailabilityLineAfter', {
    template: '<bulib-unpaywall></bulib-unpaywall>'
  })
  .constant('unpaywallConfig', {
    "email":"<your_username>@<your_institution>.edu",
    "showOnResultsPage":true,
    "showVersionLabel":true,
    "logToConsole":true,
    "showDebugTable":false,
    "publishEvents":false,
    "logEvent":function(category, action, label){
      window.ga('send', 'event', category, action, label);
    }
  });
