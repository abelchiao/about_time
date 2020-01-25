import axios from "axios";

export const createReview = (data) => {
  return axios.post(`/api/reviews`, data);
};

export const editReview = (data) => {
  return axios.post(`/api/reviews/edit`, data);
};

export const deleteReview = (data) => {
  return axios.delete(`/api/reviews`, data);
};


