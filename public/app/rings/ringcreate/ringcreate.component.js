System.register(['@angular/core', '@angular/router', '../rings.service'], function(exports_1, context_1) {
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
    var core_1, router_1, rings_service_1;
    var RingCreateComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (rings_service_1_1) {
                rings_service_1 = rings_service_1_1;
            }],
        execute: function() {
            RingCreateComponent = (function () {
                function RingCreateComponent(_router, _ringsService) {
                    this._router = _router;
                    this._ringsService = _ringsService;
                    this.article = {};
                }
                RingCreateComponent.prototype.create = function () {
                    var _this = this;
                    this._ringsService.create(this.article).subscribe(function (createdArticle) { return _this._router.navigate(['/rings']); }, function (error) { return _this.errorMessage = error; });
                };
                RingCreateComponent = __decorate([
                    core_1.Component({
                        selector: 'ringcreate',
                        templateUrl: 'app/rings/ringcreate/ringcreate.component.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, rings_service_1.RingsService])
                ], RingCreateComponent);
                return RingCreateComponent;
            }());
            exports_1("RingCreateComponent", RingCreateComponent);
        }
    }
});
//# sourceMappingURL=ringcreate.component.js.map