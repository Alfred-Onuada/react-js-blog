import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

  const { data:blogs, isLoading, error } = useFetch('http://localhost:8000/blogs');

  return (
    <div className="home">
      { isLoading && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      {/* 
        this is similar to *ngIf lol it exploits how react works && is a logical and so it won't evaluate the 
        second side if the first is false, but when the blogs change after our fetch because something changed 
        react re renders that part and as a result does the evaluation again 
      */}
      { blogs && <BlogList blogs={blogs} title="All Blogs"></BlogList> }
    </div>
  );
}
 
export default Home;