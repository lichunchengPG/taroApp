import Taro,{Component, stopRecord} from '@tarojs/taro';
import {View,Text,Button} from '@tarojs/components'
import {connect} from '@tarojs/redux';
import './menu.less';
import {AtDrawer} from 'taro-ui';
import { showDrawer,hideDrawer,changeCata }  from '../../actions/menu';

@connect(function(store){
    return {...store.menu}
},function(dispatch){
    return {
        showMenu() {
            dispatch(showDrawer());
        },
        hideMenu() {
            dispatch(hideDrawer());
        },
        changeCata(cata) {
            dispatch(changeCata(cata));
        }
    }
})
class Menu extends Component {
    getItems(cataData) {
        return cataData.map(item => item.value)
    }
    showDrawer() {
        this.props.showMenu && this.props.showMenu();
    }
    closeDrawer() {
        this.props.hideMenu && this.props.hideMenu();
    }
    clickCata(index) {
        let {cataData} = this.props;
        let clickData = cataData[index];
        if(clickData.key !== this.props.currentCata.key) {
            this.props.changeCata && this.props.changeCata(clickData)
        }
    }
    render() {
        let {showDrawer,cataData} = this.props;
        let item = this.getItems(cataData);
        return (<View className="topiclist-menu">
                <AtDrawer onClose={this.closeDrawer.bind(this)} onItemClick={this.clickCata.bind(this)} items={item} show={showDrawer} style='position:absolute;'/>
                <Image onClick={this.showDrawer.bind(this)} className="image left" src={require('../../assets/img/cata.png')}/>
                <Text>{this.props.currentCata ? this.props.currentCata.value : ''}</Text>
                <Image className="image right" src={require('../../assets/img/login.png')}/>
                
        </View>)
    }
}

export default Menu;