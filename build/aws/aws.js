"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var mediaConvertCreateJob_1 = require("./mediaConvertCreateJob");
var awsSdk = require('aws-sdk');
var AWS = {
    createJob: function (_a) {
        var videoId = _a.videoId, lectureId = _a.lectureId, region = _a.region, quality = _a.quality;
        return __awaiter(void 0, void 0, void 0, function () {
            var endpointPromise;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        endpointPromise = new awsSdk.MediaConvert({
                            apiVersion: '2017-08-29',
                            region: region
                        }).describeEndpoints({
                            MaxResults: 0
                        })
                            .promise();
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                endpointPromise.then(function (data) {
                                    var mediaConvert = new awsSdk.MediaConvert({
                                        region: region,
                                        apiVersion: '2017-08-29',
                                        endpoint: data.Endpoints[0].Url
                                    });
                                    mediaConvert.createJob((0, mediaConvertCreateJob_1["default"])(videoId, lectureId, 'skip', quality), function (err, data) {
                                        if (err) {
                                            reject(err);
                                        }
                                        resolve('success');
                                    });
                                }, function (err) {
                                    reject(err);
                                });
                            })];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            });
        });
    },
    upload: function (_a) {
        var imageKey = _a.imageKey, region = _a.region, buffer = _a.buffer, bucket = _a.bucket;
        return __awaiter(void 0, void 0, void 0, function () {
            var s3, params;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        s3 = new awsSdk.S3({
                            region: region
                        });
                        params = {
                            Bucket: bucket,
                            Key: "".concat(imageKey),
                            Body: buffer
                        };
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                // let starttime = Date.now();
                                s3.upload(params, function (err, data) {
                                    if (err) {
                                        console.log(err, data);
                                        reject(err);
                                    }
                                    resolve(data);
                                });
                                // PROGRESS
                                // u.on('httpUploadProgress', function(info) {
                                //   const percent = info.loaded / info.total;
                                //   const downloadedMinutes = (Date.now() - starttime) / 1000 / 60;
                                //   const estimatedDownloadTime =
                                //     downloadedMinutes / percent - downloadedMinutes;
                                //   readline.cursorTo(process.stdout, 0);
                                //   process.stdout.write(`${(percent * 100).toFixed(2)}% uploaded `);
                                //   process.stdout.write(
                                //     `(${(info.loaded / 1024 / 1024).toFixed(2)}MB of ${(
                                //       info.total /
                                //       1024 /
                                //       1024
                                //     ).toFixed(2)}MB)\n`,
                                //   );
                                //   process.stdout.write(
                                //     `running for: ${downloadedMinutes.toFixed(2)}minutes`,
                                //   );
                                //   process.stdout.write(
                                //     `, estimated time left: ${estimatedDownloadTime.toFixed(2)}minutes `,
                                //   );
                                // });
                            })];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            });
        });
    }
};
exports["default"] = AWS;
