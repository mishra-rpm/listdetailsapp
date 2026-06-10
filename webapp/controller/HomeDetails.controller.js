sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "./BaseController"
], (Controller,BaseController) => {
    "use strict";

    return BaseController.extend("listdetailsapp.controller.HomeDetails", {
        onInit() {
            this.getRouter().getRoute("RouteHomeDetails").attachMatched(this._ObjectMatched,this);
        },
        _ObjectMatched(oEvent){
            let sArgs = oEvent.getParameter("arguments").carrid;
            let oBusyIndicator =sap.ui.core.BusyIndicator;
            this.getView().getModel("appSettings").setProperty("/layout","TwoColumnsMidExpanded")
            this.getView().bindElement({
                path:"/UX_C_Carrier_TP('"+sArgs+"')",
                events:{
                    dataRequested:()=>{oBusyIndicator.show();},
                    dataReceived:()=>{oBusyIndicator.hide();}
                }
            
            
            
            })
        }
    });
});