type BlogItemProps = {
  blogId?: number;
  blogTitle: string;
  blogAuthor:string;
  blogDate: string;
  blogContent: string;
  blogImage: string;
};

const BlogItem = (props:BlogItemProps) => {
 
    console.log(props);
  return (

    <div>
        <img src={props.blogImage}/>
        <h2>{props.blogTitle}</h2>
        <p>{props.blogContent}</p>
        <p>{props.blogDate}</p>
        <span>{props.blogAuthor}</span>
    </div>
  );
};

export default BlogItem;
