export function Footer(){
    return(
        <footer className="page-footer grey darken-3">
        <div className="footer-copyright">
            <div className="container">
            © {new Date().getFullYear()} Copyright
            <a className="grey-text text-lighten-4 right" href="#!">More projets</a>
            </div>
          </div>
        </footer>
    )
}