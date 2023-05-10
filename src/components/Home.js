import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { firestore } from "../firebase";
function Home() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    firestore.collection('posts').get().then((snapshot) => {
      const posts = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        }
      });
      // console.log('post', posts);
      setPost(posts);
    })
  }, []);

  return (
    <div className="home">
      <h1>Tech blog</h1>
      <div id="blog-by">Vishva</div>
      {posts.map((post, index) => (
          <div className="post" key={`post-${index}`}>
            <Link to={`/post/${post.id}`}>
              <h3>{post.title}</h3>
            </Link>
            <p>{post.subTitle}</p>
          </div>
      ))}
    </div>

  );
}

export default Home;