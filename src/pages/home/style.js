import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`;

export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`;

export const HomeRight = styled.div`
  width: 240px;
  float: right;
`;

export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  border-bottom: solid 1px #dcdcdc;
`;

export const TopicItem = styled.div`
  float: left;
  background: #f7f7f7;
  height: 32px;
  line-height: 32px;
  border: solid 1px #dcdcdc;
  border-radius: 4px;
  padding: 0 8px;
  font-size: 13px;
  color: #333;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: solid 1px #dcdcdc;
  .list-pic {
    display: block;
    width: 125px;
    height: 100px;
    float: right;
  }
`;
export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    font-size: 18px;
    line-height: 27px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`;

export const RecomendWrapper = styled.div`
  padding: 30px 0 0;
`;

export const RecomendItem = styled.div`
  margin-bottom: 8px;
  .banner-pic {
    width: 220px;
    height: 40px;
  }
`;

export const WritterWrapper = styled.div`
  margin-top: 20px;
`;

export const WritterTitle = styled.div`
  position: relative;
  font-size: 14px;
  color: #969696;
  .title {
    display: inline-block;
  }
  .right {
    position: absolute;
    right: 13px;
    top: 0;
  }
`;

export const WritterItem = styled.div`
  position: relative;
  height: 50px;
  margin-top: 15px;
  .writer-pic {
    display: block;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    float: left;
    margin-right: 10px;
  }
  .writer-info {
    float: left;
    width: 150px;
    margin-top: 10px;
  }
  .writer-name {
    font-size: 14px;
    color: #333;
    margin-bottom: 10px;
  }
  .writer-num {
    font-size: 12px;
    color: #969696;
  }
  .attention {
    position: absolute;
    top: 10px;
    right: 40px;
    font-size: 13px;
    color: #42c02e;
  }
`;

export const LoadMore = styled.div`
width: 100%;
height: 40px;
line-height: 40px;
text-align: center;
background: #a5a5a5;
color: #fff;
margin: 30px 0;
border-radius: 5px;
cursor: pointer;
`;
export const BackTop = styled.div`
  position: fixed;
  width: 60px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border: solid 1px #dcdcdc;
  bottom: 50px;
  right: 10px;
  font-size: 12px;
  cursor: pointer;
`;
