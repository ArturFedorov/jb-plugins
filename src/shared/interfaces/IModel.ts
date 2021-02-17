export interface IModel {
  id: string;
}

// https://assignment.api.ru/plugins?query=code&category=popular&offset=0
//
// const result = {
//   total: 100
//   nextOffset: 10,
//   payload: [
//     {
//       id: "121",
//       name: "Code With Me",
//       downloads: 102021,
//       date: 1212121,
//       author: "Jetbrains",
//       rating: 5,
//       description: "Collabrative coding",
//       icon: "https://icon.com/super.jpg",
//       fullDescription: "Long description as HTML"
//     },
//     ...and other plugins
//   ]
// }

// https://assignment.api.ru/plugins/upload

// const requestBody =
//   {
//     name: "Code With Me",
//     author: "Jetbrains",
//     description: "Collabrative coding",
//     icon: "https://icon.com/super.jpg",
//     fullDescription: "Long description as HTML"
//   }

// https://assignment.api.ru/plugins/delete/${id}
