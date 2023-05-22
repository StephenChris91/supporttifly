import { groq } from 'next-sanity';
import { sanityClient } from "../../../sanity";

const query = groq`*[_type == "gallery"] {
  _id,
  title,
  excerpt,
  image,
}`;

export default async function handler(req, res) {
  try {
    const teams = await sanityClient.fetch(query);
    res.status(200).json({ teams });
  } catch (error) {
    console.error('Error fetching teams:', error);
    res.status(500).json({ error: 'Failed to fetch teams' });
  }
}
