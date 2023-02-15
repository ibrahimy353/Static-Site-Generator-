
const PostPage = (props: any) => {
  const slug = props.params.slug;
  return (

      <h1>This is a post: {slug}</h1>
  );
};
 export default PostPage;2