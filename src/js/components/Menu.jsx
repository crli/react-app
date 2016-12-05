import React, {Component} from 'react';
import {Link} from 'react-router';

import { connect } from 'react-redux';
import action from '../actions/action';

import Tool from '../../libs/tools/Tool';
import config from '../config/config';
import {Header, Footer, Loading} from './common/index';

class Menu extends Component {
    constructor(props) {
        super(props);
        /*
            DOM 更新完成后执行方法
        */
        this.DOMLoad = (props) => {
            let {state, GET_DATA_SUCCESS, GET_DATA_ERROR} = props;
            window.scrollTo(state.scrollX, state.scrollY); //设置滚动条位置
            console.log(state);
            if (state.loadState !== 2) {
                this.ajax = Tool.get((__DEVAPI__+'../ajson/wapindex.json'), {}, GET_DATA_SUCCESS, GET_DATA_ERROR);
            }
        }

        this.unmount = (props, state) => {

            if (this.ajax) this.ajax.end(); //解除ajax相关
            props.SETSCROLL();
        }

    }
    render() {
        let main = null;
        console.log(this.props.state);
        let {loadState, loadMsg, data} = this.props.state;
        switch (loadState) {
            case 0:
                main = (<Loading loadState={loadState} loadMsg={loadMsg} />);
                break;
            case 1:
                main = (<div>加载失败</div>);
            case 2:
                main = (<MenuList list={data} />);
                break;
        }
        return (
            <div>
                <Header title="分类" />
                {main}
                <Footer index="1"/>
            </div>
        );
    }
    componentDidMount() {
        this.DOMLoad(this.props);
    }
    componentWillUnmount() {
        this.unmount(this.props);
    }
};

class MenuList extends Component {
    render() {
        return (
            <nav className="class">
                <ul className="clearfix">
                    {
                        this.props.list.map((item, index) => {
                            let {classname, classid} = item;
                            return (
                                <li key={index}>
                                    <Link to={'/?classid=' + classid}>{classname}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        );
    }
}

export default connect((state) => { return { state: state.classMenuList }; }, action('classMenuList'))(Menu); //连接redux