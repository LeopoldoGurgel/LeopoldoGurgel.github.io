/////////////////////////////////////////////////////////////////////////////////
// To do

/* 
    Comments and comment form hide and show at the click of designated buttons. 
    Do the same on comment reply forms. (create a state and add a onClick listener to toggle
    the state on the button)
*/


/* 
    Buttons to send comments and replies were created. But they do not call the mutations
    to make them work. Create the functions to call the mutations and add them
    as onClick event listeners. Check if the desired mutations were defined on the back and frontend.
*/

/////////////////////////////////////////////////////////////////////////////////


import React, { useState, useEffect, useRef } from "react"
import { useQuery, useMutation } from "@apollo/client"
import { QUERY_USER, QUERY_SINGLE_POST } from "../utils/queries"
import { ADD_POST_COMMENT } from "../utils/mutations";
import Comment from '../components/Comment.jsx'
import Auth from '../utils/auth.js'


export default function Pseudocode({handlePageChange, post}){


    /////////////////////////////////////////////////////////////////////////////////
    // states section

    const [commentInputValue, setCommentInputValue] = useState('');
    const [postAuthorData, setPostAuthorData] = useState(null);    
    const [postData, setPostData] = useState(null);
    const [showComments, setShowComments] = useState(false);
    const [showCommentForm, setShowCommentForm] = useState(false);
    const [ error, setError ] = useState('');
    const [ showMessage, setShowMessage] = useState(false)
    const [message, setMessage] = useState('You must verify your account to leave comments.')


    // had to do this because, sometimes, the queries were completed before the component was completly mounted.
    // that was causing an error because it's not possible to update a state before it exists.
    // the isMounted boolean will be used to avoid those errors
    const isMounted = useRef(true);

    useEffect(() => {
        isMounted.current = false;
    }, []); 

    /////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////
    // Queries section

    // query single user from id
    
    const {loading: postAuthorLoading, error: postAuthorError} = useQuery(QUERY_USER,{
        variables: {userId: post.author},
        onCompleted: (data) => setPostAuthorData(data)
    });

    
    // query post info

    const {loading: postLoading, error: postError} = useQuery(QUERY_SINGLE_POST, {
        variables: {postId: post._id},
        onCompleted: (data) => setPostData(data)
    });
    
    /////////////////////////////////////////////////////////////////////////////////
    // Mutations section

    const [addComment, {addCommentError, addCommentData}] = useMutation(ADD_POST_COMMENT);

    
    /////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////
    // Error handling section

    if(postAuthorError){
        console.log('Error: ', postAuthorError.message);
        return <div>Error: {postAuthorError.message}</div>
    }

    if(postError){
        console.log('Error: ', postError);
        return <div>Error: {postError.message}</div>
    }

    if(postAuthorLoading || postLoading){
        return <div>Loading...</div>
    } 

    if (Auth.getProfile()?.verified){
        setShowMessage(false)
    } 

    /////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////
    //Event handler functions section
    
    
    // Send comment button

    const handleSendComment = async(e) =>{
        
        e.preventDefault();

        if(Auth.getProfile()?.verified){
            setShowMessage(false)
            try{
                const {newCommentData} = await addComment({
                    variables: {postId: postData?.post._id, content: commentInputValue}
                })
    
                let newComment = {
                    id: Math.random(),
                    author: Auth.getProfile()?.data?._id,
                    content: commentInputValue,
                    comments: [],
                    createdAt: 'Just posted'
                }
    
                isMounted.current && setPostData((prevData) => ({
                    ...prevData,
                    post: {
                        ...prevData.post,
                        comments: [
                            ...prevData.post.comments,
                            newComment
                        ]
                    }
                }))
    
                setCommentInputValue('')
            }catch(error){
                console.log('Error: ', error.message);
                setError(error.message);
            }
        } else {
            setShowMessage(true)
        }    
    }
  
   
    /////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////    
    //////////////////////////////////////////////////////////////////////////////////
    // testing area. Console.log away, kid...
   
    
    /////////////////////////////////////////////////////////////////////////////////
    
    return(
        <div id="containerDiv">

            {/* 
            /////////////////////////////////////////////////////////////////////////////////
            POST ITSELF 
            /////////////////////////////////////////////////////////////////////////////////
            */}

            <div id='#postDiv' className="mb-4">
                
                <div id="postheader" className="mb-3 hstack"> 
                    <h2 className="d-inline-block">{post.title}</h2>
                    <a href="#pseudocodes" onClick={()=> handlePageChange('Pseudocodes')} className="btn btn-dark ms-auto">Return to See Other Posts</a>
                </div>

                <p>{post.content.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                            <p>{line}</p>
                        </React.Fragment>
                    ))}
                </p>
                <div className="text-secondary">Written by {postAuthorData ? postAuthorData.user.name : 'Unknown author'} at {post?.createdAt}</div>
            </div>
            
            <div id="commentArea">
                
            {/* 
            /////////////////////////////////////////////////////////////////////////////////
            BUTTONS SHOW COMMENTS OR ADD A COMMENT
            /////////////////////////////////////////////////////////////////////////////////
            */}

                <div id="commentButtons" className="row ms-2">
                    <button className="btn btn-outline-dark col-auto"
                    id="showCommentsBtn"
                    type="button"
                    onClick={()=> setShowComments(!showComments)} 
                    >
                        {postData && postData.post.comments.length} 
                        {postData?.post.comments.length > 1 ? ' comments' : ' comment'} 
                    </button>

                    <button className="btn btn-outline-dark col-auto ms-4"
                    onClick={()=>{
                        if(Auth.getProfile()?.verified){
                            setShowCommentForm(!showCommentForm)
                        }else{
                            !Auth.getProfile() && setMessage('You need to Log in or Sign up to leave comments.')
                            setShowMessage(true)
                        }
                        }} >Leave a Comment</button>
                    
                </div>
                
            {/* 
            /////////////////////////////////////////////////////////////////////////////////
            COMMENT FORM (INITIALLY HIDDEN)
            /////////////////////////////////////////////////////////////////////////////////
            */}

                {showCommentForm && (<form>
                        <textarea className="w-100 mt-4"
                        name="comment"
                        id="commentInput"
                        rows="5" 
                        onChange={(e)=>setCommentInputValue(e.target.value)}
                        value={commentInputValue}></textarea>
                        <button
                        className="btn btn-dark"
                        onClick={handleSendComment} >Send Comment</button>
                        {error && <p className="text-danger p-2">{error}</p>}
                        
                    </form>)
                    }
                {showMessage && (<div className="badge text-bg-danger p-2 mt-3">{message}</div>)}
                {showComments && (<div className="box" id='postCommentForm'>
                    
                </div>)}

                {/* 
                /////////////////////////////////////////////////////////////////////////////////
                COMMENTS (INITIALLY HIDDEN)
                /////////////////////////////////////////////////////////////////////////////////
                */}

                {showComments && (<div className="mt-4" id='commentList'>
                    {postData && postData?.post?.comments.map((comment) => (
                        <Comment
                        key={comment._id}
                        comment={comment}
                        postData={postData.post}
                    />                        
                    ))}
                </div>)}

            </div>
        </div>
        
    )
}