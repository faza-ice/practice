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
                <div className={styles.name}><Title className={styles.title}>AANTHEE</Title><Text className={styles.text}>федеральная сеть</Text></div>
            </div>
            <nav className={`${styles.nav}`}>
               <Text><a href="">Инструкторы</a></Text>
               <Text><a href="">Категории</a></Text>
               <Text><a href="">Тарифы</a></Text>
               <Text><a href="">Отзывы</a></Text>
            </nav>
            <div className={styles.tech}>
                <Title className={styles.title}>+7 (800) 555-35-35</Title>
                <Button option='red' className={styles.button}>запись онлайн</Button>
            </div>
        </div>
    )
}

export default Header