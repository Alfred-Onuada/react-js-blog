import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const blog = { title, body, author };

    setIsLoading(true);

    const res = await fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog)
    })

    await res.json();

    setIsLoading(false);

    navigate('/');
  }
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title</label>
        <input 
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body</label>
        <textarea 
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select 
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        { isLoading && <button disabled>Adding Blog...</button> }
        { !isLoading && <button>Add Blog</button> }
      </form>
    </div>
  );
}
 
export default Create;