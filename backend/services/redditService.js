const axios = require('axios');

async function fetchRedditPosts(subreddit = 'aviation', limit = 20) {
  try {
    const url = `https://www.reddit.com/r/${subreddit}/new.json?limit=${limit}`;
    const response = await axios.get(url);

    // Extract post data
    const posts = response.data.data.children.map(item => {
      const post = item.data;
      return {
        id: post.id,
        title: post.title,
        author: post.author,
        url: `https://reddit.com${post.permalink}`,
        created_utc: post.created_utc,
        num_comments: post.num_comments,
        score: post.score,
      };
    });

    return posts;
  } catch (error) {
    console.error('Error fetching Reddit posts:', error.message);
    return [];
  }
}

module.exports = { fetchRedditPosts };
