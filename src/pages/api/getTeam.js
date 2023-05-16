// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { groq } from 'next-sanity';
import { sanityClient } from "../../../sanity";
import type { NextApiRequest, NextApiResponse } from 'next'



const query = groq`*[_type == "teams"] {
    _id,
    name,
    title,
    position,
    image,
}`;


const default async function handler (
    req: NextApiRequest,
    res: NextApiResponse
){
    const teams = await sanityClient.fetch(query);
    console.log(teams);
    res.status(200).json({ teams })
}

// export default async function handler(req, res) {
//     const teams = await sanityClient.fetch(query);
//     console.log(teams);
//     res.status(200).json({ teams });
// }
