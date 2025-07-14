import { Link } from 'next/link';

export default function BlogCard({ id, title, summary, author, date, readTime, tag, image }) {
  return (
    <div className="blog-card">
      <div className="blog-image" style={{ backgroundImage: `url(${image || '/placeholder.jpg'})` }}></div>
      <div className="blog-content">
        <span className="blog-tag">{tag}</span>
        <h3 className="blog-title">{title}</h3>
        <p className="blog-meta">By {author} • {date} • {readTime}</p>
        <p className="blog-summary">{summary}</p>
        <a href={`/blog/${id}`} className="read-more">Read more →</a>
      </div>
    </div>
  );
}
