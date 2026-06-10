sap.ui.define([
"sap/ui/core/mvc/Controller",
"sap/ui/core/routing/History",
"sap/ui/core/UIComponent"
],function(Controller,History,UIComponent){
   "use Strict"; 
   return Controller.extend("listdetailsapp.controller.BaseController",{

     getRouter:function(){
        return UIComponent.getRouterFor(this);
     }
   });
});