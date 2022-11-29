import React from 'react';


function SearchBox (props) {
	return (
		<div className='p-2'>
			<input
				className='p-3 rounded-md border-teal-500 bg-white' 
				type="search" 
				placeholder="Search Robots"
				onChange={props.searchChange}
			/>
		</div>
	)	
}

export default SearchBox