import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const RedditFeed = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3001/api/reddit')
      .then(res => {
        setPosts(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching Reddit posts:', err);
        setLoading(false);
      });
  }, []);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-primary">🔍 Latest Reddit Posts on Flight Crashes</h2>
        <input
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      {loading ? (
        <p className="text-primary text-lg text-center">Loading Reddit posts...</p>
      ) : filteredPosts.length === 0 ? (
        <p className="text-red-500 text-center">🚫 No posts found.</p>
      ) : (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredPosts.map(post => (
            <motion.a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white border border-gray-200 rounded-xl p-5 shadow hover:shadow-lg transition-all duration-200"
            >
              <h2 className="text-lg font-semibold mb-2 text-primary leading-snug line-clamp-2">
                {post.title}
              </h2>
              <p className="text-gray-700 text-sm mb-2 line-clamp-3">
                {post.selftext || "No description provided."}
              </p>
              <div className="flex justify-between text-xs text-gray-500 mt-4">
                <span>u/{post.author}</span>
                <span>💬 {post.num_comments} • 👍 {post.score}</span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default RedditFeed;