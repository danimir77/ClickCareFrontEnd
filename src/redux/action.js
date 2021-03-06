import axios from "axios";

import {
  LOGIN,
  LOGIN_FAIL,
  LOG_OUT,
  // LOCAL_HOST,
  GET_COUNTRY,
  GET_STATE_BY_COUNTRY,
  GET_CITIES_BY_STATE,
  CLEAR_STATE,
  SIGN_UP,
  USER_VALID,
  GET_ALL_POST,
  FILTER_DATE_POST,
  GET_SPECIALTIES,
  POST_REGISTER,
  SIGN_UP_PROF,
  VALIDATE_PREMIUM,
  GET_CONVERSATIONS,
  GET_USER_ID,
  GET_MESSAGES,
  GET_CONTRACTS,
  GET_USER_POST_DETAIL,
  GET_USER_DETAIL,
  LOG_IN_GOOGLE,
  POST_AUCTION,
  POST_AUCTION_FAILED,
  FECHA,
  FILTER_BY_SPEC,
  LOCATION,
  FORGET_PASSWORD,
  MERCADOPAGO_PAYMENT,
  USER_EDITION,
  PROF_EDITION,
  GET_POST_DETAIL_AUCTION,
  GET_AUCTION_PROFESIONAL,
  SEARCH_POST,
  GET_TABLE_USERS,
  GET_TABLE_PROFS,
  GET_TABLE_POSTEOS,
  GET_TABLE_AUCTIONS,
  GET_TABLE_CONTRACTS,
  CANCEL_USER,
  ACTIVATE_USER,
  MAKE_USER_ADMIN,
  MAKE_USER_usuario,
  DESACTIVATE_PROFESSIONAL,
  ACTIVATE_PROFESSIONAL,
  ACTIVATE_MEMBERSHIP,
  CANCEL_MEMBERSHIP,
  EMAIL_VALIDATION,
  EMAIL_CANCELATION,
  GET_KPI,
  CANCEL_POST,
  ACTIVATE_POST,
  IS_PROF,
  ELIMINAR_POST,
  ACCEPT_AUCTION
} from "./ActionTypes";

const axiosConfig = {
  withCredentials: true,
};

export function userAcceptAuctionfromProf(values) {
  return async function (dispatch) {
    try {
      console.log("Addpostulates AXIOS OBJ:", values);
      const resp = await axios.post(`/addContracts`, values, axiosConfig);

      const json = await resp.data;
      console.log(json);
      return dispatch({
        type: ACCEPT_AUCTION,
        payload: json,
      });
    } catch (error) {
      console.log(error);
      return dispatch({
        type: ACCEPT_AUCTION,
        payload: error.response.data,
      });
    }
  };
}


//Login & Logout Actions
export function login(values) {
  return async function (dispatch) {
    try {
      const resp = await axios.post(`/userdblogin`, values, axiosConfig);

      const json = await resp.data;
      console.log(json);
      return dispatch({
        type: LOGIN,
        payload: json,
      });
    } catch (error) {
      console.log(error);
      return dispatch({
        type: LOGIN_FAIL,
        payload: error.response.data,
      });
    }
  };
}

export function loginGoogle(values) {
  return async function (dispatch) {
    try {
      const resp = await axios.post(`/userdbloginGoogle`, values, axiosConfig);

      const json = await resp.data;
      console.log(json);
      return dispatch({
        type: LOG_IN_GOOGLE,
        payload: json,
      });
    } catch (error) {
      console.log(error);
      return dispatch({
        type: LOGIN_FAIL,
        payload: error.response.data,
      });
    }
  };
}
export function logOut() {
  return async function (dispatch) {
    try {
      const resp = await axios.get(`/userdblogout`, axiosConfig);
      const json = await resp.data;
      console.log(json);
      return dispatch({
        type: LOG_OUT,
        payload: json,
      });
    } catch (error) {
      console.log(error);
      return dispatch({
        type: LOG_OUT,
        payload: error,
      });
    }
  };
}

//Register Professional and User
export function signUp(values) {
  return async function (dispatch) {
    try {
      const resp = await axios.post(`/userdbRegistration`, values);
      const json = await resp.data;
      console.log(json);
      return dispatch({
        type: SIGN_UP,
        payload: json,
      });
    } catch (error) {
      console.log(error);
      return dispatch({
        type: SIGN_UP,
        payload: error.response.data,
      });
    }
  };
}

export function userValidationProcess(id) {
  return async function (dispatch) {
    try {
      const resp = await axios.get(`/userValidationProcess/${id}`);
      const json = await resp.data;
      return dispatch({
        type: USER_VALID,
        payload: json,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function profRegister(values) {
  return async function (dispatch) {
    try {
      const resp = await axios.post(`/profdbregistration`, values);
      const json = await resp.data;
      console.log(json);
      return dispatch({
        type: SIGN_UP_PROF,
        payload: json,
      });
    } catch (error) {
      console.log(error);
      return dispatch({
        type: SIGN_UP_PROF,
        payload: error.response.data,
      });
    }
  };
}

export function getCountry() {
  return async function (dispatch) {
    try {
      const resp = await axios.get(`/GetCountries`);
      const json = await resp.data;
      return dispatch({
        type: GET_COUNTRY,
        payload: json,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function GetStatebyCountry(country) {
  return async function (dispatch) {
    try {
      const resp = await axios.get(`/GetStatesByCountry/${country}`);
      const json = await resp.data;
      return dispatch({
        type: GET_STATE_BY_COUNTRY,
        payload: json,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function GetCitiesByState(state) {
  return async function (dispatch) {
    try {
      const resp = await axios.get(`/GetCitiesByState/${state}`);
      const json = await resp.data;
      return dispatch({
        type: GET_CITIES_BY_STATE,
        payload: json,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

//Posts

export function getAllPost() {
  return async function (dispatch) {
    try {
      let response = await axios.get(`/infoCardPost`);
      // console.log(response.data)
      return dispatch({
        type: GET_ALL_POST,
        payload: response.data,
      });
    } catch (error) {
      return error;
    }
  };
}

export function searchPost(value) {
  return async function (dispatch) {
    console.log(value);
    try {
      let response = await axios.get(`/searchPost/${value}`);
      console.log(response.data);
      return dispatch({
        type: SEARCH_POST,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
      return dispatch({
        type: SEARCH_POST,
        payload: error.response.data,
      });
    }
  };
}

export function filterDatePost(datePost) {
  //console.log("ACTIONFILTER:", continente)
  return {
    type: FILTER_DATE_POST,
    payload: datePost,
  };
}

export function getSpecialties(state) {
  return async function (dispatch) {
    try {
      const resp = await axios.get(`/getspecialty`);
      const json = await resp.data;
      return dispatch({
        type: GET_SPECIALTIES,
        payload: json,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function postUser(values) {
  return async function (dispatch) {
    try {
      const resp = await axios.post(`/postgenerator`, values);
      const json = await resp.data;

      return dispatch({
        type: POST_REGISTER,
        payload: json,
      });
    } catch (error) {
      console.log(error);
      return dispatch({
        type: POST_REGISTER,
        payload: error.response.data,
      });
    }
  };
}

//Premium or not validation
export function validatePremium(values) {
  return async function (dispatch) {
    try {
      const resp = await axios.put(`/validatePremium`, values);
      const json = await resp.data;
      console.log(json);
      return dispatch({
        type: VALIDATE_PREMIUM,
        payload: json,
      });
    } catch (error) {
      console.log(error);
      return dispatch({
        type: VALIDATE_PREMIUM,
        payload: error.response.data,
      });
    }
  };
}

// These actions are for the chat
export function getConversations(values) {
  return async function (dispatch) {
    const resp = await axios.get(`/conversation/${values}`);
    const json = await resp.data;
    return dispatch({
      type: GET_CONVERSATIONS,
      payload: json,
    });
  };
}

export function getUserId(values) {
  return async function (dispatch) {
    try {
      const resp = await axios.get(`/users/${values}`);
      const json = await resp.data;
      return dispatch({
        type: GET_USER_ID,
        payload: json,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getMessages(values) {
  return async function (dispatch) {
    try {
      const resp = await axios.get(`/allmessage/${values}`);
      const json = await resp.data;
      return dispatch({
        type: GET_MESSAGES,
        payload: json,
      });
    } catch (err) {
      console.log("no hay current chat");
    }
  };
}

export function postMessage(values) {
  return async function (dispatch) {
    try {
      const json = await axios.post(`/message`, values);
      console.log("json del action", json);
      return json;
    } catch (error) {
      console.log(error);
    }
  };
}

export function getContracts(values) {
  return async function (dispatch) {
    try {
      const resp = await axios.get(`/getContracts`);
      const json = await resp.data;
      return dispatch({
        type: GET_CONTRACTS,
        payload: json,
      });
    } catch (error) {
      console.log("no hay current chat", error);
    }
  };
}

//User Profile Actions
export function getUserDetail(id) {
  return async function (dispatch) {
    const response = await axios.get(`/userProfessionalByID/${id}`);
    //console.log("DATA ID:", response)
    return dispatch({
      type: GET_USER_DETAIL,
      payload: response.data,
    });
  };
}

export function getUserPostDetail(id) {
  return async function (dispatch) {
    const response = await axios.get(`/posteosUsersByUserID/ ${id}`);
    //console.log("DATA ID:", response)
    return dispatch({
      type: GET_USER_POST_DETAIL,
      payload: response.data,
    });
  };
}

export function gePostDetailAuctions(id) {
  return async function (dispatch) {
    const response = await axios.get(`traerPostByAuction/` + id);
    //console.log("DATA ID:", response)
    return dispatch({
      type: GET_POST_DETAIL_AUCTION,
      payload: response.data,
    });
  };
}

//Clear an State
export function clear() {
  return function (dispatch) {
    return dispatch({ type: CLEAR_STATE });
  };
}

//Auctions
export function postAuction(values) {
  return async function (dispatch) {
    try {
      console.log("Addpostulates AXIOS OBJ:", values);
      const resp = await axios.post(`/Addpostulates`, values, axiosConfig);

      const json = await resp.data;
      console.log(json);
      return dispatch({
        type: POST_AUCTION,
        payload: json,
      });
    } catch (error) {
      console.log(error);
      return dispatch({
        type: POST_AUCTION_FAILED,
        payload: error.response.data,
      });
    }
  };
}
export function getAuctionsByProfesional(id) {
  return async function (dispatch) {
    const response = await axios.get(`auctionsByProfessiona/` + id);
    //console.log("DATA ID:", response)
    return dispatch({
      type: GET_AUCTION_PROFESIONAL,
      payload: response.data,
    });
  };
}
//Filters
export const dateFilter = (value) => {
  console.log(value);
  return {
    type: FECHA,
    payload: value,
  };
};
export function onlySpectialties(payload) {
  console.log(payload);
  return {
    type: FILTER_BY_SPEC,
    payload,
  };
}

export const locationFilter = (value) => {
  console.log(value);
  return {
    type: LOCATION,
    payload: value,
  };
};

// Forget password
export function forgetPassword(values) {
  return async function (dispatch) {
    try {
      const resp = await axios.put(`/forgetpassword`, values, axiosConfig);
      const json = await resp.data;
      console.log(json);
      return dispatch({
        type: FORGET_PASSWORD,
        payload: json,
      });
    } catch (error) {
      console.log(error);
      return dispatch({
        type: FORGET_PASSWORD,
        payload: error.response.data,
      });
    }
  };
}

//Mercado Pago
export function mercadoPagoPayment(values) {
  return async function (dispatch) {
    try {
      console.log("Addpostulates AXIOS OBJ:", values);
      const resp = await axios.post(`/checkoutPayment`, values, axiosConfig);

      const json = await resp.data;
      console.log(json);
      return dispatch({
        type: MERCADOPAGO_PAYMENT,
        payload: json,
      });
    } catch (error) {
      console.log(error);
      return dispatch({
        type: MERCADOPAGO_PAYMENT,
        payload: error.response.data,
      });
    }
  };
}

//Professional Custom profile and User Too
//Mercado Pago
export function profEdition(values) {
  return async function (dispatch) {
    try {
      const resp = await axios.put(`/editprofessional`, values, axiosConfig);

      const json = await resp.data;
      console.log(json);
      return dispatch({
        type: PROF_EDITION,
        payload: json,
      });
    } catch (error) {
      console.log(error);
      return dispatch({
        type: PROF_EDITION,
        payload: error.response.data,
      });
    }
  };
}
export function userEdition(values) {
  console.log("Mis Valores ", values);
  return async function (dispatch) {
    try {
      const resp = await axios.put(`/edituser`, values, axiosConfig);

      const json = await resp.data;
      console.log(json);
      return dispatch({
        type: USER_EDITION,
        payload: json,
      });
    } catch (error) {
      console.log(error);
      return dispatch({
        type: USER_EDITION,
        payload: error.response.data,
      });
    }
  };
}

export function activatePost(values) {
  return async function (dispatch) {
    try {
      const resp = await axios.put(`/activePost/${values}`);
      const json = await resp.data;
      console.log(json);
      return dispatch({
        type: ACTIVATE_POST,
        payload: json,
      });
    } catch (error) {
      console.log(error);
      return dispatch({
        type: ACTIVATE_POST,
        payload: error.response.data,
      });
    }
  };
}

export function cancelPost(values) {
  return async function (dispatch) {
    try {
      const resp = await axios.put(`/cancelPost/${values}`);
      const json = await resp.data;
      console.log(json);
      return dispatch({
        type: CANCEL_POST,
        payload: json,
      });
    } catch (error) {
      console.log(error);
      return dispatch({
        type: CANCEL_POST,
        payload: error.response.data,
      });
    }
  };
}

export function getKpi() {
  return async function (dispatch) {
    try {
      const resp = await axios.get(`/indicadores`);
      const json = await resp.data;
      return dispatch({
        type: GET_KPI,
        payload: json,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function cancelateEmailUser(values) {
  return async function (dispatch) {
    try {
      const resp = await axios.put(`/NOvalidatedEmailUser/${values}`);
      const json = await resp.data;
      console.log(json);
      return dispatch({
        type: EMAIL_CANCELATION,
        payload: json,
      });
    } catch (error) {
      console.log(error);
      return dispatch({
        type: EMAIL_CANCELATION,
        payload: error.response.data,
      });
    }
  };
}

export function validateEmailUser(values) {
  return async function (dispatch) {
    try {
      const resp = await axios.put(`/validatedEmailUser/${values}`);
      const json = await resp.data;
      console.log(json);
      return dispatch({
        type: EMAIL_VALIDATION,
        payload: json,
      });
    } catch (error) {
      console.log(error);
      return dispatch({
        type: EMAIL_VALIDATION,
        payload: error.response.data,
      });
    }
  };
}
export function cancelMember(values) {
  return async function (dispatch) {
    try {
      const resp = await axios.put(`/balance_0/${values}`);
      const json = await resp.data;
      console.log(json);
      return dispatch({
        type: CANCEL_MEMBERSHIP,
        payload: json,
      });
    } catch (error) {
      console.log(error);
      return dispatch({
        type: CANCEL_MEMBERSHIP,
        payload: error.response.data,
      });
    }
  };
}
export function activateMember(values) {
  return async function (dispatch) {
    try {
      const resp = await axios.put(`/balance_1/${values}`);
      const json = await resp.data;
      console.log(json);
      return dispatch({
        type: ACTIVATE_MEMBERSHIP,
        payload: json,
      });
    } catch (error) {
      console.log(error);
      return dispatch({
        type: ACTIVATE_MEMBERSHIP,
        payload: error.response.data,
      });
    }
  };
}

export function activateProfessional(values) {
  return async function (dispatch) {
    try {
      const resp = await axios.put(`/activeProfessional/${values}`);
      const json = await resp.data;
      console.log(json);
      return dispatch({
        type: ACTIVATE_PROFESSIONAL,
        payload: json,
      });
    } catch (error) {
      console.log(error);
      return dispatch({
        type: ACTIVATE_PROFESSIONAL,
        payload: error.response.data,
      });
    }
  };
}

export function desactivateProf(values) {
  return async function (dispatch) {
    try {
      const resp = await axios.put(`/cancelProfessional/${values}`);
      const json = await resp.data;
      console.log(json);
      return dispatch({
        type: DESACTIVATE_PROFESSIONAL,
        payload: json,
      });
    } catch (error) {
      console.log(error);
      return dispatch({
        type: DESACTIVATE_PROFESSIONAL,
        payload: error.response.data,
      });
    }
  };
}

export function makeUserUsuario(values) {
  return async function (dispatch) {
    try {
      const resp = await axios.put(`/userUsuario/${values}`);
      const json = await resp.data;
      console.log(json);
      return dispatch({
        type: MAKE_USER_usuario,
        payload: json,
      });
    } catch (error) {
      console.log(error);
      return dispatch({
        type: MAKE_USER_usuario,
        payload: error.response.data,
      });
    }
  };
}
export function makeUserAdmin(values) {
  return async function (dispatch) {
    try {
      const resp = await axios.put(`/userAdmin/${values}`);
      const json = await resp.data;
      console.log(json);
      return dispatch({
        type: MAKE_USER_ADMIN,
        payload: json,
      });
    } catch (error) {
      console.log(error);
      return dispatch({
        type: MAKE_USER_ADMIN,
        payload: error.response.data,
      });
    }
  };
}

export function activateUser(values) {
  return async function (dispatch) {
    try {
      const resp = await axios.put(`/activeUser/${values}`);
      const json = await resp.data;
      console.log(json);
      return dispatch({
        type: ACTIVATE_USER,
        payload: json,
      });
    } catch (error) {
      console.log(error);
      return dispatch({
        type: ACTIVATE_USER,
        payload: error.response.data,
      });
    }
  };
}
export function cancelUser(values) {
  return async function (dispatch) {
    try {
      const resp = await axios.put(`/cancelUser/${values}`);
      const json = await resp.data;
      console.log(json);
      return dispatch({
        type: CANCEL_USER,
        payload: json,
      });
    } catch (error) {
      console.log(error);
      return dispatch({
        type: CANCEL_USER,
        payload: error.response.data,
      });
    }
  };
}

export function getTableContracts() {
  return async function (dispatch) {
    try {
      const resp = await axios.get(`/AllContractsActivo`);
      const json = await resp.data;
      return dispatch({
        type: GET_TABLE_CONTRACTS,
        payload: json,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getTableAplicaciones() {
  return async function (dispatch) {
    try {
      const resp = await axios.get(`/AllAuctions`);
      const json = await resp.data;
      return dispatch({
        type: GET_TABLE_AUCTIONS,
        payload: json,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getTablePosteos() {
  return async function (dispatch) {
    try {
      const resp = await axios.get(`/Allposts`);
      const json = await resp.data;
      return dispatch({
        type: GET_TABLE_POSTEOS,
        payload: json,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getTableProfs() {
  return async function (dispatch) {
    try {
      const resp = await axios.get(`/AllprofessionalsActive`); //professionals
      const json = await resp.data;
      return dispatch({
        type: GET_TABLE_PROFS,
        payload: json,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getTableUsers() {
  return async function (dispatch) {
    try {
      const resp = await axios.get(`/users`);
      const json = await resp.data;
      return dispatch({
        type: GET_TABLE_USERS,
        payload: json,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function isProfessional(values) {
  return async function (dispatch) {
    const resp = await axios.get(`/professionals`);
    const json = await resp.data;
    const profFilter = json.filter((e) => e.userId === values);
    const confirmationProf = profFilter.length !== 0 ? true : false;
    return dispatch({
      type: IS_PROF,
      payload: confirmationProf,
    });
  };
}

//Premium or not validation
export function eliminarPOST(values) {
  return async function (dispatch) {
    try {
      const resp = await axios.put("/activeFalsePost", values);
      const json = await resp.data;
      console.log(json);
      return dispatch({
        type: ELIMINAR_POST,
        payload: json,
      });
    } catch (error) {
      console.log(error);
      return dispatch({
        type: ELIMINAR_POST,
        payload: error.response.data,
      });
    }
  };
}

