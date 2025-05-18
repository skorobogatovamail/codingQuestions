/**
 * @param {Array<{user: number, duration: number, equipment: Array<string>}>} sessions
 * @return {Array}
 */
export default function mergeData(sessions) {
  const mergedUsers = {};
  const usersOrder = [];
  const usersOrderSet = new Set();
  sessions.forEach((session) => {
    const currentUser = session.user;

    if (!usersOrderSet.has(currentUser)) {
      usersOrderSet.add(currentUser);
      usersOrder.push(currentUser);
    }

    if (mergedUsers[currentUser]) {
      mergedUsers[currentUser]["duration"] += session.duration;
      mergedUsers[currentUser]["equipment"] = Array.from(
        new Set([
          ...mergedUsers[currentUser]["equipment"],
          ...session.equipment,
        ])
      ).sort();
    } else {
      mergedUsers[currentUser] = { ...session };
    }
  });

  return usersOrder.map((user) => mergedUsers[user]);
}

console.log(
  mergeData([
    { user: 8, duration: 50, equipment: ["bench"] },
    { user: 7, duration: 150, equipment: ["dumbbell", "kettlebell"] },
    { user: 8, duration: 50, equipment: ["bench"] },
    { user: 7, duration: 150, equipment: ["bench", "kettlebell"] },
  ])
);
