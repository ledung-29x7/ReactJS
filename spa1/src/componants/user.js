import '../App.css'
function User (props){
    const name= props.name
    const pic = props.pic
    return(
        <section className='user_infor'>
            <img className="pic" src={pic} alt={name}></img>
            <h1>Hello! {name}</h1>
        </section>
    )
};
export default User;