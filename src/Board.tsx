import { Button, Table } from "react-bootstrap";

function Board() {
    return (
        <>
        <Table striped bordered hover>
        <thead>
                <tr>
                <th>선택</th>
                <th>번호</th>
                <th>담당자</th>
                <th>등록자</th>
                <th>등록일</th>
            </tr>
        </thead>
        <tbody>
                <tr>
                <td><input type="checkbox"/></td>    
                <td>1</td>  
                <td>육지현</td>
                <td>육지현</td>
                <td>2022-07-22</td>
            </tr>
            <tr>
                <td><input type="checkbox"/></td>    
                <td>2</td>  
                <td>강현석</td>
                <td>육지현</td>
                <td>2022-07-22</td>
            </tr>
            <tr>
                <td><input type="checkbox"/></td>    
                <td>3</td> 
                <td>이종원</td>
                <td>육지현</td>
                <td>2022-07-22</td>
            </tr>
        </tbody>
        </Table>
            
        <Button variant="outline-info">작성</Button>
        <Button variant="outline-success">수정</Button>
        <Button variant="outline-warning">삭제</Button>
        </>
)
}

export default Board;