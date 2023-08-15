import { client } from "../../../tina/__generated__/client";
import PostPreview from "../../../components/PostPreview";
import BlogLayout from "../../../components/BlogLayout";
import React, {useState} from "react"

const ShowReviewPage = (props) => {
  const [postsToShow, setPostsToShow] = useState(18);

  const loadMorePosts = () => {
    setPostsToShow(postsToShow + 18);
  };

  let postsList = [];
  if (props.data.blogConnection.edges.length > 0) {
    props.data.blogConnection.edges.forEach((post) => {
      postsList.push(post);
    })
  } 

  const category = "Show Review";

  return (
    <BlogLayout>
      <div className=" w-5/6 mx-auto">
   
      <h1 className="text-5xl mb-2 kallisto">{category}s</h1>
      </div>
      
      {(postsList.length > 0) && 
      <div className="blog-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-around gap-4 w-5/6 mx-auto pb-10">
        {postsList.slice(0, postsToShow).map((post) => (
          <div key={post.node.id}>
          <PostPreview 
            id={post.node.id} 
            title={post.node.title} 
            slug={post.node._sys.filename} 
            cover={post.node.cover} 
            subtitle={ post.node.description ? post.node.description : post.node.body.children[0].children[0].text.substring(0, 75)}
          /> 
          </div>
        ))}
      </div>}

      {postsToShow < postsList.length && (
        <div className="flex justify-center mt-4">
          <button
            className="text-blue-500 hover:underline"
            onClick={loadMorePosts}
          >
            See More
          </button>
        </div>
      )}
    </BlogLayout>
  );
}

export default ShowReviewPage;

export const getStaticProps = async (ctx) => {
    const title = "show-review.md";

    const { data } = await client.request({
      query: `
        query getContent($title: String) {
        blogConnection(filter: {categories: {category: {category: {title: {eq: $title}}}}}, sort: "published", last:30, before: "cG9zdCNkYXRlIzE2NTc4Njg0MDAwMDAjY29udGVudC9wb3N0cy9hbm90aGVyUG9zdC5qc29u") {
        edges {
          node {
            id
            title
            author
            description
            cover
            published
            body
            _sys {
              filename
            }
          }
        }
      }
    }`,
        variables: {
          "title": "Show Review"
        }
    })

    return { 
      props: {
        data,
        title
      },
    };
}