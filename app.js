const message = document.querySelector('#message');
const button = document.querySelector('#map-button')
const day = (new Date()).getDay();

const content = [
  {
    message: 'The cheapest oyster right now is $1 at GDR, from 5pm to 7pm.',
    link: 'https://www.google.com/maps/dir/?api=1&destination="Gunther\'s Dining Room"'
  },
  {
    message: 'The cheapest oyster right now is $1 at Riley St Garage in Woolloomooloo, between 5pm to 6pm.',
    link: 'https://www.google.com/maps/dir/?api=1&destination="Riley St Garage"'
  }
];

message.innerHTML = content[day].message;
button.href = content[day].link;