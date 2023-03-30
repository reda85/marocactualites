

import React, { Component } from 'react'
import Select from 'react-select'
import feeds from '../data/feeds'
import makeAnimated from 'react-select/animated';


const lfeeds = feeds.map(feed => feed.title)
const myfeeds=[...new Set(lfeeds)]
const animatedComponents = makeAnimated();

const categories = [
  { value: 'Sport', label: 'Sport' },
  { value: 'Economie', label: 'Economie' },
  { value: 'Politique', label: 'Politique' },
  { value: 'Société', label: 'Société' },
  { value: 'Toutes les catégories', label: 'Toutes les catégories' },
]

const villes = [
    { value: 'Rabat', label: 'Rabat' },
    { value: 'Casablanca', label: 'Casablanca' },
    { value: 'Marrakech', label: 'Marrakech' },
    { value: 'Tanger', label: 'Tanger' },
    { value: 'Toutes les villes', label: 'Toutes les villes' },
  ]
export default class Flux extends Component {
  constructor(props) {
    super(props)
    this.state = {
     villes :[],
     medias :[],
     categories :[]
    }
    this.onChangeCategories = this.onChangeCategories.bind(this);
    this.onChangeVilles = this.onChangeVilles.bind(this);
    this.onChangeMedias = this.onChangeMedias.bind(this);
    
  }

  onChangeCategories(value) {
    console.log(value)
    this.setState({ categories: value });
  } 

  onChangeVilles(value) {
    console.log(value)
    this.setState({ villes: value });
  } 

  onChangeMedias(value) {
    console.log(value)
    this.setState({ medias: value });
  } 

  render() {
    var f=[]
    myfeeds.forEach(feed => {
      let ob= {}
      ob.value=feed
      ob.label=feed
      f.push(ob)
    })
    console.log('fffff', f)
    return (
      <div>
          <h2>Personnalisez votre flux</h2>
          <h3><strong>Choisissez les catégories qui vous intéressent</strong></h3>
          <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
     value={this.state.categories}
      isMulti
      options={categories}
      onChange={this.onChangeCategories}
    />
   <h3><strong>Choisissez les villes qui vous intéressent</strong></h3>
        
   <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      value={this.state.villes}
      isMulti
      options={villes}
      onChange={this.onChangeVilles}
    />
<h3><strong>Choisissez les médias qui vous intéressent</strong></h3>
<Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      value={this.state.medias}
      isMulti
      options={f}
      onChange={this.onChangeMedias}
    />
    <button>Enregistrer vos préferences</button>
          
      </div> )  
}
}