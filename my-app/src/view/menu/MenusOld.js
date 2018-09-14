/**
 * Created  on 2018/7/31.
 * by leilei
 */
import React from 'react';
import {Menu, Icon, Button} from 'antd';
import Welcome from '../welcome/Welcome'
import UseManage from '../meeting/UseManage'
import UseManageNew from '../meeting/UseManageNew'

import BaseComponent from '../commpent/BaseComponent'

let replace;
const SubMenu = Menu.SubMenu;
export default class MenusOld extends BaseComponent {
    constructor(props) {
        super(props);
        replace = <Welcome  {...this.props}/>;
        this.state = {
            collapsed: false,
            menuDefaultSelect: '',
            menuDefaultSub: ''
        }
    }

    componentWillMount() {
        this.replaceTologin()
        let subKey = JSON.parse(localStorage.getItem("menuDefaultSub")) ? JSON.parse(localStorage.getItem("menuDefaultSub")) : '';
        let key = JSON.parse(localStorage.getItem("menuDefaultSelect")) ? JSON.parse(localStorage.getItem("menuDefaultSelect")) : ''
        this.state.menuDefaultSub = subKey;
        this.itemClick({key})
    }


    render() {
        let data = JSON.parse(localStorage.getItem("userInfor")) ? JSON.parse(localStorage.getItem("userInfor")) : {name: ''}
        //渲染菜单
        let menus = [];
        this.strings.menus.forEach((item) => {

            if (item.child && item.child.length > 0) {
                let child = [];
                item.child.forEach((childItem) => {
                    child.push(
                        <Menu.Item key={childItem.key}
                                   onClick={({item, key, keyPath}) => {
                                       this.itemClick({item, key, keyPath})
                                   }}
                        >{childItem.Title}</Menu.Item>
                    )
                })
                menus.push(
                    <SubMenu key={item.key}
                             onClick={({item, key, keyPath}) => {
                                 let subKey = keyPath[1]
                                 localStorage.setItem('menuDefaultSub', JSON.stringify(subKey));
                             }}
                             title={<span><Icon type={item.Icon}/><span>{item.Title}</span></span>}>
                        {child}
                    </SubMenu>
                )

            } else {
                menus.push(<Menu.Item key={item.key} onClick={({item, key, keyPath}) => {
                    this.itemClick({item, key, keyPath})
                }}>
                    <Icon type={item.Icon}/>
                    <span>{item.Title}</span>
                </Menu.Item>)
            }


        })

        return (
            <div style={{width: '100%', minWidth: 1024, position: 'relative'}}>
                <div style={{width: this.state.collapsed ? '10%' : '20%', paddingLeft: 30, display: 'inline-block'}}>

                    <Button type="primary" onClick={this.toggleCollapsed} style={{marginBottom: 16, marginTop: 20,}}>
                        <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}/>
                    </Button>
                    <div style={{
                        color: ' #44b549',
                        fontWeight: 'bolder',
                        position: 'absolute',
                        top: 15, left: 90,
                        fontSize: '30px',
                        width: '300px'
                    }}> 后台管理demo
                    </div>
                    <div style={{
                        position: 'absolute',
                        top: 0, right: 30,
                    }}>
                        <Button type="white" onClick={() => {
                        }} style={{marginBottom: 16, marginTop: 20,}}>
                            <Icon type={'user'}/>{data.name}
                        </Button>

                        <Button type="white" onClick={() => {
                            this.logOut()

                        }} style={{
                            marginBottom: 16,
                            marginTop: 20,
                            backgroundColor: 'rgb(217, 83, 79)',
                            marginLeft: 10,
                            color: 'white'
                        }}>
                            退出登录
                        </Button>
                    </div>

                    <Menu
                        /* defaultSelectedKeys={['1']}   默认选中第一个
                         defaultOpenKeys={['sub1']}*/
                        defaultSelectedKeys={[this.state.menuDefaultSelect]}
                        defaultOpenKeys={[this.state.menuDefaultSub]}
                        mode="inline"
                        theme="light"
                        inlineCollapsed={this.state.collapsed}
                    >
                        {menus}

                    </Menu>
                </div>
                <div style={{
                    width: this.state.collapsed ? '90%' : '80%',
                    position: 'absolute',
                    display: 'inline-block',
                    top: 72,
                    paddingLeft: this.state.collapsed ? '0px' : '40px'
                }}>
                    {replace}

                </div>
            </div>
        );
    }

    //菜单按钮
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    //点击每一项
    itemClick({key}) {
        this.state.defaultSelect = key
        localStorage.setItem('menuDefaultSelect', JSON.stringify(key));
        if (key === this.strings.menuEnumeration.useManage) {
            replace = <UseManage {...this.props}/>
        }
        if (key === this.strings.menuEnumeration.UseManageNewLIst) {
            replace = <UseManageNew {...this.props} clickKey={key}/>
        }
        if (key === this.strings.menuEnumeration.UseManageNewAdd) {
            replace = <UseManageNew {...this.props} clickKey={key}/>
        }

        if (key === '3') {
            replace = <Welcome {...this.props}/>
        }
        this.setState({})
    }

    //退出登录
    logOut() {
        //公用的
        localStorage.removeItem('userInfor');
        localStorage.removeItem('menuDefaultSelect');
        localStorage.removeItem('menuDefaultSub');
        this.props.history.goBack()
    }
}

