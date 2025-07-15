import { posts } from '../../../data/dummyPosts';

export default function BlogDetail({ params }) {
  const post = posts.find((p) => p.id === params.id);

  if (!post) {
    return <p className="text-red-600">Post not found.</p>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-sm text-gray-600 mb-2">By {post.author}</p>
      <p className="mt-4">{post.content}</p>
    </div>
  );
}
