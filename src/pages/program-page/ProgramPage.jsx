import ProgramList from '@/widgets/program-list'
import Header from '@/widgets/header'
import Footer from '@/widgets/footer'
import Plate from '@/shared/ui/plate'
import Title from '@/shared/ui/title'
import styles from './ProgramPage.module.css'

const ProgramPage = ()=>{

    return(
        <>
            <Header></Header>
                <div className={styles.container}>
                <div className={styles.head}>
                    <Plate>КАТЕГОРИИ ОБУЧЕНИЯ</Plate>
                    <Title>ПРОГРАММЫ ПОД ЛЮБЫЕ ЦЕЛИ</Title>
                </div>
                <ProgramList></ProgramList>
            </div>
            <Footer></Footer>
        </>
    )
}

export default ProgramPage