import React from 'react';
//import logo from '../../image/login/login_logo.png';
import '../../style/login/Login.css';
//import login_title from '../../image/login/login_title.png';

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

    componentWillMount() {
        //判断登陆过没有，登陆过直接跳转到首页
        let tokenInfo=JSON.parse(localStorage.getItem("authorization"))
        console.log(tokenInfo)
        if (tokenInfo&& new Date(tokenInfo.expires_time) > new Date()) {
            //清除主菜单记录存储
            localStorage.removeItem(this.strings.keyEnumeration.menuDefaultSelect);
            localStorage.removeItem(this.strings.keyEnumeration.parentMenuIndex);
            //清除子菜单记录存储
            localStorage.removeItem(this.strings.keyEnumeration.menuDefaultSelectChild);
            this.props.history.push({pathname: '/menus/home'})
        }
    }

    componentDidMount() {
        //组件挂载时候，注册keypress事件
       // document.addEventListener('keypress', this.handleEnterKey)
    }

    componentWillUmount() {
        //组件卸载时候，注销keypress事件
       // document.removeEventListener("keypress", this.handleEenterKey)
    }

//判断点击的键盘的keyCode是否为13，是就调用上面的搜索函数
    handleEnterKey = (e) => {
        if (e.nativeEvent.keyCode === 13) { //主要区别就是这里，可以直接获取到keyCode的值
            this.submit()
        }
    }


    render() {
        return (
            <div className="login">
                {/*<div className='sun_logo'>
                    <img src={logo} className="" style={{width: "298px",}} alt="logo"/>
                </div>*/}

                <div className="logo_box ng-scope">
                    {/*<h3>
                        <img src={login_title} alt="远洋移动办公" style={{width: "265px"}}/>
                    </h3>*/}
                    <div className="ng-pristine ng-valid" style={{width: "280px"}}>
                        <div className="input_outer">
                            <span className="username"></span>
                            <input type="text" placeholder="请输入账号"
                                   onChange={(e) => {
                                       this.setState({username: e.target.value})
                                   }}
                                   onKeyPress={this.handleEnterKey}
                                   className="ng-pristine ng-valid"/>
                        </div>
                        <div className="input_outer">
                            <span className="password"></span>
                            <input type="password" placeholder="请输入密码"
                                   onChange={(e) => {

                                       this.setState({password: e.target.value})
                                   }}
                                   onKeyPress={this.handleEnterKey}
                                   className="ng-pristine ng-valid"/>
                        </div>
                        <div className="sun_btn">
                            <button  onKeyPress={this.handleEnterKey} onClick={() => this.submit(1)}>登录</button>
                        </div>
                    </div>
                    {this.state.error ? <div className="sun_message ng-binding" style={{fontSize: 14}}>
                        登录失败：用户名或密码错误
                    </div> : <div className="sun_message ng-binding">

                    </div>}
                    <div className="sun_copyright">
                        leiTher提供计算服务 © 2018-10-05--
                    </div>
                </div>
                {this.renderLoading()}
            </div>
        );


    }

//点击登录按钮
    submit() {
        let $this = this
       this.loading && this.loading.show();

        this.Request({
            method: 'LogIn',
            url: this.Apis.loginToken + '?name=' + this.state.username + '&password=' + this.state.password,
            Success: (date) => {
                if (date) {
                    if (!window.localStorage) {
                        alert("浏览器不支持localstorage");
                        return false;
                    } else {
                        localStorage.setItem(this.strings.keyEnumeration.authorization, JSON.stringify(date));
                        this.getMenues('login')
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
