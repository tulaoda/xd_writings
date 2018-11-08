import * as React from "react";
import * as containers from "./containers";
import { renderRoutes } from "react-router-config";
import { BrowserRouter } from "react-router-dom";
import Animate from 'rc-animate';

export default class Routes extends React.Component<any, any> {
  routes: any[] = [
    {
      path: "/",
      exact: true,
      component: this.createCSSTransition(containers.Hall)
    },
    {
      path: "/details/:id",
      component: this.createCSSTransition(containers.Details)
    },
    {
      path: "/submisson/:id",
      component: this.createCSSTransition(containers.Submission)
    },
    {
      path: "/my",
      component: this.createCSSTransition(containers.My)
    },
    {
      path: "/mydetail/:id",
      component: this.createCSSTransition(containers.MyDetails)
    },
    {
      path: "*",
      component: this.createCSSTransition(containers.Hall)
    }
  ];
  render() {
    return <BrowserRouter>{renderRoutes(this.routes)}</BrowserRouter>;
  }

  // NoMatch({ location }) {
  //   return <div>
  //     <h3>无法匹配 <code>{location.pathname}</code></h3>
  //   </div>
  // }
  pageInfoMap = new Map<string, any>()
  // 创建过渡动画
  createCSSTransition(Component: any, content = true, classNames = "fade") {
    const pageInfoMap = this.pageInfoMap;
    return class extends React.Component<any, any>{
      state = { error: null, errorInfo: null };
      componentDidMount() {
        // 进入新页面滚动顶部  回退滚动 原位置
        if (this.props.history.action == 'PUSH') {
          window.scrollTo(0, 0)
        } else if (this.props.history.action == 'POP') {
          // const sY = pageInfoMap.get(this.props.location.key) || { scrollY: 0 };
          setTimeout(() => {
            window.scrollTo(0, 200)
          });
        }
      }
      componentWillUnmount() {
        // pageInfoMap.set(this.props.location.key, {
        //   // 页面滚动距离
        //   scrollY: window.scrollY
        // })
      }
      componentDidCatch(error, info) {
        this.setState({
          error: error,
          errorInfo: info
        })
      }
      render() {
        if (this.state.errorInfo) {
          return (
            <div>
              <h2>组件出错~</h2>
              <details >
                {this.state.error && this.state.error.toString()}
                <br />
                {this.state.errorInfo.componentStack}
              </details>
            </div>
          );
        }

        return (
          <Animate transitionName={classNames}
            transitionAppear={true} component="">
            <div className="animate-content">
              <Component  {...this.props} />
            </div>
          </Animate  >
        );
      }
    }
  };
}
