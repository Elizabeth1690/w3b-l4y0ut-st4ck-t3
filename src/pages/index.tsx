//import { api } from "~/utils/api";
import SearchBar from "../pages/searchBar";

const Home: React.FC = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });
  return (
    <div className=" h-screen items-center justify-center bg-custom">
      <main className=" container mx-auto py-4">
        <div className="my-3 text-center">
          <h1 className="text-3xl font-bold text-white">Gustavo Llermaly</h1>
          <h3 className=" mb-11 text-xl text-white">Search Engineer</h3>
        </div>
        <div className="mx-auto">
          <SearchBar />
        </div>
        <div className="flex items-center justify-center ">
          <div className=" bg-purpleg mt-8 whitespace-nowrap rounded-lg  py-[0.32rem] text-center text-base  text-white xl:w-4/5">
            Gustavo is 34 years old.
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
