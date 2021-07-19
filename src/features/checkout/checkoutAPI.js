// POSTing to 'https://fakestoreapi.com/carts since POST requests to \ 
// https://fakestoreapi.com/users/7 not working.
export const pushOrder = (props, customerInfo, orderInfo) => {
  return new Promise((resolve) =>
    fetch('https://fakestoreapi.com/carts',{
      method:"POST",
      body:JSON.stringify(customerInfo)
    })
      .then(res=>{
        if (res.status == 200) {
          // manually sends customer details to "/success" as props so \
          // that it can safely erase the checkout slice data.
          props.history.push({
            pathname: "/success", state: {
              person: customerInfo,
              order: orderInfo
            }
          });
        } else {
          props.history.push({pathname: "/failure"});
        }
      })
  );
}
