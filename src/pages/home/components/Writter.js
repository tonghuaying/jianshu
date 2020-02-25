import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { WritterWrapper, WritterTitle, WritterItem } from "../style";

class Writter extends PureComponent {
  render() {
    const { list } = this.props;
    return (
      <WritterWrapper>
        <WritterTitle>
          <h3 className="title">推荐作者</h3>
          <span className="right">
            {/* <i className="iconfont spin">&#xe851;</i> */}
            换一批
          </span>
        </WritterTitle>
        {list.map(item => {
          return (
            <WritterItem key={item.get('id')}>
              <img alt="" className="writer-pic" src={item.get('pic')} />
              <div className="writer-info">
                <p className="writer-name">{item.get('name')}</p>
                <p className="writer-num">{item.get('number')}</p>
              </div>
              <span className="attention"> + 关注</span>
            </WritterItem>
          );
        })}
      </WritterWrapper>
    );
  }
}
const mapState = state => ({
  list: state.getIn(["home", "writerList"])
});
export default connect(mapState, null)(Writter);
