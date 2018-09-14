/**
 * Created  on 2018/8/6.
 * by leilei
 */
import React from 'react';
import BaseComponent from '../commpent/BaseComponent'
import '../../style/meeting/UseManageNew.css';
import {Icon, Input, Button, Table, Popconfirm} from 'antd';
const Search = Input.Search;
let columns;
export default class NewUseManage extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            pageIndex: 1,
            pageSize: 10,
            PageCount: 0,
            data: [],
            ketWord: '',
            onclickRow: '',
            //新增控制
            replace: true,

            id: '',
            name: '',
            password: '',
            url: '',
            alexa: '',
            country: '',
        }
    }

    componentWillMount() {
        this.replaceTologin()
    }

    componentDidMount() {
        this.getListPage()
    }


    render() {


        //this.state.replace=this.props.clickKey===this.strings.menuEnumeration.UseManageNewLIst?true:false;

        columns = [{
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            align: 'left',
        }, {
            title: '密码',
            dataIndex: 'password',
            key: 'password',
            align: 'left',
        }, {
            title: '链接',
            dataIndex: 'url',
            key: 'url',
            align: 'left',
        }, {
            title: '操作',
            key: 'operation',
            align: 'center',
            render: (text, record, index) => {
                // console.log(text, record, index)
                return (  //塞入内容
                    //record.name 取数据里面的属性
                    <span>
        　　<Button type="primary" className="edit-data" onClick={() => {
              this.edit(text, record, index)
          }} style={{
              backgroundColor: '#5cb85c',
              borderColor: '#5cb85c',
              color: 'white'
          }}>
                        {'编辑'}
                    </Button>
                    <Popconfirm title="请确认是否删除该会议" onConfirm={() => {
                        this.deleteItem(text, record, index)
                    }} onCancel={() => {
                    }}
                                okText="确认" cancelText="取消">

            <Button type="white" className="delete-data" onClick={() => {
                //this.deleteItem(text, record, index)
            }} style={{
                backgroundColor: '#d9534f',
                color: 'white',
                marginLeft: 15, borderColor: '#d9534f'
            }}>
                        {'删除'}
                    </Button>

                </Popconfirm>
        　　
        </span>)
            }
        }];

        //左边按钮类似于多选
        /*let rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User', // Column configuration not to be checked
                name: record.name,
            }),
        };*/


        let Count = this.state.PageCount * 10
        return (
            <div style={{width: '100%'}}>
                {this.renderTitle('账户管理')}

                {this.state.replace&&true ?
                    <div>
                        <div style={{width: 300, marginTop: 10, marginLeft: 40}}>
                            <Search
                                placeholder="请输入搜索的名字"
                                enterButton="搜索"
                                size="large"
                                onSearch={value => {
                                    this.state.ketWord = value;
                                    this.state.pageIndex = 1
                                    this.search()
                                }}
                            />

                        </div>
                        <div>
                            <Button type="primary" onClick={() => {
                                this.addUser()
                            }} style={{position: 'absolute', top: 55, right: 45}}>
                                <Icon type={'user'}/>{'新增'}
                            </Button>
                        </div>
                        <div style={{width: '100%', textAlign: 'center', paddingBottom: 10}}>
                            <div style={{
                                width: '95%',
                                // border: ' 1px solid #1890ff',
                                marginLeft: '2.5%',
                                marginRight: '2.5%',
                                paddingLeft: 10,
                                paddingRight: 10,
                                marginTop: 10,
                                position: 'relative'
                            }}>

                                <Table dataSource={this.state.data} pagination={{
                                    defaultCurrent: 1, total: Count,showQuickJumper: true,
                                    onChange: (i) => {
                                        //table 变化
                                        // 点击下角翻页
                                        this.onChange(i)
                                    }
                                }
                                }
                                       align={'center'}

                                       onChange={(e) => {
                                           //table改变点击下角标会走
                                           // console.log(e)
                                       }}
                                    //加上左边选择按钮
                                    /* rowSelection={rowSelection}*/

                                    //点击行
                                       onRow={(record, rowkey) => {

                                           return {

                                               onClick: this.rowClick.bind(this, record, rowkey)    //点击行 record 指的本行的数据内容，rowkey指的是本行的索引

                                           }

                                       }}

                                       columns={columns}/>

                            </div>
                        </div>
                    </div>
                    : <div style={{marginTop: 20, marginLeft: 20, marginBottom: 20}}>
                        <div>
                            姓名 : <Input placeholder="请输入姓名" style={{width: 150}}
                                        value={this.state.name}
                                        onChange={(e) => {
                                            this.setState({name: e.target.value});
                                        }}
                        />
                            &nbsp;  密码 : <Input placeholder="请输入密码" style={{width: 150}}
                                                value={this.state.password}
                                                onChange={(e) => {
                                                    this.setState({password: e.target.value});
                                                }}
                        />
                            &nbsp;  链接 : <Input placeholder="请输入链接" style={{width: 150}}
                                                value={this.state.url}
                                                onChange={(e) => {
                                                    this.setState({url: e.target.value});
                                                }}
                        />
                            &nbsp;  排名 : <Input placeholder="请输入排名" style={{width: 150}}
                                                value={this.state.alexa}
                                                onChange={(e) => {
                                                    this.setState({alexa: e.target.value});
                                                }}
                        />
                            &nbsp;  城市 : <Input placeholder="请输入城市" style={{width: 150}}
                                                value={this.state.country}
                                                onChange={(e) => {
                                                    this.setState({country: e.target.value});
                                                }}
                        />

                        </div>
                        <br/>
                        <div style={{width: '100%', textAlign: 'center'}}>
                            <Button type="primary" onClick={() => {
                                this.saveUser()
                            }} style={{}}>
                                {'确认'}
                            </Button>
                        </div>


                    </div>}


                {this.renderLoading()}

            </div>
        );
    }

    //点击下角标的变化
    onChange(i) {
        this.state.pageIndex = i;
        if (!this.state.ketWord.length) {
            this.getListPage()
        } else {
            this.search()
        }
    }


    //获取默认数据
    getListPage() {

        this.loading && this.loading.show();
        this.Request({
            methed: 'get',
            url: this.Apis.GetListPage + '?pageIndex=' + this.state.pageIndex + '&pageSize=' + this.state.pageSize,
            Success: (data) => {
                this.loading && this.loading.hide();
                let date = data.data
                date.map((item, index) => {
                    return item.key = index + 1
                })
                this.setState({
                    data: date,
                    PageCount: data.pageCount
                })
            },
            Error: (e) => {
                this.loading && this.loading.hide();
            }
        })
    }

    //搜索
    search() {
        if (this.state.ketWord) {
            this.loading && this.loading.show();
            this.Request({
                methed: 'get',
                url: this.Apis.GetListPage + '?pageIndex=' + this.state.pageIndex + '&pageSize=' + this.state.pageSize + '&name=' + this.state.ketWord,
                Success: (data) => {
                    this.loading && this.loading.hide();
                    console.log(data)
                    let date = data.data
                    date.map((item, index) => {
                        return item.key = index + 1
                    })

                    this.setState({
                        data: date,
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

//点击tabl每行出发的函数
    rowClick(record, rowkey) {
        this.state.onclickRow = record
        this.onclickRow = record
        this.setState({})
        //  console.log('点击行',record,rowkey)

    }

    addUser(){
        this.state.id = '';
        this.state.name = '';
        this.state.password = '';
        this.state.url = '';
        this.state.alexa = '';
        this.state.country = '';
        this.state.replace = false;
        this.setState({})
    }

    //编辑
    edit(text, record, index) {
        console.log('点击编辑', text, record, index)
        this.state.id = record.id;
        this.state.name = record.name;
        this.state.password = record.password;
        this.state.url = record.url;
        this.state.alexa = record.alexa;
        this.state.country = record.country;
        this.state.replace = false;
        this.setState({})
    }

    //删除
    deleteItem(text, record, index) {
        this.loading && this.loading.show();
        console.log('点击删除', text, record, index)
        this.Request({
            methed: 'post',
            url: this.Apis.DeleteUser + '?id=' + record.id,
            Success: (data) => {
                console.log(data)
                this.onChange(this.state.pageIndex)
                this.loading && this.loading.hide();

            },
            Error: (e) => {
                this.loading && this.loading.hide();
            }
        })
    }

    //新增或编辑保存数据
    saveUser() {
         let   body = {
                id: this.state.id,
                name: this.state.name,
                password: this.state.password,
                url: this.state.url,
                alexa: this.state.alexa,
                country: this.state.country
            }
            this.loading && this.loading.show();
            this.Request({
                methed: 'post',
                url: this.Apis.SaveUser,
                body: body,
                Success: (data) => {
                    console.log(data);
                    this.state.replace = true;
                    this.state.id = '';
                    this.state.name = '';
                    this.state.password = '';
                    this.state.url = '';
                    this.state.alexa = '';
                    this.state.country = '';
                    this.onChange(this.state.pageIndex);
                    this.loading && this.loading.hide();
                },
                Error: (e) => {
                    this.loading && this.loading.hide();
                }
            })
    }

}

