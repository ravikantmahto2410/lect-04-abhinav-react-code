import React from 'react'

// dekhna kaise copy kiya hai at 07:11
// at 37:27 dekh lena kaise dropdown laya

const personDetails = () => {

  const {pathname} = useLocation()
  const navigate = useNavigate();
  const {id} = useParams();
  const {info} = useSelector((state)=>state.person);
  const dispatch = useDispatch();
  const [category,setcategory] = useState("movie")

  console.log(info);
  useEffect(() => {
    dispatch(asyncloadperson(id));
    return () => {
      dispatch(removeperson());
    };
  },[id]);

    return info ? 
        <div className="px-[10%] w-screen h-[150vh] bg-[#1F1E24]">

          {/* part 1 Navigation */}
          <nav className="h-[11vh] w-full text-zinc-100 flex items-center gap-10 text-xl">
                  <Link
                    onClick={() => navigate(-1)}
                    className="hover:text-[#6556CD] ri-arrow-left-line"
                  > 
                  </Link>
                  
          </nav>

          
            <div className="w-full flex">
              {/* part-02 left Poster and Details */}
                <div className="w-[20%] ">
                    <img 
                    className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[35vh] object-cover"
                    src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
                    alt=""
                    />
                    <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500"/>

                    {/* Socialmedia  Links */}
                    <div className="text-2xl text-white flex gap-x-5">
                        
                        <a target="_blank" href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}>
                            <i class="ri-earth-fill"></i>
                        </a>

                        <a target="_blank" href={`https://www.facebook.com/${info.externalid.facebook_id}`}>
                            <i class="ri-facebook-circle-fill"></i>
                        </a>
                        <a target="_blank" href={`https://www.instagram.com/${info.externalid.instagram_id}`}>
                            <i class="ri-instagram-fill"></i>
                        </a>

                        <a target="_blank" href={`https://x.com/${info.externalid.instagram_id}`}>
                            <i class="ri-twitter-x-fill"></i>
                        </a>

                    
                    </div>

                    {/* Personal Info */}
                    <h1 className="text-2xl text-zinc-400 font-semibold my-5">
                        Person Info
                    </h1>

                    <h1 className="text-zinc-400 font-semibold">
                       Known For
                    </h1>
                    <h1 className="text-zinc-400">
                       {info.detail.known_for_department}
                    </h1>

                    <h1 className="text-lg text-zinc-400 font-semibold mt-3">
                       Gender
                    </h1>
                    <h1 className="text-zinc-400">
                       {info.detail.gender === 2 ? "Male" : "Female"}
                    </h1>
                    <h1 className="text-lg text-zinc-400 font-semibold mt-3">
                       Birthday
                    </h1>
                    <h1 className="text-zinc-400">
                       {info.detail.birthday}
                    </h1>

                    <h1 className="text-lg text-zinc-400 font-semibold mt-3">
                       Deathday
                    </h1>
                    <h1 className="text-zinc-400">
                       {info.detail.deathday
                            ?info.detail.deathday
                            : "still Alive"}
                    </h1>

                    <h1 className="text-lg text-zinc-400 font-semibold mt-3">
                       Place of Birth
                    </h1>
                    <h1 className="text-zinc-400">
                       {info.detail.place_of_birth}
                    </h1>

                    <h1 className="text-lg text-zinc-400 font-semibold mt-3">
                       Also Known As
                    </h1>
                    <h1 className="text-zinc-400">
                       {info.detail.also_known_as.join(", ")}
                    </h1>

                </div>

              {/* part-03 right Details and Information */}
                <div className="w-[80%] ml-[5%]">

                    <h1 className="text-6xl text-zinc-400 font-black my-5">
                        {info.detail.name}
                    </h1>

                    <h1 className="text-xl text-zinc-400 font-semibold">
                        Biography
                    </h1>
                    <p className="text-zinc-400 mt-3">
                        {info.detail.biography}
                    </p>

                    <h1 className="text-lg text-zinc-400 font-semibold">
                        Known For
                    </h1>
                    <HorizontalCards data={info.combinedCredits.cast} />
                    <div className="w-full flex flex justify-between ">
                        <h1 className="mt-5" text-xl text-zinc-400 font-semifold>
                          Acting
                        </h1>
                        <Dropdown 
                          title="Category" 
                          options={["tv","movie"]} 
                          func={(e) => setcategory(e.target.value)}

                        />
                    </div>

                    <div className="list Disc text-zinc-400 w-full h-[50vh] mt-5 overflow-x-hidden overflow-y-auto shadow-xl shadow-[rgba(255,255,255,.3)] border-2 border-zinc-700 p-5">
                        
                        {info[category + "Credits"].cast.map((c,i) =>(
                            <li key={i} className="hover:text-white duration-300 cursor-pointer">

                                <Link to={`/${category}/details/${c.id}`}>
                                    <span>
                                        {" "}
                                        {c.name || 
                                            c.title || 
                                            c.original_name || 
                                            c.original_title}
                                    </span>
                                    <span className="block ml-5 mt-2">
                                        {c.character && 
                                            `character name:${c.character}`}
                                        
                                    </span>
                                </Link>
                                Movie Name 
                            </li>
                        ))}
                        

                    </div>
                    
                </div>
            </div>
        </div> : <Loading/>;
};

export default personDetails