import style from './Home.module.css'
import Carrusel from '../../components/Carrusel/Carrusel'
import Sections from '../../components/Sections/Sections'


const Home = () =>{
    return (
        <div className={style.container}>
            
            <Carrusel />
            <Sections/>
        </div>
    )
}

export default Home