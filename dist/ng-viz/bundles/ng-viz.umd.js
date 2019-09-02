(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('d3')) :
    typeof define === 'function' && define.amd ? define('ng-viz', ['exports', '@angular/core', 'd3'], factory) :
    (global = global || self, factory(global['ng-viz'] = {}, global.ng.core, global.d3));
}(this, function (exports, core, d3) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgVizService = /** @class */ (function () {
        function NgVizService() {
        }
        NgVizService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        NgVizService.ctorParameters = function () { return []; };
        /** @nocollapse */ NgVizService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function NgVizService_Factory() { return new NgVizService(); }, token: NgVizService, providedIn: "root" });
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
            { type: core.Component, args: [{
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
            console.log("test ng viz lib");
            console.log(d3.max([1, 2, 3]));
        };
        NgVizBarChartComponent.decorators = [
            { type: core.Component, args: [{
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
            { type: core.NgModule, args: [{
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

    exports.NgVizBarChartComponent = NgVizBarChartComponent;
    exports.NgVizComponent = NgVizComponent;
    exports.NgVizModule = NgVizModule;
    exports.NgVizService = NgVizService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ng-viz.umd.js.map
