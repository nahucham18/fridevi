import style from './Sections.module.css'

const Sections = () =>{
    return (
        <article className={style.sections}>
            <section>
                INSTALACIONES
                <ul>
                    <li>Predio principal</li>
                    <li>Centro de Distribucion Regional Allen, Neuquen.</li>
                    <li>Planta industrial de Procesamiento de Cerdos</li>
                    <li>Otras Instalaciones</li>
                </ul>
            </section>

            <section>
                PRODUCTOS
                <ul>
                    <li>Medias reses bovinas</li>
                    <li>Reses ovinas</li>
                    <li>Cortes cárnicos vacunos</li>
                    <li>Menudencias bovinas y ovinas</li>
                    <li>Chacinados. Hamburguesas</li>
                </ul>
                </section>
    
            <section>
                LOGISTICA Y DISTRIBUCION
                En la actualidad FRIDEVI extiende su red de logística y distribució a:
                <li>5 PROVINCIAS</li>
                <li>Más de 60 LOCALIDADES</li>
                <li>Más de 500 PUNTOS DE ABASTECIMIENTO</li>
                </section>

            <section>
                CALIDAD Y MEDIO AMBIENTE
                El objetivo de FRIDEVI es elaborar y comercializar alimentos cárnicos seguros, inocui y de calidad, elaborados de acuerdo a especificación...
                </section>
        </article>
    )
}

export default Sections