import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import styles from './Project.module.css';

const Project = () => {
	const { id } = useParams();
	const [ project, setProject ] = useState([]);

	useEffect(
		() => {
			fetch(`http://localhost:5000/projects/${id}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			})
				.then((response) => response.json())
				.then((data) => {
					setProject(data);
				})
				.catch((error) => console.error(error));
		},
		[ id ]
	);

	return <p>{project.name}</p>;
};

export default Project;
