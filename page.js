import { posts } from '../data/dummyPosts';
import BlogCard from '../components/BlogCard';

export default function HomePage() {
  return (
    <div className="home-container">
      <h1 className="page-title">📝 Explore Inspiring Stories</h1>
      <div className="blog-grid">
        {posts.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}
