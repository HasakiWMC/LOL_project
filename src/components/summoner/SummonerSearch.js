import React, {Component} from 'react';
import {Input, Select} from 'antd';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

const Search = Input.Search;
const selectDefaultValue = "Korea";

class summonerSearch extends Component {
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
        localStorage.setItem("newSummoner", JSON.stringify(newSummoner));
        this.props.history.push("/summoner");
    }

    render() {
        const selectBefore = (
            <Select defaultValue={selectDefaultValue} style={{width: 150}} onChange={this.onSelectChange}>
                <Select.Option value="Korea">Korea</Select.Option>
                <Select.Option value="Europe West">Europe West</Select.Option>
            </Select>
        );
        return (
            <div>
                <div className="summoner-search"/>
                <div style={{width: '500px', margin: '0 auto'}}>
                    <Search
                        addonBefore={selectBefore}
                        placeholder="input search text"
                        enterButton="Search"
                        size="large"
                        onSearch={this.onSearch}
                    />
                </div>
            </div>
        )
    }
}

export default connect(null, {})(withRouter(summonerSearch));