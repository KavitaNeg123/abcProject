import Header from "@/app/Components/header/header"
import  PostCard from "./Components/postCard/postCard";

export default function Home() {
  const posts = [
    {
      id: 1,
      title: 'Understanding React.js',
      description: 'A deep dive into React.js and how it works.',
      author: 'John Doe',
      date: 'August 8, 2024',
      coverImage: '/assets/images/herobanner.png',
      imageAvatar:'/assets/images/tabler_photo.png',
      postAuthorProfile:'/assets/images/blogpostImage.png',
      postShare:"1"
    },
    {
      id: 2,
      title: 'Next.js Features',
      description: 'Exploring the powerful features of Next.js.',
      author: 'Jane Doe',
      date: 'August 7, 2024',
      coverImage: '(/assets/images/herobanner.png',
    },
    // More posts...
  ];
  return (
       <>
       <div className="home_page">
       <Header></Header>
       <div
          className="hero_banner landing_page_banner d-flex align-items-center" style={{backgroundImage:'url("/assets/images/herobanner.png")'}}>
          <div className="container position-relative">
            <div className="row align-items-center banner_section landing_page_banner_section h-100">
              <div className="col-lg-12">
                <div className="hero__content">
                  <div className="row">
                    <div className="col-lg-9 col-md-12 col-sm-12 col-12 mx-auto">
                      <h1 className="text-center banner_title">Inspiration for travel by real people</h1>
                      <p className="text-center py-4 mb-0">
                        Book smart, travel simple
                      </p>
                      <div className="d-flex justify-content-center">
                        <button className="custom_btn bg-white">
                          Start planning your trip
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className="view_post_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="social_media_info">
                <div className="row justify-content-end">
                  <div className="col-lg-3 d-flex justify-content-between">
                    <span className="count"><img src="/assets/images/facebook.png" alt="facebook"/>3.7M</span>
                    <span className="count"><img src="/assets/images/insta.png" alt="insta"/>2.4M</span>
                    <span className="count"><img src="/assets/images/twitter.png" alt="twitter"/>3.7M</span>
                    <span className="count"><img src="/assets/images/youtube.png" alt="youtube"/>2.4M</span>
                  </div>
                </div>
              </div>
            </div>
            {posts.map(post => (
              <div className="col-lg-4" key={post.id}>
              <PostCard
                coverImage={post.coverImage}
                imageAvatar={post.imageAvatar}
                postAuthorProfile={post.postAuthorProfile}
                postTitle={post.title}
                postDescription={post.description}
                postDate={post.date}
                postShare={post.postShare}
                author={post.author}
              />
            </div>

            ))}
          </div>
        </div>
      </div>
       </div>
      
       </>
  );
}
