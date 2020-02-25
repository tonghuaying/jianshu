import React, { PureComponent } from "react";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writter from "./components/Writter";
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style";
import { actionCreators } from "./store";
import { connect } from "react-redux";

class Home extends PureComponent {

  

  handleScrollTop() {
    window.scroll(0, 0);
  }
  render() {
    const { showScroll } = this.props;
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" alt=" " src="/images/home1.png" />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writter />
        </HomeRight>
        {showScroll ? (
          <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>
        ) : null}
      </HomeWrapper>
    );
  }

  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.changeScrollTopShow);
  }

  bindEvents() {
    window.addEventListener("scroll", this.props.changeScrollTopShow);
  }
}

const mapState = state => ({
  showScroll: state.getIn(["home", "showScroll"])
});
const mapDispatch = dispatch => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo();
    dispatch(action);
  },
  changeScrollTopShow(e) {
    // console.log(document.documentElement.scrollTop)
    if (document.documentElement.scrollTop > 100) {
      dispatch(actionCreators.toggleTopShow(true));
    } else {
      dispatch(actionCreators.toggleTopShow(false));
    }
  }
});
export default connect(mapState, mapDispatch)(Home);
