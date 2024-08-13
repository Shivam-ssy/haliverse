import moment from 'moment';
import mongoose from 'mongoose';

const periodSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: true,
    },
    day: {
        type: Array,
        required: true,
    },
    startTime: {
        type: String,
        required: true,
    },
    endTime: {
        type: String,
        required: true,
    },
    classroom: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Classroom',
        required: true,
    },
});

const timetableSchema = new mongoose.Schema({
    periods: [periodSchema],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

timetableSchema.pre("save", async function (next) {
    const timetable = this;
    
    for (let period of timetable.periods) {
        const classroom = await Classroom.findById(period.classroom);

        const classroomSchedule = classroom.schedule.find(sch => sch.day === period.day);
        if (!classroomSchedule) {
            return next(new Error(`No schedule found for ${period.day} in the selected classroom.`));
        }

        const periodStart = moment(period.startTime, 'HH:mm');
        const periodEnd = moment(period.endTime, 'HH:mm');
        const classStart = moment(classroomSchedule.startTime, 'HH:mm');
        const classEnd = moment(classroomSchedule.endTime, 'HH:mm');

        // Check if period is within the classroom's start and end times
        if (periodStart.isBefore(classStart) || periodEnd.isAfter(classEnd)) {
            return next(new Error(`Period for ${period.subject} is outside of the classroom's operational hours.`));
        }

        // Check for overlapping periods
        for (let otherPeriod of timetable.periods) {
            if (otherPeriod === period) continue;

            if (period.day === otherPeriod.day) {
                const otherPeriodStart = moment(otherPeriod.startTime, 'HH:mm');
                const otherPeriodEnd = moment(otherPeriod.endTime, 'HH:mm');

                if (periodStart.isBefore(otherPeriodEnd) && periodEnd.isAfter(otherPeriodStart)) {
                    return next(new Error(`Period for ${period.subject} overlaps with another period.`));
                }
            }
        }
    }

    next();
});

const Timetable = mongoose.model("Timetable", timetableSchema);

export { Timetable };
