import { Component, createRef } from 'react'
import axios from 'axios';
import {Button, HStack, Input, Tag, TagCloseButton, createStandaloneToast , AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,} from "@chakra-ui/react"
import {firebaseClient} from '../firebaseClient'
import { FaDownload, FaUpload } from 'react-icons/fa';
import { DefaultEditor } from 'react-simple-wysiwyg';


const toast = createStandaloneToast()

function slug(str) {
  str = str.replace(/^\s+|\s+$/g, ''); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;";
  var to   = "aaaaaeeeeeiiiiooooouuuunc------";
  for (var i=0, l=from.length ; i<l ; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-'); // collapse dashes

  return str;
};

export default class SoumettreArticle extends Component {
  constructor(props) {
    super(props);
    this.cancelRef = createRef();
    this.state = {
        article:'',
        titre:'',
        accroche:'',
        keyword:'',
      
        keywords: [],
        category:'Sport',
        url:'',
        imageFile: null,
        loading : false,
        html : '',
        isOpen : false




        

    }

    this.handleChangeArticle = this.handleChangeArticle.bind(this);
    this.handleAddKeyword = this.handleAddKeyword.bind(this);
    this.handleAddKeywords = this.handleAddKeywords.bind(this);
    this.handleChangeAccroche = this.handleChangeAccroche.bind(this);
    this.handleChangeTitre = this.handleChangeTitre.bind(this);
    this.handleChangeCategorie = this.handleChangeCategorie.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.handleImageAsFile = this.handleImageAsFile.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onOpen = this.onOpen.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onRemove = this.onRemove.bind(this);

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
  handleAddKeyword(event){
    this.setState({ keyword: event.target.value });
    console.log(this.state.keyword)
  }
  handleAddKeywords = () => {
    var ks = this.state.keywords;
    var k = this.state.keyword;
    console.log("keyword" , k)
    console.log("ks" , ks)
    ks.push(k)
    this.setState({ keywords: ks });
    this.setState({ keyword: "" });
    console.log(this.state.keywords)
  }

onRemove = (keyword) => {
let ks = this.state.keywords;
ks = ks.filter(item => item !== keyword)
this.setState({ keywords: ks });

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
    const {titre, article,  accroche, category, url, html, keywords} = this.state;
let data = {titre : titre, article : article, accroche: accroche, category: category, image: url, keywords: keywords, slug: slug(titre)}


    axios.post('/api/addarticle', data)
        .then((response) => {
            //access the resp here....
            var payload = JSON.stringify(response.data.json, null, 2);
            console.log(`response fetched. ${payload}`);
            console.log(`response fetched.`, response);

            toast({
              title: "Article soumis avec succès.",
              
              status: "success",
              duration: 9000,
              isClosable: true,
            })   
            
            
            this.setState({
                titre: "",
                article:"",
                accroche: '',
                category: '',
                url: '',
                keyword: '',
                loading : false,
                isOpen : false
            });

           
        })
        .catch((error) => {
            console.log(error);
            toast({
              title: "Erreur de soumission de l'article.",
              description : error.message,
              status: "error",
              duration: 9000,
              isClosable: true,
            })   
            
            
            this.setState({
                titre: "",
                article:"",
                accroche: '',
                category: '',
                keyword: '',
                url: '',
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
    
    return (
      <div>
          <h2>Soumettre un article</h2>
          <h3><strong>Titre de l'article</strong></h3>
          <input size="100" className="box" value={this.state.titre} onChange={this.handleChangeTitre} placeholder="Titre de l'article" />
          <h3><strong>Image (facultatif)</strong></h3>
          <input type="file" size="200" className="box" placeholder="Image (facultatif)" onChange={this.handleImageAsFile}/>
          <Button margin='10px' leftIcon={<FaUpload />} colorScheme='red' isLoading={this.state.loading} onClick={this.handleUpload} disabled={!this.state.imageFile}>Uploader l'image</Button>
          <h3><strong>Catégorie</strong></h3>
          <select name="categories"  value={this.state.category} onChange={this.handleChangeCategorie} id="categories">
  <option value="sport" selected="selected">Sport</option>
  <option value="société">Société</option>
  <option value="économie">Economie</option>
  <option value="politique">Politique</option>
  <option value="culture">Culture</option>
  <option value="high tech">High tech</option>
  <option value="people">People</option>
</select>
<h3><strong>Accroche (facultatif)</strong></h3>
          <textarea  className="box" value={this.state.accroche} onChange={this.handleChangeAccroche} placeholder="Accroche (facultatif)" />
          <h3><strong>Corps de l'article </strong></h3>
          
        
          <DefaultEditor value={this.state.article} onChange={this.onChange} />
         
          <textarea  className="box" value={this.state.article} onChange={this.handleChangeArticle} placeholder="Votre article" />
          <HStack spacing="24px">
          <Input placeholder="Votre keyword ici"  value={this.state.keyword} onChange={this.handleAddKeyword}/>
          <Button colorScheme='green'
           onClick={this.handleAddKeywords}> Ajouter un mot-clé</Button>
</HStack>
<HStack spacing={4}>
<HStack spacing={4}>
  {this.state.keywords.map((keyword) => (
    <Tag size="md" key={keyword} variant="solid" colorScheme="teal">
      {keyword}
      <TagCloseButton onClick={() => this.onRemove(keyword)}/>
    </Tag>
  ))}
</HStack>
</HStack>
        <div style={{ marginTop: 40 }}>
          <Button leftIcon={<FaDownload />} colorScheme='green'
           onClick={this.onOpen}
          >
            Soumettre l'article
          </Button>
          <AlertDialog
        isOpen={this.state.isOpen}
        leastDestructiveRef={this.cancelRef}
        onClose={this.onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Soumettre l'article
            </AlertDialogHeader>

            <AlertDialogBody>
              Etes-vous sûr? cette action sera définitive
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={this.cancelRef} onClick={this.onClose}>
                Annuler
              </Button>
              <Button colorScheme="green" isLoading={this.state.loading} onClick={e => this.onSubmit(e)} ml={3}>
                Soumettre l'article
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
         
        </div>
        <p> {this.state.html}</p>
        
      </div>
    )
  }
}

// Custom overrides for each style




