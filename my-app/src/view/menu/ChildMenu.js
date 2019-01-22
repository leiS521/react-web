/**
 * Created  on 2018/8/14.
 * by leilei
 */
import React from 'react';
import {Menu, Icon, Button} from 'antd';
import BaseComponent from '../commpent/BaseComponent'
import {Link} from 'react-router-dom';
import ChildMenusRouter from'../../router/ChildMenusRouter'
import eventProxy from 'react-eventproxy'
let index

let menusNew;
let keys=''
export default class ChildMenu extends BaseComponent {
    constructor(props) {
        super(props);
        menusNew=JSON.parse(localStorage.getItem('menu'))
        index = JSON.parse(localStorage.getItem(this.strings.keyEnumeration.parentMenuIndex)) ? JSON.parse(localStorage.getItem(this.strings.keyEnumeration.parentMenuIndex)) : 0;
        keys=menusNew&&menusNew[index].child?menusNew[index].child[0].key:''
        this.state = {
            collapsed: false,
            menuDefaultSelectChild: JSON.parse(localStorage.getItem(this.strings.keyEnumeration.menuDefaultSelectChild)) ? JSON.parse(localStorage.getItem(this.strings.keyEnumeration.menuDefaultSelectChild)) : keys,
            title: ''
        }
    }

    componentWillMount() {
        this.replaceTologin()

    }

    componentDidMount() {
       // menusNew=this.strings.menusNew
        let key = JSON.parse(localStorage.getItem(this.strings.keyEnumeration.menuDefaultSelectChild)) ? JSON.parse(localStorage.getItem(this.strings.keyEnumeration.menuDefaultSelectChild)) : keys
        this.itemClick({key})
        eventProxy.on('refreshChildMenu', () => {
            index = JSON.parse(localStorage.getItem(this.strings.keyEnumeration.parentMenuIndex)) ? JSON.parse(localStorage.getItem(this.strings.keyEnumeration.parentMenuIndex)) : 0;
            keys=menusNew&&menusNew[index].child?menusNew[index].child[0].key:''
            let key = JSON.parse(localStorage.getItem(this.strings.keyEnumeration.menuDefaultSelectChild)) ? JSON.parse(localStorage.getItem(this.strings.keyEnumeration.menuDefaultSelectChild)) : keys
            this.itemClick({key})
        });
    }

    render() {
        let chidmenu = []
        menusNew&&menusNew.forEach((item) => {
            if (item.path === this.props.match.path) {
                if (item.child && item.child.length) {
                    item.child.forEach((childItem) => {
                        let title = childItem.title
                        let Item = childItem
                        chidmenu.push(
                            <Menu.Item   onClick={({childItem, key, keyPath}) => {
                                this.itemClick({childItem, key, keyPath, title})
                            }} key={childItem.key}>

                                <Link
                                    to={Item.path}
                                >

                                    <Icon type={childItem.icon}/>
                                    <span> {childItem.title}</span>
                                </Link>
                            </Menu.Item>
                        )
                    })
                }

            }

        })
        return (
            <div style={{width: '100%', height: '90%', position: 'relative', backgroundColor: 'white',marginTop:20,marginBottom:20}}>

                <div style={{
                    float: 'left', width: this.state.collapsed ? '8%' : '11%', position: 'relative',
                    display: 'inline-block', marginTop: 20
                }}>
                    <Button type="primary" onClick={this.toggleCollapsed} style={{marginBottom: 10,}}>
                        <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}/>
                    </Button>
                    <Menu
                        defaultSelectedKeys={[this.state.menuDefaultSelectChild]}
                        selectedKeys={[this.state.menuDefaultSelectChild]}
                        mode="inline"
                        theme="light"
                        inlineCollapsed={this.state.collapsed}
                    >
                        {chidmenu}
                    </Menu>
                </div>
                <div style={{
                    width: this.state.collapsed ? '92%' : '89%', height: '100%',
                    position: 'relative',
                    display: 'inline-block',
                    float: 'left'
                }}>
                        <ChildMenusRouter/>
                </div>
                <div style={{clear:'both'}} />
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
        this.state.menuDefaultSelectChild = key;
        if (key !== JSON.parse(localStorage.getItem(this.strings.keyEnumeration.menuDefaultSelectChild))) {
            //*以后扩展三级菜单的时候都要写上清除三级菜单默认的选中项，是为了每次初始进入都选中三级菜单中的第一个
            localStorage.removeItem('screenSelect');
        }
        localStorage.setItem(this.strings.keyEnumeration.menuDefaultSelectChild, JSON.stringify(key));
        this.setState({})
    }

}


