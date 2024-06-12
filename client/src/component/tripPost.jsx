/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "/src/App.css";
//Display by rendering list
function TripPost(tripPost) {
  return (
    <>
      {tripPost.map((post) => {
        return (
          <div className="post-container" key={post.eid}>
            <img
              className="highlight-image"
              src={post.photos[0]}
              alt="photo 1"
            />
            <div className="content-container">
              <div className="content">
                <h3>{post.title}</h3>
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
                        <span className="tag" key={index}>
                          {tag}
                        </span>
                      );
                    } else {
                      return (
                        <span key={index}>
                          และ <span className="tag">{tag}</span>
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
          </div>
        );
      })}
    </>
  );
}
export default TripPost;
