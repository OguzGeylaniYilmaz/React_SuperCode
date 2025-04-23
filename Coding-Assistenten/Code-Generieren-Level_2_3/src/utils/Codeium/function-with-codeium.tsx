interface UserActivity {
  userId: string;
  timestamp: string; // ISO format, e.g. "2025-04-03T09:14:00Z"
  location: string;
}

interface UserActivityPattern {
  timeOfDay: string; // "morning" or "evening"
  locationConsistency: boolean;
  suspicious: boolean;
}

function getUserActivityPattern(
  data: UserActivity[],
  userId: string
): UserActivityPattern {
  const userActivity = data.filter((activity) => activity.userId === userId);

  // Analyze time of day
  const timeOfDay = getTimeOfDay(userActivity);
  const locationConsistency = getLocationConsistency(userActivity);
  const suspicious = isSuspicious(userActivity);

  return { timeOfDay, locationConsistency, suspicious };
}

function getTimeOfDay(userActivity: UserActivity[]): string {
  const morningCount = userActivity.filter((activity) => {
    const hour = new Date(activity.timestamp).getHours();
    return hour >= 6 && hour < 12;
  }).length;
  const eveningCount = userActivity.filter((activity) => {
    const hour = new Date(activity.timestamp).getHours();
    return hour >= 18 && hour < 24;
  }).length;

  return morningCount > eveningCount ? "morning" : "evening";
}

function getLocationConsistency(userActivity: UserActivity[]): boolean {
  const locations = userActivity.map((activity) => activity.location);
  const uniqueLocations = [...new Set(locations)];

  return uniqueLocations.length === 1;
}

function isSuspicious(userActivity: UserActivity[]): boolean {
  const nighttimeCount = userActivity.filter((activity) => {
    const hour = new Date(activity.timestamp).getHours();
    return hour >= 0 && hour < 6;
  }).length;
  const multipleLocations =
    userActivity.length > 1 &&
    userActivity.some((activity) => {
      const location = activity.location;
      return userActivity.some(
        (otherActivity) => otherActivity.location !== location
      );
    });

  return nighttimeCount > 0 || multipleLocations;
}

const data: UserActivity[] = [
  { userId: "abc123", timestamp: "2025-04-03T09:14:00Z", location: "Berlin" },
  { userId: "abc123", timestamp: "2025-04-04T03:10:00Z", location: "Tokyo" },
];

const result: UserActivityPattern = getUserActivityPattern(data, "abc123");
console.log(result);
// Output:
// {
//   timeOfDay: "morning",
//   locationConsistency: false,
//   suspicious: true
// }
