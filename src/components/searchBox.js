import React from 'react';


function SearchBox (props) {
	return (
		<div className='pa2'>
			<input
				className='pa3 ba b--green bg-lightlest-blue' 
				type="search" 
				placeholder="Search Robots"
				onChange={props.searchChange}
			/>
		</div>
	)	
}

export default SearchBox