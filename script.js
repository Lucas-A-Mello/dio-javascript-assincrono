const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const dogBtn = document.getElementById('change-dog');
const catImg = document.getElementById('dog');

const getDogs = async () => {
   try {
    const data = await fetch(BASE_URL);
    const json = await data.json();

    return json.webpurl;
   } catch (e) {
    console.log(e.message);
   }
};

const loadImg = async () => {
    catImg.src = await getDogs();
}

dogBtn. addEventListener('click', loadImg);

loadImg();