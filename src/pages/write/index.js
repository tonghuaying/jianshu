import React, { PureComponent } from "react";
import { Redirect } from "react-router-dom";
import { WriteWrapper ,WriteTitle} from './style';
import { connect } from "react-redux";

class Write extends PureComponent {
  render() {
    const { loginState } = this.props;

    if (loginState) {
      return (
        <WriteWrapper>
          <WriteTitle>写文章</WriteTitle>
          <textarea className="textbox" placeholder="请输入内容"></textarea>
        </WriteWrapper>
        );
    } else {
      return <Redirect to="/login" />;
    }
  }
}

const mapState = state => ({
  loginState: state.getIn(["login", "login"])
});

export default connect(mapState, null)(Write);
