import { client } from "../../tina/__generated__/client";
import PostPreview from "../../components/PostPreview.tsx";
import LazyLoad from 'react-lazyload';
import BlogLayout from "../../components/BlogLayout"
import photo from "/images/concert.jpg"
import Image from 'next/image'
import React, {useState} from "react"
import Link from "next/link";

//blog home page
export default function PostList(props) {
  const [postsToShow, setPostsToShow] = useState(18);

  const loadMorePosts = () => {
    setPostsToShow(postsToShow + 18);
  };

  const postsList = props.data.blogConnection.edges;

  return (
    <BlogLayout>

      
      <div className="pt-3 md:pt-0 mx-auto h-32 md:h-24 items-center justify-between w-5/6 flex flex-col md:flex-row">
      <div className="kallisto text-5xl">WXYC PRESS</div>
      <div className="  flex flex-row  h-1/2 relative z-50 md:h-1/2 justify-center md:justify-end  items-center w-full md:w-1/2 text-lg text-center">
                    <div className="hover:underline kallisto mx-2 md:mr-0 md:whitespace-nowrap   px-2 h-full flex flex-col justify-center " >
                        <Link href="/blog/category/show-review">
                        Show Reviews
                        </Link>        
                    </div>
            
                    <div className="hover:underline kallisto mx-2 md:mr-0 md:whitespace-nowrap  px-2 h-full flex flex-col justify-center" >
                        <Link href="/blog/category/album-review">
                          Album Reviews
                        </Link>     
                    </div>
            
                    <div className="hover:underline kallisto mx-2 md:mr-0 md:whitespace-nowrap px-2 h-full flex flex-col justify-center" >
                        <Link href="/blog/category/artist-interview">
                          Artist Interviews
                        </Link> 
                    </div>
            
                </div>
                
              </div>

        <div className="relative z-20 w-5/6 mx-auto mb-10">
         <p>Read reviews and interviews by WXYC DJs.</p>
         </div>

         <div className="relative z-10 -mt-20 mb-5 w-5/6 mx-auto">
          <Image  src={photo} alt="A crowded dancefloor at a WXYC event."/>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-around gap-4 w-5/6 mx-auto  pb-10">
        
        
          {postsList.slice(0, postsToShow).map((post) => (
          <LazyLoad height={200} once={true} key={post.node.id}>
            <div className="flex justify-center">
            <PostPreview 
              id={post.node.id} 
              title={post.node.title} 
              slug={post.node._sys.filename} 
              cover={post.node.cover} 
              subtitle={ post.node.description ? post.node.description : post.node.body.children[0].children[0].text.substring(0, 75)}
            />
            </div>
            </LazyLoad>
          ))}
          
        </div>

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

export const getStaticProps = async () => {
  const length = await client.request({
    query: `{
      blogConnection {
        totalCount
      }
    }`
  })

  const { data } = await client.request({
    query: `
    query getContent($postCount: Float)
    {
      blogConnection(sort: "published", last: $postCount, before: "cG9zdCNkYXRlIzE2NTc4Njg0MDAwMDAjY29udGVudC9wb3N0cy9hbm90aGVyUG9zdC5qc29u"){
        edges {
          node {
            id
            title
            cover
            published
            description
            body
            _sys {
              filename
            }
          }
        }
      }
    }
    `,
    variables: 
    {
      postCount: length.data.blogConnection.totalCount
    }
  })

  return { 
    props: {
      data,
    },
  };
};
