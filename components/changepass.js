import React from 'react';
import axios from 'axios';


import { FaKey } from 'react-icons/fa';
import {Button, createStandaloneToast} from '@chakra-ui/react'
export default class ChangePass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            nom: "",
            prenom:"",
            errorLabel: "",
            errorLabelHidden: true,
            list: []
        };
    }


    onChange = (e) => {
        // Because we named the inputs to match their corresponding values in state, it's
        // super easy to update the state

        // console.log(`${e.target.name} = ${e.target.value}`);
        this.setState({[e.target.name]: e.target.value});
    }


 /*   onSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        const {password} = this.state;
let data = {password: password, email : this.props.user.email, user : this.props.user}
        axios.post('/api/changepassword', data)
            .then((response) => {
                //access the resp here....
                var payload = JSON.stringify(response.data.json, null, 2);
                console.log(`response fetched. ${payload}`);
                this.setState({
                    email: "this.props.user.email}",
                    
                    errorLabelHidden: true,
                    list: this.state.list.concat([payload])
                });

            })
            .catch((error) => {
                console.log(error);
                this.setState({
                    errorLabelHidden: false,
                    errorLabel: "OoPS that didn't work :("
                    
                });
            });
    }
*/
onSubmit = async (e) => {
    const toast = createStandaloneToast()
    this.setState({loading : true})
    e.preventDefault();
    //console.log('mmouk')
        await this.props.user.updatePassword(this.state.password).then(result => {
            toast({
                title: "Mot de passe modifié avec succès.",
                description: "Gardez votre mot de passe dans un endroit sécurisé.",
                status: "success",
                duration: 9000,
                isClosable: true,
              })
           this.setState({loading : false})
//console.log("his.props.user", this.props.user)
          }).catch(function(error) {
            toast({
                title: "Erreur de modification de mot de passe.",
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
      
      password: "",
      
    });
  }

    render() {
//console.log("prooooops", this.props)
        const {nom, password, list, errorLabel} = this.state;
       
        if (this.props.user) {
        return (
            
            <div>
                
                <div class="row gtr-uniform">
                
                <h3 class="col-6 off-2 col-12-xsmall">Changement de mot de passe</h3>
            <p class="col-6 off-2 col-12-xsmall"> <strong>Il est recommendé de changer votre mot de passe fréquemment pour assurer la sécurité de votre compte</strong></p>
                <div class="col-6 off-2 col-12-xsmall">
                    <input type="Email" name="email" disabled placeholder={this.props.user.email}/>
                </div>
                <div class="col-6 off-2 col-12-xsmall">
                    <input type="password" name="password"  value={password} onChange={this.onChange} placeholder="Password" />
                </div>
    
               
                
               
                <div class="col-6 off-2 col-12-xsmall">
                    <ul class="actions">
                        <li><Button colorScheme="green" isLoading={this.state.loading} leftIcon={<FaKey />} onClick={async () => {
    
    //console.log('mmouk')
        await this.props.user.updatePassword(this.state.password)
//console.log("his.props.user", this.props.user)
          
}}> Changer le mot de passe</Button></li>
                        <li><Button  onClick={this.reset} >Annuler</Button></li>
                    </ul>
                </div>
                
                </div>
                <div><span hidden>{errorLabel}</span></div>
                <div>
                    <ol>
                        {
                            list.map((item) => (
                                <li key={item}>{item}</li>
                            ))
                        }
                    </ol>
                </div> 
            </div>
        );
    } else { return <div> Loading ...</div>}
}
}