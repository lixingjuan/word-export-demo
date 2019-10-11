
import handleError from './handleError';
const defaultParams = {
    headers: {
        'Accept': 'application/json',
        'content-type': 'application/json; charset=utf-8'
    },
    method: 'POST',
    credentials : 'same-origin'
};
export default function request(url, body, params = { method: 'POST' }) {
    let opts = { ...defaultParams, ...params };
    if (body){
        opts.body = JSON.stringify(body);
    }
    if (params.method=='GET'){
        return fetch(url) // return fetch(process.env.API_SERVER + url)
            .then(res => res.json())
            .then(res => {
                if (res.status !== 0&&res.status !== '1') {
                    throw res
                }
                else {
                    return res
                }
            })
            .then(res => {
                const pagination = res.pagination || res.paginationInfo || res.pagination
                if (pagination){
                    res.pagination = {
                        pageSize: pagination.listRows,
                        total: pagination.totalRows,
                        current: pagination.currentPage
                    }
                }
                return res;
            })
            .catch(handleError)

    } else {
        return fetch(url, opts)  // return fetch(process.env.API_SERVER + url, opts)
            .then(res => res.json())
            .then(res => {
                if (res.status !== 0) {
                    throw res
                }
                else {
                    return res
                }
            })
            .then(res => {
                const pagination = res.pagination || res.paginationInfo || res.pagination
                if (pagination){
                    res.pagination = {
                        pageSize: pagination.listRows,
                        total: pagination.totalRows,
                        current: pagination.currentPage
                    }
                }
                return res;
            })
            .catch(handleError)
    }
}