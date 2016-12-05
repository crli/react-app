import React, {Component} from 'react';
import {Link} from 'react-router';

import Tool from '../../libs/tools/Tool';
import config from '../config/config';
import {Header} from './common/index';


export default class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            output: 'json',
            tousername: '', //手机号码
            tonickname: '', // 昵称
            topassword: '', //密码
            toemail: '', //邮箱
            classid: config.indexClassId
        };

        this.submit = () => {
            Tool.post('', this.state, (text) => {
                alert(text);
                console.log(text);
            }, () => {
                console.log('注册失败');
            });
        }

    }
    render() {
        let { tousername, tonickname, topassword, toemail, codecheck } = this.state;
        return (
            <div>
                <Header leftIcon="fanhui" title="注册" />
                <div className="login">
                    <div className="line">
                        <div className="key" >
                            <i className="iconfont icon-xiaoxi"></i>
                        </div>
                        <div className="value">
                            <input type="text" defaultValue={tousername} placeholder="手机号码" onInput={(e) => { this.state.tousername = e.target.value; } } />
                        </div>
                    </div>
                    <div className="line">
                        <div className="key" >
                            <i className="iconfont icon-xiaoxi"></i>
                        </div>
                        <div className="value">
                            <input type="text" defaultValue={tonickname} placeholder="昵称" onInput={(e) => { this.state.tonickname = e.target.value; } } />
                        </div>
                    </div>
                    <div className="line" >
                        <div className="key" >
                            <i className="iconfont icon-xiaoxi"></i>
                        </div>
                        <div className="value">
                            <input type="text" defaultValue={topassword} placeholder="邮箱" onInput={(e) => { this.state.topassword = e.target.value; } } />
                        </div>
                    </div>
                    <div className="line" >
                        <div className="key" >
                            <i className="iconfont icon-xiaoxi"></i>
                        </div>
                        <div className="value">
                            <input type="password" defaultValue={toemail} placeholder="密码"  onInput={(e) => { this.state.toemail = e.target.value; } } />
                        </div>
                    </div>
                    <div className="btn" onClick={this.submit}>注册</div>
                </div>
            </div>
        );
    }
};