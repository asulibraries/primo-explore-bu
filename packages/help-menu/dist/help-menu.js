!function(e){var n={};function o(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=n,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)o.d(t,i,function(n){return e[n]}.bind(null,i));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o(o.s=0)}([function(e,n,o){e.exports=o(1)},function(e,n,o){"use strict";o.r(n);var t='\n  <md-button ng-hide="!entry" class="md-icon-button md-button md-primoExplore-theme md-ink-ripple" ng-click="back()">\n    <prm-icon icon-type="svg" svg-icon-set="navigation" icon-definition="ic_arrow_back_24px"\n              aria-label="return to help content list" ></prm-icon>\n  </md-button>\n  <h2><strong>Search Help</strong><span ng-hide="!entry"> - {{entry.title}}</span></h2>',i='\n  <div ng-if="entry" id="search-help-menu-content" tabindex="-1">\n    <br />\n    <p ng-if="!entry.template"><em>{{entry.description}}</em></p>\n    <div ng-bind-html="entry.template"></div>\n  </div>\n  <ul ng-hide="entry" style="list-style: none; width: 100%; padding-left: 0px;">\n    <hr aria-hidden="true" />\n    <li ng-repeat="item in helpContentList" class="row">\n      <a ng-if="item.id" ng-click="openItem(item.id)" href="#{{item.id}}">\n        <prm-icon svg-icon-set="{{item.icon.group}}" icon-definition="ic_{{item.icon.code}}_24px"\n                  icon-type="svg" style="padding-right: 10px;"></prm-icon>\n        {{item.title}}\n      </a>\n      <hr ng-if="!item.id" aria-hidden="true" />\n    </li>\n    <hr aria-hidden="true" />\n  </ul>',l='\n  <style>\n    help-menu-content-display { font-size: 140%; margin-bottom: 5px;}\n    #help-header { background-color: lightgrey; }\n    #help-content { padding: 0px 25px; }\n    #s-lch-widget-8959 { display: none; }\n    \n    prm-topbar { display: none; }\n    prm-search-bar { display: none; }\n    ui-view { display: none; }\n  </style>\n  <div id="help-header" class="md-toolbar-tools">'.concat(t,'</div>\n  <div id="help-content">').concat(i,"</div>"),r="primoExploreHelpMenuStudioConfig",a={logToConsole:!0,publishEvents:!0,helpMenuWidth:500,list_of_elements:[{id:"getting-started",title:"Getting Started",description:"brief static html content with an overview on how to use BULS; links to direct to main BULS help page in WordPress, other pages, and/or other sections of the menu",icon:{code:"description",group:"action"},template:"\n      <p>BU Libraries Search contains articles, books, journals, databases, films, music, dissertations, and other scholarly materials for your research</p>\n      <h2>Search Tips</h2>\n      <code>brief info about title or subject keyword searches</code>\n      <br /><br />\n      <h2>Filtering</h2>\n      <p>Use the filters to limit to one or more material types (books, articles)</p>\n      <p>Use Peer-Reviewed Articles to quickly limit to only these results...</p>\n    "},{id:"tutorials",title:"Tutorials",description:"at a minimum, links to individual videos and a playlist of existing BULS video tutorials (tbd if in Kaltura, WordPress, or youtube); if possible and desired, embed using Kaltura embed code",icon:{code:"shop_two",group:"action"}},{},{id:"whats-in-search",title:"What's in Search?",description:'brief description of material types, "scopes", and collections; may have submenus for each of the above; likely also link out to WordPress page with all PCI collections',icon:{code:"toc",group:"action"}},{id:"didnt-find",title:"Didn't find it?",description:"TBD info about ILL, scope of collections, and problem cases",icon:{code:"swap_horiz",group:"action"}},{},{id:"guides",title:"Guides",description:"info about research, subject, course, and how to guides; how to find in BULS by way of search and related more info links; link out to LibGuides home",icon:{code:"directions",group:"maps"}},{id:"glossary",title:"Glossary",description:"list of common terms (jargon) and definitions",icon:{code:"view_list",group:"action"}},{},{id:"query-builder",title:"Query Builder",description:"placeholder for this, tbd functionality for future development; interim step may just be to have text demonstrating adv query syntax",icon:{code:"find_in_page",group:"action"}},{},{id:"saving-results",title:"Saving Results",description:"information about My Favorites, exporting results, ref managers",icon:{code:"save",group:"content"}},{id:"citing-sources",title:"Citing Sources",description:"likely, but may depend on if including saving results; would have info about ref managers",icon:{code:"create",group:"content"}},{id:"account",title:"Account",description:"information about My Library Account functionality- loans, renewals, policies?; may also highlight or link to My Library Account",icon:{code:"account_box",group:"action"}},{},{id:"for-instructors",title:"For Instructors",description:'may be more "For" sections; will need considerable content work',icon:{code:"info",group:"action"}},{},{id:"ask-us",title:"Ask Us",description:"needs definition; how to point to chat? link to ask a librarian?",icon:{code:"forum",group:"communication"}},{id:"feedback",title:"Feedback",description:'directs to a new form to send feedback in the format of specific questions, e.g. "rate your experience", "did you find what you\'re looking for?", "send us your thoughts on improving search"; will want to clearly differentiate from Ask and reference help, so that patrons who need help soon can get it',icon:{code:"chat",group:"communication"}}],logMessage:function(e){this.logToConsole&&console.log("bulibHelpMenu) "+e)},logEventToAnalytics:function(e,n,o){!function(e,n,o){window.ga&&window.ga("send","event",e,n,o)}(e,n,o)},logHelpEvent:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location.pathname;this.logMessage("logging '".concat("help-menu","' event with action: '").concat(e,"', label:'").concat(n,"'. [publish: ").concat(this.publishEvents,"]")),this.publishEvents&&this.logEventToAnalytics("help-menu",e,n)},get_entry_by_id:function(e){for(var n=0;n<this.list_of_elements.length;n++)if(this.list_of_elements[n].id===e)return this.list_of_elements[n];return{}},override_with_config:function(e){e&&Object.keys(e)&&(e.logToConsole&&(this.logToConsole=e.logToConsole),e.publishEvents&&(this.publishEvents=e.publishEvents),e.helpMenuWidth&&(this.helpMenuWidth=e.helpMenuWidth),e.logEventToAnalytics&&(this.logEventToAnalytics=e.logEventToAnalytics),e.list_of_elements&&(this.list_of_elements=e.list_of_elements))}},s=function(e,n,o,t,i){var l={};n.has("helpMenuConfig")&&(l=n.get("helpMenuConfig")),n.has(r)&&(l=n.get(r)),e.override_with_config(l);var a=window.location.search;o.showHelpMenu=a.includes("page=help"),o.helpContentList=e.list_of_elements,o.hide=function(){i.hide()},o.back=function(){o.entry=null},o.openItem=function(n){o.entry=e.get_entry_by_id(n),e.logHelpEvent("select-item",n)},o.openHelpInNewWindow=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=window.location.pathname,i="width=".concat(e.helpMenuWidth,",height=800,resizable=0,location=0,menubar=0,scrollbars=yes"),l=window.location.pathname+window.location.search+"&page=help";n&&(l+="#"+n,t=n),e.logHelpEvent("open-window",t),open(l,"BULibraries Help Menu",i),o.hide()},t(function(){var e=window.top.location.hash.substring(1);e&&o.openItem(e)},10)};angular.module("helpMenuContentDisplay",[]).constant("helpMenuHelper",a).controller("helpMenuPopupController",["helpMenuHelper","$injector","$scope","$timeout","$mdDialog",s]).component("prmExploreMainAfter",{template:'\n      <help-menu-content-display>\n        <div ng-if="showHelpMenu">'.concat(l,"</div>\n      </help-menu-content-display>"),controller:"helpMenuPopupController"}),angular.module("helpMenuTopbar",["ngMaterial"]).constant("helpMenuHelper",a).controller("helpMenuDialogController",["helpMenuHelper","$injector","$scope","$timeout","$mdDialog",s]).controller("helpMenuTopbarController",["helpMenuHelper","$injector","$mdDialog",function(e,n,o){var l={};n.has("helpMenuConfig")&&(l=n.get("helpMenuConfig")),n.has(r)&&(l=n.get(r)),e.override_with_config(l),this.openHelpMenu=function(n){var l;e.logHelpEvent("open-dialog",window.location.pathname),o.show({controller:"helpMenuDialogController",template:(l=e.helpMenuWidth,'\n  <md-dialog id="search-help-dialog" aria-label="Search Help Menu Dialog"\n             style="width: '.concat(l,'px;">\n    <form>\n      <md-toolbar>\n        <div class="md-toolbar-tools">\n          ').concat(t,'\n          <span flex></span>\n          <md-button class="md-icon-button md-button md-primoExplore-theme md-ink-ripple" ng-click="hide()">\n            <prm-icon aria-label="Close dialog" icon-type="svg" svg-icon-set="navigation" icon-definition="ic_close_24px"></prm-icon>\n          </md-button>\n        </div>\n      </md-toolbar>\n      <md-dialog-content>\n        <div class="md-dialog-content">').concat(i,'</div>\n      </md-dialog-content>\n      <md-dialog-actions layout="row">\n        <md-button ng-click="openHelpInNewWindow(entry.id)">Open in New Window</md-button>\n      </md-dialog-actions>\n    </form>\n  </md-dialog>')),targetEvent:n,hasBackdrop:!0,multiple:!1,clickOutsideToClose:!0,fullscreen:!1,focusOnOpen:!0})}}]).component("prmSearchBookmarkFilterAfter",{template:'\n      <help-menu-topbar>\n        <div class="layout-align-center layout-row">\n          <a class="md-icon-button button-over-dark md-button md-primoExplore-theme md-ink-ripple"\n                    aria-label="Open Search Help Menu" ng-click="$ctrl.openHelpMenu($event)" \n                    href="#" title="open help menu">\n            <prm-icon icon-type="svg" svg-icon-set="action" icon-definition="ic_help_24px"></prm-icon>\n          </a>\n        </div>\n      </help-menu-topbar>',controller:"helpMenuTopbarController"})}]);