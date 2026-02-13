import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { UserProfile } from '../backend';
import { Principal } from '@dfinity/principal';

export function useGetCallerUserProfile() {
  const { actor, isFetching: actorFetching } = useActor();

  const query = useQuery<UserProfile | null>({
    queryKey: ['currentUserProfile'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.getCallerUserProfile();
    },
    enabled: !!actor && !actorFetching,
    retry: false,
  });

  return {
    ...query,
    isLoading: actorFetching || query.isLoading,
    isFetched: !!actor && query.isFetched,
  };
}

export function useSaveCallerUserProfile() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (profile: UserProfile) => {
      if (!actor) throw new Error('Actor not available');
      return actor.saveCallerUserProfile(profile);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['currentUserProfile'] });
    },
  });
}

export function useGetPresaleStage() {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery({
    queryKey: ['presaleStage'],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getCurrentPresaleStage();
    },
    enabled: !!actor && !actorFetching,
  });
}

export function useGetWalletAddress() {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery({
    queryKey: ['walletAddress'],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getWalletAddress();
    },
    enabled: !!actor && !actorFetching,
  });
}

export function useCreateDepositIntent() {
  const { actor } = useActor();

  return useMutation({
    mutationFn: async (intent: string) => {
      if (!actor) throw new Error('Actor not available');
      return actor.createDepositIntent(intent);
    },
  });
}

export function useSubmitDeposit() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (submission: string) => {
      if (!actor) throw new Error('Actor not available');
      return actor.submitDeposit(submission);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['depositSubmissions'] });
    },
  });
}

export function useGetCallerDepositSubmissions() {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery({
    queryKey: ['depositSubmissions'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getCallerDepositSubmissions();
    },
    enabled: !!actor && !actorFetching,
  });
}

export function useGetAllUsers() {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery({
    queryKey: ['allUsers'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllUsers();
    },
    enabled: !!actor && !actorFetching,
  });
}
