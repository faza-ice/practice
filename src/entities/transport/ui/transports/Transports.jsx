import styles from './Transports.module.css'

const Transports = ()=>{
    const transports = {
        'images':'src/shared/assets/images/kawasaki.png',
        'title':'Kawasaki Ninja600',
        'year': 2026,
        'transmission': 'МКПП / АКПП',
    }

    return(
        <div 
            className = {styles.transports}
        >
            <img src={`${transports.images}`} alt="" />
            <div className={styles.info}>
                <div className={styles.title}>{`${transports.title}`}</div>    
                <div className={styles.tech}> 
                    <div className={styles.year}>Год: {`${transports.year} `}</div> 
                    <div className={styles.transmission}>{`${transports.transmission}`}</div>
                </div>
            </div>
        </div>
    )
}

export default Transports