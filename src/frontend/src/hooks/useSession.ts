import { useInternetIdentity } from './useInternetIdentity';
import { useActor } from './useActor';
import { useQuery } from '@tanstack/react-query';
import type { UserProfile } from '../backend';

export function useSession() {
  const { identity, loginStatus } = useInternetIdentity();
  const { actor, isFetching: actorFetching } = useActor();

  const isAuthenticated = !!identity && !identity.getPrincipal().isAnonymous();

  const profileQuery = useQuery<UserProfile | null>({
    queryKey: ['currentUserProfile'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.getCallerUserProfile();
    },
    enabled: !!actor && !actorFetching && isAuthenticated,
    retry: false,
  });

  const roleQuery = useQuery({
    queryKey: ['currentUserRole'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.getCallerUserRole();
    },
    enabled: !!actor && !actorFetching && isAuthenticated,
    retry: false,
  });

  return {
    isAuthenticated,
    identity,
    loginStatus,
    userProfile: profileQuery.data,
    userRole: roleQuery.data,
    isAdmin: roleQuery.data === 'admin',
    isLoading: actorFetching || profileQuery.isLoading || roleQuery.isLoading,
    isFetched: !!actor && profileQuery.isFetched && roleQuery.isFetched,
  };
}
