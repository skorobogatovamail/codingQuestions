const data = [
    { user: 8, duration: 50, equipment: ['bench'] },
    { user: 7, duration: 150, equipment: ['dumbbell'] },
    { user: 1, duration: 10, equipment: ['barbell'] },
    { user: 7, duration: 100, equipment: ['bike', 'kettlebell'] },
    { user: 7, duration: 200, equipment: ['bike'] },
    { user: 2, duration: 200, equipment: ['treadmill'] },
    { user: 2, duration: 200, equipment: ['bike'] },
];


function mergeData(sessions) {
    const mergedUsers = {};
    sessions.forEach((session) => {
        const currentUser = session.user;

        if (mergedUsers[currentUser]) {
            mergedUsers[currentUser]["duration"] += session.duration;
            mergedUsers[currentUser]["equipment"] = [
                ...mergedUsers[currentUser]["equipment"],
                ...session.equipment,
            ];
        } else {
            mergedUsers[currentUser] = { ...session };
        }
    });

    return Object.values(mergedUsers)
}


console.log(mergeData(data))