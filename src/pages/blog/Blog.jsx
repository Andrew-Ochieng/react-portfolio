import React, { useEffect, useState } from 'react';
import { db } from '../../firebaseConfig/config';
import useBlogStore from '../../store/store';
import { query, collection, onSnapshot } from 'firebase/firestore';
import { Link } from 'react-router-dom';

export default function Blog() {
    const { posts, setPosts } = useBlogStore();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const q = query(collection(db, "articles"));
        
        const unsubscribe = onSnapshot(q,
            (snapshot) => {
                setPosts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
                setLoading(false);
            },
            (error) => {
                setError(error.message);
                setLoading(false);
            }
        );

        return () => unsubscribe();
    }, [setPosts]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;


    return (
        <div className='min-h-screen'>
            <h1>Blog</h1>
            <ul className='md:flex items-center justify-start md:gap-8 gap-4 text-white'>
                {posts && posts.length > 0 ? (
                    posts.map((post) => (
                        <Link
                            to={`/blog/${post.id}`} 
                            key={post.id} 
                            className="bg-slate-800 p-4 mb-4"
                        >
                            <h2>{post.title}</h2>
                            <p>{post.content}</p>
                        </Link>
                    ))
                ) : (
                    <li>No posts found</li>
                )}
            </ul>
            
        </div>
    );
}
