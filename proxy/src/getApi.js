import axios from 'axios';


const getData = async pageCount => {
  try {
    const { data } = await axios.get('/api'+`/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?ServiceKey=Iz8INi2kGzDF4SF1wg0rekepMPMKOQwTHoN7MOUgtfULYXTOixMWpEuMRWpEfoPy3%2Bj%2FFWuRPVLaSe5k%2B4uaTg%3D%3D&pageNo=1&numOfRows=60&dataType=JSON&base_date=20220724&base_time=1146&nx=37&ny=126`);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export {getData,}