const message = document.querySelector('#message');
const button = document.querySelector('#map-button')
const day = (new Date()).getDay();

const content = [
  {
    message: 'The cheapest oyster in Sydney today is $1 at GDR, from 5pm to 7pm.',
    link: 'https://www.google.com/maps/dir/?api=1&destination="Gunther\'s%20Dining%20Room"'
  },
  {
    message: 'The cheapest oyster in Sydney today is $1 at Riley St Garage in Woolloomooloo, between 5pm to 6pm.',
    link: 'https://www.google.com/maps/dir/?api=1&destination="Riley%20St%20Garage"'
  },
  {
    message: 'The cheapest oyster in Sydney today is $1.50 at Grain, in The Four Seasons, 5pm to 9pm.',
    link: 'https://www.google.com/maps/dir/?api=1&destination=Grain,+199+George+St,+Sydney+NSW+2000'
  },
  {
    message: 'The cheapest oyster in Sydney today is $1 at The Morrison Bar in the CBD. Also $5 drinks. 6pm to 7pm.',
    link: 'https://www.google.com/maps/dir/?api=1&destination="The%20Morrison%20Bar%20Sydney"'
  },
  {
    message: 'The cheapest oyster in Sydney today is at The Roosevelt in Potts Point, it\'s $1 all night.',
    link: 'https://www.google.com/maps/dir/?api=1&destination=%22The%20Roosevelt%20Potts%20Point%22'
  },
  {
    message: 'The cheapest oyster in Sydney today is at Eau De Vie in Darlinghurst, $1 for a slimey boy between 6pm and 7.30pm',
    link: 'https://www.google.com/maps/dir/?api=1&destination="Eau%20De%20Vie%20Darlinghurst"'
  },
  {
    message: 'The cheapest oyster in Sydney today is $1.50 at Black Bottle in Darlinghurst, from 5pm to 7pm (plus $15 carafes of fiano).',
    link: 'https://www.google.com/maps/dir/?api=1&destination="Black%20Bottle%20Darlinghurst"'
  }
];

message.innerHTML = content[day].message;
button.href = content[day].link;