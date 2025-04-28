import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';
import AuthorityGuard from './AuthorityGuard';
import AppRoute from './AppRoute';
import PageContainer from '@/components/template/PageContainer';
import { protectedRoutes, publicRoutes } from '@/configs/routes.config';
import appConfig from '@/configs/app.config';
import { useAuth } from '@/auth';
import { Routes, Route, Navigate } from 'react-router-dom';
import type { LayoutType } from '@/@types/theme';

interface ViewsProps {
    pageContainerType?: 'default' | 'gutterless' | 'contained';
    layout?: LayoutType;
}

type AllRoutesProps = ViewsProps;

const { authenticatedEntryPath } = appConfig;

const AllRoutes = (props: AllRoutesProps) => {
    const { user, authenticated } = useAuth();

    return (
        <Routes>
            {/* Rutele publice */}
            <Route path="/" element={<PublicRoute />}>
                {publicRoutes.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={
                            <AppRoute
                                routeKey={route.key}
                                component={route.component}
                                {...route.meta}
                            />
                        }
                    />
                ))}
            </Route>

            {/* Rutele protejate */}
            <Route path="/" element={<ProtectedRoute />}>
                {/* Dacă utilizatorul este autentificat, redirecționează către ruta specificată */}
                <Route
                    path="/"
                    element={
                        authenticated ? (
                            <Navigate replace to={authenticatedEntryPath} />
                        ) : (
                            <Navigate replace to="/sign-in" />
                        )
                    }
                />

                {protectedRoutes.map((route) => (
                    <Route
                        key={route.key}
                        path={route.path}
                        element={
                            <AuthorityGuard
                                userAuthority={user?.authority || []}
                                authority={route.authority}
                            >
                                <PageContainer {...props} {...route.meta}>
                                    <AppRoute
                                        routeKey={route.key}
                                        component={route.component}
                                        {...route.meta}
                                    />
                                </PageContainer>
                            </AuthorityGuard>
                        }
                    />
                ))}
            </Route>

            {/* Rute pentru orice altă eroare sau acces interzis */}
            <Route path="*" element={<Navigate replace to="/access-denied" />} />
        </Routes>
    );
};

export default AllRoutes;
