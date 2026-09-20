import Text from '@/shared/ui/Text'
import Title from '@/shared/ui/Title'
import imag from '@/shared/assets/logo.svg'
import styles from './Footer.module.css'

const Footer = ()=>{

    return(
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.info}>
                    <div className={styles.logo}>
                        <img src={imag} alt="" />
                        <Title className={styles.title}>AANTHEE</Title>
                    </div>
                    <div>
                        <Text className={styles.contText}>Современная лицензированная автошкола нового поколения. Обучаем искусству безопасного вождения с 2012 года.</Text>
                    </div>
                </div>
                <div className={styles.nav}>
                    <div className={styles.programs}>
                        <Title className={styles.title}>ПРОГРАММЫ</Title>
                        <Text className={styles.contText}>Категория A</Text>
                        <Text className={styles.contText}>Категория B</Text>
                        <Text className={styles.contText}>Категория C</Text>
                    </div>
                    <div className={styles.autoSchool}>
                        <Title className={styles.title}>АВТОШКОЛА</Title>
                        <Text className={styles.contText}>Наши отзывы</Text>
                        <Text className={styles.contText}>Инструкторы</Text>
                    </div>
                </div>
            </div>
            <div className={styles.foot}>
                <Text className={styles.footText}>© 2026 Autoschool. Все права защищены. Лицензия на образовательную деятельность № Л035-01298-77/00184323</Text>
                <div className={styles.footCont}>
                    <Text className={styles.footText}>Политика конфиденциальности</Text>
                    <Text className={styles.footText}>Пользовательское соглашение</Text>
                </div>
            </div>
        </div>
    )
}

export default Footer