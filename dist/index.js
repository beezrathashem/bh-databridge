"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.ImageConvert = exports.Databridge = exports.log = void 0;
var log = function (str) {
    console.log("logger: " + str);
};
exports.log = log;
var databridge_1 = __importDefault(require("./databridge"));
exports.Databridge = databridge_1["default"];
var image_convert_1 = __importDefault(require("./image-convert"));
exports.ImageConvert = image_convert_1["default"];
