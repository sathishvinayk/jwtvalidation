System.register(['./rings.component', './ringcreate/ringcreate.component', './ringall/ringall.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var rings_component_1, ringcreate_component_1, ringall_component_1;
    var RingsRoutes;
    return {
        setters:[
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
            exports_1("RingsRoutes", RingsRoutes = [{
                    path: 'rings',
                    component: rings_component_1.RingsComponent,
                    children: [
                        { path: '', component: ringall_component_1.RingallComponent },
                        { path: 'ringcreate', component: ringcreate_component_1.RingCreateComponent }
                    ],
                }]);
        }
    }
});
//# sourceMappingURL=rings.routes.js.map