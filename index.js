// const express = require('express');
// const app = express();

const app = require('express')();
require('dotenv').config();
const mongoose = require('mongoose');
require ('ejs');
app.set('view engine', 'ejs');


const port = process.env.PORT || 5400;
const URI = process.env.uri || undefined;


mongoose.connect(URI)
.then(() => {
    console.log('Lift off!, database neural handshake completed');
})
.catch((err) => {
    console.log(err);
})


    const cities = [
        {
            name: "Lagos",
            population: "14,368,000",
            country: "Nigeria",
            landmass: "1,171 km²",
            landmark: "Lekki Conservation Centre",
            picture: "https://media.istockphoto.com/id/518024848/photo/lekki-ikoyi-link-bridge-lagos-nigeria.jpg?s=1024x1024&w=is&k=20&c=Z_KgmkwwBAdzZv3349uGK4ZLqvzMXv9_m6DcC0Nl-c8="
        },
        {
            name: "Cairo",
            population: "9,500,000",
            country: "Egypt",
            landmass: "606 km²",
            landmark: "Pyramids of Giza",
            picture: "https://images.pexels.com/photos/30298145/pexels-photo-30298145/free-photo-of-camels-resting-by-the-pyramids-of-giza-at-daytime.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            name: "Nairobi",
            population: "4,397,073",
            country: "Kenya",
            landmass: "696 km²",
            landmark: "Nairobi National Park",
            picture: "https://media.istockphoto.com/id/1299026534/photo/nairobi-kenya.jpg?s=1024x1024&w=is&k=20&c=LeOxyYOOTjEZ7CxOckrR_Y9_XKRG-ldEsQi4dA_yR2M="
        },
        {
            name: "Addis Ababa",
            population: "4,794,000",
            country: "Ethiopia",
            landmass: "527 km²",
            landmark: "Holy Trinity Cathedral",
            picture: "https://images.pexels.com/photos/2101159/pexels-photo-2101159.png?auto=compress&cs=tinysrgb&w=600"
        },
        {
            name: "Accra",
            population: "2,291,352",
            country: "Ghana",
            landmass: "225.67 km²",
            landmark: "Kwame Nkrumah Memorial Park",
            picture: "https://media.istockphoto.com/id/1450804000/photo/picturesque-night-view-of-the-mall-area-illuminated-with-colorful-lights-in-accra-ghana.jpg?s=1024x1024&w=is&k=20&c=zhgQdntWMXWfB5NOz4Qs3rlUZFigMAMFlRByCerHBq8="
        },
        {
            name: "Algiers",
            population: "3,415,811",
            country: "Algeria",
            landmass: "363 km²",
            landmark: "Casbah of Algiers",
            picture: "https://images.pexels.com/photos/30976818/pexels-photo-30976818/free-photo-of-bustling-urban-scene-in-algiers-algeria.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            name: "Dakar",
            population: "1,030,594",
            country: "Senegal",
            landmass: "83 km²",
            landmark: "African Renaissance Monument",
            picture: "https://images.pexels.com/photos/14598168/pexels-photo-14598168.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            name: "Harare",
            population: "1,485,231",
            country: "Zimbabwe",
            landmass: "960.6 km²",
            landmark: "Mbare Musika Market",
            picture: "https://images.pexels.com/photos/13355611/pexels-photo-13355611.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            name: "Casablanca",
            population: "3,359,818",
            country: "Morocco",
            landmass: "220 km²",
            landmark: "Hassan II Mosque",
            picture: "https://images.pexels.com/photos/3049885/pexels-photo-3049885.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            name: "Tripoli",
            population: "1,165,600",
            country: "Libya",
            landmass: "400 km²",
            landmark: "Red Castle Museum",
            picture: "https://images.pexels.com/photos/12095379/pexels-photo-12095379.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
    ];
    
    console.log(cities);



    const nigerianFoods = [
        [
            {
                name: "Jollof Rice",
                classOfFood: "Carbohydrates",
                mainIngredients: "Rice, Tomatoes, Peppers, Onions, Spices",
                regionOfOrigin: "West Africa, Popular across Nigeria",
                popularity: "One of Nigeria’s most famous dishes, served at parties and events",
                picture: "https://images.pexels.com/photos/17952746/pexels-photo-17952746/free-photo-of-diner-with-rice-and-fried-vegetables.jpeg?auto=compress&cs=tinysrgb&w=600"
            },
            {
                name: "Pounded Yam and Egusi Soup",
                classOfFood:"Carbohydrates (Pounded Yam), Proteins & Fats (Egusi Soup)",
                mainIngredients:"Yam, Melon Seeds, Palm Oil, Vegetables, Meat or Fish",
                regionOfOrigin: "Yoruba and Igbo regions",
                popularity: "A staple meal, often eaten with hands",
                picture: "https://media.istockphoto.com/id/1287043004/photo/bowl-of-pounded-yam-served-with-egusi-melon-soup.jpg?s=612x612&w=0&k=20&c=NXRI-MmsSLjQp7ktgTsasybs5zRdjFwnFeX3AqPtVmc="
            },
            {
                name: "Efo Riro",
                classOfFood: "Vitamins & Minerals",
                mainIngredients: "Spinach (or other leafy greens), Peppers, Palm Oil, Meat or Fish",
                regionOfOrigin: "Yoruba region",
                popularity:  "A popular vegetable soup rich in nutrients",
                picture: "https://rexclarkeadventures.com/wp-content/uploads/2024/09/20190728_121338.jpg"
            },
            {
                name: "Suya",
                classOfFood: "Proteins",
                mainIngredients: "Beef, Chicken, or Ram Meat, Peppers, Spices",
                regionOfOrigin: "Northern Nigeria",
                popularity:  "A widely loved street food, often eaten at night",
                picture: "https://t4.ftcdn.net/jpg/10/44/38/73/360_F_1044387342_2TvGIIKqQVH89bnB1oOQ67vdGulAr8gk.jpg"
            },
            {
                name: "Moi Moi",
                classOfFood: "Proteins",
                mainIngredients: "Beans, Peppers, Onions, Palm Oil, Eggs or Fish",
                regionOfOrigin: "Across Nigeria",
                popularity: "Served as a side dish or main meal",
                picture:  "https://i0.wp.com/kulturekitchen.com.ng/wp-content/uploads/2023/12/Moi-Moi-and-Pap.jpg?fit=736%2C734&ssl=1"
            },
            {
                name: "Boli and Groundnut",
                classOfFood: "Carbohydrates & Proteins",
                mainIngredients: "Roasted Plantain, Groundnuts (Peanuts)",
                regionOfOrigin: "Southern Nigeria",
                popularity: "A common roadside snack",
                picture:  "https://rexclarkeadventures.com/wp-content/uploads/2024/09/EMPwUpPWoAEdtBv.jpg"
            },
            {
                name: "Ofada Rice and Ayamase (Designer Stew)",
                classOfFood: "Carbohydrates & Fats",
                mainIngredients: "Local Ofada Rice, Palm Oil, Green Peppers, Assorted Meats",
                regionOfOrigin: "Yoruba region",
                popularity: "A delicacy often served in banana leaves",
                picture: "https://www.myactivekitchen.com/wp-content/uploads/2016/12/ofada-stew-recipe-image_jpg.jpg"
            },
            {
                name: "Okpa",
                classOfFood: "Carbohydrates & Proteins",
                mainIngredients: "Bambara Nut Flour, Palm Oil, Peppers",
                regionOfOrigin: "Eastern Nigeria",
                popularity: "A popular breakfast meal, commonly sold by street vendors",
                picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsk9Ixdt0lJZFPJqKPozZYOEA0LdQX7Y44dQ&s"
            },
            {
                name: "Afang Soup",
                classOfFood: "Vitamins & Minerals",
                mainIngredients: "Afang Leaves, Waterleaf, Periwinkles, Meat or Fish",
                regionOfOrigin: "Cross River and Akwa Ibom states",
                popularity: "Loved for its rich flavor and health benefits",
                picture: "https://deychop.com/wp-content/uploads/2023/12/Afang-Soup-600x600.jpeg"
            },
            {
                name: "Akara",
                classOfFood: "Proteins",
                mainIngredients: "Beans, Peppers, Onions, Palm Oil",
                regionOfOrigin: "Across Nigeria",
                popularity: "A breakfast staple, often served with pap",
                picture: "https://africanplate.co.uk/wp-content/uploads/2020/09/DSC_5521-1536x1008.jpg"
            }
            ] 
    ];
    
        console.log(nigerianFoods);

    const nigerianHeroes= [
        {
            name: "Nnamdi Azikiwe",
            role: "First President of Nigeria, Nationalist",
            birthDeath: "1904 - 1996",
            achievements: "Led Nigeria to independence, promoted Pan-Africanism",
            legacy: "His name is immortalized in Nnamdi Azikiwe University and Airport",
            picture: "https://www.ikaweekly.com/wp-content/uploads/2017/08/images.jpg"
        },
        {
            name: "Obafemi Awolowo",
            role: "Premier of Western Region, Political Leader",
            birthDeath: "1909 - 1987",
            achievements: "Introduced free primary education and health care in the Western Region",
            legacy: "His policies shaped Nigeria’s education system",
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxAuW2Hf7lqWsWoGp1V4QMDeW5_28hfsmq3w&s"
        },
        {
            name: "Ahmadu Bello",
            role: "Premier of Northern Region, Statesman",
            birthDeath: "1910 - 1966",
            achievements: "Developed Northern Nigeria, founded Ahmadu Bello University",
            legacy: "A symbol of unity and progress for the North",
            picture: "https://www.blackpast.org/wp-content/uploads/2024/08/Alhaji_Ahmadu_Bello.jpg"
        },
        {
            name: "Funmilayo Ransome-Kuti",
            role: "Women’s Rights Activist, Educator",
            birthDeath: "1900 - 1978",
            achievements: "Led protests for women’s rights, fought against colonial taxation",
            legacy: "Inspired feminist movements in Nigeria",
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVJQ98-LhHCROCqNlkMFGls6A9hMJVSK7Sdg&s"
        },
        {
            name: "Tafawa Balewa",
            role: "First Prime Minister of Nigeria, Politician",
            birthDeath: "1912 - 1966",
            achievements: "Led Nigeria’s first government post-independence",
            legacy: "Remembered for his humility and dedication to Nigeria’s unity",
            picture: "https://static.wixstatic.com/media/b69a17_2cf36753b82343c4bb5e8356888dfd22~mv2.png/v1/fill/w_568,h_454,al_c,lg_1,q_85,enc_avif,quality_auto/b69a17_2cf36753b82343c4bb5e8356888dfd22~mv2.png"
        },
        {
            name: "Herbert Macaulay",
            role: "Nationalist, Journalist",
            birthDeath: "1864 - 1946",
            achievements: "Founded the first political party in Nigeria",
            legacy: "Laid the foundation for Nigeria’s independence movement",
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfXdcXYZNKaeieiBoCqfTw1LDq2nYPnevBNw&s"
        },
        {
            name: "Margaret Ekpo",
            role: "Women’s Rights Activist, Politician",
            birthDeath: "1914 - 2006",
            achievements: "Advocated for women’s political inclusion in Nigeria",
            legacy: "A pioneer of female political activism in Nigeria",
            picture: "https://i0.wp.com/meetingofmindsuk.uk/wp-content/uploads/2021/10/Lady-Margaret-Ekpo.jpeg?fit=1181%2C1181&ssl=1"
        },
        {
            name: "Anthony Enahoro",
            role: "Journalist, Politician",
            birthDeath: "1923 - 2010",
            achievements: "First to move the motion for Nigeria’s independence",
            legacy: "Recognized as the father of Nigeria’s independence movement",
            picture: "https://upload.wikimedia.org/wikipedia/commons/8/80/Chief_Anthony_Enahoro.png"
        },
        {
            name: "Samuel Ajayi Crowther",
            role: "First African Anglican Bishop, Missionary",
            birthDeath: "1809 - 1891",
            achievements: "Translated the Bible into Yoruba, spread Christianity in Nigeria",
            legacy: "Pioneered Christianity and education in Nigeria",
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9PpvjlGCQeXh3BPlCHx6NMW_rQ_uTA9_LCQ&s"
        },
        {
            name: "Chinua Achebe",
            role: "Writer, Cultural Icon",
            birthDeath: "1930 - 2013",
            achievements: "Author of ‘Things Fall Apart,’ reshaped African literature",
            legacy: "Globally recognized as the father of modern African literature",
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvjvVaxoh7X9HG6fphvuU3D6GwpiIeCvk55g&s"
        }
        ]
        
        console.log(nigerianHeroes);

    app.get('/', (req, res) => {
        // res.send(cities);
        res.sendFile(__dirname+'/public/index.html')
        // res.send(__dirname)
        // res.render('index', {title: 'First EJS page',name: 'Oluwakemi', score: 30});
        });

    app.get('/api1', (req, res) => {
        res.send(cities);
        });

     app.get('/api2', (req, res)=>{
        res.send(nigerianFoods);
     })

     app.get('/api3', (req, res)=>{
        res.send(nigerianHeroes);
     })


app.listen(port, () => {
    console.log(`server started at port: ${port}`);
})