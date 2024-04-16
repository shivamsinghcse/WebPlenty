import React from "react";
import {
  BarChart,
  Shield,
  GalleryHorizontal,
  User,
  MapPin,
  FileEdit
  
} from "lucide-react";
import Link from "next/link";

export function Sidebar() {
  

  return (
    <>
    
      <aside className="flex h-screen w-64 flex-col overflow-y-auto border-r bg-white px-5 py-8  max-[890px]:hidden">
        <div className="mt-8 flex flex-1 flex-col justify-between">
          <nav className="-mx-3 space-y-6 ">
            <div className="space-y-3 ">
     
              <label className="px-3 text-xs font-semibold uppercase text-gray-900">
                Navigate
              </label>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="../adminpanel"
              >
                <Shield className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Admin Panel</span>
              </Link>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="../form"
              >
                <BarChart className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Registration</span>
              </Link>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="../karykarta"
              >
                <User className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">कार्यकर्ता</span>
              </Link>
            
              {/* <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="../sector"
              >
                <MapPin className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">
                  क्षेत्र (Sector)
                </span>
              </Link>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="../villagemaster"
              >
                <MapPin className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">ग्राम मास्टर</span>
              </Link>
              */}
              
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="../mundalmaster"
              >
                <MapPin className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">मंडल मास्टर</span>
              </Link>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="/sectormaster"
              >
                <MapPin className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">सेक्टर मास्टर</span>
              </Link>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="../boothmaster"
              >
                <MapPin className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">बूथ मास्टर</span>
              </Link> 
            </div>
            <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="../villagemaster"
              >
                <MapPin className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">गाँव मास्टर</span>
              </Link>
             
            <div className="space-y-3 ">
              <label className="px-3 text-xs font-semibold uppercase text-gray-900">
                content
              </label>

              {/* <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="#"
              >
                <MessageSquare className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Send SMS</span>
              </Link> */}
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="../blogcontroller"
              >
                <FileEdit className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Blog</span>
              </Link>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="../gallery"
              >
                <GalleryHorizontal className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Gallery</span>
              </Link>
            </div>
          </nav>
        </div>
      </aside>

      {/* mobile */}
      {/* <div>
        <button className="p-5 absolute top-[10%] left-5">
                <MoreVertical></MoreVertical>
        </button>
      </div> */}
    </>
  );
}
