import { useNavigate } from 'react-router-dom';


const Home = ()=>{
    let navigate = useNavigate()
    return (
        <button onClick={()=>{navigate("/author")}}>Find by Author</button>
    )
}

export default Home;