import React from 'react';

const SearchBox = ({serachfield, searchChange}) => {
	return (
		<div className = 'pa2'>
			<input 
				className = 'pa3 ba b--green bg-lightest-blue'
				type='searchbox' 
				placeholder='Search robot' 
				onChange = {searchChange}
			/>
		</div>
	);
}

export default SearchBox;