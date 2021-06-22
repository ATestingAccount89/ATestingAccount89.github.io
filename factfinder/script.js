function displayfact(factnum){
	var fact;
	switch (factnum) {
		case 0:
			fact = "The planet Venus takes 243.0 days to rotate around it's axis, and takes 224.7 days to orbit the sun, making a Venusian day longer than it's year.";
			break;
		case 1:
			fact = "The process of being streched out by extreme tidal forces, such as while falling into a black hole, is called 'spaghettification.'";
			break;
		case 2:
			fact = "Although it may seem fast, the speed of light (Speed of causality, to be specific), on a universal scale, is actually rather slow. It takes 4.246 years for light from the closest star to earth, Proxima Centauri, to reach earth. However, it may be possible to build 'wormhole drives,' machines that creste wormholes to anywhere else in the universe in an instant.";
			break;
		case 3:
			fact = "Because time slows down as you approach the speed of light, and completely stopping as you reach the speed of light, it means that trying to go faster than the speed of light results in going at the speed of light. This property is interestingly shared with infinity in that adding any number to infinity results in infinity.";
			break;
		case 4:
			fact = "<p>The black part of a black hole is not actually the black hole itself, but the event horizon, where gravity is so strong that it pulls back faster than light can escape. (yes, this does kind of break everything) At the center of a black hole is a singularity, an infinitely small, 0-dimensional point in space where all the mass of the black hole is stored. This, too causes weird paradoxes, such as if you could see these singularities, every black hole would appear to be the same.</p><img id='img' src='images/kindofbadblackhole.jpg' title='Bad depiction of a black hole, watch the movie Interstellar for what it would likely look like. Actually, watch th emovie anyways.' alt='bad depiction of a black hole'>";
			break;

	}
	document.querySelector('#b').innerHTML = fact;
}