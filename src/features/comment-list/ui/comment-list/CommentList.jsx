import {Comment} from '@/entities/comment'
import {comments} from '../../model/commentData'
import styles from './CommentList.module.css'

export const CommentList = ()=>{

    return(
        <div className={styles.comment}>
            {
                comments.map((comment)=>{
                    return(
                        <Comment
                            grade={comment.grade}
                            surname={comment.surname}
                            name={comment.name}
                            description={comment.description}
                            symbol={comment.symbol}
                            date={comment.date}
                        ></Comment>
                    )
                })
            }
        </div>
    )
}