import activities from '../data/activities';

export default class AgendaTools {
    constructor() {
        this.items = {};
        this.currentDay = '';
    }

    loadDays() {
      var currentDate;
      activities.forEach(activity => {
        var activityDate = new Date(activity.Date);
        
        if (!currentDate)
          currentDate = activityDate;

        var strTime = this.timeToString(currentDate);

        if (+activityDate !== +currentDate) {
          var daysInRange = Math.floor((activityDate.getTime() - currentDate.getTime()) / 1000 / 60 / 60 / 24);
          for (let i = 0; i < daysInRange; i++) {
            currentDate.setDate(currentDate.getDate() + 1);
            strTime = this.timeToString(currentDate);
            this.items[strTime] = [];
          }
        }

        this.items[strTime] = this.items[strTime] == null ? [] : this.items[strTime];
        this.items[strTime].push(activity);
      });
    }

    timeToString(localDate) {
        var offset = localDate.getTimezoneOffset() * 60 * 1000;
        var utcDate = new Date(localDate.getTime() - offset);
        return utcDate.toISOString().split('T')[0];
    }
}