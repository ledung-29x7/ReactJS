import image1 from './public/img_background.jpg';
import image2 from  './public/HA.jpg';
import image3 from './public/Ha1.jpg';
import './App.css';
import { useNavigate } from 'react-router-dom';


    function UserList(){
        const user= [
            {name:"Son",pic: image1 },
            {name:"Em ❤️", pic: image2 },
            {name:"Ha", pic: image3 },
        ];
        return(
            <div className='container'>
                {user.map((usr,index) => <User name= {usr.name} pic={usr.pic} x={index} />)}
               
            </div>
        )
    }
    function User ({name,pic,x}){
        const navigate = useNavigate();
        return(
            <div className='profile' onClick={()=> navigate(`/users/${x}`) }>
                <img className='file_img' src={pic} alt={name} />
                <h1 className='text'>{name}</h1>
            </div>
        )
    }

export default UserList ;
