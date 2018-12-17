export function loadProducts() {
    return function (dispatch) {
      fetch("/products")
      .then( (response) => {
        return response.json();
      }).then((products) => {
        dispatch(ProductsLoaded(products));
      });
    };
   }
   
   export function ProductsLoaded(products) {
    return {
      type: "PRODUCTS_LOADED",
      value: products
    };
   }

   export function loadComments() {
    return function (dispatch) {
      fetch("/comments")
      .then( (response) => {
        return response.json();
      }).then((comments) => {
        dispatch(commentsLoaded(comments));
      });
    };
   }
   
   export function commentsLoaded(comments) {
    return {
      type: "COMMENTS_LOADED",
      value: comments
    };
   }

   export function loadVehicles() {
    return function (dispatch) {
      fetch("/vehicles")
      .then( (response) => {
        return response.json();
      }).then((vehicles) => {
        dispatch(vehiclesLoaded(vehicles));
      });
    };
   }
   
   export function vehiclesLoaded(vehicles) {
    return {
      type: "VEHICLES_LOADED",
      value: vehicles
    };
   }




   
   