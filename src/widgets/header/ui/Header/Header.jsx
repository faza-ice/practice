import Button from "@/shared/ui/button"
import Title from "@/shared/ui/title"
import Text from "@/shared/ui/text"
import Logo from '@/shared/ui/logo'
import { Link } from 'react-router-dom';
import styles from "./Header.module.css"

const Header = ()=>{
    

    return(
        <div className={styles.header}>
            <div className={styles.logo}>
                <Logo>A</Logo>
                <div className={styles.name}><Title className={styles.title}><Link to="/" className={styles.title}>AANTHEE</Link></Title><Text className={styles.text}><span className={styles.textMedium}>ФЕДЕРАЛЬНАЯ СЕТЬ</span></Text></div>
            </div>
            <nav className={styles.nav}>
               <Text><Link to="/coachs" className={styles.textSemiBold}>Инструкторы</Link></Text>
               <Text><Link to="/programs" className={styles.textSemiBold}>Категории</Link></Text>
               <Text><Link to="/rates" className={styles.textSemiBold}>Тарифы</Link></Text>
               <Text><Link to="/comments" className={styles.textSemiBold}>Отзывы</Link></Text>
            </nav>
            <div className={styles.tech}>
                <Title className={styles.title}><span className={styles.titleBold}>+7 (800) 555-35-35</span></Title>
                <Button option='red' className={styles.button}><Link to="/contacts" className={styles.button}>ЗАПИСЬ ОНЛАЙН</Link></Button>
            </div>
                <svg  width="56px" height="56px" viewBox="0 0 24 24" className={styles.svg}>
                    <path d="M4 18L20 18" stroke="rgba(229, 25, 34, 1)" />
                    <path d="M4 12L20 12" stroke="rgba(229, 25, 34, 1)" />
                    <path d="M4 6L20 6" stroke="rgba(229, 25, 34, 1)" />
                </svg>
        </div>
    )
}

export default Header