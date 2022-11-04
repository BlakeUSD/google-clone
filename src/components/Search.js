import React, { useState } from 'react';
import '../style/Search.css';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../utils/StateProvider"
import { actionTypes } from "../utils/reducer";


function Search({ hideButtons = false }) {
    const [{ }, dispatch] = useStateValue();
    const [term, setTerm] = useState("");
    const navigate = useNavigate();

    const search = (e) => {
        e.preventDefault();

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: term,
        });

        navigate('/search');
    };

    return (
        <form className='search'>
            <div className='search__input'>
                <SearchIcon className='search__inputIcon' />
                <input value={term} onChange={e => setTerm(e.target.value)} />
                <MicIcon />
            </div>

            {!hideButtons ? (
                <div className='search__buttons'>
                    <Button type='submit' variant="outlined" onClick={search}>
                        Google Search
                    </Button>
                    <Button variant="outlined">I'm Feeling Lucky</Button>
                </div>
            ) : (
                <div className='search__buttons'>
                    <Button
                        className='search__buttonsHidden'
                        type='submit'
                        variant="outlined"
                        onClick={search}
                    >
                        Google Search
                    </Button>
                    <Button className='search__buttonsHidden' variant="outlined">
                        I'm Feeling Lucky
                    </Button>
                </div>
            )}
        </form>
    );
}

export default Search;