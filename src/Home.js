import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Search from './Search';

function Home() {
  return (
    <div className='home'>
      <div className='home__header'>
        <div className='home__headerLeft'>
          <Link to='/about'>About</Link>
          <Link to='/store'>Store</Link>
        </div>
        <div className='home__headerRight'>
          <Link to='/gmail'>Gmail</Link>
          <Link to='/images'>Images</Link>
          <AppsIcon />
          <AccountCircleIcon color="disabled" fontSize="large" />
        </div>
      </div>

      <div className='home__body'>
        {/* <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Nudle_Logo.png/1200px-Nudle_Logo.png?20170226152501' /> */}
        <img src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
          alt=''
        />
        <div className='home__inputContainer'>
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;