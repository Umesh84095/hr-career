import React, { Component } from 'react';
import "./index.scss"
import CONSTANTS from '../../constants/constants';
class LoadSxpChat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userToken: '',
        };
    }

    componentDidMount = () => {
        this.getUserToken();
    };
    getUserToken = () => {
        const token = sessionStorage.getItem(CONSTANTS.REACT_TOKEN);
        this.setState({ userToken: token }, () => this.loadIt());
    };
    loadIt = () => {
        let mainObj = {
            socketUrl: "https://sxp.channel-adapter.k8s.techsophy.com/", //sxp URL
            socketPath: "/socket.io/",
            SSL: true, //secure connection, true for https, false for http
            accessToken: `Bearer ${this.state.userToken}`,
            currentProject: "64268cac68a9b1a6bea4d738", // name of the project / client you are working on / for
            fileServerUrl: "https://fileserver.techsophy.com/",
            mainTitle: CONSTANTS.SXP_TITLE,
            subTitle: CONSTANTS.SXP_SUBTITLE,
            chatRefresh: true,
            autoLaunch: false,
            lazyAutoLaunch: false,
            editChat: false,
            uploadDoc: true,
            defaultMessage: CONSTANTS.SXP_DEFAULT_MSG,
            languages: [],
            version: CONSTANTS.VERSION_ID,
            journeyTray: false,
        };
        window.embedSXPChat(mainObj);
    };
    render() {
        return <></>;
    }
}
export default LoadSxpChat;
