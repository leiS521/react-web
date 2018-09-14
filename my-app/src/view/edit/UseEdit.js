/**
 * Created  on 2018/8/23.
 * by leilei
 */
import React from 'react';
import Editor from 'react-umeditor';
//注意把插件里的less转换成css样式
import  'react-umeditor/dist/less/editor.css'
import BaseComponent from '../commpent/BaseComponent'
export default class UseEdit extends BaseComponent {
    constructor(props){
        super(props);
        this.state = {
            content: "",
            address:'',
            lng:'',
            lat:'',
        }
    }

    componentDidMount() {

        var ac=  new window.BMap.Autocomplete({ 'input': 'suggestId', 'location': '北京市' });
        let $this=this
        this.onconfirm=  ac.addEventListener("onconfirm", function (e) {
            var _value = e.item.value;

            let search=_value.province + _value.city + _value.district + _value.street + _value.business;
            var local = new window.BMap.LocalSearch('北京市', {
                onSearchComplete: function () {
                    var pp = local.getResults().getPoi(0).point;
                    console.log(pp)
                    $this.state. address=_value.city+_value.district+_value.business
                    $this.state.lat=pp.lat;
                    $this.state.lng=pp.lng
                    $this.setState({})
                }
            });
            local.search(search);

        });

    }

    handleChange(content){
        this.setState({
            content: content
        })
    }
    getIcons(){
        var icons = [
            "source | undo redo | bold italic underline strikethrough fontborder emphasis | ",
            "paragraph fontfamily fontsize | superscript subscript | ",
            "forecolor backcolor | removeformat | insertorderedlist insertunorderedlist | selectall | ",
            "cleardoc  | indent outdent | justifyleft justifycenter justifyright | touppercase tolowercase | ",
            "horizontal date time  | image emotion spechars | inserttable"
        ]
        return icons;
    }
    getPlugins(){
        return {
            "image": {
                "uploader": {
                    "name":"file",
                    "url": "/api/upload"
                }
            }
        }
    }

    render() {
        var icons = this.getIcons();
        var plugins = this.getPlugins();
        return (
            <div>
                {this.renderTitle('编辑器')}

            <Editor ref="editor"
                        icons={icons}
                        value={this.state.content} defaultValue="<p>React Umeditor</p>"
                        onChange={this.handleChange.bind(this)}
                        plugins={plugins} />

                <div style={{float: 'left', marginLeft: 45, marginTop: 20}}>
                    <input  id='suggestId'
                            placeholder="请输入地址"/>

                    {this.state.address?<div style={{marginTop:20}}>{this.state.address+'('+this.state.lng+','+this.state.lat+')'}</div>:null}
                </div>
            </div>
        )
    }
}