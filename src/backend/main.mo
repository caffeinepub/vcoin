import Array "mo:core/Array";
import Blob "mo:core/Blob";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Map "mo:core/Map";
import Text "mo:core/Text";
import List "mo:core/List";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";

import AccessControl "authorization/access-control";
import MixinAuthorization "authorization/MixinAuthorization";
import MixinStorage "blob-storage/Mixin";
import Storage "blob-storage/Storage";

actor {
  // Initialize access control state properly
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);
  include MixinStorage();

  // User Profile Type
  public type UserProfile = {
    email : Text;
    name : Text;
    referralCode : Text;
    referredBy : ?Text;
    registrationTimestamp : Time.Time;
    fingerprint : Text;
    passwordChangeRequired : Bool;
  };

  // Storage
  let userProfiles = Map.empty<Principal, UserProfile>();
  let depositIntents = Map.empty<Text, Text>(); // Changed to store Text
  let depositSubmissions = Map.empty<Text, Text>(); // Changed to store Text
  
  var lastSubmissionCheckTimestamp : Time.Time = 0;
  let adminEmailAddress = "admin@vcoin.com";

  // ============================================================================
  // AUTHENTICATION & USER PROFILE MANAGEMENT
  // ============================================================================

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Only authenticated users can access their profile");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    // Users can only view their own profile, admins can view any profile
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Only authenticated users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // ============================================================================
  // DEPOSIT INTENT MANAGEMENT
  // ============================================================================

  public shared ({ caller }) func createDepositIntent(intent : Text) : async Text {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Only authenticated users can create deposit intents");
    };
    
    let intentId = generateIntentId(caller);
    depositIntents.add(intentId, intent);
    intentId;
  };

  public query ({ caller }) func getCallerDepositIntents() : async [Text] {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Only authenticated users can view their deposit intents");
    };
    depositIntents.values().toArray();
  };

  public query ({ caller }) func getDepositIntent(intentId : Text) : async ?Text {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Only authenticated users can view deposit intents");
    };
    depositIntents.get(intentId);
  };

  // ============================================================================
  // DEPOSIT SUBMISSION MANAGEMENT
  // ============================================================================

  public shared ({ caller }) func submitDeposit(submission : Text) : async Text {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Only authenticated users can submit deposits");
    };
    
    let submissionId = generateSubmissionId(caller);
    depositSubmissions.add(submissionId, submission);
    submissionId;
  };

  public query ({ caller }) func getCallerDepositSubmissions() : async [Text] {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Only authenticated users can view their deposit submissions");
    };
    depositSubmissions.values().toArray();
  };

  public query ({ caller }) func getDepositSubmission(submissionId : Text) : async ?Text {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Only authenticated users can view deposit submissions");
    };
    depositSubmissions.get(submissionId);
  };

  // ============================================================================
  // ADMIN-ONLY: USER MANAGEMENT
  // ============================================================================

  public query ({ caller }) func getAllUsers() : async [(Principal, UserProfile)] {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Only admins can view all users");
    };
    userProfiles.entries().toArray();
  };

  public shared ({ caller }) func updateUserProfile(user : Principal, profile : UserProfile) : async () {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Only admins can update user profiles");
    };
    userProfiles.add(user, profile);
  };

  public shared ({ caller }) func deleteUser(user : Principal) : async () {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Only admins can delete users");
    };
    userProfiles.remove(user);
  };

  // ============================================================================
  // PUBLIC: PRESALE INFO (READ-ONLY)
  // ============================================================================

  public query func getCurrentPresaleStage() : async {
    stage : Nat;
    price : Float;
    remainingSupply : Nat;
  } {
    // No authorization needed - public information
    {
      stage = 1;
      price = 0.05;
      remainingSupply = 80_000_000;
    };
  };

  public query func getWalletAddress() : async Text {
    // No authorization needed - public information
    "USDT_WALLET_ADDRESS_PLACEHOLDER";
  };

  // ============================================================================
  // HELPER FUNCTIONS
  // ============================================================================

  func generateIntentId(user : Principal) : Text {
    user.toText() # "-" # Int.toText(Time.now());
  };

  func generateSubmissionId(user : Principal) : Text {
    user.toText() # "-sub-" # Int.toText(Time.now());
  };
};
