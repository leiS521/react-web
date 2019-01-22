/**
 * Created  on 2018/7/31.
 * by leilei
 */
import React from 'react';
import {Menu, Icon, Button} from 'antd';
import BaseComponent from '../commpent/BaseComponent'
import {Link} from 'react-router-dom';
import eventProxy from 'react-eventproxy'

import MenusRouter from '../../router/MenusRouter'

export default class MenusNew extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            userInfor: {},
            collapsed: false,
            menuDefaultSelect: this.strings.menusNewEnumeration.home,
        }
    }

    componentWillMount() {
        this.replaceTologin();
    }

    componentDidMount() {
        let key = JSON.parse(localStorage.getItem(this.strings.keyEnumeration.menuDefaultSelect)) ? JSON.parse(localStorage.getItem(this.strings.keyEnumeration.menuDefaultSelect)) : this.strings.menusNewEnumeration.home;
        let index = JSON.parse(localStorage.getItem(this.strings.keyEnumeration.parentMenuIndex)) ? JSON.parse(localStorage.getItem(this.strings.keyEnumeration.parentMenuIndex)) : 0;
        this.itemClick({key, index})
        eventProxy.on('refreshMenu', () => {
            let key = JSON.parse(localStorage.getItem(this.strings.keyEnumeration.menuDefaultSelect)) ? JSON.parse(localStorage.getItem(this.strings.keyEnumeration.menuDefaultSelect)) : this.strings.menusNewEnumeration.home;
            this.state.menuDefaultSelect = key;
            this.setState({})
        });

        //获取用户信息
        this.getUesInfor()
    }

    render() {

        return (
            <div style={{
                width: '100%',
                minWidth: 1024,
                backgroundColor: '#f5f5f5'
            }}>
                <div style={{
                    width: '100%',
                    backgroundColor: '#00182E',
                    height: 45.5,
                }}>

                    <div style={{
                        // width: '100%',
                        backgroundColor: '#00182E',
                        height: 45.5,
                        position: 'absolute',
                        marginLeft: '10%',
                        marginRight: '10%',
                        float: 'left'
                    }}>
                        <div style={{
                            float: 'left',
                            height: 45.5,
                            textAlign: 'center',
                            lineHeight: '45.5px',
                            color: 'white',
                        }}> 管理系统
                        </div>

                        {this.renderMenu()}
                    </div>

                    <div style={{
                        height: 45.5,
                        textAlign: 'center',
                        lineHeight: '45.5px',
                        color: 'white',
                        position: 'absolute',
                        right: '10%'
                    }}>
                        <view style={{marginBottom: 16,}}>
                            <Icon type={'user'}/>{this.state.userInfor.userName}
                        </view>

                        <Button type="white" onClick={() => {
                            this.logOut()

                        }} style={{
                            marginBottom: 16,
                            marginLeft: 10,
                        }}>
                            <Icon type={'logout'}/> 退出登录
                        </Button>
                    </div>
                </div>
                <div style={{width: '100%', backgroundColor: '#f5f5f5'}}>


                    <div style={{
                        width: '80%', marginLeft: '10%',
                        marginRight: '10%',
                    }}>
                        <MenusRouter/>

                    </div>
                    <div style={{clear: 'both'}}/>
                </div>


            </div>
        );
    }

    renderMenu() {

        let home = [{
            key: 'home',
            icon: 'home',
            title: '首页',
            path: '/menusNew/home'
        }]

        let menusNew = JSON.parse(localStorage.getItem('menu')) ? JSON.parse(localStorage.getItem('menu')) : home    //this.strings.menusNew
        // menusNew=this.strings.menusNew
        return (
            <div style={{float: 'left', marginLeft: 50}}>
                <Menu
                    defaultSelectedKeys={[this.state.menuDefaultSelect]}
                    selectedKeys={[this.state.menuDefaultSelect]}
                    mode="horizontal"
                    theme='dark'
                >
                    {menusNew.map((item, index) => {
                        let childFirstChoose;
                        if (index > 0) {
                            if (item.child.length > 0) {
                                childFirstChoose = item.child[0].key;
                            }

                        }
                        let Item = item
                        return (
                            <Menu.Item onClick={({item, key, keyPath}) => {
                                this.itemClick({item, key, keyPath, index})
                            }} key={item.key}>
                                <Link
                                    to={index === 0 ? Item.path : Item.path + '/' + childFirstChoose}
                                >
                                    {item.title}
                                </Link>
                            </Menu.Item>
                        )

                    })}

                </Menu>


            </div>
        )
    }

    //获取用户信息
    getUesInfor() {
        this.loading && this.loading.show();
        this.Request({
            method: 'get',
            url: this.Apis.GetUserInfor,
            Success: (date) => {
                this.loading && this.loading.hide();
                let data = date[0];
                localStorage.setItem(this.strings.keyEnumeration.userInfor, JSON.stringify(data))
                this.setState({
                    userInfor: data
                })
            },
            Error: (e) => {
                this.loading && this.loading.hide();
            }
        })
    }

    //点击每一项
    itemClick({key, index}) {

        localStorage.setItem(this.strings.keyEnumeration.parentMenuIndex, JSON.stringify(index))
        this.state.menuDefaultSelect = key;
        if (key !== 'home') {
            if (key !== JSON.parse(localStorage.getItem(this.strings.keyEnumeration.menuDefaultSelect))) {
                localStorage.removeItem(this.strings.keyEnumeration.menuDefaultSelectChild);
                eventProxy.trigger('refreshChildMenu');
            }
        }
        localStorage.setItem(this.strings.keyEnumeration.menuDefaultSelect, JSON.stringify(key));
        this.setState({})
    }


    //退出登录后清除缓存
    logOut() {
        localStorage.removeItem(this.strings.keyEnumeration.authorization);
        localStorage.removeItem(this.strings.keyEnumeration.menuDefaultSelect);
        localStorage.removeItem(this.strings.keyEnumeration.parentMenuIndex);
        localStorage.removeItem('menu');
        //新版
        localStorage.removeItem(this.strings.keyEnumeration.menuDefaultSelectChild);
        // this.props.history.goBack()
        this.props.history.replace("/")
    }

}
