webpackJsonp([1],{898:function(e,n,t){"use strict";var o=t(0),i=t(112),r=t(65),u=t(50),d=t(902),a=function(){function e(){}return e}();a=__decorate([o.NgModule({imports:[r.CommonModule,i.FormsModule,d.AdminRoutingModule,u.SharedModule],declarations:[d.AdminComponent]}),__metadata("design:paramtypes",[])],a),n.AdminModule=a},902:function(e,n,t){"use strict";function o(e){for(var t in e)n.hasOwnProperty(t)||(n[t]=e[t])}o(t(910)),o(t(911))},910:function(e,n,t){"use strict";var o=t(0),i=t(50),r=function(){function e(e){this.userService=e,this.pieChartType="pie"}return e}();r=__decorate([o.Component({template:"\n    <div>\n      <h1>404: page missing</h1>\n    </div>\n  "}),__metadata("design:paramtypes",["function"==typeof(u="undefined"!=typeof i.UserService&&i.UserService)&&u||Object])],r),n.AdminComponent=r;var u},911:function(e,n,t){"use strict";var o=t(63),i=t(902);n.AdminRoutes=[{path:"",component:i.AdminComponent}],n.AdminRoutingModule=o.RouterModule.forChild(n.AdminRoutes)}});