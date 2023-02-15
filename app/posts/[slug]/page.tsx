
const PostPage = (props: any) => {
  const slugs = props.params.slugs;
  return (
    <p>
      <h1>This is a post: {slugs}</h1>
    </p>
  );
};
 export default PostPage;2