import Header from '@/widgets/header'
import Plate from '@/shared/ui/plate'
import Title from '@/shared/ui/title'
import CoachList from '@/widgets/coach-list'
import Footer from '@/widgets/footer'
import styles from './CoachPage.module.css'

const CoachPage = ()=>{

    return(
        <>
        <Header></Header>
        <div className={styles.container}>
        <div className={styles.head}>
            <Plate>КОМАНДА ПРОФЕССИОНАЛОВ</Plate>
            <Title>ОПЫТНЫЕ И ТЕРПЕЛИВЫЕ ИНСТРУКТОРЫ</Title>
        </div>
        <CoachList></CoachList>
        </div>
        <Footer></Footer>
        </>
    )
}

export default CoachPage