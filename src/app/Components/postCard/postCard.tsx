import styles from "./postCard.module.scss";

export default function postCard({coverImage ,postTitle , postDescription, imageAvatar , author , postAuthorProfile , postDate , postShare}:any) {
  return (
       <>
          <div className={styles.postCardSection}>
              <div className={styles.postCoverImage} style={{backgroundImage: `url(${coverImage})`,}}
>
            <div className="d-flex justify-content-between align-items-center p-4">
                <div className={styles.button_container}>
                    <button>Aenean Eleifend</button>
                    <button className="me-0">Aliquam</button>
                </div>
                <div className={styles.image_avatar}>
                    <img src={imageAvatar}/>
                </div>
                </div>
              </div>
              <h2>{postTitle}</h2>
              <div className={styles.about_post}>
                <span>
                    <img src={ postAuthorProfile } />
                    {author}
                </span>
                <label>{postDate}</label>
                <div className={styles.shrae_post}>
                    <span><img src="/assets/images/share.png" alt="share"/>{postShare} shares</span>
                </div>
              </div>
              <p>{postDescription}</p>
              <button>View Post</button>
          </div>
       </>
  );
}
