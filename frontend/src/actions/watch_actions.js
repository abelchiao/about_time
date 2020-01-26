import * as WatchApiUtil from '../util/watch_api_util';

export const RECEIVE_WATCH = 'RECEIVE_WATCH';
export const RECEIVE_WATCHES = 'RECEIVE_WATCHES';

const receiveWatch = watch => ({
  type: RECEIVE_WATCH,
  watch
});

const receiveWatches = (watches, query) => ({
  type: RECEIVE_WATCHES,
  watches,
  query
})

export const createWatch = watch => dispatch => {
  return WatchApiUtil.createWatch(watch)
    .then(watch => dispatch(receiveWatch(watch)))
    .catch(err => console.log(err));
};

export const fetchWatch = watchId => dispatch => {
  return WatchApiUtil.getWatch(watchId)
    .then(watch => dispatch(receiveWatch(watch)))
    .catch(err => console.log(err));
};

export const fetchWatches = query => dispatch => {
  return WatchApiUtil.getWatches(query)
    .then(watches => dispatch(receiveWatches(watches, query)))
    .catch(err => console.log(err));
};
