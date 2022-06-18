const images = [
    "http://drive.google.com/uc?export=view&id=1-rE171kLAuMtQyT8HlAXu_lF-J3sm8_v", // 0.jpg
    "http://drive.google.com/uc?export=view&id=1AuPgSBp6O2iPpUi3NARHpc4C_vjrHfgW", // "1.jpg",
    "http://drive.google.com/uc?export=view&id=1mgAh98jXbRFkfVW0baXtjUk_xPZoLM8Z", // "2.jpg",
    "http://drive.google.com/uc?export=view&id=1uzYCQpMHJRWb5BihHP1FA95Hor_6711O", // "3.jpg",
    "http://drive.google.com/uc?export=view&id=1_Bb0tMwmzfyk8IXajb5tnWNIBh_4G7Hg", // "4.jpg",
    "http://drive.google.com/uc?export=view&id=1yCuYuuM-RPIh911aD4p_sYnADKIUYaPi", // "5.jpg",
    "http://drive.google.com/uc?export=view&id=1hBzIrE15sb1i4gdSkb5f-2adYkVGG-MR", // "6.jpg",
    "http://drive.google.com/uc?export=view&id=1PyHyJTbPp2UEzdcvazaizRnhVXw70ePd", // "7.jpg",
    "http://drive.google.com/uc?export=view&id=16bcMjtKN7SV-9SiE6VLrzEuYwIKCkhiv", // "8.jpg",
    "http://drive.google.com/uc?export=view&id=1SGF_T4P3BM85sLVbPCpRDGBvIS7sDKOp", // "9.jpg"
];

const body = document.body;
const chosenImage = images[Math.floor(Math.random() * images.length)];

body.style.backgroundImage = `url(${chosenImage})`;
body.style.backgroundSize = "cover";