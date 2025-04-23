
# 🧾 Aufgabenbeschreibung

**Learning Objective:**  
After this exercise, you will be able to compare the code completion of two AI-based developer tools (Codeium and GitHub Copilot) in a realistic task using React and JavaScript/TypeScript.

Tools used:
- [https://codeium.com](https://codeium.com/)
- https://github.com/features/copilot

---

# ✍️ Prompt – Utility Function

Create a function `getUserActivityPattern` that analyzes the login behavior of a specific user.

Input:
An array of objects with:
- userId
- timestamp (ISO format)
- location

Output:
```ts
{
  timeOfDay: "morning" | "evening" | etc.,
  locationConsistency: true | false,
  suspicious: true | false
}
```

---

# 🛠️ Tool: Codeium

## 💻 Code

```ts
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

  const timeOfDay = getTimeOfDay(userActivity);
  const locationConsistency = getLocationConsistency(userActivity);
  const suspicious = isSuspicious(userActivity);

  return { timeOfDay, locationConsistency, suspicious };
}

// Helper functions omitted for brevity but well-structured and modular
```

## 🧠 Reflexion

### ✅ What worked well?
- Clean separation of logic using helper functions (`getTimeOfDay`, `getLocationConsistency`, `isSuspicious`)
- Modular and testable structure
- Clear naming conventions and reusable design

### ⚠️ What could be improved?
- No fallback if the user ID doesn’t exist (would return default values without validation)

---

# 🛠️ Tool: GitHub Copilot

## 💻 Code

```ts
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

  const uniqueLocations = new Set(userLogins.map((login) => login.location));
  const locationConsistency = uniqueLocations.size === 1;
  const suspicious =
    uniqueLocations.size > 3 || timeBuckets.night > userLogins.length * 0.5;

  return {
    timeOfDay,
    locationConsistency,
    suspicious,
  };
}
```

## 🧠 Reflexion

### ✅ What worked well?
- Includes edge case handling (user has no data)
- Straightforward logic in a single function
- Bucketing time ranges provides detailed output

### ⚠️ What could be improved?
- Slightly more complex and harder to test compared to Codeium's modular version
- Mixing of logic without breaking into helpers could hurt reusability

---

# 🏁 Conclusion

Both tools provided correct and logical solutions.  
**Codeium** was stronger in terms of structure and testability due to modular design and helper functions.  
**Copilot** was quicker to generate an all-in-one solution and covered edge cases more explicitly.

🏆 **Winner: Tie**  
- Codeium for maintainability  
- Copilot for completeness and robustness
