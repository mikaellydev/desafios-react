const API_KEY = "2cfea803145ab731c6feb7fcb5a72c83";

const categories = [
{
    name: "trending",

    title: "Popular",

    path: `/trending/all/week?api_key=${API_KEY}3&region=US&language=en-US`,

    isLarge: true,
},

{
    name: "netflixOriginals",

    title: "Originals Netflix",

    path: `/discover/tv?api_key=${API_KEY}&with_networks=213`,

    isLarge: false,
},

{
    name: "topRated",
    title: "Popular",
    path: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
    isLarge: false,
},
{
    name: "comedy",
    title: "Comedy",
    path: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
    isLarge: false,
},

{
    name: "romances",
    title: "Romances",
    path: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
    isLarge: false,
},

{
    name: "documentaries",
    title: "Documentaries",
    path: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
    isLarge: false,
},
];

export const getMovies = async (path) => {
try {
    let url = `https://api.themoviedb.org/3${path}`;
    const response = await fetch(url);
    return await response.json();
} catch (error) {
    console.log("error getMovies: ", error);
}
};

export default categories;
