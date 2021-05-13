const URL = "http://localhost:4000/api/v1/products";

export async function getAllProducts() {
    const allProducts = await fetch(URL)
        .then((response) => {
            return response.json()
        })
        .then(data => {
            return data;
        })
        .catch(err => console.log(err));
    return allProducts;
}

// URL = "https://contact-list-c07e0-default-rtdb.firebaseio.com/List.json";
// // async updateDatabase() {
//   //   const List = await fetch(this.URL)
//  export const updateDatabase = () => {
//     // fetch(this.URL)
//     			const data = fetch(URL)  //тут буде URL без this бо ми не class basic component
//     .then(responce => {
//       // console.log("update => ", responce)
//       return responce.json();
//     }).then(data => {
//       // console.log("update ", data);
//       if (data !== null) {
//             return data
//       }    
// else {
//         return []
//     })
//     // .catch(err => console.log(err))
//     .catch(err => {
//         return err
//     })
//     return data;
//   }
