import { headers } from "next/headers"
import ImageList from "./ImageList"
import SidebarInfo from "./SidebarInfo"
const catApiKey = 'live_QwPamaMhqLqtPX08VOp9uhyX4z2KiDFddss4VJmHFwqJRzFqEpvhmjVYGoYipfZB'
const dogApiKey = 'live_lK7NpXsT4DKWmwRrkAvZ4AwyicULDmQViwZtVmILHNHqU7gCbNQ7rgZ12IN2iHIA'



const BreedInfo = async( {params}: {params: {Id: string | number}}) => {
    const catApiUrl = `https://api.thecatapi.com/v1/images/search?breed_ids=${params.Id}&limit=3`
    const dogApiUrl = `https://api.thedogapi.com/v1/images/search?breed_ids=${params.Id}&limit=3`
    const catHeaders = new Headers
    catHeaders.append('x-api-key', catApiKey)
    const dogHeaders = new Headers
    dogHeaders.append('x-api-key', dogApiKey)

    const getData = async (): Promise<any[]> => {
        let result: any[] = [];

        if(params.Id.toString().length === 3 || params.Id.toString().length === 1){
            const response = await fetch(dogApiUrl, {headers: dogHeaders});
            result = await response.json();
        } else if(params.Id.toString().length === 4){
            const response = await fetch(catApiUrl, {headers: catHeaders});
            result = await response.json();
        } else {
            console.log(`ERROR`);
        }
        return result;
    }

    const data = await getData()


    return<div className="grid grid-cols-1 gap-4 pt-4 bg-slate-800 h-dvh
    md:grid-cols-2" >
        <ImageList data={data?.map((d) => d.url)}/>
        <SidebarInfo data={data} />
    </div>
}

export default BreedInfo