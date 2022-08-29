import axios from 'axios';
import { useEffect, useState } from 'react';


const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    const handleFetch = async () => {
        try {
            const result = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(result.data)
        } catch (error) {
            setError(error)
        }
    }


    return (
        <div>
            <button type="button" onClick={handleFetch}>
                Fetch Posts
            </button>

            {error && <span>Something went wrong ...</span>}

            <ul>
                {posts.map(({ id, title }) => (
                    <li key={id}>
                        <p>{title}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Posts;