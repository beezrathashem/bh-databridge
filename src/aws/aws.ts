import MEDIA_JOB_PARAMS from './mediaConvertCreateJob';
const awsSdk = require('aws-sdk');

const AWS = {
  createJob: async (videoId: string, lectureId: string) => {
    await awsSdk.config.loadFromPath(`./${process.env.AWS_CONFIG_PATH}.json`);

    const endpointPromise = new awsSdk.MediaConvert({
      apiVersion: '2017-08-29',
      region: 'us-west-1',
    })
      .describeEndpoints({
        MaxResults: 0,
      })
      .promise();
    return await new Promise((resolve, reject) => {
      endpointPromise.then(
        function (data) {
          const mediaConvert = new awsSdk.MediaConvert({
            region: 'us-west-1',
            apiVersion: '2017-08-29',
            endpoint: data.Endpoints[0].Url,
          });
          mediaConvert.createJob(MEDIA_JOB_PARAMS(videoId, lectureId, 'skip'), function (err, data) {
            if (err) {
              reject(err);
            }
            resolve('success');
          });
        },
        function (err) {
          reject(err);
        },
      );
    });
  },
  upload: async ({ imageKey, region, buffer, bucket }: { imageKey: string; region: string; buffer: any; bucket: string }) => {
    await awsSdk.config.loadFromPath(`./${process.env.AWS_CONFIG_PATH}.json`);
    const s3 = new awsSdk.S3({
      region,
    });

    const params = {
      Bucket: bucket,
      Key: `${imageKey}`,
      Body: buffer,
    };

    return await new Promise((resolve, reject) => {
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
    });
  },
};

export default AWS;
