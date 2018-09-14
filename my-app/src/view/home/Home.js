/**
 * Created  on 2018/8/14.
 * by leilei
 */
import React from 'react';
import {Icon,Button,Avatar} from 'antd';
import BaseComponent from '../commpent/BaseComponent'

export  default class Home extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
        }
    }

    componentWillMount() {
        this.replaceTologin()
    }

    componentDidMount() {
        //获取用户信息
      //  this.getUesInfor()
    }

    render() {

        return (
            <div style={{width: '100%', height: '90%',position:'absolute',top: 50, backgroundColor: 'white',}}>
                {/* 渲染home*/}
                {this.renderHome()}
                <div style={{clear: 'both'}}></div>
                {/* 渲染用户使用数*/}
                {this.renderUse()}
                <div style={{clear: 'both'}}></div>
                {/*快捷入口*/}
                {this.renderFast()}
            </div>
        );

    }

    //渲染home
    renderHome(){
        let data = JSON.parse(localStorage.getItem("userInfor")) ? JSON.parse(localStorage.getItem("userInfor")) : {name: ''}
        return(
            <div>
                <div><Icon type={'home'}/> 首页</div>
                <div style={{marginTop: 30, marginLeft: 10,}}>
                    <img src="http://www.yuanxin2015.com/MobileBusiness/app/img/office-qrcode.png" alt="logo"
                         style={{width: '150px', float: 'left'}}/>

                    <div style={{float: 'left'}}>
                        <h3>hello,{data.name}!</h3>
                        <div>欢迎使用demo管理后台，demo给你<br/>快捷高效的办公体验</div>

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
                            alert(123)
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
                            alert(123)
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
                            alert(123)
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
                            alert(123)
                        }} style={{textAlign: 'center', lineHeight: '50px', cursor: 'pointer'}}>查看详情
                        </div>

                    </div>


                </div>

            </div>
        )
    }

    //渲染快捷入口
    renderFast() {
        return ( <div style={{paddingRight: 40}}>
                <div style={{
                    width: '100%', height: 205, marginTop: 10, float: 'left', marginLeft: 20,
                    border: '1px solid #ECECEC'
                }}>

                    <div style={{height: 40, lineHeight: '40px', marginLeft: 30,}}>快捷入口</div>
                    <div style={{border: '1px solid #ECECEC'}}/>
                    <div style={{marginTop: 20}}>


                        <div style={{
                            width: '17%',
                            height: 120,
                            marginLeft: 30,
                            float: 'left',
                            border: '1px solid #ECECEC'
                        }}>



                        </div>
                        <div style={{
                            width: '17%',
                            border: '1px solid #ECECEC',
                            height: 120,
                            marginLeft:'2.5%',
                            float: 'left'
                        }}>



                        </div>
                        <div style={{
                            width: '17%',
                            border: '1px solid #ECECEC',
                            height: 120,
                            marginLeft: '2.5%',
                            float: 'left'
                        }}>



                        </div>
                        <div style={{
                            width: '17%',
                            border: '1px solid #ECECEC',
                            height: 120,
                            marginLeft: '2.5%',
                            float: 'left'
                        }}>



                        </div>
                        <div style={{
                            width: '17%',
                            border: '1px solid #ECECEC',
                            height: 120,
                            marginLeft: '2.5%',
                            float: 'left'
                        }}>



                        </div>
                    </div>

                </div>
            </div>
        )
    }

}


