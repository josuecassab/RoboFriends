import React from 'react'
import Card from  './Card'


const CardList = ({robots}) => {
	 
	const cardComponent = []
	for ( var i = 0; i < robots.length; i++) {
		cardComponent.push(
			<Card 
			key={i} 
			id={robots[i].id} 
			name={robots[i].name} 
			email={robots[i].email} />)
	}
	return (
		<div className='flex flex-wrap flex-row justify-items-start gap-5'>
			{cardComponent}
		</div>
		)
}

export default CardList;