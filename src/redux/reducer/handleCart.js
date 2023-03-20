const cart = [];

function handleCart(state = cart, action) {
  const product = action.payload;
  console.log(product);
  switch (action.type) {
    case "ADDITEM":
      // kiem tra xem san pham co ton tai khong
      const exist = state.find((x) => x.id === product.id);
      console.log(product);
      if (exist) {
        // increase the quantity
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
    case "DELETEITEM":
      const exist1 = state.find((x) => x.id === product.id);
      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== exist1.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }

    case "REMOVEITEM":
      const exist2 = state.find((x) => x.id === product.id);
        return state.filter((x) => x.id !== exist2.id);
    default:
      return state;
  }
}

export default handleCart;
