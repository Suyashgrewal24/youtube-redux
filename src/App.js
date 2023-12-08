
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
// import WatchPage from './Pages/watchPage/WatchPage';
import SearchPage from './Pages/SearchPage';
// import VideoAndComment from './components/watchPage/VideoAndComment';

function App() {
  const appRouter = createBrowserRouter([{
    path: "/",
    element: <>
      <Head />
      <Body />
    </>,
    children: [{
      path: '/',
      element: <MainContainer />,
    },
    {
      path: "/watchpage",
      element: <WatchPage/>
    },
    {
      path: "/searchPage",
      element: <SearchPage />
    }
    ]
  }])

  return (
    <>

      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
