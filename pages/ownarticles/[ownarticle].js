
import { Icon } from "@chakra-ui/react"

import {  NewsArticleJsonLd, NextSeo } from 'next-seo'
import Page from '../../components/page';
import LastArticles from '../../components/lastArticles';

import parse from 'html-react-parser';
import { useState, useRef} from 'react'

import { useRouter } from 'next/router'
import { Button, HStack, Text, AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    useToast, } from '@chakra-ui/react';
import { FaCross, FaTags, FaThumbsUp, FaTimes, FaTrash } from 'react-icons/fa';
import axios from 'axios'
import { fr } from 'date-fns/locale'
import {format} from 'date-fns'
import {FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon} from 'react-share'
import { useAuth } from '../../auth';
import clientPromise from '../../util/mongodb'
import Image from 'next/image';
import { Adsense } from '@ctrl/react-adsense';

export const config = { amp: 'nonAmp' }




function Ownarticle({ article, lastposts }) {
    const router = useRouter()
    const toast = useToast()
    const user= useAuth()
    const [isOpen, setIsOpen] = useState(false)
    const [isOpen2, setIsOpen2] = useState(false)
    const [isloading, setLoading] = useState(false)
  const onClose = () => setIsOpen(false)
  const onClose2 = () => setIsOpen2(false)
  const cancelRef = useRef()
    //console.log("aaaaaaaarticle de mierda ", article)
    //console.log("myuser", user)
    const url = "https://marocactualites.com/ownarticles/" + article[0].slug
    const api_base = process.env.NODE_ENV == 'production' ? 'https://marocactualites.com/' : 'http://localhost:3000';
   
 const onSubmit = async (e, article) => {
        e.preventDefault();
        setLoading(true)
        // get our form data out of state
        console.log("zzaaaa7")
        
    let data = {_id : article[0]._id}
        axios.post('/api/validatearticle', data)
            .then((response) => {
                //access the resp here....
                var payload = JSON.stringify(response.data.json, null, 2);
               // console.log(`response fetched. ${payload}`);
                toast({
                    title: "Article validé avec succès.",
                    
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                  })   
                  setLoading(false)
                  setIsOpen(false)
                  router.push(api_base + '/drafts')
            })
            .catch((error) => {
                console.log(error);
                toast({
                    title: "Erreur de validation de l'article.",
                    description: "Veuillez réessayer plus tard.",
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                  })
                  setLoading(false)
                  setIsOpen(false)
            });
    } 
    
    
    const onDelete = async (e, article) => {
        e.preventDefault();
        setLoading(true)
        // get our form data out of state
        console.log("zzaaaa7")
        
    let data = {_id : article[0]._id}
        axios.post('/api/deletearticle', data)
            .then((response) => {
                //access the resp here....
                var payload = JSON.stringify(response.data.json, null, 2);
                //console.log(`response fetched. ${payload}`);
                toast({
                    title: "Article rejeté avec succès.",
                    
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                  })
                  setLoading(false)
                  setIsOpen2(false)
                  router.push(api_base + '/drafts')
            })
            .catch((error) => {
                console.log(error);
                toast({
                    title: "Erreur de rejet de l'article.",
                    description: "Veuillez réessayer plus tard.",
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                  })
                  setLoading(false)
                  setIsOpen2(false)
            });
    } 

    var content = "<div className='break-words mt-8 text-lg  leading-loose text-gray-800  '> "+article[0].article+"</div>"
    
    if (router.isFallback) {
      return <div>Loading...</div>
    }  
    return (

        <Page user={user} title={article[0].title} description={article[0].accroche}>
          <NextSeo
         
          openGraph={{
            url : url,
            title : article[0].title,
            description : article[0].accroche,
            type : 'website',
           images: [
              {
                url: [article[0].thumbnail],
                width: 800,
                height: 600,
                alt: 'Og Image Alt',
              },
            ],
            site_name : 'Maroc Actualités'
          }}
          facebook={{
            appId : '429291778380767'
          }}
          >

          </NextSeo>
          <NewsArticleJsonLd
        url={url}
        title={article[0].title}
        images={[article[0].thumbnail]}
        datePublished= {new Date(article[0].created).toISOString()}
        section={article[0].category}
        authorName="La rédaction"
        publisherName="Maroc Actualités"
        publisherLogo="https://firebasestorage.googleapis.com/v0/b/kmx1-16598.appspot.com/o/Logo%20Solo%20PNG.png?alt=media&token=a8784951-296e-48e6-a363-4cf0fa1ff537"
        description={article[0].accroche}
        body={article[0].article}
        keywords={article[0].keywords}
      />
         <div className="row">
						<div style={{marginTop : "30px"}} className="col-8 col-12-small" >

<section>
									<header className="main">
                                    <div className="row "> 
                                        <Text className='  font-bold' m="0"  color='green'>{article[0].category}</Text>
                                        <span> </span>
                                        <Text m="0" p="0" color='red'> | </Text>
                                        <Text as="i"> {format(article[0].created, " cccc dd MMMM yyyy 'à' HH:mm", {
  locale: fr
})}</Text>
 
                                        </div> 
										<div className='mt-10 mb-16 text-black font-semibold text-3xl'>{article[0].title}</div>
<div className='flex my-6 md:hidden md:h-72 md:w-full '>
                    <Adsense className="adsbygoogle" responsive='true'
     client="ca-pub-1131650691837357"
     slot="9619846246"></Adsense>
     </div>
                   
                                       
                                        <div className="row">
                                        <div style={{marginLeft : "0", paddingLeft : '0'}} >
                                    <FacebookShareButton url={url} quote={article[0].title} >
                                        <FacebookIcon size={32} round={true}/>
                                        </FacebookShareButton>
                                        </div>
                                        <div >
                                        <TwitterShareButton url={url} quote={article[0].title} >
                                        <TwitterIcon size={32} round={true}/>
                                        </TwitterShareButton>
                                        </div>
                                        <div >
                                        <WhatsappShareButton url={url} quote={article[0].title} >
                                        <WhatsappIcon size={32} round={true}/>
                                        </WhatsappShareButton>
                                        </div>
                                        </div>
									</header>
                                   
									{article[0].thumbnail ? <div className="relative h-128  aspect-video"><Image src={article[0].thumbnail} alt="image_article" fill priority /></div> : null}
                  <div className='flex my-5 md:hidden md:h-72 md:w-full '>
                    <Adsense className="adsbygoogle"
     responsive='true'
     client="ca-pub-1131650691837357"
     slot="9619846246"></Adsense>
     </div>
                  <div className=' underline'  >Par : la Rédaction</div>               

									<div className='mt-8 text-2xl text-black '>{article[0].accroche}</div>
                  <div className='flex my-6 md:hidden md:h-72 md:w-full '>
                    <Adsense className="adsbygoogle"
      responsive='true'
     client="ca-pub-1131650691837357"
     slot="9619846246"></Adsense>
     </div>
									{parse(content)} 
                
  
  <div className='my-6'>
								{article[0].keywords ? <HStack> <Icon as= {FaTags} />
  <span>&nbsp;</span> 
  <div className='font-bold'  >Mots-clés : { article[0].keywords.map(keyword => keyword + ',')}</div>	</HStack> : null }
  </div>              
              	</section>

                                
                                    {article[0].statut == "draft" ? 
                                    <div className="row">
                                    <Button  leftIcon={<FaThumbsUp/>} colorScheme="green" m={5} onClick={() => setIsOpen(true)}> Valider l&apos;article</Button> 
                                    <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Valider l&apos;article
            </AlertDialogHeader>

            <AlertDialogBody>
              Etes-vous sûr? cette action sera définitive
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Annuler
              </Button>
              <Button colorScheme="green" isLoading={isloading} onClick={e => onSubmit(e, article)} ml={3}>
                Valider l&apos;article
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
                                    <Button leftIcon={<FaTimes/>} colorScheme="red" m={5} onClick={() => setIsOpen2(true)}>Rejeter l&apos;article</Button> 
                                   
                                    <AlertDialog
        isOpen={isOpen2}
        leastDestructiveRef={cancelRef}
        onClose={onClose2}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Rejeter l&apos;article
            </AlertDialogHeader>

            <AlertDialogBody>
              Etes-vous sûr? cette action sera définitive
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose2}>
                Annuler
              </Button>
              <Button colorScheme="red" isLoading={isloading} onClick={e => onDelete(e, article)} ml={3}>
                Rejeter l&apos;article
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
                                    </div>	
                                    
                                    : null }
                                    <div>

                                   
                                    </div>
                                    <div >
                                    <Adsense className="text-center  my-3"
  client="ca-pub-1131650691837357"
  slot="6027117993"
  style={{ display: 'block', width:'300px' }}
  
  format="auto-relaxed"
/></div>

<div className='hidden md:flex my-6' >
                                    <Adsense className="adsbygoogle"
 responsive='true'
     client="ca-pub-1131650691837357"
     slot="9479852239"
     /></div> 

     <div className='md:hidden flex my-6' >
                                    <Adsense className="adsbygoogle"
 responsive='true'
 client="ca-pub-1131650691837357"
 slot="8209673605"
     /></div>                                    
                                    <LastArticles Lastposts={lastposts}></LastArticles>
      </div>
      <div style={{marginTop : "30px"}} className="col-4 col-12-small">
      <div className='hidden md:flex md:flex-col px-4  md:w-96 md:sticky md:top-0'>
        <Adsense className="adsbygoogle"
   responsive='true'
     client="ca-pub-1131650691837357"
     slot="3352206399"></Adsense>

        </div>
      </div>
      </div>
      
      </Page>)
    


  
}



export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const client = await clientPromise
    const db = client.db('articles');
   let isConnected = true;
  var posts = await db.collection('ownarticles').find().toArray()
  //const res = await fetch('https://.../posts')
  
 // const posts = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { ownarticle: post.slug , id: post._id.toString() },
  }))
 // console.log("paths", paths[paths.length - 1])
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: 'blocking' }
}




export async function getStaticProps({params}) {
  const client = await clientPromise
    const db = client.db('articles');
   let isConnected = true;
  var Feed = require('rss-to-json'); 

  
  
  
  let posts=[]
  let ownposts=[]


  
  
  //var lastposts = await db.collection('ownarticles').find({statut : 'valid'}).sort({created : -1}).limit(4).toArray()
 var articlem = await db.collection('ownarticles').find({ slug : params.ownarticle}).toArray()

    var lastpostss = await db.collection('ownarticles').find({statut : 'valid'}).sort({created : -1}).limit(4).toArray()
    var updatenumreads = await db.collection('ownarticles').updateOne({ slug : params.ownarticle },
    {
      $inc: { reads: 1 }})
//console.log("hmmm", params)

//hotposts.forEach(post => { post._id = post._id });

//posts = posts.map(post => post.item)
//hotposts = hotposts.map(post => post.item)


//console.log("aaaarticle", JSON.stringify(articlem))


return {
  props : {
    
    article : JSON.parse(JSON.stringify(articlem)) , lastposts : JSON.parse(JSON.stringify(lastpostss))
    , 
    
    isConnected},
    revalidate: 1

  };
}

export default Ownarticle