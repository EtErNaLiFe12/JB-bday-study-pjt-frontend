import { Navigate, useRoutes } from 'react-router-dom';
import { lazy, Suspense, ElementType } from 'react';

//pages
import LayOut from 'src/layout/LayOut';
import LoadingPage from 'src/pages/LoadingPage';


const Loading = (Component: ElementType) => (props: any) =>
(
  <Suspense fallback={<LoadingPage />}>
    <Component {...props} />
  </Suspense>
);

const Router = () => {

    return useRoutes([
			{
				path: '/', element: <LayOut/>,
				children: [
					{element: <Navigate to="/home" replace/>, index:true },
					{path: '/home', element: <HomePage/>},
					{path: '/login', element: <Login/>},
					{path: '/postDetail', element: <PostDetail/>},
					{path: '/post', element: <Post/>},
					{path: '/postList', element: <PostList/>},
					{path: '/register', element: <Register/>},
				]
			},
			{
				path: '*', element: <LayOut/>,
				children: [
					{ path: 'error404', element: <Error404/> }
				]
			}
		])
}

export default Router;


// Routes
const HomePage = Loading(lazy(() => import('../pages/HomePage')));
const Login = Loading(lazy(() => import('../pages/Login')));
const Post = Loading(lazy(() => import('../pages/Post')));
const PostDetail = Loading(lazy(() => import('../pages/PostDetail')));
const PostList = Loading(lazy(() => import('../pages/PostList')));
const Register = Loading(lazy(() => import('../pages/Register')));
const Error404 = Loading(lazy(() => import('../pages/Error404')));
