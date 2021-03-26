import React, { useState } from 'react';
import { Search, BackspaceFill } from 'react-bootstrap-icons';
import { InputGroup, FormControl } from 'react-bootstrap';

const SearchArticles = (props) => {
    const [inputValue, setInputValue] = useState('');
    const handleClick = () => {
        props.handleClick(inputValue);
    };
    return (
        <div className="searchBar">
            <div>
                <InputGroup className="searchBar">
                    <InputGroup.Prepend>
                        <InputGroup.Text
                            style={{ backgroundColor: '#007bff' }}
                            id="basic-addon1"
                            onClick={handleClick}
                        >
                            <Search color="white" />
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="Search by title"
                        aria-label="Search"
                        id="inputValue"
                        value={inputValue}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                handleClick();
                            }
                        }}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    {inputValue && (
                        <BackspaceFill
                            className="clearField"
                            onClick={() => {
                                setInputValue('');
                                props.handleClick('');
                            }}
                        />
                    )}
                </InputGroup>
            </div>
        </div>
    );
};

export default SearchArticles;
