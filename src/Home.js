import Rockstar from './Rockstar';

const Home = () => {
    return (
        <>
        <div className='headline'>
            <h1>Welcome to My Final Project!</h1>
            <p>Please fill out the data below with your favorite rockstars!</p></div>
        <div className='container'>
            <Rockstar />
        </div>
        </>
    )
}

export default Home;