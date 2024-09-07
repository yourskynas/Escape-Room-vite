import { Navigate, useLocation } from 'react-router-dom';
import { AppRoute } from '../../constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface Location<State = any> extends Path {
  state: State;
  key: string;
}

interface Path {
  pathname: string;
  search: string;
  hash: string;
}

type PrivateRouteProps = {
  children: JSX.Element;
  forNonAuthOnly?: boolean;
}

type LocationType = {
  from?: Location;
}

function PrivateRoute({ children, forNonAuthOnly }: PrivateRouteProps): JSX.Element {
  const authorizationStatus = true;
  const location: Location<LocationType> = useLocation() as Location<LocationType>;

  if (authorizationStatus && forNonAuthOnly) {
    const from = location.state?.from || { pathname: AppRoute.Main };
    return <Navigate to={from} />;
  }

  if (!authorizationStatus && !forNonAuthOnly) {
    return <Navigate state={{ from: location }} to={AppRoute.Login} />;
  }

  return children;
}
export default PrivateRoute;
