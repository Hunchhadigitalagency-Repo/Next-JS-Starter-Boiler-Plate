import React, { useState } from 'react';

interface Props {
  onSearch: (query: string) => void;
}

const SearchInput: React.FC<Props> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>('');

  // Function to handle input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuery(value);
    // Call the onSearch callback with the current query
    onSearch(value);
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleInputChange}
      placeholder="Search..."
    />
  );
};

export default SearchInput;
