

const PostPage = (props: any) => {
    const slug = props.params.slug;
    return (
        <p>
            <h1>this the post under:{slug}</h1>
        </p>
    );
};

export default PostPage;