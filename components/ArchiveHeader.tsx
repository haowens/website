import * as React from "react"
import Link from "next/link";
import { Menu } from "@headlessui/react"
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";


const ArchiveHeader = (props) => {
  return (
      <div className="w-5/6 mx-auto">
        <h1>Archive</h1>

        {/* dropdown in archive pages */}
        <div className="flex flex-row gap-16">
        <div className="w-1/5">
            <Menu as="div" className="relative">
                <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                    Filter <IoIosArrowDown  size={18} className="ml-1 mt-0.5"/>
                </Menu.Button>
                <Menu.Items className="origin-top absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  
                  <Menu.Item>
                    <Link legacyBehavior={false} href={`/archive/category/events`}>
                      <p className="inline-flex justify-center items-center w-full rounded-md px-4 py-2 text-sm text-gray-700">Events</p>
                    </Link>
                  </Menu.Item>

                  <Menu.Item>
                    <Menu as="div" className="relative">
                      <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                        Specialty Shows <IoIosArrowForward  size={18} className="ml-1 mt-0.5"/>
                      </Menu.Button>
                      <Menu.Items className="origin-right absolute left-full top-0 mt-0 ml-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        {props.specialtyShows.map((option) => (
                          <div key={option.value} className="py-1">
                            <Menu.Item>
                              <Link legacyBehavior={false} href={`/archive/category/${option.value}`}>
                                <p className="group-flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white">{option.label}</p>
                              </Link>
                            </Menu.Item>
                          </div>))}
                      </Menu.Items>
                    </Menu>

                  </Menu.Item>
                </Menu.Items>
            </Menu>
        </div>

        
          <Link href="/archive">
            clear
          </Link>
        </div>
    </div>
  )
}

export default ArchiveHeader