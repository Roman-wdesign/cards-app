import axios from '@/Cards/shared/api/axios';

const getCards  = (apiUrl:string) => {
    return axios.get(apiUrl)
}
export default {getCards}