/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "/src/App.css";
//Display by rendering list
function TripPost(props) {
  const handleOnClick = (tag) => {
    // console.log(tag);
    props.setSearchPost(tag);
  };
  return (
    <>
      {props.tripPost.map((post) => {
        return (
          <div className="post-container" key={post.eid}>
            <div className="highlight-image-container">
              <img
                className="highlight-image"
                src={post.photos[0]}
                alt="photo 1"
              />
            </div>
            <div className="content-container">
              <div className="content">
                <a className="post-title" href={post.url} target="_black">
                  {post.title}
                </a>
                <div className="postDescription baseTextColor">
                  {post.description}
                </div>
                <a href={post.url} target="_black">
                  อ่านต่อ
                </a>
                <div className="baseTextColor">
                  หมวด:
                  {post.tags.map((tag, index) => {
                    // console.log(post.tags.length);
                    if (index !== post.tags.length - 1) {
                      return (
                        <button
                          className="tag"
                          key={index}
                          onClick={() => {
                            handleOnClick({ tag });
                          }}
                        >
                          {tag}
                        </button>
                      );
                    } else {
                      return (
                        <span key={index}>
                          และ{" "}
                          <button
                            className="tag"
                            onClick={() => {
                              handleOnClick({ tag });
                            }}
                          >
                            {tag}
                          </button>
                        </span>
                      );
                    }
                  })}
                </div>
              </div>
              <div className="another-image">
                {post.photos.map((photo, index) => {
                  return index !== 0 ? (
                    <img
                      className="image"
                      key={index}
                      src={photo}
                      alt={`photo ${index + 1}`}
                    />
                  ) : null;
                })}
              </div>
            </div>
            <span
              className="material-symbols-outlined copyURL"
              onClick={() => {
                navigator.clipboard.writeText(post.url);
              }}
            >
              link
            </span>
          </div>
        );
      })}
    </>
  );
}
export default TripPost;
