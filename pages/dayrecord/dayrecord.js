Page({
    data:{
        daysStyle:[]
    },
    dayClick:function(e){
        console.log(e.detail["day"])
        const styles = []
        styles.push({
            month:'current',
            day:e.detail["day"],
            color:"#000000",
            background:"#ff0000"
        })
        this.setData({
            daysStyle:styles
        })
    }
})