import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';
import { max } from 'd3';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgVizService = /** @class */ (function () {
    function NgVizService() {
    }
    NgVizService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgVizService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgVizService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NgVizService_Factory() { return new NgVizService(); }, token: NgVizService, providedIn: "root" });
    return NgVizService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgVizComponent = /** @class */ (function () {
    function NgVizComponent() {
    }
    /**
     * @return {?}
     */
    NgVizComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    NgVizComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-ng-viz',
                    template: "\n    <p>\n      ng-viz works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    NgVizComponent.ctorParameters = function () { return []; };
    return NgVizComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgVizBarChartComponent = /** @class */ (function () {
    function NgVizBarChartComponent() {
    }
    /**
     * @return {?}
     */
    NgVizBarChartComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        console.log("test");
        console.log(max([1, 2, 3]));
    };
    NgVizBarChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-viz-bar',
                    template: "<h3>\n    Bar chart works\n</h3>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    NgVizBarChartComponent.ctorParameters = function () { return []; };
    return NgVizBarChartComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgVizModule = /** @class */ (function () {
    function NgVizModule() {
    }
    NgVizModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        NgVizComponent,
                        NgVizBarChartComponent
                    ],
                    imports: [],
                    exports: [
                        NgVizComponent,
                        NgVizBarChartComponent
                    ]
                },] }
    ];
    return NgVizModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgVizBarChartComponent, NgVizComponent, NgVizModule, NgVizService };
//# sourceMappingURL=ng-viz.js.map
