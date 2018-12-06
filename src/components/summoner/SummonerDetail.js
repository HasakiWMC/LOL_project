import React, {Component} from 'react';
import {Spin} from 'antd';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {searchSummoner} from '../../actions/summonerActions';
import '../../App.css';
import {Tag} from 'antd';


class summonerDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isHasSearched: false
        };
        console.log(this.state.isHasSearched);
    }

    componentDidMount() {
        const newSummoner = JSON.parse(localStorage.getItem("newSummoner"));

        if (newSummoner == null || newSummoner["region"] === "" || newSummoner["summonerName"] === "") {
            this.props.history.push("/");
        }
        this.props.searchSummoner(newSummoner);

    }

    render() {
        const isHasSearched = this.state.isHasSearched;

        const spinComponent = (
            <div className="spin">
                <Spin/>
            </div>
        );

        const summonerDetail = (
            <div>
                <div>
                    <Tag><strong>S8</strong> Master</Tag>
                </div>
                <div style={{display:"block",marginTop:"10px"}}>
                    {/*<div style={{*/}
                        {/*backgroundImage:"url('http://opgg-static.akamaized.net/images/borders2/challenger.png')",*/}
                        {/*width: "120px",*/}
                        {/*height:"120px"*/}
                    {/*}}/>*/}
                    <img alt="" src="http://opgg-static.akamaized.net/images/profile_icons/profileIcon6.jpg" style={{display:"block",width:"100px",height:"100px",border:0}}/>

                </div>
            </div>
        );


        return (
            <div>
                {isHasSearched ? summonerDetail : spinComponent}
            </div>
        )
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps) {
            console.log(nextProps);
            this.setState({isHasSearched: true});

            setInterval(() => {
                console.log(this.state.isHasSearched);
            }, 3000)
        }
    }
}

const mapStateToProps = state => ({
    summoner: state.summoner,
});

export default connect(mapStateToProps, {searchSummoner})(withRouter(summonerDetail));