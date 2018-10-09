"use strict";

Page({
    data: {
        daysStyle: []
    },
    dayClick: function dayClick(e) {
        console.log(e.detail["day"]);
        var styles = [];
        styles.push({
            month: 'current',
            day: e.detail["day"],
            color: "#000000",
            background: "#ff0000"
        });
        this.setData({
            daysStyle: styles
        });
    }
});
//# sourceMappingURL=calendar.js.map
