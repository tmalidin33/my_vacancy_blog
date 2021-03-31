exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('users')
        .del()
        .then(function () {
            // Inserts seed entries
            return knex('users').insert([
                {
                    userId: 1,
                    first_name: "Timmy",
                    last_name: "Leyborne",
                    picture: "https://placebeard.it/500x500",
                    profession: "VP Accounting",
                    birthday: "9/8/1988"
                  }, {
                    userId: 2,
                    first_name: "Vina",
                    last_name: "Spraging",
                    picture: "https://placebeard.it/500x500",
                    profession: "Budget/Accounting Analyst I",
                    birthday: "7/8/1970"
                  }, {
                    userId: 3,
                    first_name: "Wendeline",
                    last_name: "Bernhardsson",
                    picture: "https://placebeard.it/500x500",
                    profession: "Senior Quality Engineer",
                    birthday: "5/24/1953"
                  }, {
                    userId: 4,
                    first_name: "Dannel",
                    last_name: "Badrock",
                    picture: "https://placebeard.it/500x500",
                    profession: "Assistant Media Planner",
                    birthday: "9/11/1984"
                  }, {
                    userId: 5,
                    first_name: "Worthington",
                    last_name: "Thunder",
                    picture: "https://placebeard.it/500x500",
                    profession: "Financial Advisor",
                    birthday: "8/25/1977"
                  }, {
                    userId: 6,
                    first_name: "Remington",
                    last_name: "Rutgers",
                    picture: "https://placebeard.it/500x500",
                    profession: "Research Nurse",
                    birthday: "2/4/1976"
                  }, {
                    userId: 7,
                    first_name: "Niccolo",
                    last_name: "Jahnig",
                    picture: "https://placebeard.it/500x500",
                    profession: "Marketing Manager",
                    birthday: "5/3/1998"
                  }, {
                    userId: 8,
                    first_name: "Florentia",
                    last_name: "Pendrich",
                    picture: "https://placebeard.it/500x500",
                    profession: "Cost Accountant",
                    birthday: "12/20/1988"
                  }, {
                    userId: 9,
                    first_name: "Teador",
                    last_name: "Moss",
                    picture: "https://placebeard.it/500x500",
                    profession: "Compensation Analyst",
                    birthday: "5/11/1969"
                  }, {
                    userId: 10,
                    first_name: "Ferne",
                    last_name: "Bloxsome",
                    picture: "https://placebeard.it/500x500",
                    profession: "Recruiting Manager",
                    birthday: "4/24/1997"
                  }
            ]);
        });
};
