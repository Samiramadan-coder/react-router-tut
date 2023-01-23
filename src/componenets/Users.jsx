import React from 'react';
import { Link, Outlet, useSearchParams } from 'react-router-dom';

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get('filter') === 'active';

  return (
    <>
      <nav>
        <Link to="1">User One</Link>
        <Link to="2">User Two</Link>
        <Link to="3">User Three</Link>
      </nav>
      <Outlet /> 
      <div>
        <button onClick={() => setSearchParams({filter: 'active'})}>Active Users</button>
        <button onClick={() => setSearchParams({})}>Reset Users</button>
      </div>
      {
        showActiveUsers ? <h2>Active</h2> : <h2>All</h2>
      }
    </>
  )
}

export default Users;