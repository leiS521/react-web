/**
 * Created  on 2018/8/6.
 * by leilei
 */
import React from 'react';
import BaseComponent from '../commpent/BaseComponent'
import '../../style/meeting/UseManage.css';
import {Icon, Input, Button,} from 'antd';

const Search = Input.Search;

export default class UseManage extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            pageIndex: 1,
            pageSize: 10,
            PageCount: 0,
            data: [],
            ketWord: ''
        }
    }

    componentWillMount() {
        this.replaceTologin()
    }

    componentDidMount() {
        this.getListPage()
    }

    render() {
        return (
            <div className="panel panel-primary ng-scope">

                <div className="panel-heading">
                    <b><Icon type="star-o" style={{fontSize: 16, color: 'white', marginRight: '10px'}}/>会议</b>
                </div>
                <div style={{width: 300, marginTop: 10, marginLeft: 28}}>
                    <Search
                        placeholder="请输入搜索的名字"
                        enterButton="搜索"
                        size="large"
                        onSearch={value => {
                            this.state.ketWord = value;
                            this.state.pageIndex = 1
                            this.search(value)
                        }}
                    />

                </div>
                <div>
                    <Button type="primary" onClick={() => {
                    }} style={{position: 'absolute', top: 55, right: 45}}>
                        <Icon type={'user'}/>{'新增'}
                    </Button>
                </div>
                <div style={{width: '100%', textAlign: 'center'}}>
                    <div style={{
                        width: '95%',
                        border: ' 1px solid #1890ff',
                        marginLeft: '2.5%',
                        marginRight: '2.5%',
                        paddingLeft: 10,
                        paddingRight: 10,
                        marginTop: 10,
                        height: 390,
                        position: 'relative',
                        marginBottom:10
                    }}>
                        <table style={{width: '100%'}} border="0" cellPadding={0} cellSpacing={0}>
                            <tbody>
                            <tr style={{height: 30}}>
                                <th style={{width: '40%', height: 30}}>名字</th>
                                <th style={{width: '30%', height: 30}}>密码</th>
                                <th style={{width: '30%', height: 30}}>链接</th>
                            </tr>


                            {
                                this.state.data.map((item, index) => {
                                    return (
                                        <tr key={index} style={{height: 30}}>
                                            <td style={{width: '40%', height: 30}}>{item.name}</td>
                                            <td style={{width: '30%', height: 30}}>{item.password}</td>
                                            <td style={{width: '30%', height: 30}}>{item.country}</td>
                                        </tr>
                                    )

                                })
                            }
                            </tbody>
                        </table>

                        <div style={{
                            height: 20, position: 'absolute',
                            bottom: 25
                        }}>
                            <Button type="primary" onClick={() => {
                                this.upPage()
                            }} style={{}}>
                                {'上一页'}
                            </Button>
                            <Button type="primary" onClick={() => {
                                this.dowPage()
                            }} style={{marginLeft: 10}}>
                                {'下一页'}
                            </Button>
                            <Button type="primary" onClick={() => {
                            }} style={{marginLeft: 10}}>
                                总页数{this.state.pageIndex}/{this.state.PageCount}
                            </Button>
                        </div>
                    </div>
                </div>

                {this.renderLoading()}

            </div>
        );
    }

    //获取默认数据
    getListPage() {

        this.loading && this.loading.show();
        this.Request({
            methed: 'get',
            url: this.Apis.GetListPage + '?pageIndex=' + this.state.pageIndex + '&pageSize=' + this.state.pageSize,
            Success: (data) => {
                this.loading && this.loading.hide();
                console.log(data)
                this.setState({
                    data: data.data,
                    PageCount: data.pageCount
                })
            },
            Error: (e) => {
                this.loading && this.loading.hide();
            }
        })
    }

    //搜索
    search(value) {
        if (value) {
            this.loading && this.loading.show();
            this.Request({
                methed: 'get',
                url: this.Apis.GetListPage + '?pageIndex=' + this.state.pageIndex + '&pageSize=' + this.state.pageSize + '&name=' + value,
                Success: (data) => {
                    this.loading && this.loading.hide();
                    console.log(data)
                    this.setState({
                        data: data.data,
                        PageCount: data.pageCount
                    })
                },
                Error: (e) => {
                    this.loading && this.loading.hide();
                }
            })
        } else {
            this.state.pageIndex = 1;
            this.getListPage()
        }

    }

    //上一页
    upPage() {
        if (this.state.pageIndex !== 1) {
            if (!this.state.ketWord.length) {
                this.state.pageIndex--
                this.getListPage()
            } else {
                this.state.pageIndex--

                this.search(this.state.ketWord)
            }
        }


    }

    //下一页
    dowPage() {
        if (this.state.pageIndex !== this.state.PageCount) {
            if (!this.state.ketWord.length) {
                this.state.pageIndex++
                this.getListPage()
            } else {
                this.state.pageIndex++

                this.search(this.state.ketWord)
            }
        }

    }

}

