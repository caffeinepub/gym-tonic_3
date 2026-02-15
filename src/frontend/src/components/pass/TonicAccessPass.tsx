import { useInternetIdentity } from '../../hooks/useInternetIdentity';
import { useGetCallerUserProfile, useGetCallerMemberState } from '../../hooks/useQueries';
import Section from '../marketing/Section';
import { Coffee, CheckCircle2, XCircle, User, Loader2 } from 'lucide-react';

export default function TonicAccessPass() {
  const { identity } = useInternetIdentity();
  const isAuthenticated = !!identity;

  const { data: userProfile, isLoading: profileLoading } = useGetCallerUserProfile();
  const { data: memberState, isLoading: memberLoading } = useGetCallerMemberState();

  if (!isAuthenticated) {
    return (
      <Section className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center space-y-6 max-w-md">
          <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto">
            <Coffee className="h-10 w-10 text-muted-foreground" />
          </div>
          <h2 className="text-3xl font-bold">Tonic Access Pass</h2>
          <p className="text-muted-foreground">
            Please log in to view your Tonic cafe access pass.
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
          <p className="text-muted-foreground">Loading your pass...</p>
        </div>
      </Section>
    );
  }

  const hasAccess = memberState?.hasTonicAccess || false;

  return (
    <Section className="min-h-[60vh] flex items-center justify-center py-8">
      <div className="w-full max-w-md">
        {/* Digital Pass Card */}
        <div className={`rounded-2xl p-8 shadow-medium border-2 transition-all ${
          hasAccess
            ? 'bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30'
            : 'bg-card border-border/50'
        }`}>
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Coffee className={`h-10 w-10 ${hasAccess ? 'text-primary' : 'text-muted-foreground'}`} />
              <h1 className="text-3xl font-bold">Tonic</h1>
            </div>
            <p className="text-sm text-muted-foreground">Members Cafe Access Pass</p>
          </div>

          {/* User Info */}
          <div className="bg-background/50 rounded-xl p-6 mb-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                <User className="h-6 w-6 text-muted-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-lg truncate">
                  {userProfile?.name || 'Member'}
                </p>
                <p className="text-xs text-muted-foreground font-mono truncate">
                  {identity?.getPrincipal().toString().slice(0, 20)}...
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-border/50">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">Membership:</span>
                <span className={`text-sm font-medium ${
                  memberState?.hasMemberAccess ? 'text-primary' : 'text-muted-foreground'
                }`}>
                  {memberState?.hasMemberAccess ? 'Active' : 'Inactive'}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Tonic Access:</span>
                <span className={`text-sm font-medium ${
                  hasAccess ? 'text-accent' : 'text-muted-foreground'
                }`}>
                  {hasAccess ? 'Included' : 'Not Included'}
                </span>
              </div>
            </div>
          </div>

          {/* Access Status */}
          <div className={`rounded-xl p-6 text-center ${
            hasAccess
              ? 'bg-primary/10 border-2 border-primary/30'
              : 'bg-muted/50 border-2 border-border/50'
          }`}>
            <div className="flex items-center justify-center gap-3 mb-2">
              {hasAccess ? (
                <CheckCircle2 className="h-8 w-8 text-primary" />
              ) : (
                <XCircle className="h-8 w-8 text-muted-foreground" />
              )}
              <span className={`text-2xl font-bold ${
                hasAccess ? 'text-primary' : 'text-muted-foreground'
              }`}>
                {hasAccess ? 'Access Granted' : 'Access Not Granted'}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              {hasAccess
                ? 'Show this pass at the cafe entrance'
                : 'Contact staff to activate Tonic access'}
            </p>
          </div>
        </div>

        {/* Info Text */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          This digital pass grants you access to the Tonic cafe during all operating hours.
        </p>
      </div>
    </Section>
  );
}

