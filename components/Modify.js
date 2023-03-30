import { Component, createRef } from 'react'
import axios from 'axios';
import {Button, createStandaloneToast , AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,} from "@chakra-ui/react"
import {firebaseClient} from '../firebaseClient'
import { FaDownload, FaUpload } from 'react-icons/fa';
import { DefaultEditor } from 'react-simple-wysiwyg';
import Image from 'next/image'

const toast = createStandaloneToast()

export default class Modify extends Component {
  constructor(props) {
    super(props);
    this.cancelRef = createRef();
    this.state = {
        id : props.article[0]._id,
        article:props.article[0].article,
        titre:props.article[0].title,
        accroche:props.article[0].accroche,
        category:props.article[0].category,
        url:props.article[0].thumbnail,
        imageFile: null,
        loading : false,
        html : props.article[0].article,
        isOpen : false




        

    }

    this.handleChangeArticle = this.handleChangeArticle.bind(this);
    this.handleChangeAccroche = this.handleChangeAccroche.bind(this);
    this.handleChangeTitre = this.handleChangeTitre.bind(this);
    this.handleChangeCategorie = this.handleChangeCategorie.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.handleImageAsFile = this.handleImageAsFile.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onOpen = this.onOpen.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    //this.onSubmit=this.onSubmit.bind(this)
  }


  handleChangeArticle(event) {
    this.setState({ article: event.target.value });
  }
  handleChangeTitre(event) {
    this.setState({ titre: event.target.value });
  }
  handleChangeAccroche(event) {
    this.setState({ accroche: event.target.value });
  }
  handleChangeCategorie(event) {
    this.setState({ category: event.target.value });
  }

   handleImageAsFile = (e) => {
    const image = e.target.files[0]
    
    this.setState({ imageFile: image });
}

 handleUpload = (e) => {
  e.preventDefault();
  this.setState({ loading: true });

  const uploadTask = firebaseClient.storage().ref(`/images/${this.state.imageFile.name}`).put(this.state.imageFile);
  uploadTask.on("state_changed", console.log, console.error, () => {
    firebaseClient.storage()
      .ref("images")
      .child(this.state.imageFile.name)
      .getDownloadURL()
      .then((url) => {
        this.setState({ loading: false });
        this.setState({ imageFile: null });
        this.setState({ url: url });
      });
  });
}

  onSubmit = async (e) => {
    e.preventDefault();
    // get our form data out of state
    console.log("zzaaaa7")
    const {id, titre, article,  accroche, category, url, html} = this.state;
let data = {id: id,titre : titre, article : article, accroche: accroche, category: category, image: url}

console.log('data', data)
    axios.post('/api/modifyarticle', data)
        .then((response) => {
            //access the resp here....
            var payload = JSON.stringify(response.data.json, null, 2);
            console.log(`response fetched. ${payload}`);
            toast({
              title: "Article soumis avec succès.",
              
              status: "success",
              duration: 9000,
              isClosable: true,
            })   
            
            
            this.setState({
             
                loading : false,
                isOpen : false
            });

           
        })
        .catch((error) => {
            console.log(error);
            toast({
              title: "Erreur de soumission de l'article.",
              
              status: "error",
              duration: 9000,
              isClosable: true,
            })   
            
            
            this.setState({
            
                loading : false,
                isOpen : false
            });

          
        });
}

 onChange(e) {
  this.setState({article : e.target.value});
}
onOpen(e) {
  this.setState({isOpen : true});
}
onClose(e) {
  this.setState({isOpen : false});
}

  render() {
 console.log("perrrrrrrops", this.props)
    return (
      <div>
          <h2>Modifier un article</h2>
          <h3><strong>Titre de l'article</strong></h3>
          <input size="100" className="box" value={this.state.titre} onChange={this.handleChangeTitre} placeholder="Titre de l'article" />
          <h3><strong>Image (facultatif)</strong></h3>
          <input type="file" size="200" className="box" placeholder="Image (facultatif)" onChange={this.handleImageAsFile}/>
          <Button margin='10px' leftIcon={<FaUpload />} colorScheme='red' isLoading={this.state.loading} onClick={this.handleUpload} disabled={!this.state.imageFile}>Uploader l'image</Button>
       {this.state.url != '' ?  <Image height= {100} width= {160} src={this.state.url}></Image> : <p> Pas d'image choisie</p> }
          <h3><strong>Catégorie</strong></h3>
          <select name="categories"  value={this.state.category} onChange={this.handleChangeCategorie} id="categories">
  <option value="sport" selected="selected">Sport</option>
  <option value="société">Société</option>
  <option value="économie">Economie</option>
  <option value="politique">Politique</option>
        <option value="people">People</option>
</select>
<h3><strong>Accroche (facultatif)</strong></h3>
          <input size="100" className="box" value={this.state.accroche} onChange={this.handleChangeAccroche} placeholder="Accroche (facultatif)" />
          <h3><strong>Corps de l'article </strong></h3>
          
        
          <DefaultEditor value={this.state.article} onChange={this.onChange} />
          <textarea  className="box" value={this.state.article} onChange={this.handleChangeArticle} placeholder="Accroche (facultatif)" />
        <div style={{ marginTop: 40 }}>
          <Button leftIcon={<FaDownload />} colorScheme='green'
           onClick={this.onOpen}
          >
            Modifier l'article
          </Button>
          <AlertDialog
        isOpen={this.state.isOpen}
        leastDestructiveRef={this.cancelRef}
        onClose={this.onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Modifier l'article
            </AlertDialogHeader>

            <AlertDialogBody>
              Etes-vous sûr? cette action sera définitive
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={this.cancelRef} onClick={this.onClose}>
                Annuler
              </Button>
              <Button colorScheme="green" isLoading={this.state.loading} onClick={e => this.onSubmit(e)} ml={3}>
                Modifier l'article
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
         
        </div>
        
        
      </div>
    )
  }
}

// Custom overrides for each style




