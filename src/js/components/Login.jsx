import React, {Component} from 'react';
import {Link} from 'react-router';

import Tool from '../../libs/tools/Tool';
import config from '../config/config';
import {Header, Footer} from './common/index';


export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            logname: '',
            logpass: '',
            action: 'login'
        };

        this.submit = () => {
            Tool.post('', this.state, (text) => {
                alert(text);
                console.log(text);
            }, () => {
                console.log('登录失败');
            });
        }

    }
    render() {
        let {logname, logpass} = this.state;
        return (
            <div>
                <Header leftIcon="fanhui" title="登录" />
                <div className="login">
                    <div className="line">
                        <div className="key">
                            <i className="iconfont icon-shouji"></i>
                        </div>
                        <div className="value">
                            <input type="text" defaultValue={logname} placeholder="手机或邮箱" onInput={(e) => { this.state.logname = e.target.value; } } />
                        </div>
                    </div>
                    <div className="line">
                        <div className="key">
                            <i className="iconfont icon-mima"></i>
                        </div>
                        <div className="value">
                            <input type="password" defaultValue={logpass} placeholder="密码"  onInput={(e) => { this.state.logpass = e.target.value; } } />
                        </div>
                    </div>
                    <div className="btn" onClick={this.submit}>登录</div>
                    <div className="forget">
                        <div className="for-logpass">忘记密码？</div>
                    </div>
                </div>

            </div>
        );
    }
};