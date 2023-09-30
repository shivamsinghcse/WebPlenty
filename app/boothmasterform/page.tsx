import { NavbarLogout } from "../components/navbarlogout";
import { Sidebar } from "../components/sidebar";

function page(){
    return(
        <>
         <div className="w-[100vw]  z-10">
        <NavbarLogout />
      </div>
      <div className="flex">
        <div >
          <Sidebar />
        </div>
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <form className="w-full max-w-lg">
            <h1 className="text-2xl">Booth Master Form</h1>
  <div className="flex flex-wrap -mx-3 mb-6 mt-5">
    <div className="w-full px-3 ">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
        Booth Name
      </label>
      <input  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="Jane" />
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
        Sector Name
      </label>
      <select  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" placeholder="Jane" >
        <option></option>
        <option></option>
        </select>
      
    </div>
    </div>
  <button className="appearance-none block w-full bg-orange-600 text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">Submit</button>
</form>
</div>
</div>
        </>
    );
}
export default page 