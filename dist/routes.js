"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _getData = require('./utils/getData'); var _getData2 = _interopRequireDefault(_getData);

const routes = new (0, _express.Router)();

routes.get('/stations/bomjesus', async (erq, res) => {
  const data = await _getData2.default.call(void 0, );
  res.json(data);
});

exports. default = routes;