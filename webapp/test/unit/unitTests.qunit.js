/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"employee1/employeedatafilterproject/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
