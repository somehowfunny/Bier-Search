import React, { useState } from 'react';

const SearchBar = () => {
    const [location, setLocation] = useState('');

    const handleSearch = () => {
        // Logic for searching beer discounts by location
        console.log(`Searching for discounts in ${location}`);
    };

    return (
        <div>
            <input 
                type="text" 
                placeholder="Enter location..." 
                value={location} 
                onChange={(e) => setLocation(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;