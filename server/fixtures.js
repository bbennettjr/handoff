import { Patients } from '../imports/api/patients/patients.js';

const hpi = `This method sets the prototype of obj to proto. The non-standard way of doing so in ECMAScript 5, that is supported by many engines, is via assigning to the special property __proto__. The recommended way of setting the prototype remains the same as in ECMAScript 5: during the creation of an object, via Object.create(). That will always be faster than first creating an object and then setting its prototype. Obviously, it doesn’t work if you want to change the prototype of an existing object.`;
const pmh = 'htn, hld, DM, CAD, TIA, Grade 2 CHF, Hypothyroidism';
const plan = `Own Property Keys:

Retrieves the keys of all own properties of an object, in the following order:
First, the string keys that are integer indices (what these are is explained in the next section), in ascending numeric order.
Then all other string keys, in the order in which they were added to the object.
Lastly, all symbol keys, in the order in which they were added to the object.
Used by: Object.assign(), Object.defineProperties(), Object.getOwnPropertyNames(), Object.getOwnPropertySymbols(), Reflect.ownKeys()
Enumerable Own Names:

Retrieves the string keys of all enumerable own properties of an object. The order is not defined by ES6, but it must be the same order in which for-in traverses properties.
Used by: JSON.parse(), JSON.stringify(), Object.keys()`;
const todo = new Set(new Array(10));
const crossCover = new Set(new Array('HGB, K, Fluids'));

if (Patients.find().count() === 0) {
	Patients.insert({
		first: 'Arnold',
		last: 'Harp',
		dob: '6/30/1954',
		condition: 'stable',
		loc: '1',
		diagnosis: 'HIV Dementia',
		vitals: '99, 124/78, 87, 14, 98%RA',
		hpi: hpi,
		pmh: pmh,
		plan: plan,
		todo: todo,
		crossCover: crossCover,
		createdAt: new Date()
	});
	Patients.insert({
		first: 'Anna',
		last: 'Eggar',
		dob: '5/20/1976',
		condition: 'tenuous',
		loc: '2C',
		diagnosis: 'Acute Renal Failure',
		vitals: '101.9, 100/60, 114, 20, 92%2L',
		hpi: hpi,
		pmh: pmh,
		plan: plan,
		todo: todo,
		crossCover: crossCover,
		createdAt: new Date()
	});
	Patients.insert({
		first: 'Ella',
		last: 'Goldson',
		dob: '11/07/1921',
		condition: 'stable',
		loc: '3',
		diagnosis: 'Failure to thrive',
		vitals: '98.6, 156/89, 98, 25, 86%RA',
		hpi: hpi,
		pmh: pmh,
		plan: plan,
		todo: todo,
		crossCover: crossCover,
		createdAt: new Date()
	});
}
