import React from 'react';
import { Link, useResolvedPath, useMatch } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <h1>Rockstar Database</h1>
        </Link>
        <ul className='links'>
            <li>
                <CustomLink to="/FavoriteBands">Favorite Bands</CustomLink>
            </li>
            <li>
                <CustomLink to="/FavoriteAlbums">Favorite Albums</CustomLink>
            </li>
        </ul>
    </nav>
  )
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})

    return (
        <li className={isActive === to ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}