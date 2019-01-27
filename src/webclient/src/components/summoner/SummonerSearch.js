import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import '../../scss/summonerSearch.scss'

import {Input, Select, Form} from 'antd';

const Search = Input.Search;
const FormItem = Form.Item;

const selectDefaultValue = "KR";

class SummonerSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            region: selectDefaultValue,
            summonerName: ""
        };

        this.onSelectChange = this.onSelectChange.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    onSelectChange(value) {
        this.setState({"region": value});
    }

    onSearch(value) {
        if (value !== "") {
            const newSummoner = {
                "region": this.state.region,
                "summonerName": value
            };
            this.props.history.push(`/summoner/${newSummoner.region}/${newSummoner.summonerName}`);
        }
    }

    render() {
        const selectBefore = (
            <Select defaultValue={selectDefaultValue} style={{width: "120px"}} onChange={this.onSelectChange}>
                <Select.Option value="KR">Korea</Select.Option>
                <Select.Option value="JP">Japan</Select.Option>
                <Select.Option value="NA">North America</Select.Option>
                <Select.Option value="EUW">Europe West</Select.Option>
                <Select.Option value="EUNE">Europe Nordic & East</Select.Option>
                <Select.Option value="OCE">Oceania</Select.Option>
                <Select.Option value="BR">Brazil</Select.Option>
                <Select.Option value="LAS">LAS</Select.Option>
                <Select.Option value="LAN">LAN</Select.Option>
                <Select.Option value="RU">Russia</Select.Option>
                <Select.Option value="TR">Turkey</Select.Option>
            </Select>
        );

        const searchInput = (
            <Search
                addonBefore={selectBefore}
                placeholder="请输入召唤师名称"
                enterButton="Search"
                size="large"
                onSearch={this.onSearch}
            />
        );

        const {getFieldDecorator} = this.props.form;

        return (
            <div className="summoner-search">
                <Form>
                    <FormItem>
                        {
                            getFieldDecorator('summonerName', {
                                rules: [
                                    {
                                        required: true,
                                        pattern: new RegExp(/^[\w .]+$/, "g"),
                                        message: "请输入正确的召唤师名称，只能包含字母、数字、空格、\".\"和\"_\""
                                    }
                                ],
                            })(searchInput)
                        }
                    </FormItem>
                </Form>
            </div>
        )
    }
}

export default connect(null, {})(withRouter(Form.create()(SummonerSearch)));