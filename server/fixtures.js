if (Patients.find().count() === 0) {
	Patients.insert({
		first: "Robert",
		last: "Harper",
		dob: "6/30/1954",
		condition: "stable",
		loc: "1",
		diagnosis: "HIV Dementia",
		createdAt: new Date
	});
	Patients.insert({
		first: "Michael",
		last: "Edgar",
		dob: "5/20/1976",
		condition: "tenuous",
		loc: "2C",
		diagnosis: "Acute Renal Failure"
		createdAt: new Date
	});
	Patients.insert({
		first: "Ella",
		last: "Goldson",
		dob: "11/07/1921",
		condition: "stable",
		loc: "2C",
		diagnosis: "Failure to thrive"
		createdAt: new Date
	});
}
