/**
 * Created  on 2018/8/3.
 * by leilei
 */
import React, {Component} from 'react';
import {Api} from './Api';
import axios from 'axios';
import {message} from 'antd';
import Loading from './Loading'
import {Index} from '../../strings/Index'
import eventProxy from 'react-eventproxy'

export default class BaseCompent extends Component {
    constructor(props) {
        super(props);
        this.Apis = Api;
        this.strings = {...Index};


    }

// 路由重定向
    replaceTologin() {
        let tokenInfo = JSON.parse(localStorage.getItem(this.strings.keyEnumeration.authorization))
        if (!tokenInfo || new Date(tokenInfo.expires_time) < new Date()) {
            localStorage.removeItem(this.strings.keyEnumeration.authorization);
            this.props.history.push("/");
        }




        //路由权限限制
        if (this.props.location) {
            let RoterNowList = this.props.location.pathname.split("/")
            let number = RoterNowList.length
            let nowKey = RoterNowList[number - 1]

            //现在所有的路由key
            let Keys = JSON.parse(localStorage.getItem(this.strings.keyEnumeration.keyList)) ? JSON.parse(localStorage.getItem(this.strings.keyEnumeration.keyList)) : [];
            //  console.log(Keys)

            if (Keys.length > 0 && Keys.indexOf(nowKey) === -1) {
                this.props.history.push({pathname: '/menusNew/tools/noAuthority'})
            }
        }

    }

//数据请求方法
    Request = (parms) => {
        console.log(JSON.stringify(parms))
        let $this = this
        //token验证
        let hearders;
        let tokenInfor;
        if (parms.method !== 'LogIn') {
            this.replaceTologin()
            if (!JSON.parse(localStorage.getItem("authorization"))) {
                this.props.history.replace("/");
                return
            } else {
                tokenInfor = JSON.parse(localStorage.getItem("authorization"))
            }
            hearders = {
                'Authorization': tokenInfor.token_type + ' ' + tokenInfor.access_token
            }
        }
        //登录接口

        if (parms.method === 'LogIn') {
            axios.get(parms.url)
                .then(res => {
                    if (res.status === 401) {
                        this.props.history.replace("/");
                    }
                    if (res.status === 200) {
                        let data = res.data.data
                        return parms.Success && parms.Success(data)
                    } else {
                        this.messages('服务器出错!');
                        return parms.Error && parms.Error(res)
                    }

                }).catch(function (res) {
                $this.CatchError(parms, res, $this)
            });
        }
        if (parms.method === 'get') {
            axios.get(parms.url,
                {headers: hearders})
                .then(res => {
                    if (res.status === 200) {
                        let data = res.data
                        if (!data.state && data.message) {
                            this.messages(data.message);
                            return parms.Error && parms.Error(res)
                        } else {
                            let dataContent=data.data
                            return parms.Success && parms.Success(dataContent)
                        }

                    } else {
                        this.messages('服务器出错!');
                        return parms.Error && parms.Error(res)
                    }

                }).catch(function (res) {
                $this.CatchError(parms, res, $this)
            });
        }

        if (parms.method === 'post') {
            axios.post(parms.url,
                parms.body,
                {headers: hearders}
            )
                .then(res => {
                    if (res.status === 200) {

                        let data = res.data
                        if (!data.state && data.message) {
                            this.messages(data.message);
                            return parms.Error && parms.Error(res)
                        } else {
                            return parms.Success && parms.Success(data)
                        }
                    } else {
                        this.messages('服务器出错!');
                        return parms.Error && parms.Error(res)
                    }
                }).catch(function (res) {
                $this.CatchError(parms, res, $this)
            });
        }
        if (parms.method === 'postFormData') {
            axios({
                url: parms.url,
                method: 'post',
                data: parms.body,

                headers: {
                   'Authorization': 'Bearer ' + tokenInfor.access_token,
                    'Content-Type': 'multipart/form-data'
                },
            }).then(res => {
                if (res.status === 401) {
                    this.props.history.replace("/");
                }
                if (res.status === 200) {
                    let data = res.data.data
                    return parms.Success && parms.Success(data)
                } else {
                    this.messages('服务器出错!');
                    return parms.Error && parms.Error(res)
                }
            }).catch(function (res) {
                $this.CatchError(parms, res, $this)
            })
        }

//以formData的形势传参数
        if (parms.method === 'logIn') {
            axios({
                url: parms.url,
                method: 'post',
                data: parms.body,
                transformRequest: [function (data) {
                    let ret = ''
                    for (let it in data) {
                        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                    }
                    return ret
                }],
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(res => {
                if (res.status === 401) {
                    this.props.history.replace("/");
                }
                if (res.status === 200) {
                    let data = res.data
                    return parms.Success && parms.Success(data)
                } else {
                    this.messages('服务器出错!');
                    return parms.Error && parms.Error(res)
                }
            }).catch(function (res) {
                $this.CatchError(parms, res, $this)
            })
        }

    }

    //所有的catch
    CatchError(parms, res, $this) {
        if (!res.response) {
            $this.messages('网络开小差了!', 'warning');
            parms.Error && parms.Error(res);
        }
        else if (res.response && res.response.status === 401) {
            $this.tokenInvalid(res);
            parms.Error && parms.Error(res);
        }
        else if (res.response && res.response.status === 404) {
            $this.messages('不存在该数据接口！');
            parms.Error && parms.Error(res);
        }
        else {
            $this.messages('服务器出错!');
            parms.Error && parms.Error(res);
        }
    }

    //拦截Token失效
    tokenInvalid(res) {
        localStorage.removeItem(this.strings.keyEnumeration.authorization);
        this.props.history.replace("/");
    }


    //获取菜单

    getMenues(type){
        this.Request({
            method: 'get',
            url: this.Apis.GetUserRoleMenu,
            Success: (data) => {
                console.log(data)
                this.loading && this.loading.hide();
                let menu=[{ key: 'home',
                    icon: 'home',
                    title: '首页',
                    path:'/menusNew/home'}]
                menu=menu.concat(data)
                localStorage.setItem('menu', JSON.stringify(menu))


                //页面跳转

                localStorage.removeItem(this.strings.keyEnumeration.menuDefaultSelect);
                localStorage.removeItem(this.strings.keyEnumeration.parentMenuIndex);
                //新版
                localStorage.removeItem(this.strings.keyEnumeration.menuDefaultSelectChild);


                let Keys = ['', 'menusNew','screen','screenImage','screenSetting',]
                menu.forEach((item, index) => {
                    Keys.push(item.key)
                    item.child && item.child.forEach((Item, Index) => {
                        Keys.push(Item.key)
                    })
                })

                localStorage.setItem(this.strings.keyEnumeration.keyList, JSON.stringify(Keys))


                if(type!=='login'){
                    this.messages('由于您操作菜单相关操作系通自动刷新','warning')
                    eventProxy.trigger('refreshMenu');
                }

                this.props.history.push({pathname: '/menusNew/home'})


            },
            Error: (e) => {
                localStorage.removeItem(this.strings.keyEnumeration.authorization);
                this.loading && this.loading.hide();
            }
        })
    }



    //渲染loading
    renderLoading = () => {
        return <Loading ref={(component) => this.loading = component}/>;
    };

    getNowDate(key, data = '') {
        //获取当前的时间
        var d = new Date();
        if (data) {
            d = new Date(data)
        }
        var year = d.getFullYear();
        var month = d.getMonth() + 1;
        var date = d.getDate();
        var h = d.getHours(); //获取当前小时数(0-23)
        var m = d.getMinutes(); //获取当前分钟数(0-59)
        var s = d.getSeconds()
        var curDateTime = year;
        if (month > 9)
            month = "-" + month;
        else
            month = "-0" + month;
        if (date > 9)
            date = "-" + date;
        else
            date = "-0" + date;
        if (h > 9)
            h = " " + h;
        else
            h = " 0" + h;

        if (m > 9)
            m = ":" + m;
        else
            m = ":0" + m;
        if (s > 9)
            s = ":" + s;
        else
            s = ":0" + s;

        if (key === 'YYYY-MM-DD') {
            curDateTime = curDateTime + month + date
            return curDateTime
        } else if (key === 'YY-MM-DD HH-MM') {
            curDateTime = curDateTime + month + date + h + m
            return curDateTime
        } else if (key === 'YY-MM-DD HH:MM:SS') {
            curDateTime = curDateTime + month + date + h + m + s
            return curDateTime
        } else if (key === 'NowYear') {
            curDateTime = curDateTime + '-01' + '-01';
            return curDateTime
        } else if (key === 'NowMoth-01') {
            curDateTime = curDateTime + month + '-01';
            return curDateTime
        }if (key === 'NowMoth') {
            curDateTime = curDateTime + month ;
            return curDateTime
        }
        else {
            curDateTime = curDateTime + month + date + h + m
            return curDateTime
        }
    }

    //提示框
    messages(text, methord = '') {
        if (methord === 'Success') {
            message.success('text')
        } else if (methord === 'warning') {
            message.warning(text)
        } else {
            message.error(text)
        }
    }

    //头部
    renderTitle(title) {
        return (
            <div style={{padding: 20}}>
                <div style={{fontSize: '15px', fontWeight: '600'}}> {title}</div>
            </div>
        )
    }

}


