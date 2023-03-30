
import axios from 'axios';
import React, { Component } from 'react'

import feeds from '../data/feeds'
import makeAnimated from 'react-select/animated';

import {Button, createStandaloneToast}  from "@chakra-ui/react"
import { FaSave } from "react-icons/fa";



const lfeeds = feeds.map(feed => feed.title)
const myfeeds=[...new Set(lfeeds)]
const animatedComponents = makeAnimated();
const toast = createStandaloneToast()

export default class Pourvous extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading : false,
     villes :[{id: 1, value: "Rabat", isChecked: false},
     {id: 2, value: "Casablanca", isChecked: false},
     {id: 3, value: "Marrakech", isChecked: false},
     {id: 4, value: "Tanger", isChecked: false}],
     medias :[{id: 1, value: "Aujourd'hui le Maroc", isChecked: false},
     {id: 2, value: "2M", isChecked: false},
     {id: 3, value: "Telquel", isChecked: false},
     {id: 4, value: "MAP", isChecked: false},
     {id: 4, value: "l'économiste", isChecked: false}
    ],
     categories :[ {id: 1, value: "Sport", isChecked: false},
     {id: 2, value: "Economie", isChecked: false},
     {id: 3, value: "Politique", isChecked: false},
     {id: 4, value: "Société", isChecked: false}]
    }
    this.onChangeCategories = this.onChangeCategories.bind(this);
    this.onChangeVilles = this.onChangeVilles.bind(this);
    this.onChangeMedias = this.onChangeMedias.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  async componentDidMount() {

    let categories = this.state.categories
    if(this.props.user.categories){
        categories.forEach(categorie => {
            this.props.user.categories.forEach(cat => {if (categorie.value === cat)
                categorie.isChecked =  true})
           
        })
        this.setState({categories: categories})
    }
    if(this.props.user.villes){
        let villes = this.state.villes
        villes.forEach(ville => {
            this.props.user.villes.forEach(vil => {if (ville.value === vil)
                ville.isChecked =  true})
           
        })
        this.setState({villes: villes})
    }
        if(this.props.user.medias){
        let medias = this.state.medias
        medias.forEach(media => {
            this.props.user.medias.forEach(med => {if (media.value === med)
                media.isChecked =  true})
           
        })
        this.setState({medias: medias})
    }
  }

  onChangeCategories = (event) => {
      
        let categories = this.state.categories
        categories.forEach(categorie => {
           if (categorie.value === event.target.value)
           categorie.isChecked =  event.target.checked
        })
        this.setState({categories: categories})
        console.log(this.state.categories)
      }
   

  onChangeVilles = (event) => {
    let villes = this.state.villes
        villes.forEach(ville => {
           if (ville.value === event.target.value)
           ville.isChecked =  event.target.checked
        })
        this.setState({villes: villes})
        console.log(this.state.villes)
  } 

  onChangeMedias = (event) => {
    let medias = this.state.medias
        medias.forEach(media => {
           if (media.value === event.target.value)
           media.isChecked =  event.target.checked
        })
        this.setState({medias: medias})
        console.log(this.state.medias)
  } 
   onChange(e) {
    console.log('Checkbox checked:', (e.target.checked));
  }

  onSubmit = async (e) => {
    e.preventDefault();
    // get our form data out of state
    this.setState({loading: true})
    console.log("zzaaaa7")
    const {villes, medias, categories} = this.state;
    const myvilles = villes.filter(ville => ville.isChecked == true).map(ville => ville.value)
    const mycategories = categories.filter(categorie => categorie.isChecked == true).map(categorie => categorie.value)
    const mymedias = medias.filter(media => media.isChecked == true).map(media => media.value)
let data = {villes : myvilles, medias : mymedias, categories: mycategories, email : this.props.user.email}
console.log(data)

    axios.post('/api/personnalize', data)
        .then((response) => {
            //access the resp here....
            var payload = JSON.stringify(response.data.json, null, 2);
            console.log(`response fetched. ${payload}`);
            toast({
              title: "Préférences changées avec succès",
              description: "votre fil d'actualité personnalisé sera mis à jour",
              status: "success",
              duration: 9000,
              isClosable: true,
            })
            this.setState({loading: false}) 
        })
        .catch((error) => {
            console.log(error);
            this.setState({
                errorLabelHidden: false,
                errorLabel: "OoPS that didn't work :("
                
            });
            toast({
              title: "Erreur de changement de préférences.",
              description: error.message,
              status: "error",
              duration: 9000,
              isClosable: true,
            })
            this.setState({loading: false})
        });
}


  render() {
    var f=[]
    
    
    return (
      <div>
          <h2>Personnalisez votre flux</h2>
          <h3><strong>Choisissez les catégories qui vous intéressent</strong></h3>
          {this.state.categories.map(categorie => 
          
            <div key={categorie} class="col-6 col-12-small">
                
            <input type="checkbox" id={categorie.value} name={categorie.value} value={categorie.value} defaultChecked={categorie.isChecked} onClick={this.onChangeCategories}  />
            <label for={categorie.value}>{categorie.value}</label>
           
        </div>)}
   <h3><strong>Choisissez les villes qui vous intéressent</strong></h3>
        
   {this.state.villes.map(ville =>
            <div key={ville} class="col-6 col-12-small">
            <input type="checkbox" id={ville.value} name={ville.value} value={ville.value} defaultChecked={ville.isChecked} onClick={this.onChangeVilles}/>
            <label for={ville.value}>{ville.value}</label>
        </div>)}
<h3><strong>Choisissez les médias qui vous intéressent</strong></h3>
{this.state.medias.map(media =>
            <div key={media} class="col-6 col-12-small">
            <input type="checkbox" id={media.value} name={media.value} value={media.value} defaultChecked={media.isChecked} onClick={this.onChangeMedias} />
            <label for={media.value} >{media.value}</label>
        </div>)}
    <Button colorScheme="green" isLoading={this.state.loading} leftIcon={<FaSave />} onClick={
              this.onSubmit
            } >Enregistrer vos préferences</Button>
          
      </div> )  
}
}