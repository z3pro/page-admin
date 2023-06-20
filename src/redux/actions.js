import * as actionType from "./constants/actionTypes";
//user
export const ACT_USER_GET = () => {
  return {
    type: actionType.TYPE_USER_GET,
  };
};

export const ACT_USER_POST = (user) => {
  return {
    type: actionType.TYPE_USER_POST,
    payload: user,
  };
};
export const ACT_USER_PUT = (user) => {
  return {
    type: actionType.TYPE_USER_PUT,
    payload: user,
  };
};
export const ACT_USER_PATCH = (user) => {
  return {
    type: actionType.TYPE_USER_PATCH,
    payload: user,
  };
};

export const ACT_USER_DELETE = (id) => {
  return {
    type: actionType.TYPE_USER_GET,
    payload: id,
  };
};
export const ACT_SET_USER = (data) => {
  return {
      type: actionType.TYPE_SET_USER_STATE,
      payload: data,
  };
};
export const ACT_USER_SEARCH = (string)=>{
  return {
    type: actionType.TYPE_USER_SEARCH,
    payload: string,
  }
}

//product
export const ACT_PRODUCT_GET = () => {
  return {
    type: actionType.TYPE_PRODUCT_GET,
  };
};

export const ACT_PRODUCT_POST = (product) => {
  return {
    type: actionType.TYPE_PRODUCT_POST,
    payload: product,
  };
};
export const ACT_PRODUCT_PUT = (product) => {
  return {
    type: actionType.TYPE_PRODUCT_PUT,
    payload: product,
  };
};
export const ACT_PRODUCT_PATCH = (product) => {
  return {
    type: actionType.TYPE_PRODUCT_PATCH,
    payload: product,
  };
};

export const ACT_PRODUCT_DELETE = (id) => {
  return {
    type: actionType.TYPE_PRODUCT_DELETE,
    payload: id,
  };
};
export const ACT_SET_PRODUCT = (data) => {
  return {
      type: actionType.TYPE_SET_PRODUCT_STATE,
      payload: data,
  };
};
export const ACT_PRODUCT_SEARCH = (string)=>{
  return {
    type: actionType.TYPE_PRODUCT_SEARCH,
    payload: string,
  }
}
export const ACT_PRODUCT_SEARCH_ASC = (string)=>{
  return {
    type: actionType.TYPE_PRODUCT_SEARCH_ASC,
    payload: string,
  }
}
export const ACT_PRODUCT_SEARCH_DESC = (string)=>{
  return {
    type: actionType.TYPE_PRODUCT_SEARCH_DESC,
    payload: string,
  }
}
export const ACT_PRODUCT_SEARCH_CATEGORY = (string)=>{
  return {
    type: actionType.TYPE_PRODUCT_SEARCH_CATEGORY,
    payload: string,
  }
}
//category
export const ACT_CATEGORY_GET = () => {
  return {
    type: actionType.TYPE_CATEGORY_GET,
  };
};

export const ACT_CATEGORY_POST = (product) => {
  return {
    type: actionType.TYPE_CATEGORY_POST,
    payload: product,
  };
};
export const ACT_CATEGORY_PUT = (product) => {
  return {
    type: actionType.TYPE_CATEGORY_PUT,
    payload: product,
  };
};
export const ACT_CATEGORY_PATCH = (product) => {
  return {
    type: actionType.TYPE_CATEGORY_PATCH,
    payload: product,
  };
};

export const ACT_CATEGORY_DELETE = (id) => {
  return {
    type: actionType.TYPE_CATEGORY_DELETE,
    payload: id,
  };
};
export const ACT_SET_CATEGORY = (data) => {
  return {
      type: actionType.TYPE_SET_CATEGORY_STATE,
      payload: data,
  };
};
export const ACT_CATEGORY_SEARCH = (string)=>{
  return {
    type: actionType.TYPE_CATEGORY_SEARCH,
    payload: string,
  }
}
export const ACT_CATEGORY_SEARCH_ASC = (string)=>{
  return {
    type: actionType.TYPE_CATEGORY_SEARCH_ASC,
    payload: string,
  }
}
export const ACT_CATEGORY_SEARCH_DESC = (string)=>{
  return {
    type: actionType.TYPE_CATEGORY_SEARCH_DESC,
    payload: string,
  }
}

