import { useEffect, useState } from "react";
// import Header from "../Header";
import Post from "../Post";
import "./index.css";
import {getToken} from '../../utils/authoperations';
import {Link} from 'react-router-dom';
import image1 from '../images/icon.png';


function Posts(){
    const[Posts, setPosts]=useState([]);
    async function getData(){
        try{
            const data =await fetch("http://localhost:5000/posts",{
                method: 'GET', 
                mode: 'cors', 
                cache: 'no-cache', 
                credentials: 'same-origin', 
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`
                },
                redirect: 'follow', 
                referrerPolicy: 'no-referrer', 
                
            
            });
            const res = await data.json()
            console.log(res)
            setPosts(await res.posts);
        }catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{
        getData();
    },[]);

    return(
        <div>
            <div className="header1">
            
                <div className="header">

                    <h1 className="left_icon"><img  className="circle" src={image1} alt='landing_image'></img></h1>
                    <h1 className="text">Instaclone</h1>
                    <Link to={"./posts/Createpost"}><h1 className="camera_icon"><i class="fas fa-camera"></i></h1></Link>
                    
                </div>
                <div className="hr">
                <hr />
                </div>
           
            </div>
            
            <div className="posts">
                {Posts.reverse().map(post =>
                    <Post key={post._id} {...post}/>
                    )}
            </div>
            
        </div>
        
        
    )
    
}
export default Posts;
