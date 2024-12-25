'use client'
import { useState, useEffect } from "react";


const countries = [
  { "name": "Netherlands", "height": 177.1 },
  { "name": "Montenegro", "height": 176.6 },
  { "name": "Estonia", "height": 175.7 },
  { "name": "Denmark", "height": 175.7 },
  { "name": "Iceland", "height": 175.5 },
  { "name": "Bosnia and Herzegovina", "height": 175.0 },
  { "name": "Latvia", "height": 175.0 },
  { "name": "Czech Republic", "height": 174.6 },
  { "name": "Serbia", "height": 174.5 },
  { "name": "Lithuania", "height": 174.1 },
  { "name": "Slovenia", "height": 174.1 },
  { "name": "Slovakia", "height": 174.0 },
  { "name": "Croatia", "height": 173.8 },
  { "name": "Ukraine", "height": 173.8 },
  { "name": "Sweden", "height": 173.6 },
  { "name": "Dominica", "height": 173.5 },
  { "name": "Finland", "height": 173.5 },
  { "name": "Norway", "height": 173.4 },
  { "name": "Germany", "height": 173.2 },
  { "name": "Poland", "height": 173.2 },
  { "name": "Bermuda (UK)", "height": 172.9 },
  { "name": "Belarus", "height": 172.8 },
  { "name": "Cook Islands", "height": 172.8 },
  { "name": "Austria", "height": 172.7 },
  { "name": "Kosovo", "height": 172.6 },
  { "name": "Greece", "height": 172.5 },
  { "name": "French Polynesia (France)", "height": 172.4 },
  { "name": "American Samoa (US)", "height": 172.3 },
  { "name": "Grenada", "height": 172.3 },
  { "name": "Antigua and Barbuda", "height": 172.2 },
  { "name": "Andorra", "height": 172.1 },
  { "name": "Niue", "height": 172.1 },
  { "name": "Luxembourg", "height": 171.8 },
  { "name": "Australia", "height": 171.7 },
  { "name": "Ireland", "height": 171.7 },
  { "name": "Canada", "height": 171.7 },
  { "name": "France", "height": 171.5 },
  { "name": "Switzerland", "height": 171.5 },
  { "name": "Saint Vincent and the Grenadines", "height": 171.4 },
  { "name": "Barbados", "height": 171.3 },
  { "name": "Lebanon", "height": 171.3 },
  { "name": "Puerto Rico (US)", "height": 171.3 },
  { "name": "Belgium", "height": 171.2 },
  { "name": "Romania", "height": 171.2 },
  { "name": "New Zealand", "height": 171.2 },
  { "name": "Tokelau (NZ)", "height": 171.1 },
  { "name": "United Kingdom", "height": 171.0 },
  { "name": "Saint Lucia", "height": 170.9 },
  { "name": "Jamaica", "height": 170.6 },
  { "name": "Tonga", "height": 170.6 },
  { "name": "Russia", "height": 170.5 },
  { "name": "United States", "height": 170.1 },
  { "name": "Senegal", "height": 170.0 },
  { "name": "Cape Verde", "height": 169.7 },
  { "name": "Trinidad and Tobago", "height": 169.7 },
  { "name": "China", "height": 169.6 },
  { "name": "Georgia", "height": 169.6 },
  { "name": "Hungary", "height": 169.5 },
  { "name": "Libya", "height": 169.5 },
  { "name": "Bulgaria", "height": 169.4 },
  { "name": "South Korea", "height": 169.3 },
  { "name": "Moldova", "height": 169.3 },
  { "name": "Tunisia", "height": 169.3 },
  { "name": "Seychelles", "height": 169.2 },
  { "name": "Fiji", "height": 169.1 },
  { "name": "Samoa", "height": 169.1 },
  { "name": "Turkey", "height": 169.1 },
  { "name": "Brazil", "height": 169.0 },
  { "name": "Spain", "height": 169.0 },
  { "name": "Bahamas", "height": 168.9 },
  { "name": "Morocco", "height": 168.8 },
  { "name": "Malta", "height": 168.7 },
  { "name": "Algeria", "height": 168.6 },
  { "name": "North Macedonia", "height": 168.6 },
  { "name": "Kazakhstan", "height": 168.6 },
  { "name": "Turkmenistan", "height": 168.6 },
  { "name": "Mali", "height": 168.5 },
  { "name": "Iran", "height": 168.4 },
  { "name": "Suriname", "height": 168.4 },
  { "name": "Saint Kitts and Nevis", "height": 168.2 },
  { "name": "Albania", "height": 168.1 },
  { "name": "Palestine", "height": 168.1 },
  { "name": "Italy", "height": 168.1 },
  { "name": "Argentina", "height": 168.0 },
  { "name": "North Korea", "height": 167.9 },
  { "name": "Uruguay", "height": 167.9 },
  { "name": "Dominican Republic", "height": 167.9 },
  { "name": "Portugal", "height": 167.8 },
  { "name": "Egypt", "height": 167.7 },
  { "name": "Azerbaijan", "height": 167.7 },
  { "name": "Hong Kong (China)", "height": 167.7 },
  { "name": "Botswana", "height": 167.6 },
  { "name": "Greenland (Denmark)", "height": 167.6 },
  { "name": "Kuwait", "height": 167.5 },
  { "name": "Tuvalu", "height": 167.4 },
  { "name": "Singapore", "height": 167.4 },
  { "name": "United Arab Emirates", "height": 167.3 },
  { "name": "Costa Rica", "height": 167.2 },
  { "name": "Jordan", "height": 167.1 },
  { "name": "Taiwan", "height": 167.1 },
  { "name": "Qatar", "height": 167.0 },
  { "name": "Chad", "height": 166.9 },
  { "name": "Cuba", "height": 166.8 },
  { "name": "Armenia", "height": 166.8 },
  { "name": "Paraguay", "height": 166.8 },
  { "name": "Venezuela", "height": 166.7 },
  { "name": "Cyprus", "height": 166.6 },
  { "name": "Burkina Faso", "height": 166.6 },
  { "name": "Haiti", "height": 166.4 },
  { "name": "Cameroon", "height": 166.2 },
  { "name": "Iraq", "height": 166.2 },
  { "name": "Sudan", "height": 166.2 },
  { "name": "Chile", "height": 166.1 },
  { "name": "Kyrgyzstan", "height": 165.9 },
  { "name": "Mauritius", "height": 165.9 },
  { "name": "Guyana", "height": 165.9 },
  { "name": "Uzbekistan", "height": 165.6 },
  { "name": "Bahrain", "height": 165.5 },
  { "name": "Kiribati", "height": 165.5 },
  { "name": "Somalia", "height": 165.5 },
  { "name": "Syria", "height": 165.5 },
  { "name": "Thailand", "height": 165.5 },
  { "name": "Djibouti", "height": 165.3 },
  { "name": "Japan", "height": 165.3 },
  { "name": "Mongolia", "height": 165.3 },
  { "name": "Gabon", "height": 165.2 },
  { "name": "Zimbabwe", "height": 165.2 },
  { "name": "São Tomé and Príncipe", "height": 165.1 },
  { "name": "Gambia", "height": 165.0 },
  { "name": "Niger", "height": 165.0 },
  { "name": "Oman", "height": 165.0 },
  { "name": "Palau", "height": 165.0 },
  { "name": "Namibia", "height": 165.0 },
  { "name": "Republic of the Congo", "height": 165.0 },
  { "name": "Colombia", "height": 164.9 },
  { "name": "Kenya", "height": 164.9 },
  { "name": "Nigeria", "height": 164.8 },
  { "name": "Guinea", "height": 164.7 },
  { "name": "Saudi Arabia", "height": 164.7 },
  { "name": "Federated States of Micronesia", "height": 164.6 },
  { "name": "Ghana", "height": 164.6 },
  { "name": "Togo", "height": 164.6 },
  { "name": "Vanuatu", "height": 164.4 },
  { "name": "Central African Republic", "height": 164.3 },
  { "name": "Belize", "height": 164.3 },
  { "name": "Panama", "height": 164.2 },
  { "name": "Eswatini", "height": 164.1 },
  { "name": "Eritrea", "height": 164.1 },
  { "name": "Mexico", "height": 164.1 },
  { "name": "South Africa", "height": 164.1 },
  { "name": "Nauru", "height": 163.7 },
  { "name": "Vietnam", "height": 163.6 },
  { "name": "Uganda", "height": 163.6 },
  { "name": "El Salvador", "height": 163.5 },
  { "name": "Guinea-Bissau", "height": 163.4 },
  { "name": "Ivory Coast", "height": 163.4 },
  { "name": "Benin", "height": 163.4 },
  { "name": "Angola", "height": 163.3 },
  { "name": "Tajikistan", "height": 163.2 },
  { "name": "Malaysia", "height": 163.1 },
  { "name": "Equatorial Guinea", "height": 163.1 },
  { "name": "Ethiopia", "height": 163.0 },
  { "name": "Mauritania", "height": 162.8 },
  { "name": "Nicaragua", "height": 162.7 },
  { "name": "Democratic Republic of the Congo", "height": 162.4 },
  { "name": "Zambia", "height": 162.4 },
  { "name": "Honduras", "height": 162.4 },
  { "name": "Afghanistan", "height": 162.3 },
  { "name": "Lesotho", "height": 162.3 },
  { "name": "Comoros", "height": 162.1 },
  { "name": "Sri Lanka", "height": 162.0 },
  { "name": "Tanzania", "height": 161.9 },
  { "name": "Bolivia", "height": 161.8 },
  { "name": "Sierra Leone", "height": 161.8 },
  { "name": "Rwanda", "height": 161.3 },
  { "name": "Ecuador", "height": 161.2 },
  { "name": "Burundi", "height": 161.2 },
  { "name": "Bhutan", "height": 161.1 },
  { "name": "Maldives", "height": 161.1 },
  { "name": "Pakistan", "height": 161.0 },
  { "name": "Liberia", "height": 161.0 },
  { "name": "Malawi", "height": 160.9 },
  { "name": "India", "height": 160.8 },
  { "name": "Myanmar", "height": 160.7 },
  { "name": "Brunei", "height": 160.6 },
  { "name": "Peru", "height": 160.6 },
  { "name": "Indonesia", "height": 160.3 },
  { "name": "Marshall Islands", "height": 160.0 },
  { "name": "Cambodia", "height": 160.0 },
  { "name": "Papua New Guinea", "height": 160.0 },
  { "name": "Solomon Islands", "height": 159.9 },
  { "name": "Mozambique", "height": 159.8 },
  { "name": "Philippines", "height": 159.6 },
  { "name": "Yemen", "height": 159.6 },
  { "name": "Madagascar", "height": 159.1 },
  { "name": "Bangladesh", "height": 158.7 },
  { "name": "Nepal", "height": 158.4 },
  { "name": "Laos", "height": 157.9 },
  { "name": "Guatemala", "height": 157.6 },
  { "name": "Timor-Leste", "height": 156.4 },
];



export default function Home() {
  const [currentCountry, setCurrentCountry] = useState(null);
  const [nextCountry, setNextCountry] = useState(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // Function to get a random country from the list
  const getRandomCountry = () => {
    const randomIndex = Math.floor(Math.random() * countries.length);
    return countries[randomIndex];
  };

  // Initialize game with two random countries
  const startGame = () => {
    setCurrentCountry(getRandomCountry());
    setNextCountry(getRandomCountry());
  };

  // Handle the user's guess
  const handleAnswer = (isHigher) => {
    if (gameOver) return;

    const isCorrect =
      (isHigher && nextCountry.height >= currentCountry.height) ||
      (!isHigher && nextCountry.height <= currentCountry.height);

    if (isCorrect) {
      setScore(score + 1);
      setCurrentCountry(nextCountry);
      setNextCountry(getRandomCountry());
    } else {
      setGameOver(true);
    }
  };

  // Use effect to trigger startGame on the client side
  useEffect(() => {
    if (!currentCountry && !nextCountry) {
      startGame();
    }
  }, [currentCountry, nextCountry]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-black to-gray-950 text-white">
      <div className="text-center mb-[20vh]">
        <h1 className="text-6xl font-bold mb-8">Average human height: <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-blue-500">Higher</span> or <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-red-500 to-purple-500">Lower</span>?</h1>
        {gameOver ? (
          <div className="game-over">
            <h2 className="text-3xl mb-4">Game Over!</h2>
            <p className="text-4xl mt-8">Your Score: {score}</p>
          <div className="answer">
          <h3 className="text-5xl my-4">{nextCountry?.name}'s Average human height  is {nextCountry?.height.toLocaleString()}cm</h3>
          </div>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-400 via-violet-600 to-blue-700 text-white rounded-lg hover:bg-blue-400"
            >
              Play Again
            </button>
          </div>
        ) : (
          <div className="game flex justify-between items-center mt-[24vh]  w-full max-w-8xl mx-auto p-4">
            {/* Left Section: Current Country */}
            <div className="current-country w-1/2 text-gray-100 text-center">
              <p className="font-bold text-5xl">{currentCountry?.name}</p>
              <p className="text-2xl pt-4 ">{currentCountry?.height.toLocaleString()}cm</p>
            </div>

            {/* Divider Line */}
            <div className="divider w-1 px-2 bg-white"></div>

            {/* Right Section: Next Country */}
            <div className="next-country w-1/2 text-gray-100 text-center">
              <p className="font-bold text-5xl">{nextCountry?.name}</p>
              <p className="text-2xl pt-4">&nbsp;</p>
            </div>
          </div>
        )}

        {!gameOver && (
          <div className="choices flex justify-center gap-4 mt-8">
            <button
              onClick={() => handleAnswer(true)}
              className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-500  text-white rounded-lg hover:bg-green-400"
            >
              Higher
            </button>
            <button
              onClick={() => handleAnswer(false)}
              className="px-6 py-3 bg-gradient-to-r from-red-600 via-red-500 to-violet-500 text-white rounded-lg hover:bg-red-400"
            >
              Lower
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
