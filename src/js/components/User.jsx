import React, {Component} from 'react';
import {Link} from 'react-router';

import {Header, Footer} from './common/index';
class User extends Component {
    render() {
        return (
            <div>
                <Header title="我的" />
                <div className="user">
                    <div className="head">
                        <div className="headimg">
                            <Link to="#">
                                <div className="headimg-pictrue"></div>
                                <div className="headimg-name">Cristiano_LN</div>
                                <div className="arrow">
                                    <i className="iconfont icon-arrow-right"></i>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="logins">
                        <div className="item">
                            <Link to="/login">登录</Link>
                        </div>
                        <div className="item">
                            <Link to="/register">注册</Link>
                        </div>
                    </div>
                    <ul className="nav">
                        <li>
                            <Link to="#">
                                <div className="font">
                                    <i className="iconfont icon-wenzhang"></i>
                                </div>
                                <div className="tit">我的文章</div>
                                <div className="arrow">
                                    <i className="iconfont icon-arrow-right"></i>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <div className="font">
                                    <i className="iconfont icon-wodexiaoxi"></i>
                                </div>
                                <div className="tit">我的消息</div>
                                <div className="arrow">
                                    <i className="iconfont icon-arrow-right"></i>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <div className="font">
                                    <i className="iconfont icon-1111103"></i>
                                </div>
                                <div className="tit">我的收藏</div>
                                <div className="arrow">
                                    <i className="iconfont icon-arrow-right"></i>
                                </div>
                            </Link>
                        </li>
                    </ul>
                    <ul className="nav">
                        <li>
                            <Link to="#">
                                <div className="font">
                                    <i className="iconfont icon-baitianmoshi"></i>
                                </div>
                                <div className="tit">夜间模式</div>
                                <div className="arrow">
                                    <i className="iconfont icon-arrow-right"></i>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <div className="font">
                                    <i className="iconfont icon-shezhi"></i>
                                </div>
                                <div className="tit">通用设置</div>
                                <div className="arrow">
                                    <i className="iconfont icon-arrow-right"></i>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <div className="font">
                                    <i className="iconfont icon-fankui"></i>
                                </div>
                                <div className="tit">意见反馈</div>
                                <div className="arrow">
                                    <i className="iconfont icon-arrow-right"></i>
                                </div>
                            </Link>
                        </li>
                    </ul>
                    <ul className="nav">
                        <li>
                            <Link to="#">
                                <div className="font">
                                    <i className="iconfont icon-lianxikefu"></i>
                                </div>
                                <div className="tit">联系我们</div>
                                <div className="arrow">
                                    <i className="iconfont icon-arrow-right"></i>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/About"}>
                                <div className="font">
                                    <i className="iconfont icon-guanyu"></i>
                                </div>
                                <div className="tit">关于</div>
                                <div className="arrow">
                                    <i className="iconfont icon-arrow-right"></i>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
                <Footer index="2"/>
            </div>
        );
    }
};
export default User;