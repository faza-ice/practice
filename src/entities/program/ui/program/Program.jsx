import Button from '@/shared/ui/button'
import Logo from '@/shared/ui/logo'
import Title from '@/shared/ui/title'
import Text from '@/shared/ui/text'
import imag from '@/shared/assets/images/granta_white.png'
import styles from './Program.module.css'

const Program = (props)=>{
    const {image, description, price, time, theory, practice} = props

    return(
        <div className={styles.program}>
            <img src={imag} alt="" className={styles.image}/>
            <div className={styles.container}>
                <div className={styles.head}>
                    <div className={styles.category}>
                        <Logo className={styles.logo}>A</Logo>
                        <Title className={styles.title}>Мотоциклы</Title>
                    </div>
                    <Title className={styles.price}>от 12 500 ₽</Title>
                </div>
                <div className={styles.description}>
                    <Text>описание</Text>
                </div>
                <hr />
                <div className={styles.param}>
                    <ul className={styles.ul}>
                        <li><Text>срок</Text></li>
                        <li><Text>теория</Text></li>
                        <li><Text>практика</Text></li>
                    </ul>
                </div>
                <Button option='grey' className={styles.button}>ВЫБРАТЬ ПРОГРАММУ</Button>
            </div>
        </div>
    )
}

export default Program