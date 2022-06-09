import awsService from '../aws/aws'

const databridge = {
    convert: async ({lectureId, videoId, region }) => {
        await awsService.createJob({
            lectureId,
            videoId,
            region
          });
    }
}

export default databridge