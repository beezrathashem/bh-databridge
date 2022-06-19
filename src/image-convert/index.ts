import awsService from '../aws/aws'

const image_convert = {
  convert: async ({ uploads, env, bucket, region }: any) => {
    try {
      const images = {}
      for (let upload of uploads) {
        const https = require('https');
        const buffer = await new Promise(resolve => {
          https.get(upload.image_url).on('response', function (stream) {
            resolve(stream);
          });
        });

        images[upload.key] = `https://${bucket}.s3.${region}.amazonaws.com/${upload.image_key}`;

        await awsService.upload({
          buffer,
          imageKey: upload.image_key,
          bucket,
          env,
          region,
        });
      }
      return images
    } catch (err) {
      // bugsnag}
    } finally {
      // discord notify
    }
  }
}

export default image_convert
