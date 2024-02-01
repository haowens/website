import Link from 'next/link'

const EventPreview = (props) => {
	// rendered on the archive tabs
	if (!props.published) {
		return (
			<div className=" flex w-full" key={props.id}>
				<Link href={`/archive/${props.slug}`}>
					<div className="mb-5 flex w-72 cursor-pointer flex-col gap-2 lg:w-[21rem]">
						<img
							src={props.cover}
							alt=""
							className="h-72 w-72 object-cover lg:h-[21rem] lg:w-[21rem]"
						/>
						<a className="h-12 text-center text-xl font-bold">{props.title}</a>
						<p>{props.subtitle}...</p>
					</div>
				</Link>
			</div>
		)
	}

	//   format date as xx/xx
	const date = new Date(props.published).toISOString()
	const arr = date.split('-')
	const arrTime = arr[2].split('T')
	const displayDate = `${arr[1]}/${arrTime[0]}`

	// rendered on home page with "xx/xx" before title
	return (
		<div key={props.id}>
			<Link href={`/archive/${props.slug}`}>
				<div className="mb-5 flex w-72 cursor-pointer flex-col gap-2 md:w-[21rem]">
					<img
						src={props.cover}
						alt=""
						className="h-72 w-72 object-cover md:h-[21rem] md:w-[21rem]"
					/>
					<a className="h-12 text-center text-xl font-bold">
						{displayDate}: {props.title}
					</a>
					<p>{props.subtitle}...</p>
				</div>
			</Link>
		</div>
	)
}

export default EventPreview
