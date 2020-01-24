export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openModal = (modal, watchId = null) => {
  return {
    type: OPEN_MODAL,
    modal: modal,
    watchId: watchId
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};
