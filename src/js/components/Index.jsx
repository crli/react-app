import React, {Component} from 'react';
import {Link} from 'react-router';

import { connect } from 'react-redux';
import action from '../actions/action';

import {Header, Footer, Loading} from './common/index';

import Tool from '../../libs/tools/Tool';
import Next from '../../libs/tools/Next';
import config from '../config/config';
/*
    组件入口文件
*/
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.state;
        /*
            初始化
        */
        this.initApp = (props, state) => {
            let {location} = props;
            this.classid = /^\d+$/.test(location.query.classid) ? location.query.classid : config.indexClassId; //如果没有栏目id传过来，默认为0
            location.query.classid = this.classid;
            if (!state.classid[this.classid]) {
                state.classid[this.classid] = Tool.merged(state.def); //没有指定栏目的数据库，将默认的复制过来给指定栏目id
                console.log(state)
            }
        }

        /*
            DOM更新完成
        */
        this.DOMLoad = (props, state) => {
            let {GET_DATA_START, GET_DATA_SUCCESS, GET_DATA_ERROR} = props;
            let classid = state.classid[this.classid];
            let data = { 
                // 有数据库可以使用
                //classid: this.classid,
                // page: classid.page
            };
            window.scrollTo(classid.scrollX, classid.scrollY); //设置滚动条位置
            if (!classid.NextBtn) return false; //已经全部加载完成分页了，无需重新加载
            this.newNext = new Next(this.refs.dataload, {
                url: (__DEVAPI__+"../ajson/list.json"),
                data: data,
                start: (el) => { //开始加载
                    classid.loadState = 0;
                    GET_DATA_START(state);
                },
                load: (data) => { //加载成功
                    //无数据库
                    //模拟后端classid
                    var datas = [];
                    let regid = /classid=/;
                    if(regid.test(window.location.href)){
                        const classId = window.location.href.split("classid=")[1];
                        for(var i in data[0]){
                            datas = datas.concat(data[0][i]);
                        }
                        const aData = datas.filter((item)=> {
                            return item.book_classid == classId        
                        })
                        datas = aData;
                    }else{
                        //模拟后端分页
                        var aPage = data[0][classid.page];
                        if(!aPage){
                            aPage = data[0][classid.page-1];
                            classid.page--
                        }
                        datas = aPage;
                    }
                    
      

                    classid.page++;
                    if (classid.data && datas && classid.data[classid.data.length - 1].id == datas[datas.length - 1].id || !datas) {
                        classid.loadState = 2;
                        classid.loadMsg = '没有了';
                        classid.NextBtn = false;
                        this.newNext.end(); //结束分页插件

                        if (!datas) {
                            classid.title = '';
                            classid.loadMsg = '暂无记录';
                        }

                        return GET_DATA_SUCCESS(state);

                    } else if (Tool.isArray(classid.data)) {
                        Array.prototype.push.apply(classid.data, datas);
                    } else {
                        classid.data = datas;
                    }
                    classid.loadMsg = '上拉加载更多';
                    classid.loadState = 2;
                    if (this.classid === config.indexClassId) {
                        classid.title = config.indexTitle;
                    } else {
                        classid.title = classid.data[0].classname;
                    }

                    GET_DATA_SUCCESS(state);
                },
                error: () => { //加载失败
                    classid.loadState = 1;
                    classid.loadMsg = '加载失败';
                    GET_DATA_ERROR(state);
                }
            });
        }

        /*
            卸载前
        */
        this.unmount = (props, state) => {
            let { SETSCROLL} = props;
            let classid = state.classid[this.classid];
            classid.scrollX = window.scrollX;
            classid.scrollY = window.scrollY;
            SETSCROLL(state); //记录滚动条位置

            if (this.newNext) this.newNext.end(); //结束分页插件
        }

        this.initApp(this.props, this.state);

    }
    render() {
        let {loadState, title, data, loadMsg} = this.state.classid[this.classid];
        let main = null;
        if (Tool.isArray(data)) {
            main = (<ArticleList list={data} />);
        }
        let index = 0;
        let leftTo = null;
        let leftIcon = null;
        if (this.classid !== config.indexClassId) {
            index = 1;
            leftTo = '/Menu';
            leftIcon = 'fanhui';
        }

        return (
            <div>
                <Header leftTo={leftTo} leftIcon={leftIcon} title={title}/>
                {main}
                <div ref="dataload"><Loading loadState={loadState} loadMsg={loadMsg} /></div>
                <Footer index={index}/>
            </div>
        );
    }
    componentDidMount() {
        this.DOMLoad(this.props, this.state);
    }
    componentDidUpdate() {
        if (this.classidBtn) {
            this.DOMLoad(this.props,this.state);
            this.classidBtn = false;
        }
    }
    componentWillUnmount() {
        this.unmount(this.props, this.state);
    }
};

/*
    文章列表
*/
export class ArticleList extends Component {
    render() {
        return (
            <ul className="article-list">
                {
                    this.props.list.map((item, index) => {
                        let {id, book_title, book_content_msg, book_click, classname, book_classid, book_img} = item;
                        
                        let images = null;
                        if (/^http/.test(book_img)) {
                            images = (
                                <div className="pictrue"><img src={book_img} className="pictrue-img"/></div>
                            );
                        }

                        return (
                            <li key={index}className="article-list-item">
                                <Link to={'/article/' + id} className="article-top">
                                    {images}
                                    <h3 className="title">{book_title}</h3>
                                    <div className="content">{book_content_msg}</div>
                                </Link>
                                <div className="article-bottom">
                                    <div className="click">阅读：{book_click}</div>
                                    <div className="to">
                                        <Link to={'/?classid=' + book_classid}>{classname}</Link>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        );
    }
}

export default connect((state) => { return { state: state.classNewList }; }, action('classNewList'))(Index); //连接redux