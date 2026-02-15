import Runtime "mo:core/Runtime";
import Map "mo:core/Map";
import Principal "mo:core/Principal";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  type UserState = {
    hasMemberAccess : Bool;
    hasTonicAccess : Bool;
  };

  public type UserProfile = {
    name : Text;
  };

  let userState = Map.empty<Principal, UserState>();
  let userProfiles = Map.empty<Principal, UserProfile>();

  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // Query member state for the caller (user-level access required)
  public query ({ caller }) func getCallerMemberState() : async UserState {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view member state");
    };
    switch (userState.get(caller)) {
      case (?state) { state };
      case (_) {
        // Return default state for unregistered users
        { hasMemberAccess = false; hasTonicAccess = false }
      };
    };
  };

  // Update member state (admin only)
  public shared ({ caller }) func updateMemberState(member : Principal, newState : UserState) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can update member state");
    };
    userState.add(member, newState);
  };

  // Get caller's user profile (user-level access required)
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view profiles");
    };
    userProfiles.get(caller);
  };

  // Get another user's profile (admin-only or own profile)
  public query ({ caller }) func getUserProfile(user: Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  // Save caller's user profile (user-level access required)
  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };
};
