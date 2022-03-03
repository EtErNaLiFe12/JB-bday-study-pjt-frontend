import { Navigate, useRoutes } from 'react-router-dom';
import { lazy, Suspense, ElementType } from 'react';

//pages
import LayOut from 'src/layout/LayOut';
import LoadingPage from 'src/pages/LoadingPage';
import AuthRoute from './AuthRoute';
import AllPostDetail from 'src/pages/AllPostDetail';

// lazy 컴포넌트는 Suspense 컴포넌트 하위에서 렌더링되어야 하며, 
// Suspense는 lazy 컴포넌트가 로드되길 기다리는 동안 로딩 화면과 같은 예비 컨텐츠를 보여줄 수 있게 해줍니다.

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
        { element: <Navigate to="/home" replace />, index: true }, // index true로 현재 home을 첫번째 인덱스로 지정
        { path: '/home', element: <HomePage/> },
        { path: '/login', element: <Login/> },
        { path: '/postdetail', element: <PostDetail/> },
        { path: '/allpostdetail', element: <AllPostDetail/> },
        { path: '/allpost', element: <AuthRoute><AllPost/></AuthRoute>},
        { path: '/edit', element: <AuthRoute><EditPage/></AuthRoute> },
        { path: '/mypost', element: <AuthRoute><MyPost/></AuthRoute> },
        { path: '/mypage', element: <AuthRoute><MyPage/></AuthRoute> },
        { path: '/register', element: <Register/> },
      ],
    },
    {
      path: '*', // 404 page를 사용하기 위해 사용 / asterisk 는 어떠한 url 문자열이라도 매칭 가능
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
const AllPost = Loading(lazy(() => import('../pages/AllPost')));
const MyPost = Loading(lazy(() => import('../pages/MyPost')));
const MyPage = Loading(lazy(() => import('../pages/MyPage')));
const Register = Loading(lazy(() => import('../pages/Register')));
const Error404 = Loading(lazy(() => import('../pages/Error404')));