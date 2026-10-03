import {CommentBlock} from '@/widgets/comment-block'
import Footer from '@/widgets/footer'
import Header from '@/widgets/header'
import styles from './CommentPage.module.css'

export const CommentPage=()=>{

    return(
        <>
            <Header></Header>
            <CommentBlock></CommentBlock>
            <Footer></Footer>
        </>
    )
}
