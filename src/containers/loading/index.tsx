import * as React from "react";
import { ActivityIndicator, WingBlank, WhiteSpace, Button } from 'antd-mobile';
import Store from "../../store";

export class Login extends React.Component<any, any>{
    componentWillMount() {
        // Store.User.Login()
    }
    state = {
        animating: true,
    };
    render() {
        console.log(this.props.visible)
        return (
            <div className="toast-example">
                <ActivityIndicator
                    toast
                    text="Loading..."
                    animating={this.props.visible}
                />
            </div>
        )
    }
}