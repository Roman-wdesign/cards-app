import axios from '@/Cards/shared/api/axios';

const getCards  = (apiUrl:string):void => {
    return axios.get(apiUrl)
}
export default {getCards}