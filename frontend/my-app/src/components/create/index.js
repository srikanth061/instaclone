
import {getToken} from "../../utils/authoperations";
import {useState,useEffect} from "react";
import {Link} from "react-router-dom";
import "./index.css";
import {useHistory} from "react-router-dom";
import image1 from "../images/icon.png"




function Createpost(){
    const history=useHistory()
    const [loginmsg,setloginmsg]=useState('')
    const [title,settitle]=useState('')
    const [body,setbody]=useState('')
    const [file,setfile]=useState('')
    const [place,setplace]=useState('')
    const [url,seturl]=useState('')

    useEffect(()=>{
        if(url){
            try{
                const res=fetch("http://localhost:5000/posts",{
                    method:'POST',
                    headers:{
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${getToken()}`
                    },
                        body:JSON.stringify({
                            title,body,pic:url,place
                        })
                    
                })
                const data= res.json();
                console.log(data)
                setloginmsg(data.message)
                
            }catch(e){
                console.log(e)
            }
        }else{
            console.log('error')
        }
        
    },[url])
    
    const creating=async elem=>{
        elem.preventDefault();
        var data=new FormData()
        data.append('file',file)
        data.append('upload_preset',"insta-clone")
        data.append('cloud_name',"dijcmidy2")
        await fetch('https://api.cloudinary.com/v1_1/dijcmidy2/image/upload',{
            method:'POST',
            body:data
        })
        .then(res=>res.json())
        .then(data=>{
            seturl(data.url)
            console.log('formdata',data)
        })
        .then(err=>{
            console.log("err",err)
        })
        
        }
    
    return(
        
            
           
          
        <div className="form_container">
            <div className="header1">
            
            <div className="header">
                
                <h1 className="left_icon"><img  src={image1} alt='landing_image'></img></h1>
                <h1 className="text">Instaclone</h1>
                <h1 className="camera_icon"><i class="fas fa-camera"></i></h1>
                
            </div>
            <div className="hr">
            <hr />
            </div>
       
        </div>
            <div className="form">
            <form onSubmit={elem=>creating(elem)} className="create">
                    {/* <label>Image:</label> */}
                    <input type="file" name="image" onChange={(e)=>{setfile(e.target.files[0])}}/>
                    {/* <label>Title:</label> */}
                    <input type="text" name="title" placeholder="Author" onChange={e=>{settitle(e.target.value)}}/>
                    {/* <label>place:</label> */}
                    <input type="text" name="place" placeholder="Place" onChange={e=>{setplace(e.target.value)}}/>
                    {/* <label>Description:</label> */}
                    <input className="description" type="text" name="body" placeholder="Description" onChange={e=>{setbody(e.target.value)}}/><br/>
                    <button className="button" type="submit">post</button>
                    <a href="/posts">postpage</a>
                    <h3>{loginmsg}</h3>
                </form>
            </div>

        </div>
        
    );
    }
export default Createpost;


// const response = await fetch("http://localhost:5000/posts", {
//                 method: 'POST', 
//                 mode: 'cors', 
//                 cache: 'no-cache', 
//                 credentials: 'same-origin', 
//                 headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${getToken()}`
                
//                 },
//                 redirect: 'follow', 
//                 referrerPolicy: 'no-referrer', 
//                 body: JSON.stringify({
//                     title:elem.target.title.value,
//                     body:elem.target.body.value,
//                     image:elem.target.image.value,
//                 })

//             })
//             const data=await response.json();
//             console.log(data)
