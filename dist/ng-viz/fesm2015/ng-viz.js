import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';
import { max } from 'd3';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgVizService {
    constructor() { }
}
NgVizService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgVizService.ctorParameters = () => [];
/** @nocollapse */ NgVizService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NgVizService_Factory() { return new NgVizService(); }, token: NgVizService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgVizComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
NgVizComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-ng-viz',
                template: `
    <p>
      ng-viz works!
    </p>
  `
            }] }
];
/** @nocollapse */
NgVizComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgVizBarChartComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
        console.log(max([1, 2, 3]));
    }
}
NgVizBarChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-viz-bar',
                template: "<h3>\n    Bar chart works\n</h3>",
                styles: [""]
            }] }
];
/** @nocollapse */
NgVizBarChartComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgVizModule {
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
