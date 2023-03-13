import style from './Nav.module.css'
import { Link } from 'react-router-dom'


const Nav = () =>{
    return (
        <div className={style.container}>
            
            <div className={style.menu}>
                <Link className={style.linkimage} to={`/`}>
            <img className={style.image} src="http://www.fridevi.com.ar/images/master/header/bannerFRIDEVI_2016.png" alt="fridevi" />
                </Link>
                <Link className={style.link} to={`/nosotros`}><span>Nosotros</span></Link>
                <Link className={style.link} to={`/noticias`}><span>Noticias</span></Link>
                <Link className={style.link} to={`/clientes`}><span>Clientes</span></Link>
                <Link className={style.link} to={`/contacto`}><span>Contacto</span></Link>
                <Link className={style.link} to={`/login`}><span>Login</span></Link>
            </div>
            <div className={style.lenguaje}>
                <Link className={style.link} to={`/`}>Español</Link>
                <Link className={style.link} to={`/`}>English</Link>

            </div>
        </div>
    )
}

export default Nav