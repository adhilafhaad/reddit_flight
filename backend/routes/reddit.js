const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    // Public Reddit search endpoint
    const response = await axios.get('https://www.reddit.com/search.json', {
      params: {
        q: 'plane crash OR flight crash OR aviation accident',
        sort: 'new',
        limit: 20
      },
      headers: {
        'User-Agent': 'FlightCrashTracker/1.0'
      }
    });

    // Get posts
    const posts = response.data.data.children.map(child => {
      const post = child.data;
      return {
        id: post.id,
        title: post.title,
        author: post.author,
        permalink: `https://reddit.com${post.permalink}`,
        score: post.score,
        num_comments: post.num_comments,
        selftext: post.selftext,
        subreddit: post.subreddit,
        created_utc: post.created_utc
      };
    });

    res.json(posts);
  } catch (error) {
    console.error('[Reddit Error]', error.message);
    res.status(500).json({ error: 'Failed to fetch Reddit posts' });
  }
});

module.exports = router;
