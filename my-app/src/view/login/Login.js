import React from 'react';
import logo from '../../image/login/login_logo.png';
import '../../style/login/Login.css';
import login_title from '../../image/login/login_title.png';

import BaseComponent from '../commpent/BaseComponent'

class Login extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: false,
            loading: false
        }
    }

    render() {
        return (
            <div className="login">
                <div className='sun_logo'>
                    <img src={logo} className="" style={{width: "298px",}} alt="logo"/>
                </div>

                <div className="logo_box ng-scope">
                    <h3>
                        <img src={login_title} alt="远洋移动办公" style={{width: "265px"}}/>
                    </h3>
                    <div className="ng-pristine ng-valid" style={{width: "280px"}}>
                        <div className="input_outer">
                            <span className="username"></span>
                            <input type="text" placeholder="请输入域帐号"
                                   onChange={(e) => {
                                       this.setState({username: e.target.value})
                                   }}

                                   className="ng-pristine ng-valid"/>
                        </div>
                        <div className="input_outer">
                            <span className="password"></span>
                            <input type="password" placeholder="请输入密码"
                                   onChange={(e) => {

                                       this.setState({password: e.target.value})
                                   }}
                                   className="ng-pristine ng-valid"/>
                        </div>
                        <div className="sun_btn">
                            <button onClick={() => this.submit(1)}>登录新版</button>
                        </div>
                        <div className="sun_btn">
                            <button onClick={() => this.submit(2)}>登录老版</button>
                        </div>
                    </div>
                    {this.state.error ? <div className="sun_message ng-binding" style={{fontSize: 14}}>
                        登录失败：用户名或密码错误
                    </div> : <div className="sun_message ng-binding">

                    </div>}
                    <div className="sun_copyright">
                        海欧云提供计算服务 © 2016-2018
                    </div>
                </div>
                {this.renderLoading()}
            </div>
        );


    }

//点击登录按钮
    submit(key) {
        let $this = this
       this.loading && this.loading.show();

        this.Request({
            methed: 'get',
            url: this.Apis.Login + '?name=' + this.state.username + '&password=' + this.state.password,
            Success: (date) => {
               this.loading && this.loading.hide();
                let data = date
                if (data.length > 0) {
                    if (!window.localStorage) {
                        alert("浏览器不支持localstorage");
                        return false;
                    } else {
                        localStorage.setItem('userInfor', JSON.stringify(data[0]));
                        //  console.log(JSON.parse(localStorage.getItem("userInfor")))
                    }
                    if(key===1){
                        this.props.history.push({pathname: '/menusNew', state: {data: data[0]}})
                    }else{
                        this.props.history.push({pathname: '/menusOld', state: {data: data[0]}})
                    }

                }
            },
            Error: (e) => {
                this.loading && this.loading.hide();
                $this.setState({error: true});
            }
        })


        //this.setState({error: true})
        //传参方式方法一
        // this.props.history.push({ pathname:'/testApp',state:{type: 'sex' } })
        //传参方式方法二
        //this.props.history.push({ pathname:'/menu',state:{type: 'sex' } })
        // this.props.history.push("/menu",{a:'2'})
        //  const w=window.open('about:blank');
        //  w.location.href='/testApp'
        //this.props.history.push("/testApp",{a:'2'})
        // 两种方法参数都在location属性里面
        //传参跳转第三种方法
        // this.props.history.push({ pathname : '/testApp' ,query : { type: 'sex'} }) //不建议使用不安全刷新数据会消失
        // this.props.history.push(  '/testApp'+'2'  )
        // alert(this.state.username+this.state.password)

    }
}

export default Login;
