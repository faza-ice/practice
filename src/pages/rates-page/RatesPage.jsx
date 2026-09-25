import Header from '@/widgets/header'
import Plate from '@/shared/ui/plate'
import RatesList from '@/widgets/rates-list'
import Footer from '@/widgets/footer'
import styles from './RatesPage.module.css'

const RatesPage = ()=>{

    return(
        <>
            <Header></Header>
            
            <div className={styles.container}>
                <div className={styles.head}>
                    <Plate>ЦЕНЫ И ТАРИФЫ</Plate>
                    <RatesList programId={1}></RatesList>
                </div>
                <RatesList programId={2}></RatesList>
                <RatesList programId={3}></RatesList>
            </div>
            <Footer></Footer>
        </>
    )
}

export default RatesPage