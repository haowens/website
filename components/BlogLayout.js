import BlogBreadcrumbs from './BlogBreadcrumbs'

// imported into every page in "blog" pages directory
const BlogLayout = ({children}) => {
	return (
		<div>
			<div className=" mx-auto w-5/6">
				<BlogBreadcrumbs />
			</div>

			{children}
		</div>
	)
}

export default BlogLayout
