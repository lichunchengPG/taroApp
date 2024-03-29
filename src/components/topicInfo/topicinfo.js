import Taro,{Component} from '@tarojs/taro';
import {View,Text,Button,RichText} from '@tarojs/components'
import {connect} from '@tarojs/redux';
import {myTimeToLocal} from '../../utils/date';

class TopicInfo extends Component {
    render() {
        let {topicInfo}=this.props;
        return (<View className='topic-info'>
            <View className='topic-info-header'>
                <View className='topic-info-header-title'>
                    {topicInfo.top?<Text className='topic-up'>置顶</Text>:(topicInfo.tab=='share'?<Text className='topic-up blue'>分享</Text>:<Text className='topic-up blue'>问答</Text>)}
                    <Text>{topicInfo.title}</Text>
                </View>
                <View className='topic-info-header-pie'>
                <Text>{topicInfo.create_at ? myTimeToLocal(topicInfo.create_at) : ''}</Text>
                <Text>{topicInfo.author?topicInfo.author.loginname:''}</Text>
                <Text>{topicInfo.visit_count+'次浏览'}</Text>
                </View>
            </View>
            <View className='topic-info-body'>
            <RichText nodes={topicInfo.content}/>
            </View>
        </View>)
    }
}
TopicInfo.defaultProps={
    topicInfo:{}
 }
export default TopicInfo;