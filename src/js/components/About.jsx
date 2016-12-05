import React, {Component} from 'react';
import {Link} from 'react-router';

import config from '../config/config';
import {Header} from './common/index';

class About extends Component {
    render() {
        return (
            <div>
                <Header leftIcon="llmainpageback" title="关于" />
                <div className="about">
                    <div>项目地址：<a href="https://github.com/crli/react-app" target="_blank">https://github.com/crli/react-app</a></div>
                </div>
            </div>
        );
    }
};


export default About;