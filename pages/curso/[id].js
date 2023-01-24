import React from 'react'
import { useRouter } from 'next/router'
import coursesDo from '../../db/courses'
import style from '../../styles/Curso.module.css'
import Link from 'next/link'

const curso = () => {
    const router = useRouter()
    const cursoId = router.query.id

    return(
        <div className={style.container}>
            <div className={style.containerCurso}>
            <Link href="/"><h1>{coursesDo[cursoId].title}</h1></Link>
                <h2>({coursesDo[cursoId].subject})</h2>
                <p>{coursesDo[cursoId].description}</p>
            </div>
        </div>
    )
}

export default curso