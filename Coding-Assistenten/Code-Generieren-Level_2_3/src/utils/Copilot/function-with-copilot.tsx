interface LoginData {
  userId: string;
  timestamp: string;
  location: string;
}

interface UserActivityPattern {
  timeOfDay: string;
  locationConsistency: boolean;
  suspicious: boolean;
}

function getUserActivityPattern(
  userId: string,
  data: LoginData[]
): UserActivityPattern {
  const userLogins = data.filter((entry) => entry.userId === userId);

  if (userLogins.length === 0) {
    return {
      timeOfDay: "unknown",
      locationConsistency: false,
      suspicious: false,
    };
  }

  // Analyze time of day
  const timeBuckets = { morning: 0, afternoon: 0, evening: 0, night: 0 };
  userLogins.forEach((login) => {
    const hour = new Date(login.timestamp).getUTCHours();
    if (hour >= 6 && hour < 12) timeBuckets.morning++;
    else if (hour >= 12 && hour < 18) timeBuckets.afternoon++;
    else if (hour >= 18 && hour < 24) timeBuckets.evening++;
    else timeBuckets.night++;
  });

  const timeOfDay = (
    Object.keys(timeBuckets) as Array<keyof typeof timeBuckets>
  ).reduce((a, b) => (timeBuckets[a] > timeBuckets[b] ? a : b));

  // Analyze location consistency
  const uniqueLocations = new Set(userLogins.map((login) => login.location));
  const locationConsistency = uniqueLocations.size === 1;

  // Analyze suspicious behavior
  const suspicious =
    uniqueLocations.size > 3 || timeBuckets.night > userLogins.length * 0.5;

  return {
    timeOfDay,
    locationConsistency,
    suspicious,
  };
}

// Example usage:
const loginData: LoginData[] = [
  { userId: "abc123", timestamp: "2025-04-03T09:14:00Z", location: "Berlin" },
  { userId: "abc123", timestamp: "2025-04-04T03:10:00Z", location: "Tokyo" },
  { userId: "abc123", timestamp: "2025-04-05T20:30:00Z", location: "Berlin" },
  { userId: "abc123", timestamp: "2025-04-06T02:45:00Z", location: "New York" },
];

console.log(getUserActivityPattern("abc123", loginData));
// Output example:
// {
//   timeOfDay: "morning",
//   locationConsistency: false,
//   suspicious: true
// }
