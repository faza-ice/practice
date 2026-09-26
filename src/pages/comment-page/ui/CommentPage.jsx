import CommentList from '@/widgets/comment-list'
import Footer from '@/widgets/footer'
import Header from '@/widgets/header'
import Plate from '@/shared/ui/plate'
import Title from '@/shared/ui/title'
import styles from './CommentPage.module.css'

const CommentPage=()=>{

    return(
        <>
            <Header></Header>
            <div className={styles.container}>
                <div className={styles.head}>
                    <Plate>ОТЗЫВЫ КУРСАНТОВ</Plate>
                    <Title>ОТЗЫВЫ ТЕХ, КТО УЖЕ ПОЛУЧИЛ ПРАВА</Title>
                </div>
                <CommentList></CommentList>
            </div>
            <Footer></Footer>
        </>
    )
}

export default CommentPage