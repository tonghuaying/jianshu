import styled from "styled-components";
import logopic from "../../static/logo.png";

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  background-color: #fff;
  border-bottom: solid 1px #f0f0f0;
  z-index: 1;
`;
export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  display: block;
  height: 56px;
  background: url(${logopic});
  background-size: contain;
`;

export const Nav = styled.div`
  width: calc(100% - 350px);
  height: 100%;
  margin: 0 auto;
  padding-right: 50px;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;
export const NavSearch = styled.input.attrs({
  placeholder: "搜索"
})`
  width: 160px;
  height: 38px;
  border: solid 1px #eee;
  outline: none;
  border-radius: 19px;
  padding: 0 35px 0 20px;
  margin-top: 9px;
  box-sizing: border-box;
  background: #eee;
  font-size: 14px;
  margin-left: 20px;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
  &.slide-enter {
    transition: all 0.2s ease-out;
    width: 160px;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all 0.2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`;
export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;

export const Button = styled.div`
  float: right;
  margin-top: 9px;
  line-height: 38px;
  border-radius: 19px;
  border: solid 1px #ec6149;
  margin-right: 20px;
  padding: 0 20px;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writing {
    color: #fff;
    background: #ec6149;
  }
`;
export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .zoom {
    position: absolute;
    right: 1px;
    top: 13px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 50%;
    text-align: center;
  }
  .iconfont.focused {
    background: #bbb;
    color: #fff;
  }
`;
export const SearachInfo = styled.div`
  position: absolute;
  left: 15px;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  min-height: 150px;
  background: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
`;
export const SearchInfoTitle = styled.div`
  position: relative;
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;
export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .spin {
    display: inline-block;
    vertical-align: -1px;
    margin-right: 5px;
    transition: all .2s ease-in;
    transform: rotate(0deg);
  }
`;
export const SearchInfoItem = styled.a`
  line-height: 20px;
  padding: 0 5px;
  font-size: 12px;
  border: solid 1px #ddd;
  color: #787878;
  display: inline-block;
  border-radius: 3px;
  margin-right: 10px;
  margin-bottom: 10px;
`;
export const SearchInfoList = styled.div``;
