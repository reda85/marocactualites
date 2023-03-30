
import feeds from '../../../data/feeds';
import { distanceInWordsToNow } from 'date-fns';
import striptags from 'striptags';

export default async (req, res) => {
  const filtered = feeds.filter(item => item.slug === req.query.slug);
console.log("teeest  here")
  if (filtered.length > 0) {
    console.log("teeest  here2")
    let feed = filtered[0];
    console.log("feed.url ", feed.url)
    feed.posts = [];

    let r = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${feed.url}`);
    let data = await r.json();
    //console.log("data", data)

    if (data && data.items) {
      console.log("feed ", feed)
      data.items.map(post => {
        console.log("post ", post.description)
        feed.posts.push({
          title: post.title,
        // published: distanceInWordsToNow(post.pubDate) + ' ago',
        thumbnail : post.thumbnail,
          link: post.link,
          author: striptags(post.author),
          preview: striptags(post.description).slice(0, 300)
        });
      });
    }
console.log("hnaaaa")
    res.status(200).json(feed);
  } else {
    res.status(404).json({ error: 'Feed not found.' });
  }
};