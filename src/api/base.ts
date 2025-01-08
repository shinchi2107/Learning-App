const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const buildApi = (path = "") => {
    if (!path.startsWith("/")) {
        path = `/${path}`;
    }
    return `${apiUrl}${path}`;
}

export { buildApi }