'use strict';

var utils = require('../utils/writer.js');
var Cosme = require('../service/CosmeService');

module.exports.getCosme = function getCosme (req, res, next) {
  var cosme_id = req.swagger.params['cosme_id'].value;
  Cosme.getCosme(cosme_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
