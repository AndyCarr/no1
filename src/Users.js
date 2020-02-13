import React from 'react'
import UserPosts from './UserPosts';
import './Users.css'

class Users extends React.Component {
	render () {
		 let title = "Members who shared Symptoms";
		 return <div>
		 	<h2>{title}</h2>
		 	<UserPosts />
		 	</div>;
	}
}

export default Users;