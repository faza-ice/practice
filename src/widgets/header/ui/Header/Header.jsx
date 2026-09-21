import Button from "@/shared/ui/Button"
import Title from "@/shared/ui/Title"
import Text from "@/shared/ui/Text"
import imag from '@/shared/assets/logo.svg'
import styles from "./Header.module.css"

const Header = ()=>{
    

    return(
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src={imag} alt="" />
                <div className={styles.name}><Title className={styles.title}>AANTHEE</Title><Text className={styles.text}><span className={styles.textMedium}>ФЕДЕРАЛЬНАЯ СЕТЬ</span></Text></div>
            </div>
            <nav className={styles.nav}>
               <Text><a href="" className={styles.textSemiBold}>Инструкторы</a></Text>
               <Text><a href="" className={styles.textSemiBold}>Категории</a></Text>
               <Text><a href="" className={styles.textSemiBold}>Тарифы</a></Text>
               <Text><a href="" className={styles.textSemiBold}>Отзывы</a></Text>
            </nav>
            <div className={styles.tech}>
                <Title className={styles.title}><span className={styles.titleBold}>+7 (800) 555-35-35</span></Title>
                <Button option='red' className={styles.button}>ЗАПИСЬ ОНЛАЙН</Button>
            </div>
        </div>
    )
}

export default Header