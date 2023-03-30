import feeds from '../data/feeds';
import Page from '../components/page';
import FeedList from '../components/feed-list';
import PolitiqueConfidentialite from '../components/politiqueconfidentialite';
import striptags from 'striptags';


  
  
//export const config = { amp: 'nonAmp' }

export default function Politique({posts}) {
  return (
    <Page>
      
      <PolitiqueConfidentialite />
    </Page>
  );

  
}