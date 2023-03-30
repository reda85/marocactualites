import { FaTrashAlt } from 'react-icons/fa'
import {Button, useToast} from '@chakra-ui/react'
import ChangePass from './changepass'
import NameForm from './nameform'
import { useState } from 'react'

const Account = ({user}) => {
    const [loading, useLoading] = useState(false)
    const toast=useToast()
    return(
    <div>
    <h2 class="col-6 off-2 col-12-xsmall">Paramètres du compte</h2>

        
            
                
            <NameForm user={user}/>
            
            
       
        <hr class="rounded" />
        
        <ChangePass user={user}/>

        <hr class="rounded" />
      
            <div class="row gtr-uniform">
            <h3 class="col-6 off-2 col-12-xsmall">Suppression de compte</h3>
            <p class="col-6 off-2 col-12-xsmall"> <strong>Veuillez cliquer sur le bouton ci-dessus si vous souhaitez supprimer votre compte </strong></p>

               
                
               
                <div class="col-6 off-2 col-12-xsmall">
                    <ul class="actions">
                        <li><Button colorScheme="red" isLoading={loading} leftIcon={<FaTrashAlt />} onClick={async () => {
    
    setLoading(true)
        await user.delete().then((result) => {
            toast({
              title: "Connecté supprimé avec succès.",
              description: "Vous allez être dirigé vers la page d'acceuil.",
              status: "success",
              duration: 9000,
              isClosable: true,
            })

            
                // ...
                
            window.location.href = '/';
          }).catch((error) => {
                
            // Handle Errors here.
           console.log(error)
           toast({
            title: "Erreur de suppression.",
            description: error.message,
            status: "error",
            duration: 9000,
            isClosable: true,
          })
          setLoading(false)
            // ...
          })

          
}}> Supprimer votre compte </Button></li>
                        
                    </ul>
                </div>
            </div>
            
        
        </div>
        )
}
export default Account