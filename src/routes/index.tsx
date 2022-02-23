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

const Router = () =>
  useRoutes([
    {
      path: '/',
      element: <LayOut />,
      children: [
        { element: <Navigate to="/home" replace />, index: true },
        { path: '/home', element: <HomePage /> },
        { path: '/login', element: <Login /> },
        { path: '/postdetail', element: <PostDetail /> },
        { path: '/edit', element: <EditPage /> },
        { path: '/mypost', element: <MyPost /> },
        { path: '/mypage', element: <MyPage /> },
        { path: '/register', element: <Register /> },
      ],
    },
    {
      path: '*',
      element: <LayOut />,
      children: [
        { path: '*', element: <Navigate to="/error404" replace /> },
        { path: 'error404', element: <Error404 /> },
      ],
    },
  ]);

export default Router;


// Routes
const HomePage = Loading(lazy(() => import('../pages/HomePage')));
const Login = Loading(lazy(() => import('../pages/Login')));
const EditPage = Loading(lazy(() => import('../pages/Edit')));
const PostDetail = Loading(lazy(() => import('../pages/PostDetail')));
const MyPost = Loading(lazy(() => import('../pages/MyPost')));
const MyPage = Loading(lazy(() => import('../pages/MyPage')));
const Register = Loading(lazy(() => import('../pages/Register')));
const Error404 = Loading(lazy(() => import('../pages/Error404')));