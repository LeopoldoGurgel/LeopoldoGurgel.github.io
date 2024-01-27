import React, {useState, useEffect} from "react";
import { useQuery } from "@apollo/client";
import { QUERY_POSTS, QUERY_USERS } from "../utils/queries";
import OlderPostsModal from '../components/OlderPostsModal';
import PostCard from '../components/PostCard'

const Pseudocodes = ({handlePageChange}) => {

    const [postArray, setPostArray] = useState([]);    
    const [isModalOpen, setModalOpen] = useState(false);
    const [postData, setPostData] = useState(null)
    const [userData, setUserData] = useState(null)


    const {loading: postLoading, error: postError} = useQuery(QUERY_POSTS, {
        onCompleted: (data)=> {
            setPostData(data)           
        }        
    });

    const {loading: userLoading, error: userError} = useQuery(QUERY_USERS, {
        onCompleted: (data) => {
            setUserData(data)
        }
    });

      
    useEffect(()=>{
        if(!postLoading && postData){
            const posts = postData?.posts || [];
            setPostArray(posts.slice(0, 10));            
        }
    }, [postLoading, postData]);

    if(postLoading || userLoading) {        
        return <div>Loading...</div>
    }


    if(postError || userError){
        return <div>Error: {postError.message || userError.message}</div>
    }

    const toggleModal = () => setModalOpen(!isModalOpen);
    const closeModal = () => setModalOpen(false);

    return(
        <div>
            <h2 className="mb-4">Pseudocodes</h2>
            <div>
                <div>
                    <div className="hstack mb-3">
                        <h4 className="d-inline-block">Latest Posts</h4>
                        <button 
                        className="d-inline-block ms-auto btn btn-dark"
                        onClick={toggleModal}>Older Posts</button>
                        {isModalOpen && (<OlderPostsModal show={isModalOpen} onHide={closeModal} handlePageChange={handlePageChange}/>)}
                    </div>

                    {postArray.map((post) => (                                              
                            <PostCard key={post.id} post={post} userData={userData} handlePageChange={handlePageChange} />

                    ))}                   
                </div>                                                           
            </div>
        </div>
    )
};

export default Pseudocodes;