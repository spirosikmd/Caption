import './SettingsIcon.scss'
import React, {Component} from 'react'

export default class SettingsIcon extends Component {

    constructor(props) {
        super(props)
        this.state = {
            language: ''
        }
    }

    componentDidMount() {
        // getLanguage((language) => {
        //     this.setState({
        //         language: language
        //     })
        // })
    }

    render() {

        const icon = (
            <svg x="0px" y="0px" width="13px" height="13px" viewBox="0 0 13 13">
                <path d="M5.78092174,11.4492578 L4.59875482,12.9131432 C4.10885203,12.7724353 3.64190008,12.5774775 3.20481861,12.3351895 L3.40400601,10.4643137 C3.04453146,10.1900948 2.72304836,9.8686117 2.44882942,9.50913715 L0.577953624,9.70832455 C0.335665634,9.27124309 0.140707873,8.80429113 1.67366121e-13,8.31438834 L1.4638854,7.13222142 C1.43426124,6.91122064 1.41896649,6.68568225 1.41896649,6.45657158 C1.41896649,6.22746091 1.43426124,6.00192252 1.4638854,5.78092174 L1.53654867e-13,4.59875482 C0.140707873,4.10885203 0.335665634,3.64190008 0.577953624,3.20481861 L2.44882942,3.40400601 C2.72304836,3.04453146 3.04453146,2.72304836 3.40400601,2.44882942 L3.20481861,0.577953624 C3.64190008,0.335665634 4.10885203,0.140707873 4.59875482,-3.21964677e-14 L5.78092174,1.4638854 C6.00192252,1.43426124 6.22746091,1.41896649 6.45657158,1.41896649 C6.68568225,1.41896649 6.91122064,1.43426124 7.13222142,1.4638854 L8.31438834,5.44009282e-14 C8.80429113,0.140707873 9.27124309,0.335665634 9.70832455,0.577953624 L9.50913715,2.44882942 C9.8686117,2.72304836 10.1900948,3.04453146 10.4643137,3.40400601 L12.3351895,3.20481861 C12.5774775,3.64190008 12.7724353,4.10885203 12.9131432,4.59875482 L11.4492578,5.78092174 C11.4788819,6.00192252 11.4941767,6.22746091 11.4941767,6.45657158 C11.4941767,6.68568225 11.4788819,6.91122064 11.4492578,7.13222142 L12.9131432,8.31438834 C12.7724353,8.80429113 12.5774775,9.27124309 12.3351895,9.70832455 L10.4643137,9.50913715 C10.1900948,9.8686117 9.8686117,10.1900948 9.50913715,10.4643137 L9.70832455,12.3351895 C9.27124309,12.5774775 8.80429113,12.7724353 8.31438834,12.9131432 L7.13222142,11.4492578 C6.91122064,11.4788819 6.68568225,11.4941767 6.45657158,11.4941767 C6.22746091,11.4941767 6.00192252,11.4788819 5.78092174,11.4492578 Z M6.45657158,9.3055737 C8.030032,9.3055737 9.3055737,8.030032 9.3055737,6.45657158 C9.3055737,4.88311116 8.030032,3.60756946 6.45657158,3.60756946 C4.88311116,3.60756946 3.60756946,4.88311116 3.60756946,6.45657158 C3.60756946,8.030032 4.88311116,9.3055737 6.45657158,9.3055737 Z" id="Combined-Shape"></path>
            </svg>
        );

        return (
            <div className='settings-icon' onClick={this.props.onClick}>
                {icon} - {this.state.language}
            </div>
        )
    }
}
