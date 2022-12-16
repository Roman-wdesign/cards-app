import axios from '@/Cards/shared/api/axios';

const getCards  = (apiUrl:string):any => {
    return axios.get(apiUrl)
}
export default {getCards}