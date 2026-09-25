import Button from '@/shared/ui/button'
import Logo from '@/shared/ui/logo'
import Title from '@/shared/ui/title'
import Text from '@/shared/ui/text'
import styles from './Program.module.css'

const Program = (props)=>{
    const {image, description, price, time, theory, practice, symbol, name} = props

    return(
        <div className={styles.program}>
            <img src={image} alt="" className={styles.image}/>
            <div className={styles.container}>
                <div className={styles.head}>
                    <div className={styles.category}>
                        <Logo className={styles.logo}>{symbol}</Logo>
                        <Title className={styles.title}>{name}</Title>
                    </div>
                    <Title className={styles.price}>от {price}</Title>
                </div>
                <div className={styles.description}>
                    <Text>{description}</Text>
                </div>
                <hr />
                <div className={styles.param}>
                    <ul className={styles.ul}>
                        <li><Text>срок: {time}</Text></li>
                        <li><Text>теория: {theory}</Text></li>
                        <li><Text>практика: {practice}</Text></li>
                    </ul>
                </div>
                <Button option='grey' className={styles.button}>ВЫБРАТЬ ПРОГРАММУ</Button>
            </div>
        </div>
    )
}

export default Program