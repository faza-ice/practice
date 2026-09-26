import Text from '@/shared/ui/text'
import Title from '@/shared/ui/title'
import styles from './Comment.module.css'

const Comment = (props)=>{
    const {grade, description, surname, name, symbol, date} = props

    return(
        <div className={styles.comment}>
            <div className={styles.head}>
                <div className={styles.info}>
                    <Title className={styles.title}>{name} {surname[0]}.</Title>
                    <Text className={styles.category}>Права категории {symbol}</Text>
                </div>
                <Text className={styles.date}>{date}</Text>
            </div>
            <div className={styles.grades}>
                {
                    Array.from({length:5}, (_, i)=>{
                        return (<svg
                            viewBox="0 0 10 10"
                            width={15}
                            height={15}
                            fill={i < grade ? 'rgba(245, 158, 11, 1)' : 'rgba(153, 153, 161, 1)'}
                        >
                            <path d="M1.66096 9.15203L2.83797 5.65403L-3.51258e-05 3.75103H3.47596L4.71897 2.6226e-05L5.98397 3.75103H9.43797L6.59997 5.65403L7.79897 9.15203L4.71897 6.91903L1.66096 9.15203Z"/>
                        </svg>)
                    })
                }
            </div>
            <Text className={styles.text}>{description}</Text>
        </div>
    )
}

export default Comment
