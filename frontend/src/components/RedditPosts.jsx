import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RedditPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3001/api/reddit')
      .then((res) => {
        setPosts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch posts:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-[#00FF00]">Loading Reddit posts...</p>;

  if (posts.length === 0) return <p className="text-red-400">⚠ No posts found.</p>;

  return (
    <div className="bg-gray-900 border border-[#00FF00] rounded-lg p-4 max-h-[600px] overflow-auto shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-[#00FF00]">🛬 Latest Reddit Posts on Flight Crashes</h2>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="border-b border-[#00FF00]/30 pb-2">
            <a
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00FF00] hover:underline font-semibold"
            >
              {post.title}
            </a>
            <p className="text-sm text-gray-400">
              u/{post.author} • {post.subreddit} • 💬 {post.num_comments} • 👍 {post.score}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RedditPosts;
