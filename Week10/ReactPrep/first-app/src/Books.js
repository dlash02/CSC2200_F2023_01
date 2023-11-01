import Table from 'react-bootstrap/Table';

const Books = () => {
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th> Title</th>
                <th> Author</th>
                <th> Price</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td> The Hobbit</td>
                <td> J R Tolkien</td>
                <td> 12.99</td>
            </tr>
            <tr>
                <td> The Fellowship of the Rin</td>
                <td> J R Tolkien</td>
                <td> 15.99</td>
            </tr>
            <tr>
                <td> Dune</td>
                <td> Frank Herbert</td>
                <td> 25.99</td>
            </tr>
            </tbody>
        </Table>
    );
}
export default Books;