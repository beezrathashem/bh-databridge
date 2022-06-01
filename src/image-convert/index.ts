
import awsService from '../aws/aws'

const image_convert = {
  convertImages: async ({ uploads, bucket, region }: any) => {
    try {
      for (let upload of uploads) {
      const https = require('https');
      const buffer = await new Promise(resolve => {
        https.get(upload.image_url).on('response', function (stream) {
          resolve(stream);
        });
      });

      await awsService.upload({
        buffer,
        imageKey: upload.image_key,
        bucket: process.env.AWS_THUMBNAILS_BUCKET,
      });
      }
    } catch (err) {
      // bugsnag}
    } finally {
      // discord notify
    }
  }
}

export default image_convert
