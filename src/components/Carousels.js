import Carousel from "react-bootstrap/Carousel";

function IndividualIntervalsExample() {
  return (
    <Carousel style={{width:'100%',marginTop:'56px'}}>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          style={{ height: 700 }}
          src="https://kimlongcenter.com/upload/image/TOP%20laptop%20dell.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          style={{ height: 700 }}
          src="https://genk.mediacdn.vn/2019/4/23/photo-1-15560365277871628784452.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: 700 }}
          src="https://cdnimg.vietnamplus.vn/uploaded/bojoka/2019_05_28/asus_zenproduo.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
