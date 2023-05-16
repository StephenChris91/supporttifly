


export const fetchTeam = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getTeam`);

    const data = res.json()
    const teams = data.teams
    console.log(data)

    return teams
}