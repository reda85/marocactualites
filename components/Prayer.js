

import React, { Component } from 'react'
import {format} from 'date-fns'
import {fr} from 'date-fns/locale'
import {Icon} from'@chakra-ui/react'
import {FaMosque} from 'react-icons/fa'
export default class Prayer extends Component {
  constructor(props) {
    super(props)
    this.state = {
     
    }

    
  }

  

  render() {
    let api_base = process.env.NODE_ENV == 'production' ? 'https://marocactualites.vercel.app/' : 'http://localhost:3000';
    let todaydate = format(new Date(), "'le' cccc dd MMMM yyyy ", {
        locale: fr})
    if(this.props.prieres != null){
        const pr=this.props.prieres
        console.log('hanaaaa mlkm', pr.prieres)

    return (
      
          <div id='main'>
              <div className="row">
          
              <h2 style={{marginTop:"30px"}}> Horaires des prières {todaydate}</h2>
              </div>
          <div class="table-wrapper">
														<table>
															<thead>
																<tr>
																	<th>Ville</th>
																	<th>Fajr</th>
																	<th>Dohr</th>
                                                                    <th>Asr</th>
																	<th>Maghrib</th>
																	<th>Isha</th>
																</tr>
															</thead>
															<tbody>
                                                                {this.props.prieres.prieres.map((priere,index) => (
                                                                    <tr key={index}>
                                                                      <td><a href={`${api_base}/priere/${priere.ville.city}`}>{priere.ville.city}</a></td>
																	<td>{priere.Fajr}</td>
																	<td>{priere.Dohr}</td>  
                                                                    <td>{priere.Asr}</td>
																	<td>{priere.Maghrib}</td>  
                                                                    <td>{priere.Isha}</td>  
                                                                    </tr>))}
																
															</tbody>
															
														</table>
                                                        </div>
      </div> )  }
      else return null
}
}