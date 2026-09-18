import Button from '@/shared/ui/Button'
import imag from '@/shared/assets/arrow-right.svg'
import Plate from '@/shared/ui/Plate'
import Title from '@/shared/ui/Title'
import Text from '@/shared/ui/Text'
import styles from './Info.module.css'

const Info = ()=>{


    return(
        <div className={styles.info}>
            <div className={styles.start}>
                <Plate >лицензированная автошкола</Plate>
                <Title className={styles.title}>твой уверенный старт за рулем</Title>
                <Text className={styles.text}>Обучение на права категорий A, B, C по современным стандартам. Собственный технологичный автодром, новые автомобили и опытные инструкторы. Сдай экзамен в ГИБДД с первого раза!</Text>
            </div>
            <div className={styles.buttons}>
                <Button option="red" className={styles.button}>Выбрать категорию <img src={imag} alt="" /></Button><Button option="grey" className={styles.button}>Консультация эксперта</Button>
            </div>
            <div className={styles.plusCont}>
                <div className={styles.plus}>
                    <span className={styles.plusTitle}>100%</span>
                    <span className={styles.plusSubTitle}>Сдали с 1-го раза</span>
                    <span className={styles.plusText}>Благодаря авторской методике обучения</span>
                </div>
                <div className={styles.plus}>
                    <span className={styles.plusTitle}>12+</span>
                    <span className={styles.plusSubTitle}>Филиалы в РФ</span>
                    <span className={styles.plusText}>Развитая инфраструктура и учебные классы</span>
                </div>
                <div className={styles.plus}>
                    <span className={styles.plusTitle}>150 000+</span>
                    <span className={styles.plusSubTitle}>Курсантов обучено</span>
                    <span className={styles.plusText}>Доверяют нам свою безопастность</span>
                </div>
            </div>
        </div>
    )
}

export default Info