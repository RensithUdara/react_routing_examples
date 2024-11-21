import { useNavigate } from "react-router-dom";

function About () {
    const navigate = useNavigate();

    return <div>About
        <br/>
        <button onClick={() => {
            navigate('/')
        }}>Go to Home</button>
    </div>
}

export default About;