import feeds from '../data/feeds';
import Page from '../components/page';
import FeedList from '../components/feed-list';
import MentionsLegales from '../components/mentionslegales';
import striptags from 'striptags';


  
  
//export const config = { amp: 'nonAmp' }

export default function Mention({posts}) {
  return (
    <Page>
      
      <MentionsLegales />
    </Page>
  );

  
}