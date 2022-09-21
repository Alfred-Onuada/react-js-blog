import { Link } from 'react-router-dom';

// the destructuring below is used to get all the extra data sent into a component similar to @Input() in angular
// the properties are called props in react
const BlogList = ({ blogs, title }) => {

  return (
    <div className="blog-list">
      <h2>{ title }</h2>
      {
        blogs.map(blog => (
          // key is important, and react uses it to listen for changes and react to it
          <div className="blog-preview" key={ blog.id }>
            <Link to={ `/blogs/${blog.id}` }>
              <h2>{ blog.title }</h2>
              <p>Written by: { blog.author }</p>
            </Link>
          </div>
        ))
      }
    </div>
  );
}
 
export default BlogList;