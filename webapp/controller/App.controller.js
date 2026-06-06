sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel"
], (BaseController,JSONModel) => {
  "use strict";

  return BaseController.extend("listdetailsapp.controller.App", {
      onInit() {
        let oAppSettingsModel= new JSONModel({
          layout:"OneColumn"
        });
        this.getView().setModel(oAppSettingsModel,"appSettings");
      }
  });
});