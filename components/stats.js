

import React, { Component } from 'react'
import {format} from 'date-fns'
import {fr} from 'date-fns/locale'
import {Icon} from'@chakra-ui/react'
import {FaMosque} from 'react-icons/fa'
export default class Stats extends Component {
  constructor(props) {
    super(props)
    this.state = {
     
    }

    
  }

  

  render() {
    let api_base = process.env.NODE_ENV == 'production' ? 'https://marocactualites.com/' : 'http://localhost:3000';
    let todaydate = format(new Date(), "'le' cccc dd MMMM yyyy ", {
        locale: fr})
    if(this.props.posts != null){
        const pr=this.props.posts
        console.log('hanaaaa mlkm', pr.posts)

    return (
      
          <div id='main'>
              <div className="row">
          
              <h2 style={{marginTop:"30px"}}> Stats {todaydate}</h2>
              </div>
          <div class="table-wrapper">
														<table>
															<thead>
																<tr>
																	<th>Article</th>
																	<th>Nombre de vues</th>
																	<th>Date de création</th>
                                                                    
																</tr>
															</thead>
															<tbody>
                                                                {this.props.posts.map((post,index) => (
                                                                    <tr>
                                                                      <td><a href={post.link}>{post.title}</a></td>
																	<td>{post.reads}</td>
																	<td>{post.created}</td>  
                                                                     
                                                                    </tr>))}
																
															</tbody>
															
														</table>
                                                        </div>
      </div> )  }
      else return null
}
}