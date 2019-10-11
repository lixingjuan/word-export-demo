
import request from "../../libs/request";
import moment from "moment";
const data = {
    data: [
        {
            id: 1,
            name: "公司报告",
            time: '2019-06-09',type:1
        },
        {
            id: 2,
            name: "中心报告",type:2,
            time: 3,
        },
        {
            id: 3,
            name: "管理所报告",
            time: 3,type:3
        }
    ],
    pagination: {
        current: 1,
        pageSize: 10,
        total: 12
    }
};
export const service = {
    list: ({ query, pagination }) => {
        console.log("list", { query, pagination});
        return request("/admin/report/getReportList", {...query,
            queryTime:query.queryTime?moment(query.queryTime).format('YYYY-MM'):'',
            pageIndex:(pagination&&pagination.current)||1,pageCount:(pagination&&pagination.pageSize)||10
        });
        // return Promise.resolve(data);
    },
    doHandleItemById:async (params)=>{
        console.log( params);
        let url='';
        if(params.deptLevel==='0'){//0：站所 1：分中心 2：公司
            url='/admin/station/reCreateStationReport';
        }
        if(params.deptLevel==='1'){
            url='/admin/rodeReport/regenerateReport';
        }
        if(params.deptLevel==='2'){
            url='/admin/companyReport/reCreatCompanyReport';
        }
        const res=await request(url, {id:params.id});
        if(res.status!==0){
            throw res.message
        }
    },

    submit: async params => {
        console.log(params);
    }
};