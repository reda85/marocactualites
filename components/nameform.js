import React from 'react';
import axios from 'axios';
import {Button, createStandaloneToast} from '@chakra-ui/react'
import { FaSave } from 'react-icons/fa';

export default class NameForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nom: "",
            prenom:"",
            errorLabel: "",
            errorLabelHidden: true,
            list: [],
            loading : false
        };
    }


    onChange = (e) => {
        // Because we named the inputs to match their corresponding values in state, it's
        // super easy to update the state

        // console.log(`${e.target.name} = ${e.target.value}`);
        this.setState({[e.target.name]: e.target.value});
    }


    onSubmit = async (e) => {
        e.preventDefault();
        const toast = createStandaloneToast()
        // get our form data out of state
        const {nom, prenom, list, errorLabel} = this.state;
        this.setState({loading : true})
let data = {nom : nom, prenom : prenom}

await this.props.user.updateProfile({
    displayName: prenom + ' ' + nom})
        axios.post('/api/modname', data)
            .then((response) => {
                //access the resp here....
                var payload = JSON.stringify(response.data.json, null, 2);
              //  console.log(`response fetched. ${payload}`);
                this.setState({
                    nom: "",
                    prenom:"",
                    errorLabelHidden: true,
                    list: this.state.list.concat([payload])
                });
                toast({
                    title: "Nom changé avec succès.",
                    
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                  })
                  this.setState({loading : false})
            })
            .catch((error) => {
              //  console.log(error);
                this.setState({
                    errorLabelHidden: false,
                    errorLabel: "OoPS that didn't work :("
                    
                });
                toast({
                    title: "Erreur de changement de nom.",
                    description: error.message,
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                  }) 
                  this.setState({loading : false})
            });
    }
    reset = () => { 
        this.setState({
          nom: "",
          prenom: "",
          
        });
      }

    render() {

        const {nom, prenom, list, errorLabel} = this.state;
        
        return (
            <div>
                <div class="row gtr-uniform">
                
                <h3 class="col-6 off-2 col-12-xsmall">Informations personnelles</h3>
            <p class="col-6 off-2 col-12-xsmall"> <strong>Soumettez le formulaire ci-dessus pour ajouter ou changer le nom enregistré dans votre compte</strong></p>
                <div class="col-6 off-2 col-12-xsmall">
                    <input type="text" name="prenom"  value={prenom} onChange={this.onChange} placeholder="Prénom" />
                </div>
                <div class="col-6 off-2 col-12-xsmall">
                    <input type="text" name="nom"  value={nom} onChange={this.onChange} placeholder="Nom" />
                </div>
               
                
               
                <div class="col-6 off-2 col-12-xsmall">
                    <ul class="actions">
                        <li><Button colorScheme="green" isLoading={this.state.loading} leftIcon={<FaSave />}  onClick={this.onSubmit} > Enregistrer </Button></li>
                        <li><Button   onClick={this.reset}>Annuler </Button></li>
                    </ul>
                </div>
                
                </div>
                <div><span hidden>{errorLabel}</span></div>
                
            </div>
        );
    }
}