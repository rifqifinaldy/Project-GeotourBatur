import React from 'react'
import BlogDanArticle from '../Component/BlogDanArticle/BlogDanArticle'
import CommentBox from '../Component/CommentBox/CommentBox'
import Footer from '../Component/Footer/Footer'

const InformationCenter = () => {
    return (
        <div>
            <BlogDanArticle />
            <CommentBox />
            <Footer />
        </div>
    )
}

export default InformationCenter
