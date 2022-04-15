// const handleSimpleProduct = () => {
//   if (item) {
//   let productList = {
//   itemId: item?.node?.id,
//   itemName: item?.node?.name,
//   price: item?.node?.pricing?.priceRangeUndiscounted?.start.gross.amount,
//   quantity: 1,
//   discountAmount: 0,
//   totalAmtWithoutAnyCharges: item?.node?.pricing?.priceRangeUndiscounted?.start.gross.amount,
//   total: item?.node?.pricing?.priceRangeUndiscounted?.start.gross.amount,
//   kitchenOrderItemId: "",
//   isDeleted: false,
//   note: "",
//   variantId: "",
//   variantDescription: "",
//   isModified: !!state.idToModifyKitchenOrder,
//   }
//   let previousObject = state.productInCartList.find((x: any) => x.itemId === item?.node?.id);
//   if (previousObject) {
//   let newItemList = state.productInCartList;
//   let foundIndex = state.productInCartList.findIndex((x: any) => x.itemId === item.node.id)
//   newItemList[foundIndex] = {
//   ...productList,
//   isModified: !!state.idToModifyKitchenOrder,
//   quantity: previousObject.quantity < 0 ? previousObject.quantity + 2 : previousObject.quantity + 1,
//   discountAmount: previousObject.discountAmount,
//   totalAmtWithoutAnyCharges: item?.node?.pricing?.priceRangeUndiscounted?.start.gross.amount + previousObject.total,
//   total: item?.node?.pricing?.priceRangeUndiscounted?.start.gross.amount + previousObject.total,
//   kitchenOrderItemId: previousObject.kitchenOrderItemId !== undefined ? previousObject.kitchenOrderItemId : "",
//   }
//   dispatch({type: PRODUCT_IN_CARTLIST, payload: [...newItemList]})
//   } else {
//   dispatch({type: PRODUCT_IN_CARTLIST, payload: [...state.productInCartList, productList]})
//   }
//   }
//   }