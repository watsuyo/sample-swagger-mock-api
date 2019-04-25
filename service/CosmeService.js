'use strict';


/**
 * Get Cosme By CosmeID
 *
 * cosme_id String cosme_id in path
 * returns Cosme
 **/
exports.getCosme = function(cosme_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 1,
  "cosmename" : "CANMAKEパーフェクトスタイリストアイズ",
  "user_id" : 1,
  "category_id" : 1,
  "brand_id" : 1,
  "item_id" : 1,
  "cosme_id" : 1,
  "color_id" : 1,
  "love_rate" : 1,
  "image" : "http://ur0.biz/THYP",
  "pick_rate" : 1,
  "created_at" : "2000-01-23T04:56:07.000+00:00",
  "updated_at" : "2000-01-23T04:56:07.000+00:00"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

