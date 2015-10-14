var saves =  [
	{
		amount: 1000,
		date : moment('2015-06-05')
	},{
		amount: 500,
		date : moment('2015-07-05')
	},{
		amount: 500,
		date : moment('2015-08-05')
	},{
		amount: 700,
		date : moment('2015-09-05')
	},{
		amount: 1200,
		date : moment('2015-10-05')
	}
];

var total = saves.reduce(function(prev, curr){
	return prev + curr.amount;
}, 0);

var goal = {
	name: 'Duster',
	amount: '10000',
	until: new Date(2016, 5, 1)
};

/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({
	saves: saves,
	left: goal.amount - total,
	goal: goal
});

Template.Save.helpers({
	date: function(){
		return moment(this.date).format('MMMM');
	}
})

Template.Total.helpers({
	total: total
});

Template.Plan.helpers({
	monthly: Math.ceil((goal.amount - total)/ moment(goal.until).diff(moment(), 'month'))
});

Template.Progress.helpers({
	percent:  Math.floor(total / parseInt(goal.amount) * 100)
});

Template.Goal.helpers({
	goal: goal,
	until: moment(goal.until).diff(moment(), 'month')
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.onCreated(function () {
});

Template.Home.onRendered(function () {
});

Template.Home.onDestroyed(function () {
});
