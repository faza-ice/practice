import Comment from '@/entities/comment'
import {getComments, getProgramById} from '@/shared/api'
import styles from './CommentList.module.css'

const CommentList = ()=>{
    const comments = getComments()

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
                            symbol={getProgramById(comment.programId).symbol}
                            date={comment.date}
                        ></Comment>
                    )
                })
            }
        </div>
    )
}

export default CommentList