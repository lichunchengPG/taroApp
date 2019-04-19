const TOPIC_STATE = {
    page:1,
    list:[],
    limit:20,
    topicInfo:{},
    replies:[],
}

export default function topic(prestate=TOPIC_STATE,action) {
    switch (action.type) {
        case 'getTopicList':
            return {...prestate,list:action.list,page:1};
        case 'appendTopicList':
            return {...prestate,list:prestate.list.concat(action.list),page:action.page}
        case 'getTopicInfo':
            return {...prestate,replies:action.infoData.replies,topicInfo:{...action.infoData,replies:null}}
        default:
            return {...prestate};
    }
}