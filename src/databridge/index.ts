import awsService from '../aws/aws'

const databridge = {
    convert: async ({lectureId, videoId, webhook_url, actionType }) => {
        await awsService.createJob({
            lectureId,
            videoId,
            region
          }, actionType);
    }
}

export default databridge