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

export default class BaseCompent extends Component {
    constructor(props) {
        super(props);
        this.Apis = Api;
        this.strings = {...Index};


    }

// 路由重定向
    replaceTologin() {
        if (!JSON.parse(localStorage.getItem("userInfor"))) {
            this.props.history.replace("/");
        }
    }

//数据请求方法
    Request = (parms) => {
        let $this = this
        console.log(JSON.stringify(parms))
        if (parms.methed === 'get') {
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
                $this.messages('服务器出错!');
                return parms.Error && parms.Error(res)
            });
        }
        if (parms.methed === 'post') {
            console.log(parms.body)
            axios.post(parms.url, parms.body
                )
                .then(res => {
                    console.log(res)
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
                $this.messages('服务器出错!');
                return parms.Error && parms.Error(res)
            });
        }
//以formData的形势传参数
        if (parms.methed === 'logIn') {
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
                $this.messages('服务器出错!');
                return parms.Error && parms.Error(res)
            })
        }

    }

    //渲染loading
    renderLoading = () => {
        return <Loading ref={(component) => this.loading = component}/>;
    };

    getNowDate(key,data= '') {
        //获取当前的时间
        var d = new Date();
        if(data){
            d = new Date(data)
        }
        var year = d.getFullYear();
        var month = d.getMonth() + 1;
        var date = d.getDate();
        var h = d.getHours(); //获取当前小时数(0-23)
        var m = d.getMinutes(); //获取当前分钟数(0-59)
        var s= d.getSeconds()
        var curDateTime = year;
        if (month > 9)
            month =  "-" + month;
        else
            month =  "-0" + month;
        if (date > 9)
            date =  "-" + date;
        else
            date =  "-0" + date;
        if (h > 9)
            h =  " " + h;
        else
            h =  " 0" + h;

        if (m > 9)
            m = ":" + m;
        else
            m =  ":0" + m;
        if (s > 9)
            s = ":" + s;
        else
            s =  ":0" + s;

        if(key==='YYYY-MM-DD'){
            curDateTime=curDateTime+month+date
            return  curDateTime
        } else
        if(key==='YY-MM-DD HH-MM'){
            curDateTime=curDateTime+month+date+h+m
            return curDateTime
        }else
        if(key==='YY-MM-DD HH:MM:SS'){
            curDateTime=curDateTime+month+date+h+m+s
            return curDateTime
        }else
        if(key==='NowYear'){
            curDateTime=curDateTime+'-01'+'-01';
            return curDateTime
        }else
        if(key==='NowMoth'){
            curDateTime=curDateTime+month+'-01';
            return curDateTime
        }
        else{
            curDateTime=curDateTime+month+date+h+m
            return curDateTime
        }
    }

    //提示框
    messages(text, methord = '') {
        if (methord === 'Success') {
            message.success('text')
        }
        if (methord === 'warning') {
            message.warning(text)
        } else {
            message.error(text)
        }
    }

    //头部
    renderTitle(title){
        return(
            <div style={{padding: 20}}>
                <div style={{fontSize: '15px', fontWeight: '600'}}> {title}</div>
            </div>
        )
    }
}


