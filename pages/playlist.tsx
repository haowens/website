import React, { useState, useEffect } from 'react';
import { Layout } from '../components/Layout';
import AudioPlayer from 'react-h5-audio-player';
// import MyAudioPlayer from '../components/AudioPlayer';

const MyTable = () => {
//   const [flowsheet, setFlowsheet] = useState([]);
//   const [lastUpdated, setLastUpdated] = useState(null);

//   useEffect(() => {
//     const getFlowsheetEntries = async () => {
//       try {
//           const response = await fetch('https://api.wxyc.org/flowsheet?page=0&limit=50');
  
//           if (!response.ok) {
//               throw new Error('Network response was not ok');
//           }
  
//           const data = await response.json();
          
//           if (data) {
//               setFlowsheet(data); // Directly set the fetched data to the state
//               setLastUpdated(new Date())
//           }
//       } catch (error) {
//           console.log('Error fetching flowsheet:', error.message);
//       }
//   };
  
//   getFlowsheetEntries();
    
// }, []);


  return (
    
    <div className='flex align-middle justify-center'>

      <AudioPlayer
          autoPlay
          src="https://audio-mp3.ibiblio.org/wxyc.mp3"
          onPlay={e => console.log("onPlay")}
          // other props here
        />
        
      
      {/* <MyAudioPlayer/> */}

      {/* <iframe src="https://www.wxyc.info/playlists/recent.html" className='w-5/6 h-screen'></iframe> */}
  
      {/* <div className="sm:mx-auto sm:w-5/6 overflow-auto pb-10"> 
      <p className="text-5xl mb-2 kallisto">Live Playlist</p>

      <div className="flex flex-row justify-between">
      <p className="mb-5"> Last updated: </p>
      <a href="http://wxyc.info/playlists/radioWeek" className="underline">Archive</a>
      </div>
      
      <table className="w-full">
        <thead  className="bg-gradient-to-b from-neutral-600 to-black h-12 sm:text-base text-xs">
          <tr>
            <th className="font-normal">WXYC Playlist</th>
            <th className="font-normal">Artist</th>
            <th className="font-normal">Song</th>
            <th className="font-normal">Release</th>
            <th className="font-normal">Label</th>
            <th className="font-normal">Request?</th>
  
          </tr>
        </thead>
        <tbody>
          {flowsheet.map((item) => (
            <tr key= {item.id} className="mb-5">
                {!item.message && <td className="text-center">{item.rotation_play_freq && <p className="mb-2 sm:text-base text-xs">*</p>}</td>}
                {!item.message && <td className="sm:text-base text-xs">{item.artist_name}</td>}
                {!item.message && <td className="sm:text-base text-xs">{item.track_title}</td>}
                {!item.message && <td className="sm:text-base text-xs">{item.album_title}</td>}
                {!item.message && <td className="sm:text-base text-xs">{item.record_label}</td>}
                {!item.message && <td className="text-center sm:text-base text-xs">{item.request_flag && <p>*</p>}</td>}
                
                {item.message && <td className="bg-gradient-to-b from-neutral-700 to-black" colSpan={6} align="center"><p className=" h-5">{item.message}</p></td>}

  
            </tr>
          ))}
        </tbody>
      </table>
      </div> */}
       
    </div>
  );
};

export default MyTable;