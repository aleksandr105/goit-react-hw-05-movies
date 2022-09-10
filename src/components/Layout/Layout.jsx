import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NaviBar, Container, NaviList, NaviLink } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <NaviBar>
        <Container>
          <nav>
            <NaviList>
              <li>
                <NaviLink exact to="/">
                  Home
                </NaviLink>
              </li>
              <li>
                <NaviLink to="movies">Movies</NaviLink>
              </li>
            </NaviList>
          </nav>
        </Container>
      </NaviBar>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Outlet />
      </Suspense>
    </>
  );
};
