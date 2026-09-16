import Button from "@/shared/ui/Button"
import imag from '@/shared/assets/logo.svg'
import styles from "./Header.module.css"

const Header = ()=>{
    

    return(
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src={imag} alt="" />
                <div className={styles.name}><span className={styles.title}>AANTHEE</span><span className={styles.text}>федеральная сеть</span></div>
            </div>
            <nav className={`${styles.nav}`}>
                <a href="">Инструкторы</a>
                <a href="">Категории</a>
                <a href="">Тарифы</a>
                <a href="">Отзывы</a>
            </nav>
            <div className={styles.tech}>
                <span className={styles.title}>+7 (800) 555-35-35</span>
                <Button option='red' style={styles.button}>запись онлайн</Button>
            </div>
        </div>
    )
}

export default Header