import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField, useTina } from "tinacms/dist/react";
import { client } from "../../tina/__generated__/client";
import AboutLayout from "../../components/AboutLayout"

//editable static pages (about, programming, etc.)
export default function About(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const content = data.page.body;

  return (
    <AboutLayout>
      <div data-tina-field={tinaField(data.page, "body")}>
        <div className="flex flex-row justify-center w-5/6 mx-auto">
          <article className="prose prose-lg prose-h1:text-red-300 prose-h1:font-kallisto prose-a:text-fuchsia-950 prose-h3:text-gray-400 text-white">
            <TinaMarkdown content={content} />
            <h1 className="kallisto">This is an h1 heading with the .kallisto style applied.</h1>
          </article>
        </div>
      </div>
    </AboutLayout>
  );
}

// export const getStaticPaths = async () => {
//     const { data } = await client.queries.pageConnection();
//     const paths = data.pageConnection.edges.map((x) => {
//       return { params: { slug: x.node._sys.filename } };
//     });
  
//     return {
//       paths,
//       fallback: "blocking",
//     };
//   };

export const getStaticProps = async (ctx) => {
    const { data, query, variables } = await client.queries.page({
        relativePath: "about.mdx",
    });
  
    return {
      props: {
        data,
        query,
        variables,
        //myOtherProp: 'some-other-data',
      },
    };
  };


