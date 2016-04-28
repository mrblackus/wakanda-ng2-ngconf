//Add attendee entries

var persons = ['Mathieu', 'Ricardo', 'Foo'];
var conferences = ['ngConf', 'dotJS', 'ngEurope'];

persons.forEach(function (p) {
	var person = new ds.Person({name: p});
	person.save();
});

conferences.forEach(function (c) {
	var conference = new ds.Conference({name: c});
	conference.save();
});

var entries = [{
    personName: 'Mathieu',
    conference: 'ngConf'
  },
  {
    personName: 'Ricardo',
    conference: 'ngConf'
  },
  {
    personName: 'Mathieu',
    conference: 'dotJS'
  },
  {
    personName: 'Foo',
    conference: 'dotJS'
  }
];

entries.forEach(function (entry) {
  var person = ds.Person.find('name = ' + entry.personName);
  var conference = ds.Conference.find('name = ' + entry.conference);
  
  var entity = new ds.Attended({person: person, conference: conference});
  entity.save();
});

var attendees = ds.Attended.all();
attendees;
