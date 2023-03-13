import style from './Footer.module.css'
import { Link } from 'react-router-dom'


const Footer = () =>{
    return (
        <footer className={style.footer}>
            <div className={style.localitation}>
                <Link to={`https://www.google.com.ar/maps/place/FRIDEVI/@-40.8423296,-62.9568338,17z/data=!3m1!4b1!4m5!3m4!1s0x95f69910370ef415:0xd89cf8aae8e355d!8m2!3d-40.8423337!4d-62.9546451?hl=es-419`}>
                    <img src="http://www.fridevi.com.ar/images/master/footer/location.png" alt="localitation" />
                    <span>Km 3.5, Ruta Provicial 1, Rio Negro</span>
                </Link>
                    <p>Copyright 2017 FRIDEVI | Todos los derechos reservados</p>
            </div>
            <div className={style.contacto}>
               <img src="http://www.fridevi.com.ar/images/master/footer/mail.png" alt="mensaje" />
               <img src="http://www.fridevi.com.ar/images/master/footer/phone.png" alt="phone" /> 
               <span>+54 02920 433114</span>
            </div>

        </footer>
    )
}

export default Footer