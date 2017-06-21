import endpoints from '../config/endpoints'

export const FETCH_CHANNEL = 'FETCH_CHANNEL'
export const CREATE_CHANNEL = 'CREATE_CHANNEL'
export const SET_CHANNEL = 'SET_CHANNEL'
export const CLEAR_CHANNEL = 'CLEAR_CHANNEL'

export function fetchChannel(url) {
  return {
    type: FETCH_CHANNEL,
    payload: {
      request: {
        url: url
      }
    }
  }
}

export function createChannel(data) {
  return {
    type: CREATE_CHANNEL,
    payload: {
      request: {
        url: endpoints.channels,
        method: 'post',
        data: data
      }
    }
  }
}

export function setChannel(channel) {
  return {
    type: SET_CHANNEL,
    channel
  }
}

export function clearChannel() {
  return {
    type: CLEAR_CHANNEL
  }
}
