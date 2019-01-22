/**
 * Created  on 2018/8/14.
 * by leilei
 */
import React from 'react';
import {Icon, Button, Avatar} from 'antd';
import BaseComponent from '../commpent/BaseComponent'
import {Link} from 'react-router-dom';
import eventProxy from 'react-eventproxy'

var QRCode = require('qrcode.react');
export default class Home extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            userCode: ''
        }
    }

    componentWillMount() {
        this.replaceTologin()
        //获取用户信息
        this.getUesInfor()
    }

    componentDidMount() {

    }

    render() {

        return (
            <div>
                <div style={{width: '100%', height: '90%', backgroundColor: 'white', padding: 20, marginTop: 20}}>
                    {/* 渲染home*/}
                    {this.renderHome()}
                    <div style={{clear: 'both'}}></div>
                    {/* 渲染用户使用数*/}
                    {this.renderUse()}
                    <div style={{clear: 'both'}}></div>
                    {/*快捷入口*/}
                    {this.renderFast()}

                    {this.renderLoading()}

                </div>
                <div style={{width: '100%', textAlign: 'center', padding: 20, backgroundColor: '#f5f5f5'}}>
                    Copyright MyUserManagement
                </div>
            </div>
        );

    }

    //渲染home
    renderHome() {
        return (
            <div style={{width: '100%', height: '90%', backgroundColor: 'white', padding: 20}}>
                <div><Icon type={'home'}/> 首页</div>
                <div style={{marginTop: 30, marginLeft: 10,}}>
                    <div style={{width: '150px', float: 'left'}}>
                        <QRCode  className='qr' id='qr'
                                style={{width: 150, height: 150, backgroundColor: 'red'}} value={this.state.userCode}/>
                    </div>
                    {/* <img src="http://www.yuanxin2015.com/MobileBusiness/app/img/office-qrcode.png" alt="logo"
                         style={{width: '150px', float: 'left'}}/>*/}

                    <div style={{float: 'left'}}>
                        <h3>
                            hello,{this.state.data.userName}!—今天是{this.getNowDate() + '—星期' + "日一二三四五六".charAt(new Date().getDay())}</h3>
                        <div>欢迎使用管理系统管理后台，管理系统给你<br/>快捷高效的办公体验</div>
                        <Button type="white" onClick={(e) => {
                            this.downloadImage()
                        }} style={{marginTop: 20, backgroundColor: '#169BD5', color: 'white'}}>
                            下载二维码
                        </Button>
                        <Button type="white" href="http://www.yuanxin2015.com/MobileBusiness/app/office-download.html"
                                target="_blank" style={{marginTop: 20, backgroundColor: '#169BD5', color: 'white'}}>
                            立即体验
                        </Button>
                    </div>

                </div>
            </div>
        )
    }

    //渲染用户使用数
    renderUse() {
        return (
            <div>

                <div style={{width: '100%', height: 120, marginTop: 30, float: 'left'}}>
                    <div style={{
                        width: '20%',
                        height: 120,
                        marginLeft: '20px',
                        float: 'left',
                        border: '1px solid #ECECEC'
                    }}>
                        <Avatar style={{backgroundColor: '#108EFF', margin: 10, float: 'left'}} size="large"
                                icon="credit-card"/>
                        <div style={{float: 'left', marginTop: 10, color: 'gray', fontSize: 12, marginLeft: 30}}> 启动次数

                            <div style={{fontSize: 15, color: 'black'}}> 13245</div>
                        </div>
                        <div style={{clear: 'both'}}/>
                        <div style={{
                            height: 1,
                            borderTop: '1px solid #ECECEC',
                            marginLeft: 5,
                            marginRight: 5,
                            marginTop: 10
                        }}/>
                        <div onClick={() => {
                            //alert(123)
                        }} style={{textAlign: 'center', lineHeight: '50px', cursor: 'pointer'}}>查看详情
                        </div>

                    </div>
                    <div style={{
                        width: '20%',
                        border: '1px solid #ECECEC',
                        height: 120,
                        marginLeft: '5.5%',
                        float: 'left'
                    }}>
                        <Avatar style={{backgroundColor: '#108EFF', margin: 10, float: 'left'}} size="large"
                                icon="credit-card"/>
                        <div style={{float: 'left', marginTop: 10, color: 'gray', fontSize: 12, marginLeft: 30}}> 激活用户

                            <div style={{fontSize: 15, color: 'black'}}> 13245</div>
                        </div>
                        <div style={{clear: 'both'}}/>
                        <div style={{
                            height: 1,
                            borderTop: '1px solid #ECECEC',
                            marginLeft: 5,
                            marginRight: 5,
                            marginTop: 10
                        }}/>
                        <div onClick={() => {
                            // alert(123)
                        }} style={{textAlign: 'center', lineHeight: '50px', cursor: 'pointer'}}>查看详情
                        </div>

                    </div>
                    <div style={{
                        width: '20%',
                        border: '1px solid #ECECEC',
                        height: 120,
                        marginLeft: '5.5%',
                        float: 'left'
                    }}>
                        <Avatar style={{backgroundColor: '#108EFF', margin: 10, float: 'left'}} size="large"
                                icon="credit-card"/>
                        <div style={{float: 'left', marginTop: 10, color: 'gray', fontSize: 12, marginLeft: 30}}> 活跃用户

                            <div style={{fontSize: 15, color: 'black'}}> 13245</div>
                        </div>
                        <div style={{clear: 'both'}}/>
                        <div style={{
                            height: 1,
                            borderTop: '1px solid #ECECEC',
                            marginLeft: 5,
                            marginRight: 5,
                            marginTop: 10
                        }}/>
                        <div onClick={() => {
                            // alert(123)
                        }} style={{textAlign: 'center', lineHeight: '50px', cursor: 'pointer'}}>查看详情
                        </div>

                    </div>
                    <div style={{
                        width: '20%',
                        border: '1px solid #ECECEC',
                        height: 120,
                        marginLeft: '5.5%',
                        float: 'left'
                    }}>
                        <Avatar style={{backgroundColor: '#108EFF', margin: 10, float: 'left'}} size="large"
                                icon="credit-card"/>
                        <div style={{float: 'left', marginTop: 10, color: 'gray', fontSize: 12, marginLeft: 30}}> 沉默用户

                            <div style={{fontSize: 15, color: 'black'}}> 13245</div>
                        </div>
                        <div style={{clear: 'both'}}/>
                        <div style={{
                            height: 1,
                            borderTop: '1px solid #ECECEC',
                            marginLeft: 5,
                            marginRight: 5,
                            marginTop: 10
                        }}/>
                        <div onClick={() => {
                            //alert(123)
                        }} style={{textAlign: 'center', lineHeight: '50px', cursor: 'pointer'}}>查看详情
                        </div>

                    </div>


                </div>

            </div>
        )
    }

    //渲染快捷入口
    renderFast() {

        let menusNew = JSON.parse(localStorage.getItem('menu')) // this.strings.menusNew
        console.log(menusNew)
        let fastList = [];
        menusNew && menusNew.forEach((item, index) => {
            if (index > 0) {
                fastList = fastList.concat(item.child)
            }
        })
        return ( <div style={{paddingRight: 40}}>
                <div style={{
                    width: '100%', marginTop: 10, marginLeft: 20,
                    border: '1px solid #ECECEC'
                }}>

                    <div style={{height: 40, lineHeight: '40px', marginLeft: 30,}}>快捷入口</div>
                    <div style={{border: '1px solid #ECECEC'}}/>
                    <div style={{marginTop: 20}}>

                        {fastList.map((item, index) => {
                            return (<div key={index} style={{
                                width: '17%',
                                height: 120,
                                marginLeft: '2.5%',
                                float: 'left', verticalAlign: 'middle',
                                border: '1px solid #ECECEC',
                                marginBottom: 10,
                                cursor: 'pointer'
                            }} onClick={() => this.fast(item)}>
                                <Link
                                    to={item.path}
                                    target={item.target}
                                >

                                    <div style={{
                                        float: 'left',
                                        backgroundColor: '#108EFF',
                                        width: 60,
                                        height: 60,
                                        borderRadius: 30,
                                        textAlign: 'center',
                                        padding: 5,
                                        marginTop: 30,
                                        marginLeft: 25
                                    }}>
                                        <Icon
                                            style={{fontSize: '40px', fontWeight: 'bold', color: 'white', marginTop: 5}}
                                            type={item.icon}/>
                                    </div>

                                    <div style={{marginLeft: 95, lineHeight: '120px', color: 'black', fontSize: 13}}>
                                        {item.title}
                                    </div>
                                </Link>
                            </div>)
                        })}


                        <div style={{clear: 'both'}}/>
                    </div>

                </div>
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
                this.setState({
                    data: data,
                    userCode: data.userCode
                })
            },
            Error: (e) => {
                this.loading && this.loading.hide();
            }
        })
    }

    //点击快捷入口
    fast(item) {
        localStorage.setItem(this.strings.keyEnumeration.menuDefaultSelect, JSON.stringify(item.parentKey));
        localStorage.setItem(this.strings.keyEnumeration.menuDefaultSelectChild, JSON.stringify(item.key));
        eventProxy.trigger('refreshMenu');
    }

    downloadImage() {
        var base64qr = document.querySelector('#qr').toDataURL()
        this.downloadFile('签到.png', base64qr)
    }

    //下载
    downloadFile(fileName, content) {
        let aLink = document.createElement('a');
        let blob = this.base64ToBlob(content); //new Blob([content]);

        let evt = document.createEvent("HTMLEvents");
        evt.initEvent("click", true, true);//initEvent 不加后两个参数在FF下会报错  事件类型，是否冒泡，是否阻止浏览器的默认行为
        aLink.download = fileName;
        aLink.href = URL.createObjectURL(blob);

        // aLink.dispatchEvent(evt);
        aLink.click()
    }

    base64ToBlob(code) {
        let parts = code.split(';base64,');
        let contentType = parts[0].split(':')[1];
        let raw = window.atob(parts[1]);
        let rawLength = raw.length;

        let uInt8Array = new Uint8Array(rawLength);

        for (let i = 0; i < rawLength; ++i) {
            uInt8Array[i] = raw.charCodeAt(i);
        }
        return new Blob([uInt8Array], {type: contentType});
    }

}


