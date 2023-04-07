import "./App.css";

import { Link, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import DynamicParallelPage from "./components/DynamicParallel.page";
import HomePage from "./components/Home.page";
import ParallelQuriesPage from "./components/ParallelQuries.page";
import RQSuperHeroPage from "./components/RQSuperHero.page";
import RQSuperHerouspage from "./components/RQSuperHerous.page";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import SuperHeroesPage from "./components/SuperHeroes.page";

const arr = [1, 3];
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/super-heroes">Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to="/rq-super-heroes">RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/rq-dynamic-parallel" element={<DynamicParallelPage heroIds={arr} />} />

          <Route path="/rq-parallel" element={<ParallelQuriesPage />} />
          <Route path="/rq-super-heroes/:heroId" element={<RQSuperHeroPage />} />
          <Route path="/super-heroes" element={<SuperHeroesPage />} />
          <Route path="/rq-super-heroes" element={<RQSuperHerouspage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
