import Link from 'next/link';
export const config = { amp: true }

const FeedList = ({ feeds }) => {
  return (
    <div className="feeds">
      {feeds.map(feed => {
        return (
          <div className="feed" key={feed.slug}>
            <Link href="/feed/[slug]" as={`/feed/${feed.slug}`}>
              <a>
                <amp-img src={`/static/images/${feed.slug}.png`} alt={feed.slug} width="60px"
      height="40px"
      >
    </amp-img>
                
              </a>
            </Link>
          </div>
        );
      })}

      <style jsx>{`
        .feeds {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          margin-bottom: 50px;
          max-width: 1240px;
          margin: 0 auto;
         
        }
        .feed {
          padding: 20px;
          margin-bottom: 20px;
          
        }
       
        .feed a {
          display: block;
          line-height: 1.5;
        }
        @media (max-width: 600px) {
          .feed {
            width: 50%;
          }
        }
        @media (max-width: 360px) {
          .feed {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default FeedList;