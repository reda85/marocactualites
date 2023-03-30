import Link from 'next/link'
const Footer = () => {
    return (
      <footer>
        <div className="copyright">© {new Date().getFullYear()} Maroc Actualités.</div>
        <div className="info">
          <Link href="/politique_confidentialite" >
            Politique de confidentialité
           
          </Link>
          <span> &nbsp; - &nbsp; </span>
          <Link href="/mentions_legales" >
            Mentions légales
           
          </Link>
        </div>
        <style jsx>{`
          footer {
            text-align: center;
            margin: 120px 0;
          }
        `}</style>
      </footer>
    );
  };
  
  export default Footer;