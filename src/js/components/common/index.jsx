import React, {Component} from 'react';
import {Link} from 'react-router';
/*
    全局公共头部
*/
export class Header extends Component {
    render() {
        let {title, leftTo, leftIcon} = this.props;
        let left = null;

        if (leftTo && leftIcon) {
            left = (
                <Link to={leftTo}>
                    <i className={'iconfont icon-' + leftIcon}></i>
                </Link>
            );
        } else if (leftIcon === 'fanhui') { //返回上一页
            left = (
                <a onClick={this.context.router.goBack}>
                    <i className={'iconfont icon-' + leftIcon}></i>
                </a>
            );
        }
      
        return (
            <header>
                <div className="zhanwei"></div>
                <div className="header-wrap">
                    <div className="icon" >
                        {left}
                    </div>
                    <h2 className="header-title">{title}</h2>
                    <div className="icon" >
                        
                    </div>
                </div>
            </header>
        )
    }
}

Header.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export class Loading extends Component {
    render() {
        return (
            <div className={'data-load data-load-' + this.props.loadState}>
                <div className="msg">{this.props.loadMsg}</div>
            </div>
        );
    }
}

export class Footer extends Component {
    render() {
        let arr = [];
        arr[this.props.index] = 'on';
        return (
            <footer>
                <div className="zhanwei"></div>
                <ul className="menu">
                    <li className={arr[0]}>
                        <Link to="/">
                            <i className="iconfont icon-zhuye"></i>首页
                        </Link>
                    </li>
                    <li className={arr[1]}>
                        <Link to="/Menu">
                            <i className="iconfont icon-caidan"></i>分类
                        </Link>
                    </li>
                    <li className={arr[2]}>
                        <Link to="/User">
                            <i className="iconfont icon-gerenzhongxin"></i>我的
                        </Link>
                    </li>
                </ul>
            </footer>
        );
    }
}