var cities = {
    Mamaia: [44.2474119964217,28.628321899999946],
    Constanta: [44.18135768956809,28.62933905],
    EforieNord: [44.05979397997056, 28.632472649999954],
    Costinesti: [43.959190426232254, 28.637774349999972],
    Mangalia: [43.813007022020486, 28.566754400000036],
    VamaVeche: [43.75163695001963, 28.569205850000003]
};


for (var prop in cities) {
	if (cities.hasOwnProperty(prop)) {
		console.log(prop, cities[prop][0], cities[prop][1]);
	}
}