import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cards() {
  return (
      <Card style={{ width: "25%",padding:'8px',border:'none' }}>
        <div className="border p-2 rounded">
            <Card.Img
              variant="top"
              src="https://vuongkhang.com/thumb/1000/upload/2020/10/laptop-go/Platinum/surface-laptop-go-platinum-3.jpg"
            />
            <Card.Body>
              <Card.Title>Laptop Dell</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Xem chi tiết</Button>
            </Card.Body>
        </div>
      </Card>
  );
}

export default Cards;
