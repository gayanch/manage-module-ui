webpackJsonp([6],{"/ELO":function(t,i,e){"use strict";var s=e("vq1X"),n=e("7RqM");e.d(i,"a",function(){return o});var r=[{path:"",component:n.a}],o=s.a.forChild(r)},"182b":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("q58L"),n=e("Ye0x"),r=e("/ELO"),o=e("T2Au"),a=e("7RqM"),l=e("qjrn"),d=e("SbQH"),c=e("In3T"),p=e("WYiA");e.d(i,"WhitelistModule",function(){return m});var h=this&&this.__decorate||function(t,i,e,s){var n,r=arguments.length,o=r<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,i,e,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(i,e,o):n(i,e))||o);return r>3&&o&&Object.defineProperty(i,e,o),o},b=this&&this.__metadata||function(t,i){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,i)},m=function(){function t(){}return t=h([e.i(s.NgModule)({imports:[n.a,r.a,o.a,d.a,d.b,p.a.forRoot(),c.a.forRoot()],declarations:[a.a,l.a]}),b("design:paramtypes",[])],t)}()},"5B28":function(t,i){t.exports='<div class="animated fadeInUp row" style="animation-delay: 0.1s">\n\n    <div class="col-sm-12">\n        <div class="form-container whitelistInputContainer">\n\n            <div class="tbl-header">\n                APIwise Whitelist\n                <br>\n            </div>\n            <h4>Whitelist subscribers</h4>\n            <div class="searchFilter">\n                <div class="col-sm-4">\n                    <input [(ngModel)]="subscriber"\n                           [typeahead]="subscriberList"\n                           [typeaheadMinLength]="0"\n                           type="text"\n                           class="form-control"\n                           (typeaheadOnSelect)="onSubscriberSelected()"\n                           (input)="onSubscriberSelected()"\n                           placeholder="Select Subscriber">\n                </div>\n                <div class="col-sm-4">\n                    <input [(ngModel)]="app"\n                           [typeahead]="applications"\n                           typeaheadOptionField="name"\n                           [typeaheadMinLength]="0"\n                           type="text"\n                           class="form-control"\n                           (typeaheadOnSelect)="onAppSelected()"\n                           (input)="onAppSelected()"\n                           placeholder="Select Application">\n                </div>\n                <div class="col-sm-4">\n                    <input [(ngModel)]="api"\n                           [typeahead]="apiList"\n                           [typeaheadMinLength]="0"\n                           type="text"\n                           class="form-control"\n                           (typeaheadOnSelect)="onApiSelected()"\n                           (input)="onApiSelected()"\n                           placeholder="Select API">\n                </div>\n            </div>\n            <div><span class="error" *ngIf="isInvalidFieldError">{{invalidFieldError}}</span></div>\n            <br>\n            <form class="form-horizontal" #numberlistForm="ngForm" novalidate\n                  (ngSubmit)="onUploadNumber(numberlistForm)">\n                <div class="form-group">\n                    <label class="col-sm-2"></label>\n                    <label class="col-sm-4 subtitle">Numbers list configuration </label>\n                </div>\n                <div class="form-group">\n                    <label class="control-label col-sm-2">Number:</label>\n                    <div class="col-sm-6">\n                        <input class="form-control"\n                               autocomplete="off"\n                               #nameRef="ngModel"\n                               required\n                               [(ngModel)]="msisdn"\n                               type="text"\n                               name="manualNumber"\n                               placeholder="e.g.94777333100,94777333105 (Comma seperated entries)">&nbsp;\n                        <span class="error" *ngIf="ismsisdnError">{{msisdnError}}</span>\n                    </div>\n                    <div class="col-sm-3">\n                        <button type="submit" class="btn btn-primary animated fadeIn">\n                            Add\n                        </button>\n                    </div>\n                </div>\n            </form>\n\n            <br><br>\n            <app-whitelist-list\n                    [dataSource]="whitelistList"\n                    (onDeleteTask)="onDeleteHandler($event)"></app-whitelist-list>\n\n        </div>\n\n    </div>\n</div>\n\n'},"7RqM":function(t,i,e){"use strict";var s=e("q58L"),n=e("2uxL"),r=e("iv8n"),o=e("c+Bi");e.d(i,"a",function(){return d});var a=this&&this.__decorate||function(t,i,e,s){var n,r=arguments.length,o=r<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,i,e,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(i,e,o):n(i,e))||o);return r>3&&o&&Object.defineProperty(i,e,o),o},l=this&&this.__metadata||function(t,i){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,i)},d=function(){function t(t,i){this.blackListWhiteListService=t,this.message=i}return t.prototype.ngOnInit=function(){this.subscriberList=[],this.getSubscribersOfProvider(),this.apiList=[],this.applications=[],this.apis=[],this.subscriber="",this.app="",this.api="",this.msisdn="",this.msisdnMin=0,this.msisdnMax=0,this.msisdnError="",this.msisdnRangeError="",this.invalidFieldError="",this.ismsisdnError=!1,this.ismsisdnRangeError=!1,this.isInvalidFieldError=!1},t.prototype.getSubscribersOfProvider=function(){var t=this;this.blackListWhiteListService.getSubscribers(function(i){i.success?t.subscriberList=i.payload:t.message.error(i.message)})},t.prototype.getAppsofSubscriber=function(t){var i=this;this.blackListWhiteListService.getApps(t,function(t){if(t.success)for(var e=0,s=t.payload;e<s.length;e++){var n=s[e],o=n.split(":",2),a=new r.d;a.id=o[0],a.name=o[1],i.applications.push(a)}else i.message.error(t.message)})},t.prototype.getApis=function(t){var i=this;this.blackListWhiteListService.getApis(this.subscriber,t,function(t){if(t.success)for(var e=0,s=t.payload;e<s.length;e++){var n=s[e],o=n.split(":",4),a=new r.b;a.id=o[0],a.name=o[2],a.provider=o[1],a.version=o[3],i.apis.push(a),i.apiList.push(o[2]+" - "+o[3]+" Provided by "+o[1])}else i.message.error(t.message)})},t.prototype.getWhitelist=function(){for(var t=this,i="",e="",s=0,n=this.applications;s<n.length;s++){var r=n[s];r.name==this.app&&(i=r.id)}for(var o=0,a=this.apis;o<a.length;o++){var r=a[o];r.name==this.api.split("-")[0].trim()&&r.version==this.api.split("-")[1].split(" ")[1].trim()&&(e=r.id)}this.blackListWhiteListService.getWhitelist(this.subscriber,i,e,function(i){i.success?t.whitelistList=i.payload.Success.variables:(t.whitelistList=[],t.message.error(i.message))})},t.prototype.addNewToWhitelist=function(){var t=this;if(0!=this.msisdnList.length){for(var i="",e="",s=0,n=0,r=this.applications;n<r.length;n++){var o=r[n];o.name==this.app&&(e=o.id),s++}for(var a=this.api.split(" "),l=0,d=this.apis;l<d.length;l++){var o=d[l];o.name==a[0]&&(i=o.id)}0!=i.length&&0!=e.length&&this.blackListWhiteListService.validationService(this.msisdnList,function(s,n){s.success?s.payload.valid.length?t.blackListWhiteListService.addNewToWhitelist(e,i,s.payload.valid,s.payload.validationRegex,s.payload.prefixGroup,s.payload.digitsGroup,function(i){i.success?(s.payload.invalid.length&&t.message.longError("Below Numbers does not match with defined Regex "+s.payload.invalid),t.message.success(i.message),t.msisdn="",t.msisdnMin=0,t.msisdnMax=0,t.getWhitelist()):t.message.error(i.message)}):t.message.longError("Number does not match with defined Regex "+s.payload.invalid):t.message.error(s.message)})}else this.msisdnError="Something Went Wrong",this.ismsisdnError=!0},t.prototype.onDeleteHandler=function(t){t&&this.getWhitelist()},t.prototype.onSubscriberSelected=function(){this.app="",this.api="",this.applications=[],this.apiList=[],this.whitelistList=[];var t=!0;this.isInvalidFieldError=!1;for(var i=0,e=this.subscriberList;i<e.length;i++){e[i]==this.subscriber&&(this.getAppsofSubscriber(this.subscriber),t=!1)}t&&(this.isInvalidFieldError=!0,this.invalidFieldError="Invalid subscriber")},t.prototype.onAppSelected=function(){this.api="",this.apiList=[],this.whitelistList=[];var t="",i=!0;this.isInvalidFieldError=!1;for(var e=0,s=this.applications;e<s.length;e++){var n=s[e];n.name==this.app&&(i=!1,t=n.id)}i?(this.isInvalidFieldError=!0,this.invalidFieldError="Invalid Application"):this.getApis(t)},t.prototype.onApiSelected=function(){this.whitelistList=[];var t=!0;this.isInvalidFieldError=!1;for(var i=0,e=this.apiList;i<e.length;i++){e[i]==this.api&&(t=!1)}t?(this.isInvalidFieldError=!0,this.invalidFieldError="Invalid Api Name"):this.getWhitelist()},t.prototype.onUploadNumber=function(t){if(this.msisdnError="",this.invalidFieldError="",this.ismsisdnError=!1,this.isInvalidFieldError=!1,0!=this.subscriber.length&&0!=this.app.length&&0!=this.api.length&&this.isValidInputs())if(this.ismsisdnError=!1,this.msisdnList=[],this.isValid(this.msisdn)){for(var i=this.msisdn.split(","),e=0,s=0,n=i;s<n.length;s++){var r=n[s];this.msisdnList[e]=r,e++}this.addNewToWhitelist()}else 0==this.msisdn.length?(this.msisdnError="Empty List",this.ismsisdnError=!0):(this.msisdnError="Wrong input please enter Comma separated valid mobile numbers ",this.ismsisdnError=!0);else this.msisdnError="Select valid Subscriber, Application and API first",this.ismsisdnError=!0},t.prototype.isValidInputs=function(){for(var t=!1,i=!1,e=!1,s=0,n=this.subscriberList;s<n.length;s++){var r=n[s];this.subscriber==r&&(t=!0)}for(var o=0,a=this.applications;o<a.length;o++){var r=a[o];this.app==r.name&&(i=!0)}for(var l=0,d=this.apiList;l<d.length;l++){var r=d[l];this.api==r&&(e=!0)}return e||(this.isInvalidFieldError=!0,this.invalidFieldError="Invalid Api Name"),i||(this.isInvalidFieldError=!0,this.invalidFieldError="Invalid Application Name"),t||(this.isInvalidFieldError=!0,this.invalidFieldError="Invalid Subscriber Name"),i&&t&&e},t.prototype.onUploadNumberRange=function(t){if(this.msisdnRangeError="",this.ismsisdnRangeError=!1,0!=this.subscriber.length&&0!=this.app.length&&0!=this.api.length&&this.isValidInputs())if(this.isValidMobileNumber(this.msisdnMin.toString())&&this.isValidMobileNumber(this.msisdnMax.toString())){var i=this.msisdnMax-this.msisdnMin;if(i>0)if(0!=this.subscriber.length&&0!=this.app.length&&0!=this.api.length){this.msisdnList=[];for(var e=0;e<=i;e++){var s=Number(this.msisdnMin)+Number(e);this.msisdnList[e]="tel3A+"+s}this.addNewToWhitelist()}else this.msisdnRangeError="Select the relevant Subscriber, Application and API first",this.ismsisdnRangeError=!0;else this.msisdnRangeError="Set minimum and maximum values in input boxes respectively",this.ismsisdnRangeError=!0}else this.msisdnRangeError="The Entered Mobile Numbers are not valid mobile numbers",this.ismsisdnRangeError=!0;else this.msisdnRangeError="Select valid Subscriber, Application and API first",this.ismsisdnRangeError=!0},t.prototype.isValid=function(t){var i=/[^,]+/;return!!new RegExp(i).test(t)},t.prototype.isValidMobileNumber=function(t){var i=/^((((tel:\+)(\\+){0,1})|((\+){1})|(\d))([0-9]+))$/;return!!new RegExp(i).test(t)},t=a([e.i(s.Component)({selector:"app-whitelist-main",template:e("5B28"),styles:[e("8r1R")]}),l("design:paramtypes",["function"==typeof(i=void 0!==n.a&&n.a)&&i||Object,"function"==typeof(d=void 0!==o.a&&o.a)&&d||Object])],t);var i,d}()},"8r1R":function(t,i,e){i=t.exports=e("rP7Y")(!1),i.push([t.i,":host{display:block;margin-top:20px}.content-div{background-color:#fff}.searchFilter div[class^=col-]{padding-bottom:10px}.error{font-size:.9em;color:#f96565}.whitelistInputContainer{min-height:100px;padding:10px;background-color:#fff;border:1px solid #f5f5f5}.searchFilter{min-height:78px;padding:19px;margin-bottom:20px;background-color:#e19131;border:1px solid #e3e3e3;border-radius:4px;box-shadow:inset 0 1px 1px rgba(0,0,0,.05)}.open{overflow:visible;z-index:100000}.subtitle{color:#e19132}.info-tooltip{font-size:1.5em;color:#8e44ad;vertical-align:top;margin-top:.3em;cursor:pointer}.tbl-header{margin-top:10px;font-weight:600;font-size:1.3em;padding:5px 0 15px;color:#e19131;text-transform:uppercase}",""]),t.exports=t.exports.toString()},juoc:function(t,i,e){i=t.exports=e("rP7Y")(!1),i.push([t.i,".whitelist{float:left;overflow-y:scroll;height:200px;width:500px}.table{display:table;width:100%}.table .tbl-row{display:table-row;background-color:#f6f6f6;height:0;transition:all .5s ease-in}.table .tbl-row:nth-of-type(odd){background-color:#fff}.table .tbl-row.header{background-color:#78a;font-weight:600;color:#fff}.table .tbl-row .tbl-cell{display:table-cell;padding:10px 10px}.table .tbl-row.modified{background-color:#ffc}.table .tbl-row.open{height:158px;background-color:#f4f2c9}.table .tbl-row.open .action{border-color:#000;color:#000}.table .tbl-row.open.A,.table .tbl-row.open.R{height:243px}.table .tbl-row .more-con{padding:10px 0 10px 0;background-color:#f8f9fa;position:absolute;left:10px;right:11px;height:105px;margin-top:53px;border:1px solid #d0d0d0;-ms-box-shadow:inset 0 10px 10px -9px #d1d1d1;box-shadow:inset 0 10px 10px -9px #d1d1d1}.table .tbl-row .more-con.A,.table .tbl-row .more-con.R{height:190px}.table .tbl-row .more-con .more-row{margin-bottom:2px}.table .tbl-row .more-con .field-name{height:40px;background-color:#f1f3f5;line-height:40px;text-align:right;font-weight:600}.table .tbl-row .more-con .field-value{height:40px;background-color:#fff;line-height:40px}.table .tbl-row .more-con input,.table .tbl-row .more-con select{margin-top:2px}.table .tbl-row .more-con .btn{margin-top:10px;padding-top:5px!important;padding-bottom:5px!important}.table .no-rec-row{position:relative}.table .no-rec-row .no-rec{position:absolute;left:0;right:0;margin:auto;width:100px;padding-top:15px;color:#8a98a0}.table .fromcolor{color:#107124}.table .tocolor{color:#bb3535}h3{text-transform:uppercase}.subtitle{color:#e19132}.scrollit{overflow-y:auto;height:400px}",""]),t.exports=t.exports.toString()},pTRX:function(t,i){t.exports='<div class="section">\n    <div class="container">\n        <div class="row">\n            <div class="col-md-6 col-md-offset-1">\n                <div class="tbl-header">\n                    <label class="subtitle">Whitelisted subscribers</label>\n\n                </div>\n                <br>\n                <div class="scrollit">\n                    <div class="table">\n\n                        <div class="tbl-row header">\n                            <div class="tbl-cell">MSISDN</div>\n                            <div class="tbl-cell text-right pad-r-15-im">Action</div>\n                        </div>\n\n                        <ng-container *ngFor="let item of dataSource">\n                            <div class="tbl-row">\n                                <div class="tbl-cell">{{item.replace(\'tel3A+\',\'\')}}</div>\n                                <div class="tbl-cell text-right">\n                                    <button class="btn btn-danger" (click)="onDelete(item)"><i\n                                            class="material-icons">delete</i>\n                                    </button>\n                                </div>\n                            </div>\n                        </ng-container>\n\n                        <div class="no-rec-row tbl-row" *ngIf="dataSource == undefined">\n                            <span class="no-rec">No Records..</span>\n                        </div>\n                    </div>\n                </div> \x3c!--TABLE END--\x3e\n\n                <br><br>\n            </div>\n        </div>\n    </div>\n</div>\n\n'},qjrn:function(t,i,e){"use strict";var s=e("q58L"),n=e("2uxL"),r=e("c+Bi");e.d(i,"a",function(){return l});var o=this&&this.__decorate||function(t,i,e,s){var n,r=arguments.length,o=r<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,i,e,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(i,e,o):n(i,e))||o);return r>3&&o&&Object.defineProperty(i,e,o),o},a=this&&this.__metadata||function(t,i){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,i)},l=function(){function t(t,i){this.blackListWhiteListService=t,this.message=i,this.onDeleteTask=new s.EventEmitter}return t.prototype.ngOnInit=function(){},t.prototype.onDelete=function(t){var i=this;0!=t.length&&this.blackListWhiteListService.removeFromWhiteList(t,function(t){t.success?(i.onDeleteTask.emit(!0),i.message.success(t.message)):i.message.error(t.message)})},o([e.i(s.Input)(),a("design:type",Array)],t.prototype,"dataSource",void 0),o([e.i(s.Output)(),a("design:type","function"==typeof(i=void 0!==s.EventEmitter&&s.EventEmitter)&&i||Object)],t.prototype,"onDeleteTask",void 0),t=o([e.i(s.Component)({selector:"app-whitelist-list",template:e("pTRX"),styles:[e("juoc")]}),a("design:paramtypes",["function"==typeof(l=void 0!==n.a&&n.a)&&l||Object,"function"==typeof(d=void 0!==r.a&&r.a)&&d||Object])],t);var i,l,d}()}});