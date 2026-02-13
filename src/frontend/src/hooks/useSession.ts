import { useInternetIdentity } from './useInternetIdentity';
import { useActor } from './useActor';
import { useQuery } from '@tanstack/react-query';
import type { UserProfile } from '../backend';

export function useSession() {
  const { identity, loginStatus, isInitializing } = useInternetIdentity();
  const { actor, isFetching: actorFetching } = useActor();

  const isAuthenticated = !!identity && !identity.getPrincipal().isAnonymous();
  
  // Treat login errors as initialization failures
  const hasInitError = loginStatus === 'loginError';

  const profileQuery = useQuery<UserProfile | null>({
    queryKey: ['currentUserProfile'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.getCallerUserProfile();
    },
    enabled: !!actor && !actorFetching && isAuthenticated && !hasInitError,
    retry: false,
  });

  const roleQuery = useQuery({
    queryKey: ['currentUserRole'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.getCallerUserRole();
    },
    enabled: !!actor && !actorFetching && isAuthenticated && !hasInitError,
    retry: false,
  });

  // Compute loading state: only loading if we're authenticated and waiting for data
  const isLoading = isAuthenticated && !hasInitError && (actorFetching || profileQuery.isLoading || roleQuery.isLoading);

  return {
    isAuthenticated,
    identity,
    loginStatus,
    userProfile: profileQuery.data,
    userRole: roleQuery.data,
    isAdmin: roleQuery.data === 'admin',
    isLoading,
    isFetched: !!actor && profileQuery.isFetched && roleQuery.isFetched,
    hasInitError,
    isInitializing,
  };
}
