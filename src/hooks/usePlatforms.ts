import useData from "./useData";

interface Platforms {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const usePlatform = () => useData<Platforms>("/platforms/lists/parents");

export default usePlatform;
