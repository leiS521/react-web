/**
 * Created  on 2018/8/1.
 * by leilei
 */
import React from 'react';
import '../../style/welcome/Welcome.css';
import {Icon} from 'antd';
import BaseComponent from '../commpent/BaseComponent'

class Welcome extends BaseComponent {
    componentWillMount() {
        this.replaceTologin()
    }

    render() {
        let data = JSON.parse(localStorage.getItem("userInfor")) ? JSON.parse(localStorage.getItem("userInfor")) : {name: ''}
        return (
            <div className="panel panel-primary ng-scope">
                <div className="panel-heading">
                    <b><Icon type="star-o" style={{fontSize: 16, color: 'white', marginRight: '10px'}}/>欢迎登录</b>
                </div>

                <div className='container jumbotron'>
                    <h3 className="ng-binding">Hello, {data.name}!</h3>
                    <p>
                        欢迎{data.name}登录管理后台
                    </p>
                    <div style={{marginTop: '300px', paddingBottom: 45}}>
                        <div style={{float: 'right', paddingLeft: '15px'}}>
                            <img src="http://www.yuanxin2015.com/MobileBusiness/app/img/office-qrcode.png" alt="logo"
                                 style={{width: '100px'}}/>
                        </div>

                        <div style={{float: 'right', textAlign: 'right'}}>
                            <h4>给你快捷高效的办公体验</h4>
                            <p>
                                <a href="http://www.yuanxin2015.com/MobileBusiness/app/office-download.html"
                                   target="_blank" rel="noopener noreferrer">>扫码下载，立即体验 &gt;</a>
                            </p>
                        </div>

                    </div>

                </div>


            </div>
        );
    }
}

export default Welcome;
