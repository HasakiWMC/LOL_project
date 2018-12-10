import React, {Component} from 'react';
import {Input, Select, Form} from 'antd';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

const Search = Input.Search;
const FormItem = Form.Item;

const selectDefaultValue = "Korea";

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
        const newSummoner = {
            "region": this.state.region,
            "summonerName": value
        };
        this.props.history.push(`/summoner/${newSummoner.region}/${newSummoner.summonerName}`);
    }

    render() {
        const selectBefore = (
            <Select defaultValue={selectDefaultValue} style={{width: "120px"}} onChange={this.onSelectChange}>
                <Select.Option value="Korea">Korea</Select.Option>
                <Select.Option value="Europe West">Europe West</Select.Option>
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

        const { getFieldDecorator } = this.props.form;

        return (
            <div>
                <div className="summoner-search"/>
                <div style={{width: '500px', margin: '0 auto'}}>
                    <Form>
                        <FormItem>
                            {
                                getFieldDecorator('summonerName', {
                                    rules: [{
                                        required: true,
                                        pattern: new RegExp(/^[\w .]+$/, "g"),
                                        message: "请输入正确的召唤师名称，只能包含字母、数字、空格、“.”和“_”"
                                    }],
                                })(searchInput)
                            }
                        </FormItem>
                    </Form>
                </div>
            </div>
        )
    }
}

export default connect(null, {})(withRouter(Form.create()(SummonerSearch)));