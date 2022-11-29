import React from 'react';


const Card = (props) => {
	return (
		<div className= 'bg-teal-500  border-2 p-2 m-2 drop-shadow rounded hover:scale-125 hover:transition-all'>
			<img className='w-56 h-56' alt='Robo' src={`https://robohash.org/${props.id}?200x200}`}/>
			<div>
				<h2 className='font-bold'>{ props.name }</h2>
				<h3>{ props.email }</h3>
			</div>	
		</div>
	)

}

export default Card;