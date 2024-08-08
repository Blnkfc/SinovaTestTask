

const SidebarInfo = (props: any) => {
    return <section className="bg-slate-800 p-4" >
        <h1>{props.data[0].breeds[0].name}</h1>
        <h4>Origin: <p className="text-gray-400" >{props.data[0].breeds[0].origin}</p></h4>
        <h4>Temprament:</h4>
        <p className="text-gray-400" >{props.data[0].breeds[0].temperament}</p>
        <h4>Description</h4>
        <p className="text-gray-400" >{props.data[0].breeds[0].description}</p>
        <h4>Weight</h4>
        <p className="text-gray-400" >{props.data[0].breeds[0].weight.metric}kg</p>
        <h4>Lifespan</h4>
        <p className="text-gray-400" >{props.data[0].breeds[0].life_span}</p>
        <h4>Also known as:</h4>
        <p className="text-gray-400" >{props.data[0].breeds[0].alt_names || "Absent"}</p>
        <h4>For owners:</h4>
        <ul className="text-gray-400" >
            <li>Adaptability: {props.data[0].breeds[0].adaptability}</li>
            <li>Affection level: {props.data[0].breeds[0].affection_level}</li>
            <li>Child friendly: {props.data[0].breeds[0].child_friendly}</li>
            <li>Dog friendly: {props.data[0].breeds[0].dog_friendly}</li>
            <li>Energy lebel: {props.data[0].breeds[0].energy_level}</li>
            <li>Grooming: {props.data[0].breeds[0].grooming}</li>
        </ul>
        <a href={props.data[0].breeds[0].wikipedia_url} className="underline" >More info</a>
    </section>
}


export default SidebarInfo