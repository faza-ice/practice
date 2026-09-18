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
                <Plate >ЛИЦЕНЗИРОВАННАЯ</Plate>
                <Title className={styles.title}>ТВОЙ УВЕРЕННЫЙ СТАРТ ЗА РУЛЕМ</Title>
                <Text className={styles.text}>Обучение на права категорий A, B, C по современным стандартам. Собственный технологичный автодром, новые автомобили и опытные инструкторы. Сдай экзамен в ГИБДД с первого раза!</Text>
            </div>
            <div className={styles.buttons}>
                <Button option="red" className={styles.button}>Выбрать категорию <img src={imag} alt="" /></Button><Button option="grey" className={styles.button}>Консультация эксперта</Button>
            </div>
            <div className={styles.plusCont}>
                <div className={styles.plus}>
                    <Title className={styles.plusTitle}>100%</Title>
                    <Text className={styles.plusSubTitle}>Сдали с 1-го раза</Text>
                    <Text className={styles.plusText}>Благодаря авторской методике обучения</Text>
                </div>
                <div className={styles.plus}>
                    <Title className={styles.plusTitle}>12+</Title>
                    <Text className={styles.plusSubTitle}>Филиалы в РФ</Text>
                    <Text className={styles.plusText}>Развитая инфраструктура и учебные классы</Text>
                </div>
                <div className={styles.plus}>
                    <Title className={styles.plusTitle}>150 000+</Title>
                    <Text className={styles.plusSubTitle}>Курсантов обучено</Text>
                    <Text className={styles.plusText}>Доверяют нам свою безопастность</Text>
                </div>
            </div>
        </div>
    )
}

export default Info