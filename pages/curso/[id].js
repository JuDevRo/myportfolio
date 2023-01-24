import React from 'react'
import { useRouter } from 'next/router'
import coursesDo from '../../db/courses'
import style from '../../styles/Curso.module.css'
import Link from 'next/link'

const Curso = () => {
    
    const router = useRouter()
    const cursoId = router.query.id

    return(
        <div className={style.container}>
            <div className={style.containerCurso}>
            <Link href="/"><h1>{coursesDo[0].title}</h1></Link>
                <h2>({coursesDo[0].subject})</h2>
                <p>{coursesDo[0].description}</p>
            </div>
        </div>
    )
}

export default Curso