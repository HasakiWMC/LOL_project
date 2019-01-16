import React, {Component} from 'react';

import {Input,Button} from 'antd';
import '../../scss/changePwd.scss'

class ChangePwd extends Component {
    render() {
        return (
            <div className="box">
                <div className="changePwd">
                    <div className="content">
                        <div className="label_changePwd">Change Password</div>
                        <div className="input-label">New Password</div>
                        <Input className="cw-input"/>
                        <div className="input-label">Re-enter New Password</div>
                        <Input className="cw-input" />
                        <div className="input-label">Old Password</div>
                        <Input className="cw-input cw-input-last" />
                        <div>
                        <Button type="primary">Submit</Button>
                        <Button type="default">Cancel</Button>
                        </div>
                        <div>
                            <span>
                                WO
                            </span>
                            <span>
                                NI
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChangePwd;