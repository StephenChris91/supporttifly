export const fetchGallery = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getGallery`);
        const { teams } = await res.json();
        console.log(teams);
        return teams;
    } catch (error) {
        console.error('Error fetching teams:', error);
        return []; // Provide an empty array or appropriate default value in case of error
    }
};
