/**
 * Created  on 2018/8/3.
 * by leilei
 */
import React, {Component} from 'react';
import {Spin} from 'antd';

class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }

    render() {
        return (
            <div style={{
             /*   width: '100%', height: '100%', textAlign: 'center', position: 'absolute',
                top: 0 ,*/
            }}>
                <div style={{position: 'absolute', left: '50%', top: '50%'}}>
                    <Spin style={{position: 'absolute', left: '50%', top: '50%'}} className='loading' spinning={this.state.loading} size="large"/>
          </div>

            </div>
        );
    }

    show() {
        this.setState({
            loading: true
        })
    }

    hide() {
        this.setState({
            loading: false
        })
    }
}

export default Loading;