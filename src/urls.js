import {API_KEY} from './constants/constants'
export const originals = `discover/tv?api_key=${API_KEY}&with_networks=213`
export const latest = `/trending/all/week?api_key={API_KEY_HERE}&language=en-US`
export const action = `/discover/movie?api_key=${API_KEY}&with_genres=28`
export const romance = `/discover/movie?api_key=${API_KEY}&with_genres=10749`
export const comedy = `/discover/movie?api_key=${API_KEY}&with_genres=35`
export const documentary = `/discover/movie?api_key=${API_KEY}&with_genres=99`