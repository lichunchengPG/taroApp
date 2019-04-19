import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less';
import {getTopicInfo} from '../../actions/topic' 
import TopicInfo from '../../components/topicInfo/topicinfo'
import {connect} from '@tarojs/redux';
@connect(function(store){
  return {topicInfo:store.topic.topicInfo}
},function(dispatch){
  return {
    getTopicInfo(params) {
      dispatch(getTopicInfo(params))
    }
  }
})
class Detail extends Component {

  config = {
    navigationBarTitleText: '话题详情'
  }

  componentWillMount () {
    this.getDetail();
   }
  getDetail() {
    let params = {id:this.$router.params.topicid,mdrender:true}
    this.props.getTopicInfo && this.props.getTopicInfo(params);
  }
  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    let {topicInfo} = this.props;
    return (
      <View className='index'>
          <TopicInfo topicInfo={topicInfo}/>
      </View>
    )
  }
}

export default Detail;