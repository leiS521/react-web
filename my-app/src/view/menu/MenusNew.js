/**
 * Created  on 2018/7/31.
 * by leilei
 */
import React from 'react';
import {Menu, Icon, Button} from 'antd';
import BaseComponent from '../commpent/BaseComponent'
import {Link} from 'react-router-dom';

import MenusRouter from '../../router/MenusRouter'

export default class MenusNew extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            collapsed: false,
            menuDefaultSelect: this.strings.menusNewEnumeration.home,
        }
    }

    componentWillMount() {
        this.replaceTologin();
        let key = JSON.parse(localStorage.getItem(this.strings.keyEnumeration.menuDefaultSelect)) ? JSON.parse(localStorage.getItem(this.strings.keyEnumeration.menuDefaultSelect)) : this.strings.menusNewEnumeration.home;
        let index = JSON.parse(localStorage.getItem(this.strings.keyEnumeration.parentMenuIndex)) ? JSON.parse(localStorage.getItem(this.strings.keyEnumeration.parentMenuIndex)) : 0;
        this.itemClick({key, index})
    }

    componentDidMount() {

    }

    render() {
        let data = JSON.parse(localStorage.getItem("userInfor")) ? JSON.parse(localStorage.getItem("userInfor")) : {name: ''}


        return (
            <div style={{
                width: '100%',

                minWidth: 1024,
                position: 'relative',
                backgroundColor: '#f5f5f5'
            }}>
                <div style={{
                    width: '100%',
                    backgroundColor: '#00182E',
                    height: 45.5,
                    position: 'relative',
                    float: 'left'
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
                        }}> myDemo
                        </div>
                        <div style={{float: 'left', marginLeft: 50}}>
                            <Menu
                                defaultSelectedKeys={[this.state.menuDefaultSelect]}
                                mode="horizontal"
                                theme='dark'
                            >
                                {this.strings.menusNew.map((item, index) => {
                                    let childFirstChoose;
                                    if (index > 0) {
                                        childFirstChoose = item.child[0].key;
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

                    </div>

                    <div style={{
                        height: 45.5,
                        textAlign: 'center',
                        lineHeight: '45.5px',
                        color: 'white',
                        position: 'absolute',
                        right: '10%'
                    }}>
                        <Button type="white" onClick={() => {
                        }} style={{marginBottom: 16,}}>
                            <Icon type={'user'}/>{data.name}
                        </Button>
                        <Button type="white" onClick={() => {
                            this.logOut()

                        }} style={{
                            marginBottom: 16,
                            marginLeft: 10,
                        }}>
                            退出登录
                        </Button>
                    </div>
                </div>
                <div style={{width: '100%', backgroundColor: '#f5f5f5'}}>


                    <div style={{
                        width: '80%', marginLeft: '10%',
                        position: 'relative',
                        marginRight: '10%',
                    }}>
                        <MenusRouter/>
                        {/* {replace}*/}
                    </div>

                </div>


            </div>
        );
    }

    //点击每一项
    itemClick({key, index}) {
        localStorage.setItem(this.strings.keyEnumeration.menuDefaultSelect, JSON.stringify(key));
        localStorage.setItem(this.strings.keyEnumeration.parentMenuIndex, JSON.stringify(index))
        this.state.menuDefaultSelect = key;
        if (key !== JSON.parse(localStorage.getItem(this.strings.keyEnumeration.menuDefaultSelect))) {
            localStorage.removeItem(this.strings.keyEnumeration.menuDefaultSelectChild);
        }

        this.setState({})
    }


    //退出登录后清除缓存
    logOut() {
        localStorage.removeItem(this.strings.keyEnumeration.userInfor);
        localStorage.removeItem(this.strings.keyEnumeration.menuDefaultSelect);
        localStorage.removeItem(this.strings.keyEnumeration.parentMenuIndex);
        //新版
        localStorage.removeItem(this.strings.keyEnumeration.menuDefaultSelectChild);
        // this.props.history.goBack()
        this.props.history.replace("/")
    }
}
