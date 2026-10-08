import Plate from '@/shared/ui/plate'
import Title from '@/shared/ui/title'
import {CommentList} from '@/features/comment-list'
import styles from './CommentBlock.module.css'

export const CommentBlock = ()=>{

    return(
        <div className={styles.container}>
            <div className={styles.head}>
                <Plate>ОТЗЫВЫ КУРСАНТОВ</Plate>
                <Title className={styles.title}>ОТЗЫВЫ ТЕХ, КТО УЖЕ ПОЛУЧИЛ ПРАВА</Title>
            </div>
            <CommentList></CommentList>
        </div>
    )
} 