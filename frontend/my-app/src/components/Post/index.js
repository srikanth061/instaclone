import "./index.css";


 
function Post({title,body,image,place}){
    
    return(
        <div className="post_body">
        <div className="body">
            <div>
                
            </div>
            <div className="details">
                 <h4 className="name">{title}</h4>
                 <p className="place">{place}</p>
            </div>
            <div className="dots">
                <h2><i class="fas fa-ellipsis-h"></i></h2>
            </div> 
        </div>
        <div className="image1">
            
            <img className="image" src={image} alt="pic" />
        
        </div>
        <div className="logos">
        <h2 className="heart"><i class="far fa-heart"></i></h2>
        <h2 className="share"><i class="far fa-paper-plane"></i></h2> 
        <p className="date">{new Date().toLocaleDateString()}</p>
        </div> 
        <div className="likes">
            <p>5 Likes</p>
        </div>
        <div className="sentence">
            <b className="para">{body}</b>
        </div>
    </div> 
    ) 
    
}
export default Post;