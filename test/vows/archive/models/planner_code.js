/*jshint trailing:true, white:true, indent:2, strict:true, curly:true,
  immed:true, eqeqeq:true, forin:true, latedef:true,
  newcap:true, noarg:true, undef:true */
/*global XT:true, XM:true, XV:true, process:true, module:true, require:true */

var XVOWS = XVOWS || {};
(function () {
  "use strict";

  var vows = require("vows"),
    crud = require('../lib/crud'),
    data = {
      recordType: "XM.PlannerCode",
      autoTestAttributes: true,
      createHash: {
        code: "10",
        name: "Ten"
      },
      updateHash: {
        name: "Ti"
      }
    };

  vows.describe('XM.PlannerCode CRUD test').addBatch({
    'We can run the XM.PlannerCode CRUD tests ': crud.runAllCrud(data)
  }).export(module);

}());
