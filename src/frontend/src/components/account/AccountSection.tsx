import { useState } from 'react';
import { useInternetIdentity } from '../../hooks/useInternetIdentity';
import { useGetCallerUserProfile, useSaveCallerUserProfile } from '../../hooks/useQueries';
import { useGetCallerMemberState } from '../../hooks/useQueries';
import Section from '../marketing/Section';
import ProfileSetupDialog from './ProfileSetupDialog';
import { User, CheckCircle2, XCircle, Coffee, Dumbbell, Loader2 } from 'lucide-react';

export default function AccountSection() {
  const { identity } = useInternetIdentity();
  const isAuthenticated = !!identity;

  const {
    data: userProfile,
    isLoading: profileLoading,
    isFetched: profileFetched,
  } = useGetCallerUserProfile();

  const {
    data: memberState,
    isLoading: memberLoading,
  } = useGetCallerMemberState();

  const showProfileSetup = isAuthenticated && !profileLoading && profileFetched && userProfile === null;

  if (!isAuthenticated) {
    return (
      <Section className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center space-y-6 max-w-md">
          <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto">
            <User className="h-10 w-10 text-muted-foreground" />
          </div>
          <h2 className="text-3xl font-bold">Account Access</h2>
          <p className="text-muted-foreground">
            Please log in to view your membership status and Tonic cafe access.
          </p>
        </div>
      </Section>
    );
  }

  if (profileLoading || memberLoading) {
    return (
      <Section className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center space-y-4">
          <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto" />
          <p className="text-muted-foreground">Loading your account...</p>
        </div>
      </Section>
    );
  }

  return (
    <>
      <Section className="min-h-[60vh]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Your Account</h1>
            <p className="text-lg text-muted-foreground">
              Welcome back, {userProfile?.name || 'Member'}!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Membership Status Card */}
            <div className="bg-card rounded-xl p-8 border border-border/50 space-y-4">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  memberState?.hasMemberAccess ? 'bg-primary/10' : 'bg-muted'
                }`}>
                  <Dumbbell className={`h-6 w-6 ${
                    memberState?.hasMemberAccess ? 'text-primary' : 'text-muted-foreground'
                  }`} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Membership Status</h3>
                </div>
              </div>
              
              <div className="flex items-center gap-2 pt-2">
                {memberState?.hasMemberAccess ? (
                  <>
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="font-medium text-primary">Active</span>
                  </>
                ) : (
                  <>
                    <XCircle className="h-5 w-5 text-muted-foreground" />
                    <span className="font-medium text-muted-foreground">Inactive</span>
                  </>
                )}
              </div>
              
              <p className="text-sm text-muted-foreground">
                {memberState?.hasMemberAccess
                  ? 'Your membership is active. Enjoy full access to all facilities.'
                  : 'No active membership found. Contact us to get started.'}
              </p>
            </div>

            {/* Tonic Access Card */}
            <div className="bg-card rounded-xl p-8 border border-border/50 space-y-4">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  memberState?.hasTonicAccess ? 'bg-accent/10' : 'bg-muted'
                }`}>
                  <Coffee className={`h-6 w-6 ${
                    memberState?.hasTonicAccess ? 'text-accent' : 'text-muted-foreground'
                  }`} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Tonic Access</h3>
                </div>
              </div>
              
              <div className="flex items-center gap-2 pt-2">
                {memberState?.hasTonicAccess ? (
                  <>
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    <span className="font-medium text-accent">Included</span>
                  </>
                ) : (
                  <>
                    <XCircle className="h-5 w-5 text-muted-foreground" />
                    <span className="font-medium text-muted-foreground">Not Included</span>
                  </>
                )}
              </div>
              
              <p className="text-sm text-muted-foreground">
                {memberState?.hasTonicAccess
                  ? 'You have full-time access to our members-only cafe.'
                  : 'Tonic cafe access is not included in your current plan.'}
              </p>
            </div>
          </div>

          {/* Profile Info */}
          <div className="mt-8 bg-muted/30 rounded-xl p-6 border border-border/40">
            <h3 className="font-semibold mb-3">Profile Information</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Name:</span>
                <span className="font-medium">{userProfile?.name || 'Not set'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Principal ID:</span>
                <span className="font-mono text-xs truncate max-w-[200px]">
                  {identity?.getPrincipal().toString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {showProfileSetup && <ProfileSetupDialog />}
    </>
  );
}

