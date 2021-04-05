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
                    picture: "https://images.pexels.com/photos/53487/james-stewart-man-person-actor-53487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    profession: "VP Accounting",
                    birthday: "9/8/1988"
                  }, {
                    userId: 2,
                    first_name: "Vina",
                    last_name: "Spraging",
                    picture: "https://images.pexels.com/photos/157661/young-woman-shooting-model-157661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    profession: "Budget/Accounting Analyst I",
                    birthday: "7/8/1970"
                  }, {
                    userId: 3,
                    first_name: "Wendeline",
                    last_name: "Bernhardsson",
                    picture: "https://images.pexels.com/photos/3031397/pexels-photo-3031397.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    profession: "Senior Quality Engineer",
                    birthday: "5/24/1953"
                  }, {
                    userId: 4,
                    first_name: "Dannel",
                    last_name: "Badrock",
                    picture: "https://images.pexels.com/photos/825947/pexels-photo-825947.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    profession: "Assistant Media Planner",
                    birthday: "9/11/1984"
                  }, {
                    userId: 5,
                    first_name: "Worthington",
                    last_name: "Thunder",
                    picture: "https://images.pexels.com/photos/2120114/pexels-photo-2120114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    profession: "Financial Advisor",
                    birthday: "8/25/1977"
                  }, {
                    userId: 6,
                    first_name: "Remington",
                    last_name: "Rutgers",
                    picture: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    profession: "Research Nurse",
                    birthday: "2/4/1976"
                  }, {
                    userId: 7,
                    first_name: "Niccolo",
                    last_name: "Jahnig",
                    picture: "https://images.pexels.com/photos/1156546/pexels-photo-1156546.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    profession: "Marketing Manager",
                    birthday: "5/3/1998"
                  }, {
                    userId: 8,
                    first_name: "Florentia",
                    last_name: "Pendrich",
                    picture: "https://images.pexels.com/photos/1622866/pexels-photo-1622866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    profession: "Cost Accountant",
                    birthday: "12/20/1988"
                  }, {
                    userId: 9,
                    first_name: "Teador",
                    last_name: "Moss",
                    picture: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    profession: "Compensation Analyst",
                    birthday: "5/11/1969"
                  }, {
                    userId: 10,
                    first_name: "Ferne",
                    last_name: "Bloxsome",
                    picture: "https://images.pexels.com/photos/3031391/pexels-photo-3031391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    profession: "Recruiting Manager",
                    birthday: "4/24/1997"
                  }
            ]);
        });
};
