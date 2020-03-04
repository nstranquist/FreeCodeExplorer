import React from 'react'
import styled from 'styled-components'


const StyledYTLink = styled.div`
  display: flex;
  margin-bottom: 15px;

  .item-left {
    // float:left;
    width: 320;
    height: 180px;
    display: inline-block;

    .item-img {
      width: 320;
      height: 180px;
    }
  }
  .item-right {
    border-top: 1px solid rgba(0,0,0,.12);
    border-bottom: 1px solid rgba(0,0,0,.12);
    border-right: 1px solid rgba(0,0,0,.12);
    flex: 1;
    flex-grow: 1;
    // width:100%;
    padding-left: 15px;
    padding-right: 10px;
    padding-bottom: 0;
    // max-width: calc(100% - 320);
    display: inline-block;

    .youtube-link-title {
      
      a {
        display: inline-block;
        color: #000;
        font-size: 1.8rem;
        line-height: 1.5;
        max-height: 2.7rem; // 1 line;
        overflow: hidden;
      }
    }
    .youtube-link-desc {
      margin-top: 5px;
      line-height: 1.4;
      font-size: 1rem;
      max-height: 2.8rem; // 2 lines
      overflow-y: hidden;
    }
    .bottom-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 4px;
      padding-top: 4px;

      .video-tags {
        display: flex;
        align-items: center;

        .tag-item {
          padding: 5px 8px;
          margin-right: 3px;
          margin-left: 3px;
          font-size: .9rem;
          color: rgba(0,0,0,.75);
          border-radius; 12px;
          border: 1px solid rgba(0,0,0,.15);

          &:hover {
            color: rgba(0,0,0,.8);
          }
        }
      }
      .language-tags {
        display: flex;
        align-items: center;

        .lang-tag {
          color: #fff;
          font-weight: 600;
          font-size: .95rem;
          padding: 4px 6px;
          margin: 3px;
          cursor: pointer;

          &.js-tag {
            background: #f7e018;
            color: #000;
          }
          &.py-tag {
            background: #3472a4;
          }
        }
      }
    }
  }
`

const getUrl = (videoId) => (
  "https://img.youtube.com/vi/" + videoId + "/0.jpg"
)
const getLink = (videoId) => (
  "https://youtube.com/watch?v=" + videoId
)

export const YoutubeLink = ({
  videoData,
}) => {

  return (
    <StyledYTLink className="youtube-link-item">
      <div className="item-left">
        <img className="item-img" src={getUrl(videoData.videoId)} />
      </div>
      <div className="item-right">
        <h3 className="youtube-link-title">
          <a href={getLink(videoData.videoId)}>{videoData.name}</a>
        </h3>
        <p className="youtube-link-desc">{videoData.description}</p>
        <div className="bottom-bar tags-bar">
          <div className="video-tags">
            <span className="tag-item">course</span>
            <span className="tag-item">video</span>            
            <span className="tag-item">youtube</span>            
          </div>
          <div className="language-tags">
            <span className="lang-tag js-tag">js</span>
            <span className="lang-tag py-tag">py</span>
          </div>
        </div>
      </div>
    </StyledYTLink>
  )
}