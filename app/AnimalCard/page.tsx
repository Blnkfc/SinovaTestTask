'use client'

import Link from "next/link"
import Image from "next/image"

const AnimalCard = (props:any) => {

    return <>
        <Link href={`/AnimalCard/${props.data?.breeds[0]?.id}`} className="flex flex-col items-center justify-between p-4
         border-solid border-white border-2 rounded-md bg-slate-800
         hover:bg-slate-900" >
            <Image src={props?.data?.url} width={props?.data?.width} height={props?.data?.height} alt={"Portrait"} className="" />
            <h2 className="mt-4" >{props.data?.breeds[0]?.name}</h2>  
        </Link>
    </>
}


export default AnimalCard