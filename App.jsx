import{Route,Routes} from "react-router-dom";
import Home from "./components/Home";
import Loading from "./components/Trending";

const App = () => {
    return( 
        <div classname=" bg-[#1F1E24] w-screen h-screen flex">

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/trending" element={<Trending/>}/>
                <Route path="/Popular" element={<Popular/>}/>
                <Route path="/movie" element={<Movie/>}/>
                <Route path="/movie/details/:id" element={<MovieDetails/>}>
                    <Route 
                        path="/movie/details/:id/trailer" 
                        element={<Trailer/>}

                    />
                </Route>
                <Route path="/tv" element={<Tvshows/>}/>
                <Route path="/tv/details/:id" element={<TvDetails/>}>
                    <Route 
                        path="/tv/details/:id/trailer" 
                        element={<Trailer/>}

                    />
                </Route>
                <Route path="/person" element={<People/>}/>
                <Route path="/movie/details/:id" element={<PersonDetails/>}/>
                <Route path="*" element={<NotFound/>}/>
                
            </Routes>
        
        
        </div>
    );
};

export default App;