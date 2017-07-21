System.register(['@angular/core', '@angular/common', '@angular/forms', '@angular/router', './rings.routes', './rings.component', './ringcreate/ringcreate.component', './ringall/ringall.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, forms_1, router_1, rings_routes_1, rings_component_1, ringcreate_component_1, ringall_component_1;
    var RingsModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (rings_routes_1_1) {
                rings_routes_1 = rings_routes_1_1;
            },
            function (rings_component_1_1) {
                rings_component_1 = rings_component_1_1;
            },
            function (ringcreate_component_1_1) {
                ringcreate_component_1 = ringcreate_component_1_1;
            },
            function (ringall_component_1_1) {
                ringall_component_1 = ringall_component_1_1;
            }],
        execute: function() {
            RingsModule = (function () {
                function RingsModule() {
                }
                RingsModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            common_1.CommonModule,
                            forms_1.FormsModule,
                            router_1.RouterModule.forChild(rings_routes_1.RingsRoutes),
                        ],
                        declarations: [
                            rings_component_1.RingsComponent,
                            ringcreate_component_1.RingCreateComponent,
                            ringall_component_1.RingallComponent,
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], RingsModule);
                return RingsModule;
            }());
            exports_1("RingsModule", RingsModule);
        }
    }
});
//# sourceMappingURL=rings.module.js.map