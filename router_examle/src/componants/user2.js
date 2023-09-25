import { useParams} from "react-router-dom";
import {useState}   from "react"
import './user.css';

function UserList(){
    const users =[
        {name:"Ha",bio:"Đi qua những ngày mưa🌨️ta mới yêu thêm những ngày nắng🌥️", pic:"https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/375060217_1752680535208095_3567292540271627939_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5614bc&_nc_ohc=WSyU1BhqsrkAX_zbacJ&_nc_ht=scontent.fhan14-2.fna&oh=00_AfCXnKcOo-EqcpAb4lMNpIDhCA7B7S2-uuKmClkI238P3w&oe=650FAFCA"} ,
        {name:"Ha",bio:"Nếu như em là mây hãy mang mưa về đến đâyy :((", pic:"https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-6/364119780_1736386893504126_946036244035308568_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5614bc&_nc_ohc=D9gBky7u1SEAX9_OyIu&_nc_ht=scontent.fhan14-4.fna&oh=00_AfB8oiVAFbz7zbzovBCgeizYH6k2I5k_TFCM1fiuld9Nqw&oe=6510126A"},
        {name:"Ha",bio:"Đang có khoảng thời gian vui vẻ☘️",pic:"https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/358677682_1725513384591477_7253345306514666357_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5614bc&_nc_ohc=cV-c01wpcHsAX_HVt25&_nc_ht=scontent.fhan14-2.fna&oh=00_AfC2fwps_tcC1pH2SIee6EnhlV9s81LyETMce8m-whHW6w&oe=650F82DF"},

    ]
    return(
        <div>
            <Ha users={users}/>
        </div>
    )
}
function Ha({users}){
    const [like,setLike] = useState(0);
    const [dislike,setDislike] = useState(0)
    const {dung} = useParams();
    const user=users[dung];
    
    return(
        <div className="container2">
            <div className="container1">
                <img className="image_icon" src={user.pic} alt={user.name} />
                <h2>{user.name}</h2>
            </div >
            <h3>{user.bio}</h3>
            <img className="image" src={user.pic} alt={user.name} /> 
            <p>like {like}  |  dislike {dislike}</p>
            <button className="like" onClick={()=> setLike(like+1)} >👍</button>
            <button className="like" onClick={()=> setDislike(dislike+1)} > 👎 </button>
        </div>
    )
}

export default UserList;