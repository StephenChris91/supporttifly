export const fetchTeam = async () => {
    try {
        const res = await fetch(`http://localhost:3000/api/getTeam`);
        const { teams } = await res.json();
        console.log(teams);
        return teams;
    } catch (error) {
        console.error('Error fetching teams:', error);
        return []; // Provide an empty array or appropriate default value in case of error
    }
};
