const tencent_map_key = "ZTGBZ-QMSWJ-XAEFR-F6QM2-LL5Y6-MCF2L"
export const geocoder = (lat,lon,success=()=>{},fail=()=>{})=>{
    return wx.request({
        url:"https://apis.map.qq.com/ws/geocoder/v1/",
        data:{
            location:`${lat},${lon}`,
            key:tencent_map_key,
            get_poi:0
        },
        success,
        fail
    })
}