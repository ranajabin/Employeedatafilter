sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, FilterOperator) {
        "use strict";

        return Controller.extend("employee1.employeedatafilterproject.controller.View1", {
            onInit: function () {
                var oModel = new sap.ui.model.json.JSONModel("../model/Employee.json");
                this.getView().setModel(oModel, "Table1");
            },

            onFilterSearch: function (oEvent) {
                debugger;

                var sQuery = oEvent.getParameter("query"),
                    oTable = this.getView().byId("Tab"),
                    oBinding = oTable.getBinding("items");

                if (oEvent.getId() == "liveChange") {
                    sQuery = oEvent.getParameter("query");
                }

                if (sQuery) {
                    var oFilter1 = new sap.ui.model.Filter('Name', 'Contains', sQuery);
                    var oFilter2 = new sap.ui.model.Filter('Position', 'Contains', sQuery);
                    var oFilter3 = new sap.ui.model.Filter('Contact', 'Contains', sQuery);
                    var oFilter4 = new sap.ui.model.Filter('Age', 'Contains', sQuery);
                    var oFilter5 = new sap.ui.model.Filter('Address', 'Contains', sQuery);
                    var oFilter6 = new sap.ui.model.Filter('Salary', 'Contains', sQuery);

                    var aFilter = new sap.ui.model.Filter([oFilter1, oFilter2, oFilter3, oFilter4, oFilter5, oFilter6]);
                }
                oBinding.filter(aFilter);
            },

            onPressGo: function () {
                debugger;

                // var oBinding = this.getView().byId("Table1").getBinding("rows"),
                var oTable = this.getView().byId("Table1"),
                    oBinding = oTable.getBinding("items");

                var oFinalFilter = [],
                    aFilterName = [],
                    aFilterPos = [],
                    aFilterCont = [],
                    aFilterAge = [],
                    aFilterAddrs = [],
                    aFilterSal = [];

                //   var sQuery = this.byId("_idName").getSelectedItems()[0].mProperties.text;
                var sName = this.byId("_idName").getSelectedItems(),
                    sPosition = this.byId("_idPosition").getSelectedItems(),
                    sContact = this.byId("_idContact").getSelectedItems(),
                    sAge = this.byId("_idAge").getSelectedItems(),
                    sAddrs = this.byId("_idAdrs").getSelectedItems(),
                    sSal = this.byId("_idSal").getSelectedItems();

                if (
                    !sName.length > 0 && !sPosition.length > 0 && !sContact.length > 0 &&
                    !sAge.length > 0 && !sAddrs.length > 0 && !sSal.length > 0
                ) {
                    !oBinding.filter([]);
                } else {
                    for (var i = 0; i < sName.length; i++) {
                        aFilterName.push(
                            new sap.ui.model.Filter({
                                path: "Name",
                                operator: FilterOperator.EQ,
                                value1: sName[i].getText(),
                            })
                        );
                    }
                    for (var i = 0; i < sPosition.length; i++) {
                        aFilterPos.push(
                            new sap.ui.model.Filter({
                                path: "Position",
                                operator: FilterOperator.EQ,
                                value1: sPosition[i].getText(),
                            })
                        );
                    }
                    for (var i = 0; i < sContact.length; i++) {
                        aFilterCont.push(
                            new sap.ui.model.Filter({
                                path: "Contact",
                                operator: FilterOperator.EQ,
                                value1: sContact[i].getText(),
                            })
                        );
                    }
                    for (var i = 0; i < sAge.length; i++) {
                        aFilterAge.push(
                            new sap.ui.model.Filter({
                                path: "Age",
                                operator: FilterOperator.EQ,
                                value1: sAge[i].getText(),
                            })
                        );
                    }
                    for (var i = 0; i < sAddrs.length; i++) {
                        aFilterAddrs.push(
                            new sap.ui.model.Filter({
                                path: "Address",
                                operator: FilterOperator.EQ,
                                value1: sAddrs[i].getText(),
                            })
                        );
                    }
                    for (var i = 0; i < sSal.length; i++) {
                        aFilterSal.push(
                            new sap.ui.model.Filter({
                                path: "Salary",
                                operator: FilterOperator.EQ,
                                value1: sSal[i].getText(),
                            })
                        );
                    }

                    if (aFilterName.length > 0) {
                        oFinalFilter.push(new sap.ui.model.Filter({
                            and: false,
                            filters: aFilterName,
                        }));
                    }
                    if (aFilterPos.length > 0) {
                        oFinalFilter.push(new sap.ui.model.Filter({
                            and: false,
                            filters: aFilterPos,
                        }));
                    }
                    if (aFilterCont.length > 0) {
                        oFinalFilter.push(new sap.ui.model.Filter({
                            and: false,
                            filters: aFilterCont,
                        }));
                    }
                    if (aFilterAge.length > 0) {
                        oFinalFilter.push(new sap.ui.model.Filter({
                            and: false,
                            filters: aFilterAge,
                        }));
                    }
                    if (aFilterAddrs.length > 0) {
                        oFinalFilter.push(new sap.ui.model.Filter({
                            and: false,
                            filters: aFilterAddrs,
                        }));
                    }
                    if (aFilterSal.length > 0) {
                        oFinalFilter.push(new sap.ui.model.Filter({
                            and: false,
                            filters: aFilterSal,
                        }));
                    }
                    oBinding.filter(oFinalFilter);
                }
            },

            onShowFilters: function (oEvent) {

                if (oEvent.getSource().getText() === "Show-Filters") {
                    oEvent.getSource().setText("Hide-Filters");

                    oEvent.getSource().setIcon("sap-icon://unlocked");
                    this.byId("_idName").setVisible(true);
                    this.byId("_idNam").setVisible(true);

                    this.byId("_idPosition").setVisible(true);
                    this.byId("_idPos").setVisible(true);

                    this.byId("_idContact").setVisible(true);
                    this.byId("_idCont").setVisible(true);

                    this.byId("_idAge").setVisible(true);
                    this.byId("_idAg").setVisible(true);

                    this.byId("_idAdrs").setVisible(true);
                    this.byId("_idAdrs1").setVisible(true);

                    this.byId("_idSal").setVisible(true);
                    this.byId("_idSal1").setVisible(true);

                    this.byId("_idbtn1").setVisible(true);

                    // this.byId("table1").setMode("MultiSelect");  
                    // MessageToast.show("Locked button has been pressed!")
                }
                else {
                    oEvent.getSource().setText("Show-Filters");
                    oEvent.getSource().setIcon("sap-icon://locked");

                    this.byId("_idName").setVisible(false);
                    this.byId("_idNam").setVisible(false);

                    this.byId("_idPosition").setVisible(false);
                    this.byId("_idPos").setVisible(false);

                    this.byId("_idContact").setVisible(false);
                    this.byId("_idCont").setVisible(false);

                    this.byId("_idAge").setVisible(false);
                    this.byId("_idAg").setVisible(false);

                    this.byId("_idAdrs").setVisible(false);
                    this.byId("_idAdrs1").setVisible(false);

                    this.byId("_idSal").setVisible(false);
                    this.byId("_idSal1").setVisible(false);

                    this.byId("_idbtn1").setVisible(false);

                    // this.byId("table1").setMode("None");    
                    // MessageToast.show("UnLocked button has been pressed!");
                }
            },

            onNavNext: function () {
                var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
                loRouter.navTo("View2");
            }
        });
    });
