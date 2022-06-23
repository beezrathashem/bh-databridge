import awsService from '../aws/aws'

const databridge = {
    convert: async ({lectureId, videoId, region, quality }) => {
        await awsService.createJob({
            lectureId,
            videoId,
            region,
            quality,
          });
    }
}

export default databridge