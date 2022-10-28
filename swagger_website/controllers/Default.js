'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.backendApiGet_cdm_versionsGET = function backendApiGet_cdm_versionsGET (req, res, next) {
  Default.backendApiGet_cdm_versionsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.backendApiInfoGET = function backendApiInfoGET (req, res, next) {
  Default.backendApiInfoGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userApiLoginPOST = function userApiLoginPOST (req, res, next, body) {
  Default.userApiLoginPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
