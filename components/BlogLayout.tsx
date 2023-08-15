
import BlogBreadcrumbs from "./BlogBreadcrumbs";

const BlogLayout = (props) => {
    
    return(

        <div>
            <div className=" w-5/6 mx-auto">
                <BlogBreadcrumbs/>

                
            </div>

            {props.children}
            
        </div>
    )
}

export default BlogLayout;