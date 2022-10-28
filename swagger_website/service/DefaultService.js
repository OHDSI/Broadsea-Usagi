'use strict';


/**
 * Auto generated using Swagger Inspector
 *
 * returns Object
 **/
exports.backendApiGet_cdm_versionsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Auto generated using Swagger Inspector
 *
 * no response value expected for this operation
 **/
exports.backendApiInfoGET = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Auto generated using Swagger Inspector
 *
 * body Api_login_body  (optional)
 * returns inline_response_200
 **/
exports.userApiLoginPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "firstName" : "firstName",
  "lastName" : "lastName",
  "refresh_token" : "refresh_token",
  "expires" : "expires",
  "email" : "email",
  "token" : "token",
  "username" : "username"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

