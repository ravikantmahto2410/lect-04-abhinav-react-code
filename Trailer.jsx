import React from 'react'
import NotFound from "./NotFound";
const Trailer = () => {
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const category = pathname.includes("movie") ? "movie" : "tv";
    const ytvideo = useSelector((state) => state[category].info.videos);

    return ytvideo ? (
        <div className="bg-[rgba(0,0,0,.9)] absolute z-[100] top-0 left-0 w-screen h-screen flex items-center justify-center">
        
            <Link
                onClick={() => navigate(-1)}
                className="hover:text-[#6556CD] ri-close-fill text-white right-[5%] top-[5%]"
            ></Link>
            {ytvideo ? (
                <Reactplayer 
                    height={300}
                    width={1500}
                    url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
                />

            ) : ( 

                 <NotFound/>
            )}
            
        </div>
    );

};

export default Trailer