import { client } from "../../../tina/__generated__/client";
import EventPreview from "../../../components/EventPreview";
import {groupEventsByWeek, generateStructuredData} from '../../../components/OrganizingArchive';
import Link from "next/link";
import ArchiveDropdown from "../../../components/ArchiveDropdown";
import ArchiveLayout from "../../../components/ArchiveLayout"


const SpecialtyShowsPage = (props) => {

  let structuredData = [];
  let sortedEvents = [];

  if (props.data.archiveConnection.edges.length > 0) {
    props.data.archiveConnection.edges.forEach((event) => {
      sortedEvents.push(event);
    })
    const groupedEvents = groupEventsByWeek(sortedEvents);
    structuredData = generateStructuredData(groupedEvents);
  }

  let specialtyShows = [];
  props.data.categoryConnection.edges.forEach((category) => {
    specialtyShows.push({ label: category.node.title, value: category.node._sys.filename});
  });

  return (
    <ArchiveLayout specialtyShows={specialtyShows}>
           
      <h1>All Specialty Shows</h1>
      <p>Click <Link href="/programming"><u>here</u></Link> for a list of all specialty shows and their descriptions</p>

      {(structuredData.length > 0) && 
      <div>
        <div className="archive-grid w-full mx-auto">
        {structuredData.map((event) => (
            <div key={event.id}>
                {(event.type === 'heading') && <h3>week of {event.weekStartDate}</h3>}
                {(event.type === 'events' &&
                <div key={event.id}>
                {event.weekEvents && <div className="flex flex-row justify-start gap-4 overflow-x-scroll">
                    {event.weekEvents.map((event) => (
                      <div key={event.event.id}>
                        <EventPreview
                        id={event.event.id}
                        title={event.event.title}
                        cover={event.event.cover}
                        subtitle={event.event.description.children[0].children[0].text.substring(0, 75)}
                        slug={event.event._sys.filename}
                      />
                      </div>
                    ))}
                    </div>}
                </div>)}
            </div>

        ))}
      </div>
    </div>}
    </ArchiveLayout>
  );
}

export default SpecialtyShowsPage;


export const getStaticProps = async () => {
  const { data } = await client.request({
    query: `
      {
      archiveConnection(filter: {categories: {category: {category: {title: {eq: "Specialty Show"}}}}}, sort: "published", last:30, before: "cG9zdCNkYXRlIzE2NTc4Njg0MDAwMDAjY29udGVudC9wb3N0cy9hbm90aGVyUG9zdC5qc29u") {
      edges {
        node {
          id
          title
          description
          cover
          published
          _sys {
            filename
          }
        }
      }
    },
    categoryConnection(filter: {specialtyShow: { eq:true}}) {
        edges {
          node {
            id
            title
            _sys {
              filename
            }
          }
        }
      }
  }`
  })

  return { 
    props: {
      data
    },
  };
}