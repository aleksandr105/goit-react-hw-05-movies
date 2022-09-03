import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <>
      <h2>Sorry, page not found :-(</h2>
      <Link to="/goit-react-hw-05-movies">Return to the main page</Link>
    </>
  );
};
