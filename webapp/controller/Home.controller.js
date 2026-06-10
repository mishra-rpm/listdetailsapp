sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "./BaseController"
], (Controller,BaseController) => {
    "use strict";

    return BaseController.extend("listdetailsapp.controller.Home", {
        onInit() {
        },
        onSelect:function(oEvent){
            let sCarrid= oEvent.getParameter("listItem").getProperty("intro");
            this.getOwnerComponent().getRouter().navTo("RouteHomeDetails",{carrid:sCarrid},true);
        }
    });
});