import fetch from 'isomorphic-unfetch';
import Error from '../_error';
import Page from '../../components/page';
import PostList from '../../components/post-list';
import { useAmp } from 'next/amp'
import {format} from 'date-fns'
import {fr} from 'date-fns/locale'
import { FaMosque } from 'react-icons/fa';
import { Icon } from '@chakra-ui/react';

export const config = { amp: 'nonAmp' }

export default function Ville({ prieres, ville }) {
    const isAmp = useAmp()
  if (prieres.error) {
    return <Error statusCode={404} />;
  }

  return (
    <Page title='test'>
      <div  >
        <div className="row">
       
      <h2 style={{marginTop:"30px"}}> Horaires des prières à {ville} pour {format(new Date(), " MMMM yyyy ", {
        locale: fr})}</h2>
        </div>
          <div class="table-wrapper">
														<table>
															<thead>
																<tr>
																	<th>Date</th>
																	<th>Fajr</th>
																	<th>Dohr</th>
                                                                    <th>Asr</th>
																	<th>Maghrib</th>
																	<th>Isha</th>
																</tr>
															</thead>
															<tbody>
                                                                {prieres.map((priere,index) => (
                                                                    <tr key={index}>
                                                                      <td>{priere.date}</td>
																	<td>{priere.Fajr}</td>
																	<td>{priere.Dohr}</td>  
                                                                    <td>{priere.Asr}</td>
																	<td>{priere.Maghrib}</td>  
                                                                    <td>{priere.Isha}</td>  
                                                                    </tr>))}
																
															</tbody>
															
														</table>
                                                        </div>
      </div>
    </Page>
  );
}

Ville.getInitialProps = async ({ res, query }) => {
    console.log("hrhrhrhr", query)
  let api_base = process.env.NODE_ENV == 'production' ? 'https://marocactualites.vercel.app/' : 'http://localhost:3000';
  let r = await fetch(`${api_base}/api/prieres/${query.ville}`);
  //let r = await fetch(`http://localhost:3000/api/feeds/${query.slug}`)
  let prieres = await r.json();

  if (prieres.error && res) {
    res.statusCode = 404;
  }

  return {
    prieres,
    ville : query.ville
    
  };
};
