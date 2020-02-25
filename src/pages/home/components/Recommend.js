import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { RecomendWrapper, RecomendItem } from "../style";

class Recommend extends PureComponent {
  render() {
    const { list } = this.props;
    return (
      <RecomendWrapper>
        {list.map(item => {
          return (
            <RecomendItem key={item.get('id')}>
              <img alt="" className="banner-pic" src={item.get('url')} />
            </RecomendItem>
          );
        })}
      </RecomendWrapper>
    );
  }
}
const mapState = state => ({
  list: state.getIn(["home", "recomendList"])
});
export default connect(mapState, null)(Recommend);
